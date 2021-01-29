import React,{useState,useEffect} from 'react'
import {index,store} from '../../../../../state/AppAction'
import {FETCH_LOAN_TYPE,STORE_LOAN} from '../../../state/CompanyConstants'
import {useDispatch,useSelector} from 'react-redux'
import FormStyle from '../styles/LoanStyle'
import { Skeleton } from '@material-ui/lab'
import { grey } from '@material-ui/core/colors'
import { FormControl, InputLabel, MenuItem,Select,TextField,TextareaAutosize, Typography } from '@material-ui/core'
import UseForm from '../../../../../commons/forms/UseForm'
import { API_PATH } from '../../../../../Constants'
import LoadingButton from '../../../../../commons/LoadingButton'

function CreateLoan(props){
     const classes = FormStyle()
     const [type,setType] = React.useState('');
     const {inputs,handleInputChange} = UseForm({company_id:'',loan_type_id:'',month:'',interest:'',description:''})

     const [submitted,setSubmitted] =useState(false)
    const [loading,setLoading] =useState(false)
    const [finished,setFinished] = useState(false)
    const loadingSet = !finished && loading;
    if(props.type==='edit'){
        inputs.company_id=props.data.company_id
        inputs.loan_type_id=props.data.loan_type_id
        inputs.month = props.data.number_of_month
        inputs.interest=props.data.interest_rate
        inputs.description = props.data.description
    }
    const isEnabled = inputs.month> 0&&inputs.interest>0&&inputs.loan_type_id>0
    &&inputs.description.length>0

     //state management handling
     const dispatch = useDispatch()
     const dataLoading = useSelector(state=>state.authReducer.companyReducer.loanReducer.loanTypeLoading)
     const loanType = useSelector(state=>state.authReducer.companyReducer.loanReducer.loanType)
     const response = useSelector(state=>state.authReducer.companyReducer.loanReducer.response)

     //loan creation completed
     const [done,setDone] = useState(false)
    useEffect(()=>{
        dispatch(index(`${API_PATH}loan_type`,FETCH_LOAN_TYPE))
        inputs.company_id = props.company[0].id
    },[])

    useEffect(()=>{
        if(response.status){
            setDone(true)
            setTimeout(()=>{
                window.location.reload()
            },1500)
        }
    })

    const handleChange = (event) => {
        setType(event.target.value);
        inputs.loan_type_id=event.target.value        
    };

    const handleSubmit =event=>{
        event.preventDefault()
        console.log(inputs)
        dispatch(store(`${API_PATH}loans`,inputs,STORE_LOAN))
        setSubmitted(true)
        setLoading(true)

    }
    return(
        <div>
            {
                done
                ?
                    (
                        <Typography variant={'h5'} style={{color:green[500]}}>
                            Congratulations your loan is created successfully
                        </Typography>
                    )
                :
                    (
                        <form className={classes.form} onSubmit={handleSubmit}>
                            {
                                dataLoading
                                ?
                                    (
                                        <Skeleton
                                        variant={'rect'}
                                        width={'90%'}
                                        height={30}
                                        style={{backgroundColor:grey[500]}}
                                        />

                                    )
                                :
                                    (
                                        <FormControl variant={'outlined'} className={classes.text_input}>
                                            <InputLabel id="demo-simple-select-label">
                                                Select loan type
                                            </InputLabel>
                                            <Select
                                            label={'Select company name'}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={type}
                                            onChange={handleChange}
                                            >
                                            {
                                                loanType.map(loan=>(
                                                    <MenuItem key={loan.id} value={loan.id}>
                                                        {loan.name}
                                                    </MenuItem>
                                                ))
                                            }
                                            </Select>
                                        </FormControl>
                                                )
                                        }

                                                <TextField
                                                variant={'outlined'}
                                                className={classes.text_input}
                                                label={'Loan month'}
                                                onChange={handleInputChange}
                                                name="month"
                                                type='number'
                                                value={inputs.month}
                                                validators={['required']}
                                                />

                                            <TextField
                                                variant={'outlined'}
                                                className={classes.text_input}
                                                label={'Loan interest'}
                                                onChange={handleInputChange}
                                                name="interest"
                                                type='number'
                                                value={inputs.interest}
                                                validators={['required']}
                                                />

                                                <TextareaAutosize 
                                                variant={'outlined'}
                                                aria-label="minimum height" 
                                                className={classes.text_input}
                                                rowsMin={10}
                                                name={'description'}
                                                onChange={handleInputChange}
                                                value={inputs.description}
                                                placeholder="Add stock description" />

                                                <LoadingButton
                                                        className={classes.text_input}
                                                        color="secondary"
                                                        variant="outlined"
                                                        type="submit"
                                                        disabled={!isEnabled ||submitted}
                                                        loading={loadingSet}
                                                        text={'Create loan'}
                                                        done={finished}
                                                        >
                                                        {
                                                            'Create loan'
                                                        }
                                                </LoadingButton>
                                        </form>
                                    )
                            }
        </div>
    )
}

export default CreateLoan