import { Avatar, Typography } from "@material-ui/core";
import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {index} from '../../state/AppAction'
import {API_PATH} from '../../Constants'
import { ME } from "../../auth/state/AuthConnstant";
import ProfileLoader from '../../loaders/ProfileLoader'
import { grey } from "@material-ui/core/colors";
const DrawerProfile = ()=>{
    const dispatch = useDispatch();
    const loading = useSelector(state=>state.authReducer.userData.loading);
    const user = useSelector(state=>state.authReducer.userData.user)
    useEffect(()=>{
        dispatch(index(`${API_PATH}me`,ME))
    },[])
    return (
        <div>
            {
                loading
                ?
                    (
                        <ProfileLoader/>
                    )
                :
                    (
                        <div style={{marginTop:20,display:'flex',flexDirection:'column',alignItems:'center',padding:10}}>
                            <Avatar style={{width:60,height:60}}>
                                {user.data.first_name.charAt(0)}
                            </Avatar>
                            <div>
                                {
                                    user.data.role[0].id===3
                                    ?
                                        (
                                            <div style={{marginTop:25,display:'flex',flexDirection:'column',alignItems:'center',color:'#47536b'}}>
                                                <Typography>
                                                    {`Company dashboard`}
                                                </Typography>
                                                <Typography>
                                                    {`${user.data.first_name} ${user.data.last_name}`}
                                                </Typography>
                                            </div>
                                        )
                                    :
                                        (
                                            <Typography>
                                                    {`${user.data.first_name} ${user.data.last_name}`}
                                                </Typography>
                                        )
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default DrawerProfile

