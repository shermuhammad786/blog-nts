'use client'
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Upload, } from 'antd';
import "./singup.css"

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
    email?: string
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Singup: React.FC = () => (
    <div
        className='h-screen w-screen flex justify-center items-center flex-col bg-no-repeat text-white bg-cover bg-center bg-[url("/assets/compter.jpeg")]'>
        <h1 className='font-bold'>WELCOME TO THE BLOG WEB APPLICAION</h1>

        <div className='p-5 rounded-3xl w-1/3 max-w-2xl min-w-96 h-fit' style={{
            backgroundColor: "rgb(34,195,161)",
            background: "linear-gradient(0deg, rgba(34,195,161,0.6) 0%, rgba(40,41,208,0.7248949579831933) 51%, rgba(45,98,253,0.6) 100%)",
        }}
        
        >
            <h1 className='text-center p-2.5 text-2xl font-mono font-extrabold'>SINGUP FORM</h1>
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                style={{ maxWidth: 600,}}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label={<label className='text-white'>Username</label>}
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input style={{background:"transparent", outline:"none"}}  />
                </Form.Item>

                <Form.Item<FieldType>
                    label={<label className='text-white'>Email</label>}
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input style={{ background: "transparent", outline: "none" }} />
                </Form.Item>

                <Form.Item<FieldType>
                    label={<label className='text-white'>Password</label>}
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password defaultValue="" style={{ background: "transparent", outline: "none" }} />
                </Form.Item>

                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox className='text-white'>Remember me</Checkbox>
                </Form.Item>

                {/* <Form.Item name="upload" valuePropName="fileList" getValueFromEvent={normFile} style={{border:"2px solid red",textAlign:"center"}}>
                    <Upload listType="picture-circle" >
                        <button style={{ border: "2px solid red",padding:"10px", background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item> */}


                <Form.Item
                >
                    <Button
                        style={{width:"100%",padding:"20px"} }
                        type="primary" htmlType="submit">
                        SINGUP
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
);

export default Singup;