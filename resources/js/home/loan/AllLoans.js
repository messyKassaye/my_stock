import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
function AllLoans(){
    return(
        <Container maxWidth={'md'}>
            <Grid container spacing={2}>
                <Grid item md={3}>

                </Grid>

                <Grid item md={9}>
                    <Typography>
                        All loans
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AllLoans