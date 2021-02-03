import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePage from './HomePage';
import AllLoans from './loan/AllLoans';
import Login from './login/Login';
import RepresentativeRegistration from './registration/components/RepresentativeRegistration';
import UserRegistration from './registration/UserRegistration';

function HomeRoute(){

    return (
        <Switch>
            <Router>
                <Route path={'/'} component={HomePage} exact/>
                <Route path={'/sign_in'} component={Login}/>
                <Route path={'/company_signup'} component={RepresentativeRegistration}/>
                <Route path={"/user_signup"} component={UserRegistration}/>
                <Route path={'/all_loans'} component={AllLoans}/>
            </Router>
        </Switch>
    )
}

export default HomeRoute