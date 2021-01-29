import { grey } from '@material-ui/core/colors'
import { Skeleton } from '@material-ui/lab'
import React from 'react'
import LoaderStyle from './styles/LoaderStyle'
function HorizontalLoader(){
    const classes = LoaderStyle()
    return <div className={classes.container}>
        <Skeleton
         variant={'rect'}
         width={'100%'}
         height={25}
         style={{backgroundColor:grey[500],marginBottom:15}}
        />

        <Skeleton
                variant={'rect'}
                width={'100%'}
                height={25}
                style={{backgroundColor:grey[500],marginBottom:15}}
                />

        <Skeleton
                variant={'rect'}
                width={'100%'}
                height={25}
                style={{backgroundColor:grey[500],marginBottom:15}}
                />

        <Skeleton
                variant={'rect'}
                width={'100%'}
                height={25}
                style={{backgroundColor:grey[500],marginBottom:15}}
                />
    </div>
}

export default HorizontalLoader