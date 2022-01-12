import { Form, Input, Button, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React from 'react';
import AdminWebAPI  from "../WebAPIs/AdminWebAPI"

export default function AdminPage()
{
    const [form] = useForm()
    return (
        <Form form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            onFinish={values=>{
                AdminWebAPI.SetAccessToken(values.Base64AccessToken);
                message.success("set access token successfully!",2)
            }}
        >
            <Form.Item
                label="Base64 Access Token"
                name="Base64AccessToken"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    )
}