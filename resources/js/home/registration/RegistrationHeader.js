import { AppBar, Button, Container, Toolbar } from '@material-ui/core'
import React from 'react'
import LogoComponent from '../../commons/LogoComponent'
import RegistrationStyle from './style/RegistrationStyle'
function RegistartionHeader(){
    const classes = RegistrationStyle()
    return(
        <AppBar color={'inherit'} elevation={0}>
            <Toolbar>
                <Container maxWidth={'xl'} style={{display:'flex',flexDirection:'row'}}>
                <LogoComponent variant={'h5'} firstColor={'#ff5722'} secondColor={'#0e0f3e'}/>
                <div className={classes.grow}/>
                <Button
                 variant={"outlined"}
                 color={'secondary'}
                 style={{textTransform:"none"}}>
                    Log in
                </Button>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default RegistartionHeader