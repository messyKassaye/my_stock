import React,{Component} from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';

class LogoComponent extends React.Component{

    render(){

        return <Typography component={Link} to={'/'} style={{textDecoration:'none',display:"flex",flexDirection:'row',cursor:'pointer'}} >
            <Typography variant={this.props.variant} style={{color:this.props.firstColor,}}>My</Typography>
            <Typography variant={this.props.variant} style={{color:this.props.secondColor}}>Stock</Typography>
        </Typography>
    }
}

export default LogoComponent;