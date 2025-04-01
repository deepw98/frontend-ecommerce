import React from 'react';
import DisplayBanner from './DisplayBanner';
import Header from './Header';
import ProductPage from '../ProductPage';

export default function LandingPage(){
    return(
        <>
            <Header/>
            <DisplayBanner/>
            <ProductPage/>
            <div style={{background:'black'}}>
                <p style={{color:'white'}}>Copyright &copy; 2025</p>
                <p>All Rights Reserved</p>
            </div>
            {/* <About Us/>
            <Contact Us/>
            <Menu Bar/> */}
        </>

    )
}