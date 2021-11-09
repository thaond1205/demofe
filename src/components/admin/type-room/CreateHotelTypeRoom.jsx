import { } from "@ant-design/icons";
import { Button, Card, Form, InputNumber, notification, Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import api from '../../../services/api';



const { Option } = Select;
function CreateHotelTypeRoom() {
    const [form] = Form.useForm();
    const [hotelTypeRooms, setHotelTypeRooms] = useState([])
    const [hotels, setHotels] = useState([])
    const [typeRooms, setTypeRooms] = useState([])
    const [hotelTypeRoom, setHotelTypeRoom] = useState({
        idHotel: 0,
        idTypeRoom: 0,
        totalNumberRoom: 0
    })

    useEffect(() => {
        api.get("/owner/hotels").then(res => {
            setHotels(res.data.data)
        })
        api.get("/owner/typerooms").then(res => {
            setTypeRooms(res.data.data)
        })
        api.get("/owner/hotel-type-room").then(res => {
            setHotelTypeRooms(res.data.data)
        })
    }, [])


    function insert() {

        var config = {
            method: 'post',
            url: '/owner/hotel-type-room',
            data: hotelTypeRoom
        };
        api(config).then(res => {

            notification["success"]({
                message: res.data.message,
            });
        }).catch(err => {
            console.log(err.response);
            notification["error"]({
                message: err.response.data.message,
            });
        })
    }

    const onFinish = () => {
        insert();
        form.resetFields();
    };

    const [componentSize] = useState('default');

    const columns = [

        {
            title: 'Tên cơ sở',
            dataIndex: 'nameHotel',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            render: text => <span>{text}</span>,
        },
        {
            title: 'Tên loại phòng',
            dataIndex: 'nameTypeRoom',
            key: 'city',
        },

        {
            title: 'Tổng số phòng',
            key: 'totalNumberRoom',
            dataIndex: 'totalNumberRoom',
            sorter: (a, b) => a.totalNumberRoom - b.totalNumberRoom
        },

    ];


    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="!#">Admin</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Quản lý loại phòng
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Thêm / hiển thị số phòng khách sạn
                    </li>
                </ol>
            </nav>
            <hr />
            <Card className="main-container">
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    initialValues={{
                        size: componentSize,
                    }}
                    form={form}
                    onFinish={onFinish}
                    autoComplete="off"
                >

                    <Form.Item label="Tên cơ sở" name="idHotel"
                        rules={[
                            {
                                required: true,
                                message: 'Không được bỏ trống tên cơ sở!',
                            },
                        ]}>

                        <Select name="idHotel" placeholder="Chọn cơ sở"
                            onChange={(value) => setHotelTypeRoom({ ...hotelTypeRoom, idHotel: value })}>
                            {hotels.map((item, index) => (
                                <Option key={index} value={item.id}>{item.name}</Option>
                            ))}


                        </Select>

                    </Form.Item>

                    <Form.Item label="Tên loại phòng" name="idTypeRoom"
                        rules={[
                            {
                                required: true,
                                message: 'Không được bỏ trống tên loại phòng!',
                            },
                        ]}>

                        <Select name="idTypeRoom" placeholder="Chọn loại phòng"
                            onChange={(value) => setHotelTypeRoom({ ...hotelTypeRoom, idTypeRoom: value })}>

                            {typeRooms.map((item, index) => (
                                <Option key={index} value={item.id}>{item.name}</Option>
                            ))}


                        </Select>

                    </Form.Item>


                    <Form.Item label="Tổng số phòng" name="totalNumberRoom"
                        rules={[
                            {
                                required: true,
                                message: 'Không được bỏ trống số phòng trong khách sạn!',
                            },
                        ]}>
                        <InputNumber min={1} name="totalNumberRoom" onChange={(value) => setHotelTypeRoom({ ...hotelTypeRoom, totalNumberRoom: value })} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Thêm số phòng khách sạn
                        </Button>
                    </Form.Item>

                </Form>
            </Card>
            <Table columns={columns} dataSource={hotelTypeRooms} />
        </div>
    );
}

export default CreateHotelTypeRoom;
