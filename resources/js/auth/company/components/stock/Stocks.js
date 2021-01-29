import React,{useEffect,useState} from 'react'
import {index} from '../../../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
import { API_PATH } from '../../../../Constants'
import { ME } from '../../../state/AuthConnstant'
import { Skeleton } from '@material-ui/lab'
import { grey } from '@material-ui/core/colors'
import StockItem from './StockItem'
import {Card, CardContent, CardHeader,Container,IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'

function Stocks(){
    const dispatch = useDispatch()
    const userData = useSelector(state => state.authReducer.userData.user)
    const loading =useSelector(state=>state.authReducer.userData.loading)

    useEffect(()=>{
        dispatch(index(`${API_PATH}me`,ME))
    },[])
    return(
        <div>
            {
                loading
                ?
                    <Skeleton
                     variant={'rect'}
                     width={'100%'}
                     height={100}
                     style={{backgroundColor:grey[500]}}
                    />
                :
                    (
                        <Container maxWidth={'md'}>
                                <Card elevation={0} style={{backgroundColor:'transparent'}}>
                                <CardHeader
                                title={'Stock product'}
                                action={
                                    <IconButton>
                                        <Edit/>
                                    </IconButton>
                                }
                                />
                                <CardContent>
                                    <StockItem stock={userData.data.stock}/>
                                </CardContent>
                            </Card>
                        </Container>
                    )
            }
        </div>
    )
}

export default Stocks