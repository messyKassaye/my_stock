import { AppBar, Button, Container, Grid, IconButton, Menu, MenuItem, Select, TextField, Toolbar } from '@material-ui/core'
import { common, green, orange } from '@material-ui/core/colors'
import { Search } from '@material-ui/icons'
import  MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import LogoComponent from './LogoComponent'
import commonStyles from './styles/commonStyles'
import {useHistory} from 'react-router-dom'

function Header(props){
    const classes = commonStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [age, setAge] = React.useState('');
    const history  =useHistory()

    


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    console.log(event.target.value)
    history.push(findRoute(event.target.value))
  };
  const findRoute =(index)=>{
     if(index===1){
       return '/sign_in'
     }else if(index===2){
       return '/company_signup'
     }else{
       return '/user_signup'
     }
  }
    return(
        <AppBar color={'primary'} color={'primary'}>
            <Toolbar>
              <Container maxWidth={'xl'} className={classes.headerContainer}>
             
              <LogoComponent variant={'h5'} firstColor={'#ff5722'} secondColor={'white'}/>
             
              <div className={classes.searchContainer}>
              <Select
                variant={'standard'}
                disableUnderline={true}
                value={age}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Category' }}
              >
                <MenuItem value="">
                  All
                </MenuItem>
                <MenuItem value={2}>Loans</MenuItem>
                <MenuItem value={3}>Stocks</MenuItem>
                <MenuItem value={4}>Companies</MenuItem>
              </Select>

              <input
              className={classes.text_input}
              name="search"
              placeholder=''
              type='text'/>

              <Button variant={'contained'} color={'secondary'} className={classes.searchButton}>
                <Search/>
              </Button>
              </div>

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
                  <MenuItem value={1} onClick={handleClose}>Sign in</MenuItem>
                  <MenuItem value={2} onClick={handleClose}>Sign up as a company</MenuItem>
                  <MenuItem value={3} onClick={handleClose}>Sign up as a user</MenuItem>
                  </Menu>
              </Container>
            </Toolbar>

            <div className={classes.secondToolbar}>
              <Container maxWidth={'xl'} className={classes.secondContainer}>
                <IconButton style={{marginLeft:2}} color={'inherit'}>
                   <MenuIcon/>
                </IconButton>
                <Button 
                variant={'text'}
                className={classes.buttons}>
                  Home
                </Button>

                <Button 
                variant={'text'}
                className={classes.buttons}>
                  Stocks
                </Button>

                <Button 
                variant={'text'}
                className={classes.buttons}>
                  Loans
                </Button>

                <Button 
                variant={'text'}
                className={classes.buttons}>
                  Companies
                </Button>

                <Button 
                variant={'text'}
                className={classes.buttons}>
                  About us
                </Button>

                <Button 
                variant={'text'}
                className={classes.buttons}>
                  Contact us
                </Button>
              </Container>
            </div>
        </AppBar>
    )
}

export default Header