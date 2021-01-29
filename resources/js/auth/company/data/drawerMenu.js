import DashboardIcon from '@material-ui/icons/Dashboard'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import SettingIcon from '@material-ui/icons/Settings'
import VideocamIcon from '@material-ui/icons/Videocam'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import MusicNotIcon from '@material-ui/icons/MusicNote'
import PersonIcon from '@material-ui/icons/Person';
import ExtensionIcon from '@material-ui/icons/Extension';
import BusinessIcon from '@material-ui/icons/Business'
import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AccountBalance,AllInbox, DirectionsBus, GroupAdd, GroupWork, Movie, Payment, Receipt, Store } from '@material-ui/icons'
const drawerMenu = [
    {
        name:'Dashboard',
        route:'/auth',
        icon:<DashboardIcon/>
    },
    {
        name:'My profile',
        route:'/auth/profile',
        icon:<PersonIcon/>
    },
    {
        name:'My stocks',
        route:'/auth/stocks',
        icon:<Store/>
    },
    {
        name:'My loans',
        route:'/auth/loans',
        icon:<AttachMoneyIcon/>
    },
    {
        name:'My companies',
        route:'/auth/company',
        icon:<BusinessIcon/>
    },
    {
        name:'Logout',
        route:'/auth/logout',
        icon: <ExitToAppIcon/>,
    },
]

export default drawerMenu
