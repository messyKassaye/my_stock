import React from 'react'
import HomeStyle from './styles/HomeStyle'
function Banner(){
    const classes = HomeStyle()
    return(
        <div className={classes.banner}>
            Banners
        </div>
    )
}

export default Banner