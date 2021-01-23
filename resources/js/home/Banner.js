import React from 'react'
import HomeStyle from './styles/HomeStyle'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide from './data/slide'
import { Typography } from '@material-ui/core';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 1000,
}
function Banner(){
    const classes = HomeStyle()
    return(
        <div className={classes.banner}>
            <div className={classes.slideContainer}>
                <Fade {...fadeProperties}>
                    {
                        slide.map(slide=>(
                            <div className={classes.eachSlide}>
                            <div style={{height:400,'backgroundImage': `url(${slide.image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                <Typography variant={'h4'} className={classes.slideLabel}>
                                    {slide.label}
                                </Typography>
                            </div>
                        </div>
                        ))
                    }
                </Fade>
             </div>
        </div>
    )
}

export default Banner