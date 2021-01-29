import React,{useState,useEffect} from 'react'
import RegistrationStyle from './style/RegistrationStyle'
import RegistartionHeader from './RegistrationHeader'
import { TextField, Typography } from '@material-ui/core'
import UseForm from '../../commons/forms/UseForm'
import LoadingButton from '../../commons/LoadingButton'
import {useHistory} from 'react-router-dom'
import {store} from '../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
import { API_PATH } from '../../Constants'
import { SIGN_UP } from '../state/HomeConstants'
import { set,setRole } from '../../TokenService'
import axios from 'axios'

function UserRegistration(){
    const classes = RegistrationStyle()
    const [submitted,setSubmitted] =useState(false)
    const [loading,setLoading] =useState(false)
    const [finished,setFinished] = useState(false)
    const {inputs, handleInputChange} = UseForm({first_name:'',last_name:'',email:'',phone:'',password:'',role_id:2}); 
    const loadingSet = !finished && loading;
    const isEnabled = inputs.first_name.length > 0&&inputs.last_name.length>0&&inputs.email.length>0&&
                      inputs.phone.length>0
    const [done,setDone] = useState()

    const history = useHistory()
    const dispatch = useDispatch();
    const response = useSelector(state=>state.homeReducer.signUpLoginReduer.signUpResponse)

    useEffect(()=>{
        if(response.status_code){
            set(response.token)
            history.push('/auth')
        }
    })
    
    const handleSubmit =event=>{
        event.preventDefault()
        setLoading(true)
        setSubmitted(true)

        setLoading(true)
        setSubmitted(true)
        axios.post(`${API_PATH}signup`,inputs)
        .then(response=>response.data)
        .then(res=>{
            set(res.token)
            setRole(JSON.stringify(res.role))
            history.push('/auth')
            window.location.reload()
        })
        .catch(error=>{
            console.log(error)
            setLoading(false)
            setSubmitted(false)
        })

    }
    return(
        <div className={classes.container}>
            <RegistartionHeader/>
            <div className={classes.formContainer}>
            <form className={classes.form} onSubmit={handleSubmit}>
                     <Typography variant={'h4'} className={classes.formInfo}>
                        Sign up
                     </Typography>
                     <TextField
                        variant={'outlined'}
                        className={classes.text_input}
                        label={'First name'}
                        onChange={handleInputChange}
                        name="first_name"
                        type='text'
                        value={inputs.first_name}
                        validators={['required']}
                     />

                    <TextField
                        variant={'outlined'}
                        className={classes.text_input}
                        label={'Last name'}
                        onChange={handleInputChange}
                        name="last_name"
                        type='text'
                        value={inputs.last_name}
                        validators={['required']}
                     />

                     
                    <TextField
                        variant={'outlined'}
                        className={classes.text_input}
                        label={'Email address'}
                        onChange={handleInputChange}
                        name="email"
                        type='text'
                        value={inputs.email}
                        validators={['required']}
                     />

                    <TextField
                        variant={'outlined'}
                        className={classes.text_input}
                        label={'Phone'}
                        onChange={handleInputChange}
                        name="phone"
                        type='text'
                        value={inputs.phone}
                        validators={['required']}
                     />

                    <TextField
                        variant={'outlined'}
                        className={classes.text_input}
                        label={'Password'}
                        onChange={handleInputChange}
                        name="password"
                        type='password'
                        value={inputs.password}
                        validators={['required']}
                     />

                    <LoadingButton
                        className={classes.text_input}
                        color="secondary"
                        variant="outlined"
                        type="submit"
                        disabled={!isEnabled ||submitted}
                        loading={loadingSet}
                        text={'Sign up'}
                        done={finished}
                        >
                        {
                            'Sign up'
                        }
                    </LoadingButton>
                </form>             
            </div>
        </div>
    )
}

export default UserRegistration