import { Typography } from "@material-ui/core";
import React from "react";
import LogoComponent from "../../commons/LogoComponent";
const DrawerProfile = ()=>{
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:10}}>
            <LogoComponent variant={'h5'} firstColor={'white'} secondColor={'#ff5722'}/>
        </div>
    )
}

export default DrawerProfile

