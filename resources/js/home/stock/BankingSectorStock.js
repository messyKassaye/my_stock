import { Card, CardHeader,CardContent, Button } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import React from 'react'

function BankingSectorStock(){
    return(
        <Card>
            <CardHeader
             title={'Banking sector'}
             action={
                 <Button
                  variant={'text'}
                  color={'default'}
                  style={{textTransform:'none'}}
                 >
                     More <ArrowForward style={{marginLeft:15}}/>
                 </Button>
             }
            />
            <CardContent>

            </CardContent>
        </Card>
    )
}

export default BankingSectorStock