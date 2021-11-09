import React from "react";
import { Switch, Route } from "react-router-dom";
import Hotel from "../../admin/hotel/Hotel";
import CreateHotel from "../hotel/CreateHotel";
import User from "../user/User";
import AddUser from "../user/AddUser";
import ListRoom from "../room/ListRoom";
import TypeRoom from "../type-room/TypeRoom";
import EditHotel from "../hotel/EditHotel";
import Profile from "../profile/Profile";
import CreateTypeRoom from "../type-room/CreateTypeRoom";
import CreateHotelTypeRoom from "../type-room/CreateHotelTypeRoom";
function Main() {
    return (
        <div>
            <Switch>
                <Route path="/admin/hotel" component={Hotel} exact={true} />
                <Route path="/admin/hotel/add" component={CreateHotel} />
                <Route path="/admin/hotel/update/:id" component={({ match, history }) => <EditHotel match={match} history={history} />} />
                <Route path="/admin/user" component={User} exact={true} />
                <Route path="/admin/user/add" component={AddUser} />
                <Route path="/admin/room" component={ListRoom} exact={true} />
                <Route path="/admin/type-room" component={TypeRoom} exact={true} />
                <Route path="/admin/type-room/add" component={CreateTypeRoom} exact={true} />
                <Route path="/admin/hote-type-room/add" component={CreateHotelTypeRoom} />
                <Route path="/admin/profile" component={Profile} />
                {/* <Route path="/admin/user/add" component={AddUser} /> */}
            </Switch>
        </div>
    );
}

export default Main;
