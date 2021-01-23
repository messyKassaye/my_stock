import React,{Component} from 'react'
import { Typography } from '@material-ui/core'

class LogoComponent extends React.Component{

    render(){

        return <div style={{display:"flex",flexDirection:'row'}}>
            <Typography variant={this.props.variant} style={{color:this.props.firstColor,}}>My</Typography>
            <Typography variant={this.props.variant} style={{color:this.props.secondColor}}>Stock</Typography>
        </div>
    }
}

export default LogoComponent;