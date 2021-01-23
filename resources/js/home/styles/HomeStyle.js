import { makeStyles } from "@material-ui/core";

const HomeStyle = makeStyles((theme)=>({
    container:{
        display:'flex',
        flexDirection:'column'
    },
    banner:{
        marginTop:65
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
      }
}))

export default HomeStyle