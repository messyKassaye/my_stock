import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import UsersDashboard from "./UsersDashboard";
import React from 'react'

function UsersRoute(){

    return(
        <Router>
            <Switch>
                <Route path={'/auth'} component={UsersDashboard}/>
            </Switch>
        </Router>
    )
}

export default UsersRoute