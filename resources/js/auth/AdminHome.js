import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Skeleton } from '@material-ui/lab'
import {index} from '../state/AppAction'
import {FETCH_STOCKS} from './state/AuthConnstant'
import { Avatar, Button, Card, Grid,CardHeader, CardContent ,Typography, Divider, TextField} from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors'
import UseForm from '../commons/forms/UseForm'
import LoadingButton from '../commons/LoadingButton'
import CompanyFinance from './CompanyFinance'
import StocksList from './stocks/StocksList'
function AdminHome(){
    const dispatch=useDispatch()
    const dataLoading = useSelector(state=>state.authReducer.stockReducer.loading)
    const stocks = useSelector(state=>state.authReducer.stockReducer.stocks)

    useEffect(()=>{
        dispatch(index(`/api/stocks`,FETCH_STOCKS))
    },[])


    const handleStock =(stock)=>{
        setStock(stock)
        setDone(false)
        setLoading(false)
        setSubmitted(false)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        setLoading(true)
        setSubmitted(true)
        setTimeout(()=>{
            setDone(true)
        },2000)
    }

    return <div>
           {
               dataLoading
               ?
                (
                    <Skeleton
                     variant={'rec'}
                     width={'100%'}
                     height={100}
                     style={{backgroundColor:grey[500]}}
                    />
                )
               :
                (
                    <div>
                        {
                            stocks.length>0
                            ?
                                (
                                    <StocksList stock={stocks}/>
                                )
                            :
                                (
                                    <CompanyFinance/>
                                )
                        }
                    </div>
                )
           }
        </div>
}

export default AdminHome