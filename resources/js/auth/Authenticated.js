import React, {Suspense} from "react";
import {getRole} from "../TokenService";
import Loading from "../helpers/Loading";
import {BrowserRouter as Router} from "react-router-dom";
let Component = null
class Authenticated extends React.Component{

    constructor(props){
        super(props);
    }


    render() {
        const roleId = JSON.parse(getRole()).id
        if(roleId===2){
            Component = React.lazy(()=> import("./users/UsersRoute")) 
        }else if(roleId===3){
            
        }
        Component = React.lazy(()=>import("./company/CompaniesRoute"))
        return (
            <Suspense fallback={<Loading/>}>
                <Router>
                    <Component/>
                </Router>
            </Suspense>
        )
    }
}

export default Authenticated
