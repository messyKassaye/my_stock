import { FormControl, InputLabel, TextField, Typography ,Select,MenuItem,
TextareaAutosize,
Button} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab'
import React ,{useEffect,useState} from 'react'
import UseForm from '../../../../../commons/forms/UseForm';
import RegistrationStyle from '../../../../../home/registration/style/RegistrationStyle'
import {index} from '../../../../../state/AppAction'
import {useSelector,useDispatch} from 'react-redux'
import { FETCH_COMPANY_CATEGORY, STORE_COMPANY } from '../../../../../home/state/HomeConstants';
import { grey,green} from '@material-ui/core/colors';
import LoadingButton from '../../../../../commons/LoadingButton';
import {multipartStore} from '../../../../../state/AppAction'
import CompanyStyle from '../styles/CompanyStyle'
import axios from 'axios'
import {API_PATH} from '../../../../../Constants'
import CompanyContact from './CompanyContact';
function RegisterNewCompany(props){
 const classes = CompanyStyle()
 const [submitted,setSubmitted] =useState(false)
 const [loading,setLoading] =useState(false)
 const [finished,setFinished] = useState(false)
 const fileRef = React.createRef()
 const [imageUrl,setImageUrl] = useState('')
 const {inputs, handleInputChange} = UseForm({name:'',established_year:"",category_id:'',file:'',date:'',month:'',year:'',about:""}); 
 const dispatch = useDispatch();
 const categories = useSelector(state=>state.homeReducer.companyCategoryReducer.categories);
 const dataLoading = useSelector(state=>state.homeReducer.companyCategoryReducer.loading)
 const [category, setCategory] = React.useState('');
 const loadingSet = !finished && loading;
 const isEnabled = inputs.name.length > 0
 const response = useSelector(state=>state.homeReducer.registrationReducer.response)

 const userLoading = useSelector(state=>state.authReducer.userData.loading)
 const userData = useSelector(state=>state.authReducer.userData.user)
 const [upload,setUpload] = useState(0)
 const [done,setDone] = useState(false)
 const [company,setCompany] = useState('')

 useEffect(()=>{
    dispatch(index(`/api/company_category`,FETCH_COMPANY_CATEGORY))
 },[])

 
 const handleChange = (event) => {
    setCategory(event.target.value);
    inputs.category_id=event.target.value
  };

  const handleFileChange =event=>{
    const file = event.target.files[0]
    inputs.file = file
    
    let url = URL.createObjectURL(file);
    setImageUrl(url)
    
  }

  const openFile =()=>{
     fileRef.current.click()
  }

  const handleSubmit =event=>{
        event.preventDefault()
        
        setLoading(true)
        setSubmitted(true)

        let established_year = `${inputs.date}/${inputs.month}/${inputs.year}`
        const formData = new FormData();
        formData.append('file',inputs.file)
        formData.append('name',inputs.name)
        formData.append('category_id',inputs.category_id)
        formData.append('established_year',established_year)
        formData.append('about',inputs.about)

      axios.post(`${API_PATH}companies`,formData,{
        onUploadProgress:progressEvent => {
            setUpload(Math.round((progressEvent.loaded * 100) / progressEvent.total))
        }
    })
      .then(response=>response.data)
      .then(res=>{
          console.log(upload)
          if(res.status){
            setLoading(false)
            setSubmitted(false)
            setDone(true)
            setCompany(res.company)
          }
      })
      console.log(inputs)
  }

    return(
            <div>
                {
                    done
                    ?
                        (
                            <CompanyContact company={company}/>
                        )
                    :
                        (
                            <div className={classes.formContainer}>
                                <form className={classes.form} onSubmit={handleSubmit}>
                                    {
                                        props.creation==='first_creation'
                                        ?
                                            (
                                                <div className={classes.welcome}>
                                                    <Typography style={{color:green[500],marginBottom:25}}>
                                                        {`Hi, ${userData.data.first_name} welcome to MyStock. We love you be here since you are registered
                                                         as company representative we need your company information. Can you register your company please`}
                                                    </Typography>
                                                </div>
                                            )
                                        :
                                            (
                                                <Typography variant={'h4'} className={classes.formInfo}>
                                                 Company registration
                                                </Typography>
                                            )
                                    }
                                <TextField
                                variant={'outlined'}
                                className={classes.text_input}
                                label={'Company name'}
                                onChange={handleInputChange}
                                name="name"
                                type='text'
                                value={inputs.name}
                                validators={['required']}
                                />
                                {
                                    dataLoading
                                    ?
                                        (
                                            <Skeleton
                                            variant={'rect'}
                                            width={'100%'}
                                            height={50}
                                            style={{backgroundColor:grey[500]}}
                                            />
                                        )
                                    :
                                        (
                                            <FormControl variant={'outlined'} className={classes.text_input}>
                                            <InputLabel id="demo-simple-select-label">Select your company category</InputLabel>
                                            <Select
                                            label={'Select your company category'}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={category}
                                            onChange={handleChange}
                                            >
                                                {
                                                    categories.map(category=>(
                                                        <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                        )
                                }

                                    <div className={classes.birthDate}>
                                        <Typography color={'textSecondary'} style={{marginBottom:10}}>
                                            Establishement year
                                        </Typography>
                                        <div className={classes.genderInnerLayout}>
                                            <TextField
                                                onChange={handleInputChange}
                                                style={{marginRight:15}}
                                                name={'date'}
                                                value={inputs.date}
                                                label={'DD'}
                                                type={'number'}
                                                variant="outlined"
                                            />
                                            <TextField
                                                onChange={handleInputChange}
                                                style={{marginRight:15}}
                                                name={'month'}
                                                type={'number'}
                                                value={inputs.month}
                                                label={'MM'}
                                                variant="outlined"
                                            />
                                            <TextField
                                                onChange={handleInputChange}
                                                style={{marginRight:15}}
                                                name={"year"}
                                                type={'number'}
                                                value={inputs.year}
                                                label={'YY'}
                                                variant="outlined"
                                            />
                                        
                                        </div>
                                    </div>

                                    <TextareaAutosize 
                                    variant={'outlined'}
                                    aria-label="minimum height" 
                                    className={classes.text_area}
                                    rowsMin={10}
                                    name={'about'}
                                    onChange={handleInputChange}
                                    value={inputs.about}
                                    placeholder="Add about to your company" />;

                                    {
                                        imageUrl===''
                                        ?
                                            (
                                                <div className={classes.upload}>
                                                    <Typography color={'textSecondary'}>
                                                        Upload company logo
                                                    </Typography>
                                                    <input
                                                    type={'file'}
                                                    style={{display:'none'}}
                                                    ref={fileRef}
                                                    onChange={handleFileChange}
                                                    />
                                                    <Button
                                                    onClick={openFile}
                                                    variant={'outlined'}
                                                    color={'secondary'}
                                                    style={{textTransform:'none',marginLeft:25}}
                                                    >
                                                        Upload
                                                    </Button>
                                                </div>
                                            )
                                        :
                                            (
                                                <div className={classes.company_logo}>
                                                    <img
                                                     src={imageUrl}
                                                     style={{width:'auto',height:'auto'}}
                                                    />
                                                </div>
                                            )
                                    }

                                <LoadingButton
                                className={classes.text_input}
                                color="secondary"
                                variant="outlined"
                                type="submit"
                                disabled={!isEnabled ||submitted}
                                loading={loadingSet}
                                text={'Register company'}
                                done={finished}
                                >
                                {
                                    'Register company'
                                }
                                </LoadingButton>

                            </form>                    
                         </div>
                        )
                }
            </div>
    )
}

export default RegisterNewCompany