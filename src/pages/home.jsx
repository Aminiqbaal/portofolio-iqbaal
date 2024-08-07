import React, { Component } from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import Profile from '../components/profile';
import Portofolio from '../components/portofolio';
import Footer from '../components/footer';
import Experience from '../components/experience';

const Home=()=> {
    return  <div>
        <Header/>
        <Banner/>
        <Profile/>
        <Portofolio/>
        <Experience/>
        <Footer/>
    </div>
}

export default Home
