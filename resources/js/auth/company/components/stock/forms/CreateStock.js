import { FormControl, InputLabel, MenuItem, Select, Typography,
TextField ,TextareaAutosize} from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import UseForm from '../../../../../commons/forms/UseForm'
import LoadingButton from '../../../../../commons/LoadingButton'
import stockStyle from '../styles/stockStyle'
import {store,update} from '../../../../../state/AppAction'
import {STORE_STOCK, UPDATE_STOCK} from '../../../state/CompanyConstants'
import { API_PATH } from '../../../../../Constants'
function CreateStock(props){
   const classes = stockStyle()

   //form validator variable
   const [formData,setFormData] = useState({company_id:'',price:'',amount:'',description:''})
   const [submitted,setSubmitted] =useState(false)
   const [loading,setLoading] =useState(false)
   const [finished,setFinished] = useState(false)
   const loadingSet = !finished && loading;
  
   if(props.type==='edit'){
    formData.company_id = props.data.company_id
    formData.price = props.data.stock_price
    formData.amount = props.data.minimum_amount
    formData.description  = props.data.description
  }

  const isEnabled = formData.company_id>0&&formData.price>0&&formData.amount>0&&
  formData.description.length>0

   //check company existence
   const [singleCompany,setSingleCompany] = useState(true)


   //state management variable
   const dispatch = useDispatch();
   const response = useSelector(state=>state.authReducer.companyReducer.stockReducer.response)

  useEffect(()=>{
      if(response.status){
        setLoading(true)
        setSubmitted(true)
        setTimeout(()=>{
            window.location.reload()
        },1500)
      }
  })

   useEffect(()=>{
       
       
       if(props.company.length===1){
           formData.company_id = props.company[0].id
            setSingleCompany(true)
       }else{
           setSingleCompany(false)
       }

   })



   const handleChange = (event) => {
        formData.company_id=event.target.value    
    }

    const handleInputChange =e=>{
        const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
    }

   const handleSubmit =(event)=>{
       event.preventDefault()
       console.log(formData)
       setLoading(true)
       setSubmitted(true)

       if(props.type==='edit'){
            dispatch(update(`${API_PATH}stocks`,props.data.id,formData,UPDATE_STOCK))
       }else{
            dispatch(store(`${API_PATH}stocks`,formData,STORE_STOCK))
       }
       
   }
   return <div>
       {
           response.status
           ?
                (
                    <Typography variant={'h5'} className={classes.formLabel}>
                        Congratulations, your stock is created successfully
                    </Typography>
                )
           :
                (
                    <form className={classes.form} onSubmit={handleSubmit}>
        
                            {
                                singleCompany
                                ?
                                    (
                                        <Typography className={classes.formLabel}>
                                            {`You have only one company name as ${props.company[0].name}.So you are going to create stock for this company`}
                                        </Typography>
                                    )
                                :
                                    (
                                        <div>
                                            <FormControl variant={'outlined'} className={classes.text_input}>
                                                    <InputLabel id="demo-simple-select-label">
                                                        Select company name
                                                    </InputLabel>
                                                    <Select
                                                        label={'Select company name'}
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={region}
                                                        onChange={handleChange}
                                                        >
                                                        {
                                                            props.company.map(company=>(
                                                                <MenuItem key={company.id} value={company.id}>
                                                                    {company.name}
                                                                </MenuItem>
                                                            ))
                                                        }
                                                    </Select>
                                            </FormControl>
                                        </div>
                                    )
                            }

                                <TextField
                                    variant={'outlined'}
                                    className={classes.text_input}
                                    label={'Stock price'}
                                    onChange={handleInputChange}
                                    name="price"
                                    type='number'
                                    value={formData.price}
                                    validators={['required']}
                                />

                                <TextField
                                    variant={'outlined'}
                                    className={classes.text_input}
                                    label={'Stock minimum price'}
                                    onChange={handleInputChange}
                                    name="amount"
                                    type='number'
                                    value={formData.amount}
                                    validators={['required']}
                                />

                                <TextareaAutosize 
                                    variant={'outlined'}
                                    aria-label="minimum height" 
                                    className={classes.text_input}
                                    rowsMin={10}
                                    name={'description'}
                                    onChange={handleInputChange}
                                    value={formData.description}
                                    placeholder="Add stock description" />;

                                <LoadingButton
                                className={classes.button}
                                color="secondary"
                                variant="outlined"
                                type="submit"
                                disabled={!isEnabled ||submitted}
                                loading={loadingSet}
                                text={'Create stock'}
                                done={finished}
                                >
                                {
                                    'Register company'
                                }
                                </LoadingButton>                
                        </form>
                )
       }
   </div>
}

export default CreateStock