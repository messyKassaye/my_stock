import { Card, CardContent, CardHeader, Container,IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {index} from '../../../../state/AppAction'
import {API_PATH} from '../../../../Constants'
import {ME} from '../../../state/AuthConnstant'
import { Skeleton } from '@material-ui/lab'
import {grey} from '@material-ui/core/colors'
import LoanItem from './LoanItem'
function Loans(){

    const dispatch = useDispatch()
    const loading = useSelector(state=>state.authReducer.userData.loading)
    const userData = useSelector(state=>state.authReducer.userData.user)


    useEffect(()=>{
        dispatch(index(`${API_PATH}me`,ME))
    })
    return(
        <Container maxWidth={'md'}>
            <Card elevation={0} style={{backgroundColor:'transparent'}}>
                <CardHeader
                 title={"Loan product"}
                 action={
                     <IconButton>
                         <Edit/>
                     </IconButton>
                 }
                />
                <CardContent>
                    {
                        loading
                        ?
                            (
                                <Skeleton
                                 width={'100%'}
                                 height={100}
                                 style={{backgroundColor:grey[500]}}
                                />
                            )
                        :
                            (
                                <div>
                                    {
                                        userData.data.loans.map(loan=>(
                                            <LoanItem loan={loan}/>
                                        ))
                                    }
                                </div>
                            )
                    }
                </CardContent>
            </Card>
        </Container>
    )
}

export default Loans