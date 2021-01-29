import { Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import React from 'react'
import {grey} from '@material-ui/core/colors'
function CardLoader(){
    return(
        <Grid container spacing={2}>

            <Grid item md={4} xs={12} sm={12}>
                <Skeleton
                 variant={'rect'}
                 width={'100%'}
                 height={200}
                 style={{backgroundColor:grey[500]}}
                />
            </Grid>

            <Grid item md={4} xs={12} sm={12}>
                <Skeleton
                 variant={'rect'}
                 width={'100%'}
                 height={200}
                 style={{backgroundColor:grey[500]}}
                />
            </Grid>

            <Grid item md={4} xs={12} sm={12}>
                <Skeleton
                 variant={'rect'}
                 width={'100%'}
                 height={200}
                 style={{backgroundColor:grey[500]}}
                />
            </Grid>
        </Grid>
    )
}

export default CardLoader