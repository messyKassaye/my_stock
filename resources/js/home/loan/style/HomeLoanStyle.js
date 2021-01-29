import { makeStyles } from "@material-ui/core";

const HomeLoanStyle = makeStyles((theme)=>({
    card:{
        backgroundColor:'#f3f5f6'
    },
    media:{
        height:150
    },
    loanTypeContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    boldLabel:{
        fontWeight:'bold',
        marginTop:15
    },
    monthAndInterest:{
        display:'flex',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
}))

export default  HomeLoanStyle