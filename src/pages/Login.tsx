import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom'
import { Input, Form, Checkbox, Button, notification } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../img/logo.png';
import bg from '../img/background.jpg';
import { AppContext } from '../contexts/AppProvider';

const StyledWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('${bg}');
    background-size: cover;
   
    /* background-size: cover; */
    .container{
        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 8px;
        max-width: 500px;
        width: 100%;
        background-color: rgba(255,255,255,0.95);
        box-shadow: 0 0 18px 0 rgba(0,0,0,.15);
        opacity: 0.9;
    }
    .header {
        text-align: center;
    }
    .login-form {
        max-width: 300px;
    }
    .login-form-forgot {
        float: right;
    }
    .ant-col-rtl .login-form-forgot {
        float: left;
    }
    .login-form-button {
        width: 100%;
    }
    .title{
        margin-top:20px;
        margin-bottom: 20px;
        h1{
            margin: 0px;
        }
    }
    .forgot-bnt{
        text-align-last: center;
        margin-top: 14px;
    }
    .login-form-button{
        border-radius:10px
    }
    .ant-input-affix-wrapper{
        border-radius:10px
    }

    
`

const Login = () => {
    const { authController } = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    console.log();

    const onFinish = async values => {
        setLoading(true);
        console.log(values);
        try {
            await authController.login(values.username, values.password);
            console.log("dd");

            history.push('/');
        } catch (e) {
            notification['error']({
                message: 'Failed',
                description: e.message
            })
        }
        setLoading(false);
    };
    return (
        <StyledWrapper>
            <div className='container'>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <div className="title">
                        <h1>เข้าสู่ระบบ</h1>
                        <small className="item">กรุณาเข้าสู่ระบบเพื่อใช้งานบัญชีคุณ</small>
                    </div>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'กรุณาใส่ชื่อผู้ใช้งาน หรืออีเมล!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" id="input" />} placeholder="ชื่อผู้ใช้งาน หรืออีเมล" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'กรุณาใส่รหัสผ่าน!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="รหัสผ่าน"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                            เข้าสู่ระบบ
                    </Button>
                        <div className="forgot-bnt">
                            <Link to="/register">ลืมรหัสผ่าน ? </Link>
                        </div>

                    </Form.Item>
                </Form>
            </div>
        </StyledWrapper>
    )
}

export default Login;
