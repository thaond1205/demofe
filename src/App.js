import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import AppHeader from "./components/common/header";
import AppFooter from "./components/common/footer";
import AppHome from "./views/home";
import AdminLayout from "./components/admin/layouts/AdminLayout";
import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/admin/login/Login";
import { authentication } from "./components/admin/login/isAuthen";
import HotelDetail from "./components/booking/HotelDetail";
import Donphong from './components/donphong/Donphong';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/admin" component={AdminLayout} />
        <Route path="/system-admin" component={Login} />
        {/* <Route path="/loginAdmin" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/booking" component={HotelDetails} test="thao"></Route>
        <Route path="/payment" component={PaymentBookingMain}></Route>
        <Route path="/" component={Home}></Route> */}
        <Route
          path="/hotel/:id"
          component={({ match }) => <HotelDetail match={match} />}
        ></Route>

        <Route
          path="/"
          component={() => (
            <Layout className="mainLayout">
              <Header>
                <AppHeader />
              </Header>
              <Content>
                <AppHome />
              </Content>
              <Footer>

                <AppFooter />
              </Footer>
            </Layout>
          )}
        />
      </Switch>
    </Router>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authentication.isAuthentication() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/system-admin" />
        )
      }
    />
  );
}

export default App;
