import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import React,{useEffect,useState} from 'react'
import {index,openDialog} from '../../state/AppAction'
import {FETCH_HOME_LOAN} from './state/HomeLoanConstants'
import {useDispatch,useSelector} from 'react-redux'
import { API_PATH } from '../../Constants'
import CardLoader from '../../loaders/CardLoader'
import HomeLoanStyle from './style/HomeLoanStyle'
import {grey} from '@material-ui/core/colors'
import Apply from './apply/Apply'
import { Link } from 'react-router-dom'
function HomeLoans(){
    const classes = HomeLoanStyle()
     const dispatch = useDispatch()
     const loading = useSelector(state => state.homeReducer.homeLoanReducer.loading)
     const loans = useSelector(state=>state.homeReducer.homeLoanReducer.loans)

    useEffect(()=>{
        dispatch(index(`${API_PATH}public_loans`,FETCH_HOME_LOAN))
    },[])

    const openHomeDialog =(data)=>{
        dispatch(openDialog(data))
    }
    return(
        <Card elevation={0}>
            <CardHeader
             title={'Loans for you'}
             action={
                <Button
                 component={Link}
                 to={'/all_loans'}
                 variant={'text'}
                 color={'default'}
                 style={{textTransform:'none'}}
                >
                    More <ArrowForward style={{marginLeft:15}}/>
                </Button>
            }
            />
            <CardContent>
                {
                    loading
                    ?
                        (
                            <CardLoader/>
                        )
                    :
                        (
                            <div>
                                {
                                    loans.data.length>0
                                    ?
                                        (
                                            <Grid container spacing={2}>
                                                {
                                                    loans.data.map(loan=>(
                                                        <Grid item md={4} xs={12} sm={12}>
                                                            <Card className={classes.card}>
                                                                <CardActionArea>
                                                                    <CardMedia
                                                                    className={classes.media}
                                                                    image={loan.company.logo_path}
                                                                    />
                                                                <CardContent>
                                                                <div className={classes.loanTypeContainer}>
                                                                    <Typography className={classes.boldLabel}>
                                                                        {loan.company.name}
                                                                    </Typography>
                                                                    <Typography color={'textSecondary'}>
                                                                        {loan.loan_type.name}
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.monthAndInterest}>
                                                                    <Typography>
                                                                        {`${loan.number_of_month}`}
                                                                    </Typography>

                                                                    <Typography>
                                                                        {`${loan.interest_rate}% interest rate`}
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.monthAndInterest}>
                                                                    <Button
                                                                    variant={'text'}
                                                                    color={'default'}
                                                                    style={{textTransform:'none'}}>
                                                                        Detail
                                                                    </Button>

                                                                    <Button
                                                                    onClick={()=>openHomeDialog({
                                                                        show:true,
                                                                        title:'Apply for loan',
                                                                        page:<Apply/>,
                                                                        data:{}
                                                                    })}
                                                                    variant={'contained'}
                                                                    color={'primary'}
                                                                    style={{textTransform:'none'}}>
                                                                        Apply
                                                                    </Button>
                                                                </div>


                                                                </CardContent>
                                                                </CardActionArea>
                                                            </Card>
                                                        </Grid>
                                                    ))
                                                }
                                            </Grid>
                                        )
                                    :
                                        (
                                            <Typography>
                                                No loans until now. Please visit us later
                                            </Typography>
                                        )
                                }
                            </div>
                        )
                }
            </CardContent>
        </Card>
    )
}

export default HomeLoans