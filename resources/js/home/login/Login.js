import { Typography } from '@material-ui/core'
import React from 'react'
import RegistartionHeader from '../registration/RegistrationHeader'
import RegistrationStyle from '../registration/style/RegistrationStyle'
function Login(){
    const classes = RegistrationStyle()

    const handleSubmit =(event)=>{
        event.preventDefault()
    }
    return(
       <div className={classes.container}>
           <RegistartionHeader/>
           <div className={classes.formContainer}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant={'h4'} className={classes.formInfo}>
                        Sign in
                    </Typography>
                </form>           
            </div>
       </div>
    )
}

export default Login