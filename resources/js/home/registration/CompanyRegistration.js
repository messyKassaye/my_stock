import { FormControl, InputLabel, TextField, Typography ,Select,MenuItem,
TextareaAutosize,
Button} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab'
import React ,{useEffect,useState} from 'react'
import UseForm from '../../commons/forms/UseForm';
import RegistartionHeader from './RegistrationHeader'
import RegistrationStyle from './style/RegistrationStyle'
import {index} from '../../state/AppAction'
import {useSelector,useDispatch} from 'react-redux'
import { FETCH_COMPANY_CATEGORY, STORE_COMPANY } from '../state/HomeConstants';
import { grey } from '@material-ui/core/colors';
import LoadingButton from '../../commons/LoadingButton';
import {store} from '../../state/AppAction'
import Contact from './components/Contact';

function CompanyRegistration(){
 const classes = RegistrationStyle()
 const [submitted,setSubmitted] =useState(false)
 const [loading,setLoading] =useState(false)
 const [finished,setFinished] = useState(false)
 const fileRef = React.createRef()
 const {inputs, handleInputChange} = UseForm({name:'',established_year:"",category_id:'',file:'',date:'',month:'',year:'',about:""}); 
 const dispatch = useDispatch();
 const categories = useSelector(state=>state.homeReducer.companyCategoryReducer.categories);
 const dataLoading = useSelector(state=>state.homeReducer.companyCategoryReducer.loading)
 const [category, setCategory] = React.useState('');
 const loadingSet = !finished && loading;
 const isEnabled = inputs.name.length > 0
 const response = useSelector(state=>state.homeReducer.registrationReducer.response)

 useEffect(()=>{
    dispatch(index(`/api/company_category`,FETCH_COMPANY_CATEGORY))
 },[])

 
 const handleChange = (event) => {
    setCategory(event.target.value);
    inputs.category_id=event.target.value
  };

  const handleFileChange =event=>{
    const file = event.target.files[0]
    inputs.file=file
  }

  const openFile =()=>{
     fileRef.current.click()
  }

  const handleSubmit =event=>{
      event.preventDefault()
      inputs.established_year = `${inputs.date}/${inputs.month}/${inputs.year}`
      dispatch(store('/api/companies',inputs,STORE_COMPANY))
      setLoading(true)
      setSubmitted(true)
      console.log(inputs)
  }

    return(
        <div className={classes.container}>
            <RegistartionHeader/>
            {
                response.status
                ?
                    (
                        <Contact company={response.company}/>
                    )
                :
                    (
                        <div className={classes.formContainer}>
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <Typography variant={'h4'} className={classes.formInfo}>
                                Company registration
                                </Typography>
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
                                                        <MenuItem value={category.id}>{category.name}</MenuItem>
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

export default CompanyRegistration