import { AppBar, Button, Container, Grid, Menu, MenuItem, Toolbar } from '@material-ui/core'
import { common, green, orange } from '@material-ui/core/colors'
import React from 'react'
import LogoComponent from './LogoComponent'
import commonStyles from './styles/commonStyles'
function Header(props){
    const classes = commonStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <AppBar color={'primary'} color={'primary'}>
            <Toolbar>
              <Container maxWidth={'lg'}>
                  <Grid container spacing={2}>
                        <Grid item md={3} xs={3} sm={3}>
                             <LogoComponent variant={'h5'} firstColor={'#ff5722'} secondColor={'white'}/>
                        </Grid>

                        <Grid item md={6} xs={6} sm={6}>
                        <div>
                            <span>
                            <select>
                                <option>All</option>
                                <option>Loans</option>
                                <option>Stocks</option>
                                <option>Companies</option>
                            </select>
                           </span>
                           <input id="email" type="text"  name="email" placeholder="Email"/>
                           <span className={classes.inputGroupAddon}> <button>Submit</button></span>
                        </div>
                        </Grid>

                        <Grid item md={3} xs={3} sm={3} style={{display:"flex",flexDirection:'row',justifyContent:'flex-end'}}>
                            <Button 
                            variant={'contained'}
                            color={'secondary'}
                            aria-controls="simple-menu" 
                            aria-haspopup="true" 
                            onMouseOver={handleClick}>
                                    Sign in
                            </Button>
                            <Menu
                            style={{marginTop:35}}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                            <MenuItem onClick={handleClose}>Sign in</MenuItem>
                            <MenuItem onClick={handleClose}>Sign up as a company</MenuItem>
                            <MenuItem onClick={handleClose}>Sign up as a user</MenuItem>
                            </Menu>
                        </Grid>
                  </Grid>
              </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Header