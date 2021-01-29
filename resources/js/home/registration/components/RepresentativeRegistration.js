import React,{useState,useEffect} from 'react'
import RegistrationStyle from '../style/RegistrationStyle'
import { TextField, Typography } from '@material-ui/core'
import UseForm from '../../../commons/forms/UseForm'
import LoadingButton from '../../../commons/LoadingButton'
import {useDispatch} from 'react-redux' 
import {useHistory} from 'react-router-dom'
import { API_PATH } from '../../../Constants'
import { set,setRole } from '../../../TokenService'
import RegistrationHeader from '../RegistrationHeader'
function RepresentativeRegistration(){
    const classes =RegistrationStyle()
    const [submitted,setSubmitted] =useState(false)
    const [loading,setLoading] =useState(false)
    const [finished,setFinished] = useState(false)
    
    const {inputs, handleInputChange} = UseForm({role_id:'',first_name:'',last_name:'',email:'',phone:'',password:''}); 
    const loadingSet = !finished && loading;
    const isEnabled = inputs.first_name.length > 0&&inputs.last_name.length>0&&inputs.email.length>0&&
                      inputs.phone.length>0
    const history = useHistory()
    const dispatch = useDispatch()

    const  handleSubmit =(event)=>{
        event.preventDefault()
        inputs.role_id=3
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
    return (
        <div className={classes.container}>
        <RegistrationHeader/>
        <div className={classes.formContainer}>
            <form className={classes.form} onSubmit={handleSubmit}>
                     <Typography variant={'h6'} className={classes.formInfo}>
                        Thank you for choosing us. To register your company first we need the company representative. Please register company representative now
                     </Typography>
                     <TextField
                        variant={'outlined'}
                        className={classes.text_input}
                        label={'Representative first name'}
                        onChange={handleInputChange}
                        name="first_name"
                        type='text'
                        value={inputs.first_name}
                        validators={['required']}
                     />

                    <TextField
                        variant={'outlined'}
                        className={classes.text_input}
                        label={'Representative last name'}
                        onChange={handleInputChange}
                        name="last_name"
                        type='text'
                        value={inputs.last_name}
                        validators={['required']}
                     />

                     
                    <TextField
                        variant={'outlined'}
                        className={classes.text_input}
                        label={'Representative email address'}
                        onChange={handleInputChange}
                        name="email"
                        type='text'
                        value={inputs.email}
                        validators={['required']}
                     />

                    <TextField
                        variant={'outlined'}
                        className={classes.text_input}
                        label={'Representative phone'}
                        onChange={handleInputChange}
                        name="phone"
                        type='text'
                        value={inputs.phone}
                        validators={['required']}
                     />

                    <TextField
                        variant={'outlined'}
                        className={classes.text_input}
                        label={'Representative password'}
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

export default RepresentativeRegistration