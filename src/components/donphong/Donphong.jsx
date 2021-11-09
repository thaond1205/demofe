import React from 'react';
import './donphong.css';
import { Table, Tag, Space } from 'antd';
function Donphong() {


    const columns = [
        {
            title: "Cơ sở",
            dataIndex: "name",
            filters: [
                {
                    text: "Hà Nội",
                    value: "Hà Nội"
                },
                {
                    text: "TPHCM",
                    value: "TPHCM"
                },
                {
                    text: "Cần Thơ",
                    value: "Cần Thơ"
                },
                {
                    text: "Đà Nẵng",
                    value: "Đà Nẵng"
                }
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,

        },
        {
            title: "Loại Phòng",
            dataIndex: "loaiphong",
            filters: [
                {
                    text: "Phòng đơn",
                    value: "phongdon"
                },
                {
                    text: "Phòng đôi",
                    value: "phongdoi1"
                },

            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.loaiphong.indexOf(value) === 0,
            sorter: (a, b) => a.loaiphong.length - b.loaiphong.length,

        },
        {
            title: "Ngày đến",
            dataIndex: "ngayve",
            defaultSortOrder: "descend",
            sorter: (a, b) => a.ngayve - b.ngayve
        },
        {
            title: "Ngày về",
            dataIndex: "ngayden",
            defaultSortOrder: "descend",
            sorter: (a, b) => a.ngayden - b.ngayden
        },
        {
            title: "Thanh toán",
            dataIndex: "thanhtoan",
            defaultSortOrder: "descend",
            sorter: (a, b) => a.thanhtoan - b.thanhtoan
        },
        {
            title: "Trạng thái",
            dataIndex: "trangthai",
            filters: [
                {
                    text: "London",
                    value: "London"
                },
                {
                    text: "New York",
                    value: "New York"
                }
            ],
            onFilter: (value, record) => record.trangthai.indexOf(value) === 0
        }
    ];

    const data = [
        {
            key: "1",
            name: "Hà Nội",
            loaiphong: "Phòng đôi",
            ngayden: 32,
            ngayve: 34,
            thanhtoan: 199999,
            trangthai: "New York No. 1 Lake Park"
        },
        {
            key: "2",
            name: "Đà Nẵng",
            loaiphong: "Phòng đơn",
            ngayden: 32,
            ngayve: 34,
            thanhtoan: 199999,
            trangthai: "London No. 1 Lake Park"
        },
        {
            key: "3",
            name: "TPHCM",
            loaiphong: "Phòng đôi",
            ngayden: 32,
            ngayve: 34,
            thanhtoan: 199999,
            trangthai: "Sidney No. 1 Lake Park"
        },
        {
            key: "4",
            name: "Cần Thơ",
            loaiphong: "Phòng đơn",
            ngayden: 32,
            ngayve: 34,
            thanhtoan: 199999,
            trangthai: "London No. 2 Lake Park"
        }
    ];

    function onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
    }

    return (

        <main>
            <div className="MuiBox-root jss4609 jss4464">
                <div className="MuiBox-root jss4610 jss4465">
                    <div className="MuiBox-root jss4611 jss2821 jss4467">
                        <div className="MuiBox-root jss4612"><a className="MuiTypography-root MuiLink-root MuiLink-underlineHover jss4468 MuiTypography-colorPrimary" href="#"><span className="MuiBox-root jss4613">Trang chủ</span></a><svg width={10} height={6} fill="none" className="svgFillAll jss4466">
                            <path d="M1.667 1.333L5 4.667l3.333-3.334" stroke="#1A202C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg><span className="MuiBox-root jss4614">Quản lý đơn đặt </span></div><span className="MuiBox-root jss4615">Đơn đặt
                        </span>
                    </div>
                </div>
                <div className="MuiBox-root jss4616 jss2821">
                    <div className="MuiTabs-root">
                        <div className="MuiTabs-scroller MuiTabs-fixed" >
                            <div aria-label="full width tabs example" >
                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss4469 Mui-selected" >
                                    <span className="MuiTab-wrapper">Quản lý đơn đặt</span>
                                    <span className="MuiTouchRipple-root" />
                                </button>
                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss4469" >
                                    <span className="MuiTab-wrapper">Tài khoản</span><span className="MuiTouchRipple-root" /></button>
                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss4469" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                    <span className="MuiTab-wrapper">Vé máy bay</span>
                                    <span className="MuiTouchRipple-root" />
                                </button>
                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss4469" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                    <span className="MuiTab-wrapper">Khách sạn yêu thích</span>
                                    <span className="MuiTouchRipple-root" />
                                </button>
                            </div>
                            <span className="jss4512 jss4514 MuiTabs-indicator jss4511 jss4470" style={{ left: '0px', width: '160px' }} />
                        </div>
                    </div>
                    <Table columns={columns} dataSource={data} onChange={onChange} />
                </div>
            </div>
        </main>
    );
}
export default Donphong;