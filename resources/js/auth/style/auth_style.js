import {deepOrange, deepPurple, green, grey, red} from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

 const authstyle  = makeStyles((theme)=>({
    root: {
        display: 'flex',
        padding: 0,
        backgroundColor:'#f4f6f9',
        height:'100vh'
    },
    parent: {
        backgroundColor: 'transparent',
        marginRight:20,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        '&:hover': {
                backgroundColor: '#111236',
                color:'white',
               borderTopRightRadius:50,
               borderBottomRightRadius:50,
            },
        },
    drawerRoot:{
        backgroundColor:'#000c15',
        height:'100%',
        width: '100%',
        position:'relative',
        color:'#47536b',
    },
    avatarLayout:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'start',
        alignItems:"center",
        height:'100%',
        width:'100%',
    },
    avatarImage: {
        margin: 3,
        marginRight: 10
    },

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        backgroundColor:'white',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            backgroundColor:'white'
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display:'none',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        paddingTop: 20,
    },
    grow:{
        flexGrow: 1
    },
    nested: {
        paddingLeft: theme.spacing(6),
    },
    flags: {
        paddingRight: 20
    },
    language: {
        display:'flex',
        marginRight: 10,
        textAlign: 'center',
        fontSize: 14,
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    },
    card1:{
        backgroundColor:deepOrange[500],
        color:'white',
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        }
    },
    card2:{
        backgroundColor:deepPurple[500],
        color:'white',
        paddingBottom:0,
        paddingTop:0

    },
    card3:{
        backgroundColor:'#3C4252',
        color:'white'
    },
    card4:{
        backgroundColor:green[500],
        color:'white'
    },
    cardActions:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"flex-end",
        alignItems:'center',
    },
    logo:{
        display:'flex',
        [theme.breakpoints.down('xs')]:{
            display:'none',
        }
    },
    app_name:{
        marginLeft: 10,
        display:'flex',
        [theme.breakpoints.down('xs')]:{
            marginLeft:-20
        }
    },
    profile:{
        display:'flex',
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    },
    circleAvator:{
        width:100,
        height: 100,
        borderRadius:'50%',
        backgroundColor:deepOrange[500],
        alignItems:'center',
        color:'white',
        fontSize:'2.5em',
        justifyContent:'center'
    },
    sub_menu:{
        backgroundColor:grey[800],
        border:'1px solid #2B2B2B'
    },
}))

export default authstyle
