import { Card, Typography } from '@material-ui/core'
import React from 'react'
import stockStyle from './styles/stockStyle'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  import {lineData} from '../../data/chart'
function StockItem(props){
    const classes = stockStyle()
    const stock = props.stock
    return(
        <div className={classes.stockItemContainer}>
            <div className={classes.miniContainer}>
                <Typography color={'textSecondary'}>
                    Selling price
                </Typography>
                <Typography className={classes.label}>
                    {`${stock.stock_price} ETB`}
                </Typography>
            </div>

            <div className={classes.miniContainer}>
                <Typography color={'textSecondary'}>
                    Selling price
                </Typography>
                <Typography className={classes.label}>
                    {stock.description}
                </Typography>
            </div>

            <div className={classes.miniContainer}>
                <Typography color={'textSecondary'}>
                    Stock data
                </Typography>

                <LineChart
                    width={500}
                    height={300}
                    data={lineData}
                    margin={{
                    top: 20, right: 5, left: 5, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    )
}

export default StockItem