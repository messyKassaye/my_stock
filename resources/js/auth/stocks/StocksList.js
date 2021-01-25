import React ,{useEffect} from 'react'
import {index} from '../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
import { Button, Card, CardActions, CardHeader, Container, Grid, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
function StocksList(props){
    return <Container maxWidth={'md'}>
        <Typography>
            My Stock
        </Typography>
            <Grid container spacing={2}>

            {
                props.stock.map(stock=>(
                    <Grid item md={4} xs={12} sm={12}>
                        <Card style={{backgroundColor:green[500],color:'white'}}>
                            <CardHeader
                             title={stock.stock_price}
                            />
                            <CardActions style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                            <Button color={'inherit'} variant={'outlined'}>
                                Remove
                            </Button>
                        </CardActions>
                        </Card>
                        
                    </Grid>
                ))
            }
    </Grid>
    </Container>
}

export default StocksList