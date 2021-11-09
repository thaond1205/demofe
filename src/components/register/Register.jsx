import React from 'react';
import "../register/register.css";
import { Button, Form, Input } from 'antd';
function Register(props) {
    const { handleCancel } = props

    const [form] = Form.useForm();

    const onFinish = () => {
        console.log(form.getFieldsValue());
        form.resetFields();
    };
    return (
        <div className=" container-register " align='center'>
            <div className="close-register">
                <i style={{ fontSize: '30px' }} className="fas fa-times" onClick={handleCancel}></i>
            </div>
            <Form form={form} onFinish={onFinish}>
                <div className="main-register" align='center'>
                    <div className="main-register-title" align="center">Đăng ký</div>
                    <div className="main-register-button FB">
                        <i className="fab fa-facebook" style={{ fontSize: '20px' }}></i>
                        <span className="text-fb-gg">Đăng ký bằng Facebook</span>

                    </div>
                    <div className="main-register-button GG">
                        <i className="fab fa-google" style={{ fontSize: '20px' }}></i>
                        <span className="text-fb-gg">Đăng ký bằng Google</span>
                    </div>
                    <div style={{
                        marginTop: '20px',
                        fontSize: '12px',
                        lineHeight: '14px'
                    }}>Hoặc đăng ký bằng email</div>

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

                    <Button
                        htmlType='submit'
                        style={{
                            borderRadius: "8px",
                            textTransform: "none",
                            marginTop: "10px",
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
                            Đăng Ký
                        </div>
                    </Button>



                </div>
            </Form>
        </div>
    );
}

export default Register;