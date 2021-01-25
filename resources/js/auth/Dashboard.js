import { AppBar, CssBaseline, Hidden, IconButton, Menu, SwipeableDrawer, Divider,Toolbar, Typography, Container, Avatar } from '@material-ui/core'
import {Route } from 'react-router-dom'
import {Switch} from 'react-router-dom'
import authStyle from './style/auth_style'
import DrawerProfile from './widgets/DrawerProfile'
import theme from '../themes/app_theme'
import { useState } from 'react'
import AdminDrawerMenu from './AdminDrawerMenu'
import drawerMenu from './data/drawerMenu'
import React from 'react'
import Stocks from './stocks/Stocks'
import AdminHome from './AdminHome'
const Dashboard = (props)=>{
    const classes = authStyle()
    const [mobileOpen,setMobileOpen] = useState(false)
    const [currentPage,setCurrentPage] = useState("Dashboard")
    const {container} = props;
    const drawer = (
        <div className={classes.drawerRoot}>
            <DrawerProfile/>
            <AdminDrawerMenu menu={drawerMenu}/>
        </div>
    )

   const handleDrawerToggle = (value,page) => event=>{
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMobileOpen(value)
        setCurrentPage(value)
    }
    return(
        <div className={classes.root}>
        <CssBaseline/>
        <div style={{display:'flex',flexDirection:'column'}}>
            <AppBar position="fixed" className={classes.appBar} elevation={0}>
                <Toolbar>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle(true)}
                        className={classes.menuButton}
                    >
                        <Menu/>
                    </IconButton>
                    <div className={classes.grow}/>
                    <Avatar variant={'circular'} style={{width:30,height:30,marginRight:25}}>
                        A
                    </Avatar>
                </Toolbar>
                <Divider/>
            </AppBar>
        </div>
        <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <SwipeableDrawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onOpen={handleDrawerToggle(true,currentPage)}
                    onClose={handleDrawerToggle(false,currentPage)}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </SwipeableDrawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <SwipeableDrawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open={mobileOpen}
                    onOpen={handleDrawerToggle(true,currentPage)}
                    onClose={handleDrawerToggle(false,currentPage)}
                >
                    {drawer}
                </SwipeableDrawer>
            </Hidden>
        </nav>
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Container maxWidth={'lg'}>
                <Switch>
                    <Route path={'/dashboard'} component={AdminHome} exact/>
                    <Route path={'/dashboard/stocks'} component={Stocks} exact/> 
                </Switch>
            </Container>
        </main>
    </div>
    )
}

export default Dashboard