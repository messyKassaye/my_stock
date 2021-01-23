import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'
import createPalette from "@material-ui/core/styles/createPalette";


let theme = createMuiTheme({
   palette: createPalette(
       {
           primary:{
               main:'#0e0f3e'
           },
           secondary:{
               main: '#ff5722'
           }
       }
   )
})

theme = responsiveFontSizes(theme)

export default theme

