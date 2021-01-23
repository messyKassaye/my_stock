import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePage from './HomePage';
import CompanyRegistration from './registration/CompanyRegistration';
import UserRegistration from './registration/UserRegistration';

function HomeRoute(){

    return (
        <Switch>
            <Router>
                <Route path={'/'} component={HomePage} exact/>
                <Route path={'/company_signup'} component={CompanyRegistration}/>
                <Route path={"/user_signup"} component={UserRegistration}/>
            </Router>
        </Switch>
    )
}

export default HomeRoute