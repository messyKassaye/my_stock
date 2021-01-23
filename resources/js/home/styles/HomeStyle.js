import { makeStyles } from "@material-ui/core";

const HomeStyle = makeStyles((theme)=>({
    mainContainer:{
      display:'flex',
      flexDirection:'column',
      minHeight:'100vh'
    },
    container:{
        display:'flex',
        flexDirection:'column',
        flex:1
    },
    banner:{
        marginTop:115
    },
    select:{
        background: 'transparent',
        padding: '6px 12px',
        width:25
      },
      button:{
        padding: '6px 12px',
        background: 'transparent',
        border: 'none'
      },
      inputGroupAddon:{
        padding: '0!important'
      },
      eachSlide:{
        height:400
      },
      slideLabel:{
        color:'white'
      },
      verticalGrow:{
        display:"flex",
        flexDirection:'column',
        glexGrow:1
      }
}))

export default HomeStyle