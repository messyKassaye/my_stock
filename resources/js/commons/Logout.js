import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {removeToken,removeRole} from '../TokenService'
function Logout(){
        const history = useHistory()
   
        useEffect(()=>{
        removeToken()
        removeRole()
        history.push('/')
        window.location.reload()
    },[])

    return(
        <div>
            Logging out...
        </div>
    )
}

export default Logout