import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Dashboard from '../auth/Dashboard';
import HomePage from './HomePage';
import Login from './login/Login';
import CompanyRegistration from './registration/CompanyRegistration';
import UserRegistration from './registration/UserRegistration';

function HomeRoute(){

    return (
        <Switch>
            <Router>
                <Route path={'/'} component={HomePage} exact/>
                <Route path={'/sign_in'} component={Login}/>
                <Route path={'/company_signup'} component={CompanyRegistration}/>
                <Route path={"/user_signup"} component={UserRegistration}/>
                <Route path={'/dashboard'} component={Dashboard}/>
            </Router>
        </Switch>
    )
}

export default HomeRoute