import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import PrivateRoutes from "./PrivateRoute";
import AuthenticatedRoute from "./AuthenticationRoute";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../themes/app_theme'
import ReactDOM from 'react-dom';
import HomeRoute from "../home/HomeRoute";
import {Provider} from 'react-redux'
import store from '../store'
import Dashboard from "../auth/Dashboard";
class Routes extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
                <Switch>
                    <AuthenticatedRoute path={'/auth'} component={Dashboard}/>
                    <PrivateRoutes path='/' component={HomeRoute}/>
                </Switch>
            </Router>
        );
    }


}

export default Routes
if (document.getElementById('app')) {
    ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
        <Routes/>
    </MuiThemeProvider>
    </Provider>
    , 
    document.getElementById('app'));
}

