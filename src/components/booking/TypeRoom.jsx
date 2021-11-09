import React, { useEffect, useState } from 'react';
import moment from "moment";
import { Button, Col, DatePicker, Form, Input, Modal, notification, Row } from "antd";
import { WarningOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import TokenService from '../../services/token.service';
import api from '../../services/api'
TypeRoom.defaultProps = {
    typeRooms: [],
};

function TypeRoom(props) {
    const { typeRooms, idHotel } = props;
    const [checkLogin, setCheckLogin] = useState(false)
    const userAuthen = TokenService.getUser()
    const [booking, setBooking] = useState({
        checkInCheckOutRequest: {
            date_in: "",
            date_out: "",
            idTypeRoom: 0
        },
        email: "",
        full_name: "",
        id_hotel: parseInt(idHotel),
        id_user: 0,
        phone: "",

    })

    useEffect(() => {
        setBooking({
            ...booking,
            id_user: userAuthen && userAuthen.id
        })
    }, [checkLogin])

    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = (event, item) => {

        if (
            booking.checkInCheckOutRequest.date_in === "" ||
            booking.checkInCheckOutRequest.date_out === ""
        ) {
            notification.open({
                message: <p>Vui lòng chọn ngày đến, ngày đi!</p>,
                icon: (
                    <WarningOutlined
                        style={{
                            color: "red",
                            fontSize: "30px",
                            paddingBottom: 30,
                        }}
                    />
                ),
                onClick: () => {
                    console.log("Notification Clicked!");
                },
            });
        } else if (TokenService.getUser() === null) {
            notification.open({
                message: <p>Vui lòng đăng nhập để đặt phòng</p>,
                icon: (
                    <WarningOutlined
                        style={{
                            color: "red",
                            fontSize: "30px",
                            paddingBottom: 30,
                        }}
                    />
                ),
            });
        }
        else {
            setBooking({
                ...booking, checkInCheckOutRequest: {
                    ...booking.checkInCheckOutRequest,
                    idTypeRoom: item.id
                }
            })
            setCheckLogin(true)

            setIsModalVisible(true)
        }
    }

    function handleCancel() {
        setIsModalVisible(false)
    }

    const onFinish = () => {


        api.post("/user/booking", booking).then(res => {
            if (res.status === 200) {
                setIsModalVisible(false)
                notification["success"]({
                    message: res.data.message,
                });
            }
        }).catch(err => {
            console.log(err);
        })
        console.log(booking);
        form.resetFields();

    };

    const getImageTypeRoom = (image) => {
        if (image) {
            return `http://localhost:8080/api/rest/files/image_type_room/${image}`
        }
    }

    return (
        <Col span={24}>
            {typeRooms.map((item, index) => (
                <div key={index} className="type-room mb-3" style={{ width: "940px" }}>
                    <div className="type-room-main">
                        <div>
                            <div className="type-room-image">
                                <img
                                    style={{
                                        height: "170px",
                                        width: "170px",
                                        borderRadius: 10,
                                    }}
                                    src={getImageTypeRoom(item.typeRoomImages[0].image)}
                                    alt=""
                                />
                            </div>
                            {/* <div id="xemTienIch" href="">
                  Xem hình ảnh & tiện nghi
                </div> */}
                        </div>
                        <div className="type-room-content">
                            <h6 id="name-hotel">{item.name}</h6>
                            <div className="text-content">
                                <i className="fas fa-arrows-alt"></i> 33m2 &ensp;{" "}
                                <i className="fas fa-eye"></i> Hướng một phần
                            </div>
                            <div className="text-content">
                                <i className="fas fa-sticky-note"></i> Không hỗ trợ hoàn
                                hủy
                            </div>
                            <div className="text-content">
                                <i className="fas fa-utensils"></i> Không bao gồm bữa ăn
                                sáng
                            </div>
                            <div className="text-content" style={{ color: "#48BB78" }}>
                                <i className="fas fa-bolt"></i> Xác nhận phòng ngay
                            </div>
                            <div className="text-content" style={{ color: "#E53E3E" }}>
                                Chỉ còn 5 phòng trống
                            </div>
                        </div>
                        <div className="type-room-people">
                            <div id="iconpeople">
                                <i
                                    style={{
                                        alignContent: "center",
                                        position: "relative",
                                        left: "13px",
                                        fontSize: "25px",
                                    }}
                                    className="fas fa-user"
                                ></i>
                            </div>
                            <div className="text-content" align="center">
                                {item.capacity} người
                            </div>
                        </div>
                        <div className="type-room-bed">
                            <div id="iconpeople">
                                <i
                                    style={{
                                        alignContent: "center",
                                        position: "relative",
                                        left: "18px",
                                        fontSize: "25px",
                                    }}
                                    className="fas fa-bed"
                                ></i>
                            </div>
                            <div className="text-content" align="center">
                                Một giường đôi
                            </div>
                        </div>
                        <div className="type-room-date">
                            <div className="mb-2">
                                <DatePicker
                                    placeholder="Ngày đến"
                                    id="ngayden"
                                    onChange={(date, dateString) => {
                                        // var newDate = dateString.split("-").reverse().join("-");
                                        setBooking({
                                            ...booking, checkInCheckOutRequest: {
                                                ...booking.checkInCheckOutRequest,
                                                date_in: dateString
                                            }
                                        })
                                    }}

                                    disabledDate={(current) => {
                                        return moment().add(-1, "days") >= current;
                                    }}
                                />
                            </div>

                            <div>
                                <DatePicker
                                    placeholder="Ngày về"
                                    id="ngaydi"
                                    onChange={(date, dateString) => {
                                        // var newDate = dateString.split("-").reverse().join("-");
                                        setBooking({
                                            ...booking,
                                            checkInCheckOutRequest: {
                                                ...booking.checkInCheckOutRequest,
                                                date_out: dateString
                                            }
                                        })
                                    }}

                                    disabledDate={(current) => {
                                        return moment().add(0, "days") >= current;
                                    }}
                                />
                            </div>
                        </div>
                        <div className="type-room-rate" align="right">
                            <div id="rate-text">-69%</div>
                            <div className="price-text mt-1">
                                <i>{item.price}đ /đêm</i>
                            </div>
                            <div className="mt-1">
                                <span
                                    className="price-text giathat"
                                    style={{ fontSize: 19, fontWeight: "bold" }}
                                >
                                    /đêm
                                </span>
                            </div>
                            <div className="mt-1">
                                <Button
                                    onClick={(event) => showModal(event, item)}
                                    style={{
                                        borderRadius: "8px",
                                        textTransform: "none",
                                        marginLeft: "16px",
                                        width: "80%",
                                        height: 40,
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
                                        Đặt phòng
                                    </div>
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <Modal border-radius={100} width={650} title="Thông tin đặt phòng"

                visible={isModalVisible} onOk={form.submit} onCancel={handleCancel} >
                <Form form={form} onFinish={onFinish} >
                    <Row gutter={[40, 16]}>
                        <Col span={12}>
                            <p> <img src="https://img.icons8.com/material/24/000000/businessman--v1.png" alt="" /> Họ và tên</p>
                            <Form.Item name="full_name" rules={[{ required: true, message: "Không được để trống họ và tên!" }]}>
                                <Input size="middle" name="full_name" onChange={(event) => setBooking({ ...booking, full_name: event.target.value })} />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <p> <img src="https://img.icons8.com/material-outlined/24/000000/phone-contact.png" alt="" /> Số Điện Thoại</p>
                            <Form.Item name="phone" rules={[{ required: true, message: "Không được để trống số điện thoại!" }]}>
                                <Input size="middle" name="phone" onChange={(event) => setBooking({ ...booking, phone: event.target.value })} />
                            </Form.Item>
                        </Col>

                        <Col span={12}>

                            <p><img src="https://img.icons8.com/material-outlined/24/000000/new-post.png" alt="" /> Email</p>
                            <Form.Item name="email" rules={[
                                {
                                    type: 'email',
                                    message: 'Không đúng định dạng E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Không được bỏ trống E-mail!',
                                },
                            ]}>
                                <Input size="middle" name="email" onChange={(event) => setBooking({ ...booking, email: event.target.value })} />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <p><img alt="" src="https://img.icons8.com/material-outlined/24/000000/note.png" />
                                Ghi chú
                            </p>

                            <TextArea showCount maxLength={1000} />

                        </Col>
                        <Col span={12}>
                            <p><img alt="" src="https://img.icons8.com/material-outlined/24/000000/bill.png" /> Tổng thanh toán: </p>
                        </Col>
                    </Row>
                </Form>
            </Modal >
        </Col>
    );
}

export default TypeRoom;