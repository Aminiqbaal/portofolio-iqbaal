import React, { Component } from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import Profile from '../components/profile';
import Portofolio from '../components/portofolio';
import Footer from '../components/footer';

const Home=()=> {
    return  <div>
        <Header/>
        <Banner/>
        <Profile/>
        <Portofolio/>
        <Footer/>
    </div>
}

export default Home
