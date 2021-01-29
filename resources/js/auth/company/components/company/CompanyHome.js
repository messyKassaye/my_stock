import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import HorizontalLoader from '../../../../loaders/HorizontalLoader'
import {index} from '../../../../state/AppAction'
import CompanyStyle from './styles/CompanyStyle'
import CompanyRegistration from './forms/RegisterNewCompany'
import CompanyDashboard from './CompanyDashboard'
function CompanyHome(){
    const classes = CompanyStyle()
    const loading = useSelector(state=>state.authReducer.userData.loading)
    const user = useSelector(state=>state.authReducer.userData.user)
    return(
        <div>
            {
                loading
                ?
                    (
                        <HorizontalLoader/>
                    )
                :
                    (
                        <div>
                            {
                                user.data.company.length<=0
                                ?
                                    (
                                        <CompanyRegistration creation={'first_creation'}/>
                                    )
                                :
                                    (
                                        <CompanyDashboard/>
                                    )
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default CompanyHome