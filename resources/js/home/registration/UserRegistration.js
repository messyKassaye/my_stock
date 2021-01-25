import React,{useState} from 'react'
import RegistrationStyle from './style/RegistrationStyle'
import RegistartionHeader from './RegistrationHeader'
import { TextField, Typography } from '@material-ui/core'
import UseForm from '../../commons/forms/UseForm'
import LoadingButton from '../../commons/LoadingButton'
import {useHistory} from 'react-router-dom'
function UserRegistration(){
    const classes = RegistrationStyle()
    const [submitted,setSubmitted] =useState(false)
    const [loading,setLoading] =useState(false)
    const [finished,setFinished] = useState(false)
    const {inputs, handleInputChange} = UseForm({first_name:'',last_name:'',email:'',phone:'',password:''}); 
    const loadingSet = !finished && loading;
    const isEnabled = inputs.first_name.length > 0&&inputs.last_name.length>0&&inputs.email.length>0&&
                      inputs.phone.length>0
    const [done,setDone] = useState()
    const history = useHistory()

    const handleSubmit =event=>{
        event.preventDefault()
        setLoading(true)
        setSubmitted(true)

        setTimeout(()=>{
            history.push('/dashboard')
        },2000)
    }
    return(
        <div className={classes.container}>
            <RegistartionHeader/>
            <div className={classes.formContainer}>
                 {
                     done
                     ?
                        (
                            <Typography style={{color:green[500]}}>
                                User registration completed
                            </Typography>
                        )
                     :
                        (
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
                        )
                 }              
            </div>
        </div>
    )
}

export default UserRegistration