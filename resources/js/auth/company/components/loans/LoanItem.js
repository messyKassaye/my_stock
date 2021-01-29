import { Divider,Typography} from '@material-ui/core'
import React from 'react'
import LoanStyle from './styles/LoanStyle'
function LoanItem(props){
    const classes = LoanStyle()
    const loan = props.loan
    return(
        <div className={classes.loanItemContainer}>

            <div className={classes.miniContainer}>
                <Typography color={'textSecondary'}>
                    Loan type
                </Typography>
                <Typography className={classes.label}>
                    {loan.loan_type.name}
                </Typography>
            </div>

            <div className={classes.loanInterest}>
                <div className={classes.miniContainer}>
                    <Typography color={'textSecondary'}>
                        Number of months
                    </Typography>
                    <Typography className={classes.label}>
                        {loan.number_of_month}
                    </Typography>
                </div>

                <Divider orientation={'vertical'} flexItem className={classes.divider}/>

                <div className={classes.miniContainer}>
                    <Typography color={'textSecondary'}>
                        Interest rate
                    </Typography>
                    <Typography className={classes.label}>
                        {`${loan.interest_rate}%`}
                    </Typography>
                </div>

            </div>

            <div className={classes.miniContainer}>
                    <Typography color={'textSecondary'}>
                        Loan description
                    </Typography>
                    <Typography className={classes.label}>
                        {loan.description}
                    </Typography>
                </div>

        </div>
    )
}

export default LoanItem