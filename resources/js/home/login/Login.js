import { Typography ,TextField} from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import UseForm from '../../commons/forms/UseForm'
import RegistartionHeader from '../registration/RegistrationHeader'
import RegistrationStyle from '../registration/style/RegistrationStyle'
import LoadingButton from '../../commons/LoadingButton'
import {store} from '../../state/AppAction'

import {useDispatch,useSelector} from 'react-redux'
import { red } from '@material-ui/core/colors'
import {useHistory} from 'react-router-dom'
import { set,setRole } from '../../TokenService'
import { LOGIN } from '../state/HomeConstants'
import { API_PATH } from '../../Constants'
import axios from 'axios'

function Login(){
    const classes = RegistrationStyle()
    const {inputs, handleInputChange} = UseForm({email:'',password:""}); 

    const [message,setMessage] = useState('')
    const [submitted,setSubmitted] =useState(false)
    const [loading,setLoading] =useState(false)
    const [finished,setFinished] = useState(false)
    const loadingSet = !finished && loading;
    const isEnabled = inputs.email.length > 0&&inputs.password.length>0

    const dispatch = useDispatch();
    const response = useSelector(state=>state.homeReducer.signUpLoginReduer.loginResponse);

    const history = useHistory()

    useEffect(()=>{
        console.log(response)
        if(response.status_code===200){
            set(response.token)
            history.push('/auth')

        }else if(response.status_code===403){
            setMessage(response.message)
            setLoading(false)
            setSubmitted(false)
        }
    },[response])

    const handleSubmit =(event)=>{
        event.preventDefault()
        setLoading(true)
        setSubmitted(true)
        axios.post(`${API_PATH}login`,inputs)
        .then(response=>response.data)
        .then(res=>{
            set(res.token)
            setRole(JSON.stringify(res.role))
            history.push('/auth')
            window.location.reload()
            
        })
        .catch(error=>{
            console.log(error)
            setMessage('Maybe incorrect email or password is used. Pleae try again')
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
                        Sign in
                    </Typography>
                    <Typography style={{color:red[500],margin:10}}>
                        {message}
                    </Typography>
                        <TextField
                             variant={'outlined'}
                             className={classes.text_input}
                             label={'Email address'}
                             onChange={handleInputChange}
                             name="email"
                             type='email'
                             value={inputs.email}
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
                                text={'Sign in'}
                                done={finished}
                                >
                                {
                                    'Sign in'
                                }
                                </LoadingButton>
                </form>           
            </div>
       </div>
    )
}

export default Login