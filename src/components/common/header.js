import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Button, Space, Anchor, Drawer, Modal } from "antd";
import Register from "../register/Register";
import LoginUser from "../loginuser/LoginUser";
import { MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";
const { Link } = Anchor;
function AppHeader(props) {
  /**/
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  // const [image, setImage] = useState()

  // useEffect(() => {

  //   axios.get("http://localhost:8080/api/rest/files/image_hotels/"+"7486bb27.jpg", he)
  //   .then(res => {
  //     setImage(res)
  //     console.log()
  //   })
  // }, [])

  const user = JSON.parse(localStorage.getItem("user"));

  const showModalLogin = () => {
    setIsModalVisible(true);
  };

  const showModalRegister = () => {
    setIsModalVisible2(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsModalVisible2(false);
  };
  /**/
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key={1}>
        <a href="#!" onClick={showModalLogin} rel="noopener noreferrer">
          Đăng Nhập
        </a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a href="#!" onClick={showModalRegister} rel="noopener noreferrer">
          Đăng ký
        </a>
      </Menu.Item>
      <Menu.Item key={3}>
        <a href="#!" rel="noopener noreferrer">
          Đơn Đặt
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-hotel"></i>
          <a href="/">My hotel</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="http://localhost:3000/#hero" title="Trang chủ" />
            <Link href="http://localhost:3000/#about" title="Về chúng tôi" />
            <Link href="http://localhost:3000/#feature" title="Khách sạn" />
            <Link href="http://localhost:3000/#works" title="How it works" />
            <Link href="http://localhost:3000/#faq" title="FAQ" />
            <Link href="http://localhost:3000/#pricing" title="Pricing" />
            <Link href="http://localhost:3000/#contact" title="Contact" />

            <Space direction="vertical" className="dropd">
              <Space wrap>
                {user !== null ? (<>
                  <Dropdown
                  overlay={menu}  
                  trigger={["click"]}
                  placement="bottomCenter"
                >
                  <UserOutlined
                    style={{ fontSize: 20 }}
                    onClick={(e) => e.preventDefault()}
                  />
                </Dropdown>
                <span style={{ fontSize: 10 }}>{user.username}</span></>):<Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  placement="bottomCenter"
                >
                  <UserOutlined
                    style={{ fontSize: 20 }}
                    onClick={(e) => e.preventDefault()}
                  />
                </Dropdown>
                }
              </Space>
            </Space>
          </Anchor>
        </div>
        <div></div>
        <div className="mobileVisible">
          <Button className="hide-button" type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="http://localhost:3000/#hero" title="Trang chủ" />
              <Link href="http://localhost:3000/#about" title="Về chúng tôi" />
              <Link href="http://localhost:3000/#feature" title="Khách sạn" />
              <Link href="http://localhost:3000/#works" title="How it works" />
              <Link href="http://localhost:3000/#faq" title="FAQ" />
              <Link href="http://localhost:3000/#pricing" title="Pricing" />
              <Link href="http://localhost:3000/#contact" title="Contact" />

              <Space direction="vertical">
                <Space wrap>
                  <Dropdown
                    overlay={menu}
                    trigger={["click"]}
                    placement="bottomCenter"
                  >
                    <MenuUnfoldOutlined onClick={(e) => e.preventDefault()} />
                  </Dropdown>
                </Space>
              </Space>
            </Anchor>
          </Drawer>
        </div>
      </div>
      <Modal
        border-radius={300}
        width={450}
        closable={false}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        visible={isModalVisible}
      >
        <LoginUser
          setIsModalVisible={setIsModalVisible}
          handleCancel={handleCancel}
        />
      </Modal>
      <Modal
        border-radius={300}
        width={450}
        closable={false}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        visible={isModalVisible2}
      >
        <Register handleCancel={handleCancel} />
      </Modal>
    </div>
  );
}

export default AppHeader;
