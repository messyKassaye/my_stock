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
import { AccountBalance, AllInbox, DirectionsBus, GroupAdd, GroupWork, Movie, Payment, Receipt, Store } from '@material-ui/icons'
const drawerMenu = [
    {
        name:'Dashboard',
        route:'/dashboard',
        icon:<DashboardIcon/>
    },
    {
        name:'Stocks',
        route:'/dashboard/stocks',
        icon:<Store/>
    },
    {
        name:'Loans',
        route:'/auth/loans',
        icon:<AttachMoneyIcon/>
    },
    {
        name:'company',
        route:'/auth/company',
        icon:<AttachMoneyIcon/>
    },
    {
        name:'Settings',
        route:'/auth/admin/settings',
        icon: <SettingIcon/>,
    },
]

export default drawerMenu
