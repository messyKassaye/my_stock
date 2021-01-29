import { makeStyles } from "@material-ui/core";

const FormStyle = makeStyles((theme)=>({
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
    loanItemContainer:{
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
    },
    loanInterest:{
        display:"flex",
        flexDirection:'row',
    },
    divider:{
        marginLeft:100,
        marginRight:100
    }
}))

export default FormStyle