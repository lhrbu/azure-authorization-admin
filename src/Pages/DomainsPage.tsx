import React, { useEffect, useState } from 'react'
import Domain from '../Models/Domain'
import { Tabs, Card, Empty, Col, Row, Skeleton,Button,Tag, message } from 'antd';
import { DomainWebAPI, DomainAdminWebAPI } from '../WebAPIs/DomainWebAPI';

const { TabPane } = Tabs;


export default function DomainsPage()
{
    const [domains, setDomains] = useState<Domain[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => { FetchData() }, [])

    return (
        !loading ? (
            <Tabs type="editable-card" onEdit={async (e, action) =>{if(action === "add"){await AddDomain()}}}>
                {
                    domains.map(domain => (
                        <TabPane tab={domain.Name} key={domain.Name} closable={false}>
                            {
                                domain.Roles ? (
                                    <Row gutter={[16,16]}>
                                        {
                                            domain.Roles!.map(role => (
                                                <Col span={8} key={role.DomainName+role.Name}>
                                                    <Card title={role.Name} extra={<Button size='small' type="text" danger>Delete</Button>}>
                                                        <Card.Grid style={{ width: "50%", textAlign: "left" }}>
                                                            <Tag color="blue">Read  Level: </Tag>
                                                            <Tag>{role.ReadLevel}</Tag>
                                                        </Card.Grid>
                                                        <Card.Grid style={{ width: "50%", textAlign: "left" }}>
                                                            <Tag color="blue">Write Level: </Tag> 
                                                            <Tag>{role.WriteLevel}</Tag>
                                                        </Card.Grid>
                                                    </Card>
                                                </Col>
                                            ))
                                        }
                                        <Col span={8} key="role-add">
                                            <Card title="Add Role">
                                                <Button shape="round" type="primary">Add Role</Button>
                                            </Card>
                                        </Col>
                                    </Row>
                                ) : <Empty />
                            }
                        </TabPane>
                    ))
                }
            </Tabs>) :
            <Skeleton active />
    )

    async function FetchData()
    {
        setLoading(true)
        setDomains([...await DomainWebAPI.GetAll()])
        setLoading(false)
    }

    async function AddDomain()
    {
        try
        {
            if (window.confirm("Confirm to add domain"))
            {
                const domain = window.prompt("Input domain name")
                if (domain)
                {
                    await DomainAdminWebAPI.Add({ Name: domain } as Domain)
                    message.success("Add successfully!",2);
                    await FetchData()
                }
            }
        }catch(err){
            message.error((err as any).message,2)
        }
    }
}