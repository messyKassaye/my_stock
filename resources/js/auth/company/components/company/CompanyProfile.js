import { Card, CardContent, CardHeader,Container,IconButton, Typography,Divider,Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {index, show} from '../../../../state/AppAction'
import {SHOW_COMPANY} from '../../state/CompanyConstants'
import {API_PATH} from '../../../../Constants'
import { ME } from '../../../state/AuthConnstant'
import ProfileLoader from '../../../../loaders/ProfileLoader'
import { CalendarToday, Category, Edit, Email, Phone, Room } from '@material-ui/icons'
function CompanyProfile(props){
    const dispatch = useDispatch()
    const loading = useSelector(state=>state.authReducer.companyReducer.companyProfileReducer.loading)
    const company = useSelector(state=>state.authReducer.companyReducer.companyProfileReducer.company)
    const user = useSelector(state=>state.authReducer.userData.user)
    useEffect(()=>{
        dispatch(show(`${API_PATH}companies`,user.data.company[0].id,SHOW_COMPANY))
    },[])
    return(
        <div>
            {
                loading
                ?
                    (<ProfileLoader/>)
                :
                    (
                        <Container maxWidth={'md'}>
                            <Card elevation={0} style={{backgroundColor:'transparent',marginTop:-50}}>
                                <CardHeader
                                    title={'Profile'}
                                    action={
                                        <IconButton>
                                            <Edit/>
                                        </IconButton>
                                    }
                                    />
                                    <CardContent style={{display:"flex",flexDirection:'column',paddingTop:0}}>
                                        {/** company name */}
                                        <div style={{marginBottom:50}}>
                                            <Typography color={'textSecondary'}>
                                                Company name
                                            </Typography>
                                            <Typography style={{fontType:'bold',color:'black'}}>
                                                {company.data.name}
                                            </Typography>
                                        </div>

                                        {/**company category, location and year*/}
                                        <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                                       
                                        <div style={{display:'flex',flexDirection:'column'}}>
                                            <Typography color={'textSecondary'}>
                                                Category
                                            </Typography>
                                            <Typography style={{display:"flex",flexDirection:'row',alignItems:'center'}}>
                                                <Category/>
                                                <Typography>
                                                {company.data.category.name}
                                                </Typography>
                                            </Typography>
                                        </div>
                                        <Divider orientation={'vertical'} flexItem/>

                                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                                            <Typography color={'textSecondary'}>
                                                Location
                                            </Typography>
                                            <Typography style={{display:"flex",flexDirection:'row',alignItems:'center'}}>
                                                <Room/>
                                                <Typography>
                                                {`${company.data.location.region[0].name},${company.data.location.city[0].name}`}
                                                </Typography>
                                            </Typography>
                                        </div>
                                        <Divider orientation={'vertical'} flexItem/>

                                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginRight:50}}>
                                            <Typography color={'textSecondary'}>
                                                Established year
                                            </Typography>
                                            <Typography style={{display:"flex",flexDirection:'row',alignItems:'center'}}>
                                                <CalendarToday/>
                                                <Typography>
                                                {company.data.established_year}
                                                </Typography>
                                            </Typography>
                                        </div>
                                    </div>

                                    {/**contact info */}
                                    <div style={{display:'flex',flexDirection:'column',marginTop:50}}>
                                            <Typography color={'textSecondary'}>
                                                Contact info
                                            </Typography>
                                            <div style={{display:'flex',flexDirection:'row',marginTop:20}}>
                                                <Typography style={{display:'flex',flexDirection:'row'}}>
                                                    <Phone/>
                                                    <Typography>
                                                        {company.data.contact.phone}
                                                    </Typography>
                                                </Typography>

                                                <Typography style={{display:'flex',flexDirection:'row',marginLeft:100}}>
                                                    <Email/>
                                                    <Typography>
                                                        {company.data.contact.email}
                                                    </Typography>
                                                </Typography>
                                            </div>
                                        </div>

                                        {/**change profile */}
                                        <div style={{display:"flex",flexDirection:'column',marginTop:50}}>
                                            <Typography color={'textSecondary'}>
                                                Change picture
                                            </Typography>
                                            <Button
                                             variant={'contained'}
                                             color={'default'}
                                             style={{textTransform:'none',width:'35%'}}>
                                                Change picture
                                            </Button>
                                        </div>

                                        {/**about */}
                                        <div style={{display:"flex",flexDirection:'column',marginTop:50}}>
                                            <Typography color={'textSecondary'}>
                                                About
                                            </Typography>
                                            <Typography>
                                                {company.data.about}
                                            </Typography>
                                        </div>
                                    
                                    </CardContent>
                            </Card>
                        </Container>
                    )
            }
        </div>
    )
}

export default CompanyProfile