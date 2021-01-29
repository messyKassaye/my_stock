import { Card, CardContent, Container,CardHeader, Grid, Avatar } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import {index} from '../../../../state/AppAction'
import {FETCH_COMPANIES} from '../../state/CompanyConstants'
import {useDispatch,useSelector} from 'react-redux'
import {API_PATH} from '../../../../Constants'
import { Skeleton } from '@material-ui/lab'
import {grey} from '@material-ui/core/colors'
function MyCompanies(props){

    const disapatch = useDispatch()
    const loading = useSelector(state=>state.authReducer.companyReducer.companyReducer.loading)
    const company = useSelector(state=>state.authReducer.companyReducer.companyReducer.company)

    useEffect(()=>{
        disapatch(index(`${API_PATH}companies`,FETCH_COMPANIES))
    })
    return(
        <Container maxWidth={'sm'}>
            <Card elevation={0} style={{backgroundColor:'transparent'}}>
                <CardHeader
                 title={'My companies'}
                />
            </Card>
            <CardContent>
                {
                    loading
                    ?
                        (
                            <Skeleton
                             variant={'rect'}
                             width={'100%'}
                             height={100}
                             style={{backgroundColor:grey[500]}}
                            />
                        )
                    :
                        (
                            <Grid container spacing={2}>
                                {
                                    company.data.map(company=>(
                                        <Grid key={company.id} item md={12} xs={12} sm={12}>
                                            <Card>
                                                <CardHeader
                                                title={company.name}
                                                avatar={
                                                    <Avatar variant={'circular'} src={company.logo_path}/>
                                                }
                                                subheader={company.category.name}
                                                />
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        )

                }
            </CardContent>
        </Container>
    )
}

export default MyCompanies