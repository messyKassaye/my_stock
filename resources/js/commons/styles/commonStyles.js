import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const commonStyles = makeStyles((theme)=>({
    grow:{
        display:'flex',
        flexGrow:'1'
    },
    headerContainer:{
        display:"flex",
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    searchContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:5,
        width:700,
        backgroundColor:'white',
        '&:hover': {
           border:'3px solid #ff5722'
        }
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        color:'#666666',
        backgroundColor:'#f3f3f3',
        padding:5,
        marginTop:0,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        border:'1px solid #808080'
      },
      text_input:{
        width:'100%',
        display: 'flex',
        border: 'none',
        padding:12,
        '&:focus': {
            outline: 'none',
        }
      },
      searchButton:{
        padding:10,
        borderRadius:0,
      },
      secondToolbar:{
        padding:8,
        backgroundColor:'#232f3e'
      },
      secondContainer:{
        paddingTop:0,
        paddingBottom:0,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
      },
      buttons:{
        textTransform:'none',
        color:'white',
        border:'1px solid transparent',
        '&:hover':{
          border:'1px solid white'
        }
      }
}))

export default commonStyles