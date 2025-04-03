import React from 'react';
import DisplayBanner from './DisplayBanner';
import Header from './Header';
import ProductPage from '../ProductPage';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin:0;
    h1{
        margin-top:0;
    }
    .copyright-container{
        background-color:black;
        text-align:center;
    }
    .copyright-container p{
        color:white;
    }
`;

 function setYear(){
    const year = new Date().getFullYear()
    return year
}

export default function LandingPage(){
    return(
        <StyledDiv>
            <Header/>
            <DisplayBanner/>
            <h1 >Popular Products</h1>
            <ProductPage/>
            <div className='copyright-container'>
                <p>Copyright &copy; {setYear()}</p>
                <p>All Rights Reserved</p>
            </div>
            {/* <About Us/>
            <Contact Us/>
            <Menu Bar/> */}
        </StyledDiv>

    )
}