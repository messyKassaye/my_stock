import { grey } from '@material-ui/core/colors'
import { Skeleton } from '@material-ui/lab'
import LoaderStyle from './styles/LoaderStyle'
import React from 'react'
function ProfileLoader(){
    const classes = LoaderStyle()
    return <div className={classes.profile}>
            <Skeleton
             variant={'circle'}
             width={60}
             height={60}
             style={{backgroundColor:grey[500],marginBottom:15}}
            />
            <Skeleton
             variant={'text'}
             width={'50%'}
             height={20}
             style={{backgroundColor:grey[500]}}
            />
    </div>
}

export default ProfileLoader