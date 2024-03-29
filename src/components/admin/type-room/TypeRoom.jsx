

import React, { useState, useEffect } from "react";
import api from "../../../services/api"
import { Divider, Table, Col, Form, Select } from 'antd';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const { Option } = Select
function TypeRoom(props) {

    const [typeRooms, setTypeRooms] = useState([])
    const [hotels] = useState([])
    const [idHotel, setIdHotel] = useState(0)


    useEffect(() => {
        const getTypeRooms = () => {
            const config = {
                params: {
                    id: idHotel
                }
            }
            api.get("/owner/typerooms", config).then((res) => {
                console.log(res);
                if (res.data !== null) {
                    setTypeRooms(res.data.data);
                } else {
                    console.log(res.message);
                }
            })
                .catch((err) => {
                    console.log(err);
                });
        }
        getTypeRooms();
    }, [idHotel])


    const getImageTypeRoom = (image) => {
        if (image) {
            return `http://localhost:8080/api/rest/files/image_type_room/${image}`
        }
    }

    const columns = [
        {
            title: 'Tên loại phòng',
            dataIndex: 'typeRoomImages',

            render: (typeRoomImages) => {
                return (
                    <img alt="" width={100} src={getImageTypeRoom(typeRoomImages[0].image)} />
                )
            },
            key: () => Math.random().toString(),
        },

        {
            title: 'Tên loại phòng',
            dataIndex: 'name',
            key: () => Math.random().toString(),
        },
        {
            title: 'Giá loại phòng',
            dataIndex: 'price',
            key: () => Math.random().toString(),
        },
        {
            title: 'Kích thước phòng',
            dataIndex: 'size',
            key: () => Math.random().toString(),

        },
        {
            title: 'Số lượng chứa',
            dataIndex: 'capacity',
            key: () => Math.random().toString(),

        },
        {
            title: 'Trạng thái',
            key: () => Math.random().toString(),
            dataIndex: 'status',
        },
        {
            title: 'Action',
            key: () => Math.random().toString(),
            render: (text, record) => (
                <span>
                    <Link to="update">Update {record.name} </Link>
                    <Divider type="vertical" />
                </span>
            ),
        },
    ];

    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#!">Admin</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Quản lý phòng
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Danh sách phòng
                    </li>
                </ol>
            </nav>
            <hr />
            <Col span={8} key={5}>
                <Form.Item
                    name="gender"
                    label="Chọn cơ sở"
                    rules={[
                        {
                            required: true,
                            message: 'Không được trống giới tính!',
                        },
                    ]}>
                    <Select placeholder="Chọn cơ sở" onChange={(id) => setIdHotel(id)}>
                        {hotels.map((item, index) => (
                            <Option key={index} value={item.id}>{item.city}</Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
            <Table columns={columns} dataSource={typeRooms} />
        </div>
    );
}

export default TypeRoom;
