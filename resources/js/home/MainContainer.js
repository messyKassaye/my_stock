import { Button, Card, CardContent, CardHeader, Container, Divider, Grid } from '@material-ui/core'
import React from 'react'
import BankingSector from './stock/BankingSectorStock'
import HomeLoans from './loan/HomeLoans'
import HomeStyle from './styles/HomeStyle'
function MainContainer(){
    const classes = HomeStyle()
    return(
        <Container maxWidth={'md'} className={classes.homeMainContainer}>
            <Grid container spacing={2}>

                <Grid item md={12} xs={12} sm={12}>
                  <HomeLoans/>
                </Grid>

                <Grid item md={12} xs={12} sm={12}>
                    <BankingSector/>
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                 
                </Grid>

            </Grid>
        </Container>
    )
}

export default MainContainer