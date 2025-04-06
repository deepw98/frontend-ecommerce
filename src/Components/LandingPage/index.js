import React from 'react';
import DisplayBanner from './DisplayBanner';
import Header from './Header';
import ProductSection from '../ProductPage/ProductSection';
import styled from 'styled-components';
import Footer from './Footer'

const StyledDiv = styled.div`
    margin:0;
    h1{
        margin-top:0;
    }
    
`;

 

export default function LandingPage(){
    return(
        <StyledDiv>
            <Header/>
            <DisplayBanner/>
            <h1 >Popular Products</h1>
            <ProductSection limit='20' skip= '0'/>
            <Footer position='relative'/>
            {/* <About Us/>
            <Contact Us/>
            <Menu Bar/> */}
        </StyledDiv>

    )
}