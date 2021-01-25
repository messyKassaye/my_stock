import { TextField, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import React,{useState} from 'react'
import UseForm from '../commons/forms/UseForm';
import RegistrationStyle from '../home/registration/style/RegistrationStyle'
import {useHistory} from 'react-router-dom'
import LoadingButton from '../commons/LoadingButton';
import Stocks from './stocks/Stocks';

function CompanyFinance(){
    const classes = RegistrationStyle()
    const {inputs, handleInputChange} = UseForm({year_1:'',year_2:"",year_3:"",year_4:'',year_5:''}); 

    const [submitted,setSubmitted] =useState(false)
    const [loading,setLoading] =useState(false)
    const [finished,setFinished] = useState(false)
    const loadingSet = !finished && loading;
    const isEnabled = inputs.year_1.length > 0
    const history =useHistory()
    const [done,setDone] = useState(false)

    const handleSubmit =(event)=>{
        event.preventDefault()

        setLoading(true)
        setSubmitted(true)

        setTimeout(()=>{
            setDone(true)
        },2000)

    }
    return(
        <div>
            {
                done
                ?
                    (
                        <Stocks/>
                    )
                :
                    (
                        <div className={classes.formContainer}>
             <form className={classes.form} onSubmit={handleSubmit}>
                        <Typography style={{color:green[500],marginBottom:15}}>
                          Now tell us your company 5 years finance status
                        </Typography>
                        <Typography>
                            please right like this E.g year-finance
                        </Typography>
                        <TextField
                            variant={'outlined'}
                            className={classes.text_input}
                            label={'Year 1 finace'}
                            onChange={handleInputChange}
                            name="year_1"
                            type='text'
                            value={inputs.year_1}
                            validators={['required']}
                        />

                        <TextField
                            variant={'outlined'}
                            className={classes.text_input}
                            label={'Year 2 finace'}
                            onChange={handleInputChange}
                            name="year_2"
                            type='text'
                            value={inputs.year_2}
                            validators={['required']}
                        />

                        <TextField
                            variant={'outlined'}
                            className={classes.text_input}
                            label={'Year 3 finace'}
                            onChange={handleInputChange}
                            name="year_3"
                            type='text'
                            value={inputs.year_3}
                            validators={['required']}
                        />

                        <TextField
                            variant={'outlined'}
                            className={classes.text_input}
                            label={'Year 4 finace'}
                            onChange={handleInputChange}
                            name="year_4"
                            type='text'
                            value={inputs.year_4}
                            validators={['required']}
                        />

                        <TextField
                            variant={'outlined'}
                            className={classes.text_input}
                            label={'Year 5 finace'}
                            onChange={handleInputChange}
                            name="year_5"
                            type='text'
                            value={inputs.year_5}
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
        </div>
    )
}

export default CompanyFinance