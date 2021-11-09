import React, { useState } from 'react';
import "./loginUser.css";
import { Button, Form, Input, notification } from 'antd';
import authService from '../../services/auth.service';
function LoginUser(props) {
    const { handleCancel, setIsModalVisible } = props
    const [message, setMessage] = useState("")
    const [form] = Form.useForm();

    const onFinish = () => {
        authService.login(
            form.getFieldValue("username"),
            form.getFieldValue("password"))
            .then(() => {
                notification["success"]({
                    message: "Đăng nhập thành công",
                });
                setIsModalVisible(false)
            },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                }

            )
    };

    return (
        <div className=" container-login " align='center'>
            <div className="close-login">
                <i style={{ fontSize: '30px' }} className="fas fa-times" onClick={handleCancel}></i>
            </div>
            <div className="main-login" align='center'>
                <div className="main-login-title" align="center">Đăng nhập</div>
                <div className="main-login-button FB">
                    <i className="fab fa-facebook" style={{ fontSize: '20px' }}></i>
                    <span className="text-fb-gg">Đăng nhập bằng Facebook</span>

                </div>
                <div className="main-login-button GG">
                    <i className="fab fa-google" style={{ fontSize: '20px' }}></i>
                    <span className="text-fb-gg">Đăng nhập bằng Google</span>
                </div>
                <div style={{
                    marginTop: '20px',
                    fontSize: '12px',
                    lineHeight: '14px'
                }}>Hoặc đăng nhập bằng tài khoản, email</div>
                <Form form={form} onFinish={onFinish}>
                    <Form.Item style={{
                        marginTop: "10px",
                        marginBottom: "40px",
                        width: "100%",
                        height: 35,
                    }} key={1} name="username" rules={[
                        {
                            required: true,
                            message: 'Không được bỏ trống tên tài khoản!',
                        },
                    ]}>
                        <Input style={{
                            background: "#C0C0C0",
                            width: "100%",
                            height: 45,
                        }} className="main-login-input mt-1" placeholder="" />
                    </Form.Item>
                    <Form.Item key={2} name="password" rules={[
                        {
                            required: true,
                            message: 'Không được bỏ trống mật khẩu!',
                        },
                    ]}>
                        <Input style={{
                            background: "#C0C0C0",
                            width: "100%",
                            height: 45,
                        }} type="password" className="main-login-input mt-1" placeholder="" />
                    </Form.Item>

                    <Button
                        htmlType='submit'
                        style={{
                            borderRadius: "8px",
                            textTransform: "none",
                            marginTop: "15px",
                            width: "100%",
                            height: 45,
                        }}
                        className="title-hotel-right-btn"
                        variant="contained"
                        color="secondary"
                        type="danger"
                    >
                        <div
                            style={{
                                fontSize: "16px",
                                minHeight: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Đăng Nhập
                        </div>
                    </Button>
                    {message && (
                        <div className="form-group mt-2">
                            <div
                                className="alert alert-danger"
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                </Form>
                <div className="main-login khoiphucMk mt-2">
                    Khôi phục mật khẩu
                </div>

            </div>
        </div>
    );
}

export default LoginUser;