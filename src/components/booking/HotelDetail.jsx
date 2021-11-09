import React, { useState, useEffect } from "react";
import { Row, Rate, Layout } from "antd";
import "../booking/hoteldetail.css";
import AppHeader from "../common/header";
import { Footer, Header } from "antd/lib/layout/layout";
import AppFooter from "../common/footer";
import api from '../../services/api'
import PreviewHotel from "./PreviewHotel";
import TypeRoom from "./TypeRoom";
function HotelDetail(props) {

  const { match } = props;
  const [hotel, setHotel] = useState({})
  const [typeRooms, setTypeRooms] = useState([])
  const [arrImage, setArrImage] = useState([])

  useEffect(() => {
    api.get(`/owner/hotels/${match.params.id}`).then(res => {
      setHotel(res.data.data)
    })
    api.get(`/owner/typerooms`).then(res => {
      console.log(res);
      setTypeRooms(res.data.data)
    })
  }, [match.params.id]);

  useEffect(() => {
    if (hotel.images) {
      const newArrImage = hotel.images.split(",");
      setArrImage(newArrImage)
    }
  }, [hotel])

  return (
    <>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>

        <div className="main-hoteldetail">
          <div className="title-hotel">
            <div className="title-hotel-left">
              <div className="title-hotel-left-title">
                <p> {hotel.name}</p>
              </div>
              <div className='title-hotel-left-rate'>
                <Rate value={5} disabled={true} style={{ fontSize: '16px', margin: "15px 0px 0px", color: 'rgb(255, 188, 57)' }} />
              </div>
            </div>

          </div>
          <div className="title-hotel-rate">
            <span>9.0</span>
            <div>
              Tuyệt vời
              <span className="title-hotel-rate-ratenumber">&nbsp;(67 đánh giá)</span>
              &nbsp;
              <div className="jss153"></div>
              <div className="title-hotel-rate-icont">
                <img src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_tripadvisor.svg" alt="" />
              </div>
              9.0
              &nbsp;
              <span style={{ color: '#00B6F3' }}>Xem đánh giá</span>
            </div>
          </div>
          <div className="title-hotel-address">
            <div style={{ marginRight: "6px" }}>
              <i className="fal fa-map-marker-alt"></i>
            </div>
            <div>
              Địa chỉ {hotel.address}
              &nbsp;
              <span style={{ color: '#00B6F3' }}>Xem bản đồ</span>
            </div>
          </div>
          <PreviewHotel arrImage={arrImage} />
          <br />
          <Row >
            {/* loại phòng */}
            <TypeRoom idHotel={match.params.id} typeRooms={typeRooms} />

            {/* Tôi sẽ đặt*/}
            {/* <RightBooking lstCheckInCheckOut={lstCheckInCheckOut} /> */}
          </Row>
        </div>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
}

export default HotelDetail;
