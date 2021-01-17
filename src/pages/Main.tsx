import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Home from './Home';
import Register from './Register';
import Evaluate from './Evaluate';
import RepairList from './RepairList';
import RequestRepair from './RequestRepair';
import EditProfile from './EditProfile';
import DataUser from './DataUser';
import Users from './Users';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/evaluate" component={Evaluate} />
                <Route path="/home/repairlist/:id" component={RepairList} />
                <Route path="/home" component={Home} />
                <Route path="/users/:id/repairlist/:id" component={RepairList} />
                <Route path="/users/:id/request-repairing" component={RequestRepair} />
                <Route path="/users/:id/edit-profile" component={EditProfile} />
                <Route path="/users/:id" component={DataUser} />
                <Route path="/users" component={Users} />
                <Route path="/" render={() => (<Redirect to='/home' />)} />
            </Switch>
        </div>
    )
}

export default Main