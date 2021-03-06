import React from 'react';
import Header from '../commons/Header';
import Banner from './Banner';
import Footer from './footer/Footer';
import MainContainer from './MainContainer';
import HomeStyle from './styles/HomeStyle'

function HomePage() {
    const classes = HomeStyle()
    return (
        <div className={classes.mainContainer}>
             <div className={classes.container}>
             <Header background={'transparent'}/>
             <Banner/>
             <MainContainer/>
             </div>
             <Footer/>
        </div>
    );
}

export default HomePage;
