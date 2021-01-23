import React from 'react';
import Header from '../commons/Header';
import Banner from './Banner';
import HomeStyle from './styles/HomeStyle'

function HomePage() {
    const classes = HomeStyle()
    return (
        <div className={classes.container}>
             <Header background={'transparent'}/>
             <Banner/>
        </div>
    );
}

export default HomePage;
