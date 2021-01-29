import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';

function CompaniesRoute(){
    return(
        <Router>
            <Switch>
                <Route path={'/auth'} component={Dashboard}/>
            </Switch>
        </Router>
    )
}

export default CompaniesRoute