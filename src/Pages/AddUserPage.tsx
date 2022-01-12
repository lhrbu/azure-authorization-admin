import { Form, Input, message,Button } from 'antd';
import React, { useState } from 'react';
import SensitiveData from '../Models/SensitiveData';
import nameof from '../Utils/nameof';
import md5 from 'md5'
import { UsersWebAPI } from '../WebAPIs/UsersWebAPI';

export default function AddUserPage()
{
    const [uploading,setUploading] = useState<boolean>(false)
    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            onFinish={async values =>
            {
                if (values.Password !== values.ConfirmPassword)
                { message.error("Password doesn't match", 2) }
                else
                {
                    try
                    {
                        setUploading(true)
                        const sensitiveData: SensitiveData =
                        {
                            UserId: values.UserId,
                            EncodedPassword: md5(values.Password)
                        }
                        await UsersWebAPI.Add(sensitiveData)
                        message.success("Added Successfully", 2)
                    } catch (err)
                    {
                        message.error((err as any).message, 2)
                    }finally{
                        setUploading(false)
                    }

                }
            }}
        >
            <Form.Item
                label={nameof<SensitiveData>("UserId")}
                name={nameof<SensitiveData>("UserId")}
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="Password"
                rules={[{ required: true }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Confirm Password"
                name="ConfirmPassword"
                rules={[{ required: true }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button type="primary" htmlType="submit" loading={uploading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}