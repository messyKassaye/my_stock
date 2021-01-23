import { Container, Grid,Typography } from '@material-ui/core'
import React from 'react'
import menu from './data/menu'
import footerStyle from './styles/footerStyle'
function Footer(){
    const classes = footerStyle()
    return(
        <div className={classes.footerContainer}>
            <Container maxWidth={'xl'}>
                <Grid container spacing={2}>
                <Grid item md={4} xs={12} sm={12}>
                    <Grid container spacing={2}>
                    {
                        menu.first_menu.map(menu=>(
                            <Grid key={menu.id} item md={12} xs={12} sm={12}>
                                <Typography>
                                {menu.label}
                                </Typography>
                            </Grid>
                        ))
                    }
                    </Grid>
                </Grid>

                <Grid item md={4} xs={12} sm={12}>
                    <Grid container spacing={2}>
                    {
                        menu.second_menu.map(secondMenu=>(
                            <Grid key={secondMenu.id} item md={12} xs={12} sm={12}>
                                <Typography>
                                    {secondMenu.label}
                                </Typography>
                            </Grid>
                        ))
                    }
                    </Grid>
                </Grid>

                <Grid item md={4} xs={12} sm={12}>
                <Grid container spacing={2}>
                    {
                        menu.third_menu.map(thirdMenu=>(
                            <Grid key={thirdMenu.id} item md={12} xs={12} sm={12}>
                                <Typography>
                                    {thirdMenu.label}
                                </Typography>
                            </Grid>
                        ))
                    }
                    </Grid>
                </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer