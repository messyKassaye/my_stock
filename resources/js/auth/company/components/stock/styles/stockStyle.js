import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const stockStyle = makeStyles((theme)=>({
    formLabel:{
        margin:15,
        color:green[500]
    },
    form:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    text_input:{
        width:'90%',
        marginBottom:25,
        padding:5
    },
    button:{
        width:'90%',
        textTransform:'none'
    },
    stockItemContainer:{
        display:'flex',
        flexDirection:'column'
    },
    miniContainer:{
        display:'flex',
        flexDirection:'column',
        marginBottom:40
    },
    label:{
        color:'black',
        fontWeight:"bold"
    }
}))

export default stockStyle