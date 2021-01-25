import { TextField, Typography,FormControl, InputLabel ,Select,MenuItem,} from '@material-ui/core'
import {SELECT_REGIONS,STORE_CONTACT} from '../../state/HomeConstants'
import { green, grey } from '@material-ui/core/colors';
import UseForm from '../../../commons/forms/UseForm';
import LoadingButton from '../../../commons/LoadingButton';
import RegistrationStyle from '../style/RegistrationStyle'
import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux' 
import {index,store} from '../../../state/AppAction'
import { Skeleton } from '@material-ui/lab';
import {useHistory} from 'react-router-dom'
import RepresentativeRegistration from './RepresentativeRegistration';


function Contact(props){
    const classes = RegistrationStyle()
    const {inputs, handleInputChange} = UseForm({email:'',phone:"",region_id:"",city_id:'',owner_id:''}); 

    const [submitted,setSubmitted] =useState(false)
    const [loading,setLoading] =useState(false)
    const [finished,setFinished] = useState(false)
    const loadingSet = !finished && loading;
    const isEnabled = inputs.email.length > 0

    const dispatch =useDispatch()
    const regions = useSelector(state=>state.homeReducer.registrationReducer.regions)
    const dataLoading = useSelector(state=>state.homeReducer.registrationReducer.regionsLoading)
    const [childData,setChildData] = React.useState('')

    const [region,setRegion] = React.useState('');
    const [child,setChild] = React.useState('');
    const [done,setDone] = useState(false)

    const history =useHistory()


    useEffect(()=>{
        dispatch(index('/api/regions',SELECT_REGIONS))
    },[])

    const handleChange = (event) => {
        setRegion(event.target.value);
        inputs.region_id=event.target.value.id

        setChildData(event.target.value.child)
        
    };
    const handleChildChange = (event) => {
        setChild(event.target.value);
        inputs.city_id=event.target.value
    };

    const handleSubmit =event=>{
        event.preventDefault()
        inputs.owner_id = props.company.id
       // dispatch(store('/api/contact',STORE_CONTACT))
        
        setLoading(true)
        setSubmitted(true)
        setDone(true)

    }

    return(
        <div>
            {
                done
                ?
                    (
                       <RepresentativeRegistration label={'Company representative registration'} role={'company'} company={props.company}/>
                    )
                :
                    (
                        <div className={classes.formContainer}>
                        <form className={classes.form} onSubmit={handleSubmit}>
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
        
                        {
                            dataLoading
                            ?
                                (
                                    <React.Fragment>
                                        <Skeleton
                                         variant={'rect'}
                                         width={'100%'}
                                         height={50}
                                         style={{backgroundColor:grey[500]}}
                                        />
                                        <Skeleton
                                         variant={'rect'}
                                         width={'100%'}
                                         height={50}
                                         style={{backgroundColor:grey[500]}}
                                        />
                                    </React.Fragment>
                                )
                            :
                                (
                                    <div style={{display:"flex",flexDirection:"column",width:'100%'}}>
                                        <FormControl variant={'outlined'} className={classes.text_input}>
                                                    <InputLabel id="demo-simple-select-label">
                                                        Select the region where the company is located
                                                    </InputLabel>
                                                    <Select
                                                    label={'Select your company category'}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={region}
                                                    onChange={handleChange}
                                                    >
                                                        {
                                                            regions.data.map(region=>(
                                                                <MenuItem key={region.id} value={region}>
                                                                    {region.name}
                                                                </MenuItem>
                                                            ))
                                                        }
                                                    </Select>
                                        </FormControl>
        
                                        {
                                            childData.length>0
                                            ?
                                                (
                                                    <FormControl variant={'outlined'} className={classes.text_input}>
                                                        <InputLabel id="demo-simple-select-label">
                                                            Select the city where the company is located
                                                        </InputLabel>
                                                        <Select
                                                        label={'Select your company category'}
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={child}
                                                        onChange={handleChildChange}
                                                        >
                                                            {
                                                                childData.map(child=>(
                                                                    <MenuItem key={child.id} value={child.id}>
                                                                        {child.name}
                                                                    </MenuItem>
                                                                ))
                                                            }
                                                        </Select>
                                                    </FormControl>
                                                )
                                            :
                                                (null)
                                        }
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

export default Contact