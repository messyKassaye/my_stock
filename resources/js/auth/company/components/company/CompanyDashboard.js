import { Card, CardContent,Button, CardHeader, Grid, Typography,IconButton } from '@material-ui/core'
import React,{useEffect} from 'react'
import {Edit} from '@material-ui/icons'
import {index,openDialog} from '../../../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
import {API_PATH} from '../../../../Constants'
import {ME} from '../../../state/AuthConnstant'
import { Skeleton } from '@material-ui/lab'
import CompanyStyle from './styles/CompanyStyle'
import { grey } from '@material-ui/core/colors'
import CreateStock from '../stock/forms/CreateStock'
import CreateLoan from '../loans/forms/CreateLoan'
function CompanyDashboard(){
    const classes = CompanyStyle()
    const dispatch = useDispatch()
    const loading = useSelector(state=>state.authReducer.userData.loading)
    const user = useSelector(state=>state.authReducer.userData.user);
    useEffect(()=>{
        dispatch(index(`${API_PATH}me`,ME))
    },[])

    const openCreateDialog = (showData)=>{
        dispatch(openDialog(showData))    
    }

    const openEditDialog = (showData)=>{
        
        dispatch(openDialog(showData)) 
    }
    return(
        <Grid container spacing={2}>
            <Grid item md={6} xs={12} sm={12}>
                {
                    loading
                    ?
                        (
                            <Skeleton
                             width={'100%'}
                             height={400}
                             style={{backgroundColor:grey[500]}}
                            />
                        )
                    :
                        (
                            <div>
                                <Typography variant={'h5'} className={classes.info}>
                                    Stock products
                                </Typography>
                                {
                                    user.data.stock===null
                                    ?
                                        (
                                            <Card>
                                                <CardContent className={classes.noStock}>
                                                    <Typography>
                                                        No stock is created until now.
                                                    </Typography>
                                                    <Button
                                                    onClick={()=>openCreateDialog({
                                                        'show':true,
                                                        'title':'Create new Stock',
                                                        'page':<CreateStock type={'create'} data={null} company={user.data.company}/>
                                                    })}
                                                    variant={'text'}
                                                    color={'secondary'}
                                                    style={{textTransform:'none'}}
                                                    >
                                                        Create stock
                                                    </Button>
                                                    </CardContent>
                                            </Card>
                                        )
                                    :   
                                        (
                                            <Card>
                                                <CardHeader
                                                title={`${user.data.stock.stock_price} ETB`}
                                                action={
                                                    <IconButton onClick={()=>openEditDialog(
                                                        {
                                                            'show':true,
                                                            'title':'Edit stock',
                                                            'page':<CreateStock type={'edit'} data={user.data.stock} company={user.data.company}/>
                                                        }
                                                    )}>
                                                        <Edit/>
                                                    </IconButton>
                                                }
                                                />
                                                <CardContent>

                                                </CardContent>
                                            </Card>
                                        )
                                }
                            </div>
                        )
                }
            </Grid>

            <Grid item md={6} xs={12} sm={12}>
                {
                    loading
                    ?
                        (
                            <Grid container spacing={2}>
                                <Grid item md={12} xs={12} sm={12}>
                                    <Skeleton
                                    width={'100%'}
                                    height={400}
                                    style={{backgroundColor:grey[500]}}
                                    />
                                </Grid>

                                <Grid item md={12} xs={12} sm={12}>
                                    <Skeleton
                                    width={'100%'}
                                    height={400}
                                    style={{backgroundColor:grey[500]}}
                                    />
                                </Grid>

                            </Grid>
                        )
                    :
                        (
                            <div>
                                <Typography variant={'h5'} className={classes.info}>
                                    Loan products
                                </Typography>
                                {
                                    user.data.loans.length>0
                                    ?
                                        (
                                            <Grid container spacing={2}>
                                                {
                                                    user.data.loans.map(loan=>(
                                                        <Grid item md={8} xs={12} sm={12}>
                                                            <Card>
                                                                <CardHeader
                                                                title={loan.loan_type.name}
                                                                action={
                                                                    <IconButton onClick={()=>openEditDialog(
                                                                        {
                                                                            'show':true,
                                                                            'title':'Edit stock',
                                                                            'page':<CreateLoan type={'edit'} data={loan} company={user.data.company}/>
                                                                        }
                                                                    )}>
                                                                        <Edit/>
                                                                    </IconButton>
                                                                }
                                                                />
                                                                <CardContent style={{paddingTop:0,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                                                <Typography color={'textSecondary'}>
                                                                    {`${loan.interest_rate}% intereset rate`}
                                                                </Typography>
                                                                <Typography color={'textSecondary'}>
                                                                    {`${loan.number_of_month} month`}
                                                                </Typography>
                                                            </CardContent>
                                                            </Card>
                                                            
                                                        </Grid>
                                                    ))
                                                }
                                            </Grid>
                                        )
                                    :
                                        (
                                            <Card>
                                            <CardContent className={classes.noStock}>
                                                <Typography>
                                                    No loan is created until now.
                                                </Typography>
                                                <Button
                                                onClick={()=>openCreateDialog({
                                                    'show':true,
                                                    'title':'Create new loan',
                                                    'page':<CreateLoan type={'create'} data={null} company={user.data.company}/>
                                                })}
                                                variant={'text'}
                                                color={'secondary'}
                                                style={{textTransform:'none'}}
                                                >
                                                    Create loan
                                                </Button>
                                                </CardContent>
                                            </Card>
                                        )
                                }
                            </div>
                        )
                }
            </Grid>
        </Grid>
    )
}

export default CompanyDashboard