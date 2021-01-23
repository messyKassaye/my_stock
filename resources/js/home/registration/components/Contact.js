import { TextField, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import React,{useState} from 'react'
import UseForm from '../../../commons/forms/UseForm';
import LoadingButton from '../../../commons/LoadingButton';
import RegistrationStyle from '../style/RegistrationStyle'
function Contact(props){
    const classes = RegistrationStyle()
    const {inputs, handleInputChange} = UseForm({email:'',phone:""}); 

    const [submitted,setSubmitted] =useState(false)
    const [loading,setLoading] =useState(false)
    const [finished,setFinished] = useState(false)
    const loadingSet = !finished && loading;
    const isEnabled = inputs.email.length > 0

    return(
        <div className={classes.formContainer}>
            <form className={classes.form}>
                <Typography style={{color:green[500],marginBottom:15}}>
                 {`Company is registered successfully. Now tell us contact address for ${props.company.name}`}
                </Typography>

                <TextField
                    variant={'outlined'}
                    className={classes.text_input}
                    label={'Company email address'}
                    onChange={handleInputChange}
                    name="email"
                    type='email'
                    value={inputs.email}
                    validators={['required']}
                />

                <TextField
                    variant={'outlined'}
                    className={classes.text_input}
                    label={'Company phone number'}
                    onChange={handleInputChange}
                    name="phone"
                    type='text'
                    value={inputs.phone}
                    validators={['required']}
                />

                <LoadingButton
                    className={classes.text_input}
                    color="secondary"
                    variant="outlined"
                    type="submit"
                    disabled={!isEnabled ||submitted}
                    loading={loadingSet}
                    text={'Register contact'}
                    done={finished}
                    >
                    {
                        'Register contact'
                    }
                </LoadingButton>

            </form>
        </div>
    )
}

export default Contact