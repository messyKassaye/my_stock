import { Grid, Typography,Button, TextField } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import React,{useEffect,useState} from 'react'
import UseForm from '../../commons/forms/UseForm'
import {useHistory} from 'react-router-dom'
import LoadingButton from '../../commons/LoadingButton';
import {store} from '../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
import { STORE_STOCK } from '../state/AuthConnstant';
function Stocks(){
    const {inputs, handleInputChange} = UseForm({amount:'',price:"",company_id:'2'}); 
    const [submitted,setSubmitted] =useState(false)
    const [loading,setLoading] =useState(false)
    const [finished,setFinished] = useState(false)
    const loadingSet = !finished && loading;
    const isEnabled = inputs.name.length > 0
    const dispatch =useDispatch()
    const [done,setDone] =useState(false)
    const history = useHistory()

    const response = useSelector(state=>state.authReducer.stockReducer.response);
   const  addStock =()=>{
     setDone(true)
    }

    useEffect(()=>{
        if(response.status){
            window.location.reload()
        }
    })

    const handleSubmit =(event)=>{
        event.preventDefault()
        dispatch(store('/api/stocks',inputs,STORE_STOCK))
        setLoading(true)
        setSubmitted(true)
    }

    return <div>
            {
                done
                ?
                    (
                        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <TextField
                                    variant={'outlined'}
                                    style={{width:'90%',marginBottom:25}}
                                    label={'Stock price'}
                                    onChange={handleInputChange}
                                    name="price"
                                    type='text'
                                    value={inputs.price}
                                    validators={['required']}
                                />
                                <TextField
                                    variant={'outlined'}
                                    style={{width:'90%',marginBottom:25}}
                                    label={'Minimum initial amount'}
                                    onChange={handleInputChange}
                                    name="amount"
                                    type='text'
                                    value={inputs.amount}
                                    validators={['required']}
                                />

                            <LoadingButton
                                style={{width:'90%'}}
                                color="secondary"
                                variant="outlined"
                                type="submit"
                                disabled={!isEnabled ||submitted}
                                loading={loadingSet}
                                text={'Add stock'}
                                done={finished}
                                >
                                {
                                    'Register contact'
                                }
                            </LoadingButton>
                        </form>
                    )
                :
                    (
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:150}}>
                            <Typography style={{color:green[500]}}>
                            There is no stocks unitl now. Please register your stock now
                        </Typography>
                        <Button 
                        onClick={addStock}
                        variant={'outlined'} 
                        color={'secondary'} 
                        style={{textTransform:'none'}}>
                            Add stock
                        </Button>
                        </div>
                    )
            }
    </div>
}

export default Stocks