import { Button, Card, CardContent, CardHeader, Container, Divider, Grid } from '@material-ui/core'
import React from 'react'
import HomeStyle from './styles/HomeStyle'
function MainContainer(){
    const classes = HomeStyle()
    return(
        <Container maxWidth={'md'} className={classes.homeMainContainer}>
            <Grid container spacing={2}>

                <Grid item md={12} xs={12} sm={12}>
                <Card>
                    <CardHeader
                    title={'Loans for you'}
                    action={
                        <Button
                        variant={'text'}
                        color={'inherit'}
                        >
                            More...
                        </Button>
                    }
                    />
                    <Divider/>
                    <CardContent>

                    </CardContent>
                </Card>
                </Grid>

                <Grid item md={12} xs={12} sm={12}>
                    <Card>
                    <CardHeader
                    title={'Banking sector stocks'}
                    action={
                        <Button
                        variant={'text'}
                        color={'inherit'}
                        >
                            More...
                        </Button>
                    }
                    />
                    <Divider/>
                    <CardContent>

                    </CardContent>
                </Card>
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                <Card>
                <CardHeader
                    title={'Manufacturing sector stocks'}
                    action={
                        <Button
                        variant={'text'}
                        color={'inherit'}
                        >
                            More...
                        </Button>
                    }
                    />
                    <Divider/>
                    <CardContent>

                    </CardContent>
                </Card>
                </Grid>

            </Grid>
        </Container>
    )
}

export default MainContainer