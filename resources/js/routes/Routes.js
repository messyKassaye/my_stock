import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import PrivateRoutes from "./PrivateRoute";
import AuthenticatedRoute from "./AuthenticationRoute";
import Dashboard from "../auth/Dahboard";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../themes/app_theme'
import ReactDOM from 'react-dom';
import HomePage from "../home/HomePage";
class Routes extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
                <Switch>
                    <AuthenticatedRoute path={'/auth'} component={Dashboard}/>
                    <PrivateRoutes path='/' component={HomePage}/>
                </Switch>
            </Router>
        );
    }


}

export default Routes
if (document.getElementById('app')) {
    ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Routes/>
    </MuiThemeProvider>
    , 
    document.getElementById('app'));
}

