import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledNav=styled.nav`
display:flex;
justify-content:space-around;
font-size:1.5rem;
`
const StyledAnchor = styled.a`
text-decoration:none;
color:rgb(100,100,100)
`
export default function MenuBar(){
   
    return(
        // <StyledUl>
        //     <StyledAnchor href="#">Home</StyledAnchor>
        //     <StyledAnchor href="#">Products</StyledAnchor>
        //     <StyledAnchor href="#">Contact Us</StyledAnchor>
        //     <StyledAnchor href="#">About Us</StyledAnchor>
        // </StyledUl>

        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </nav>
    )
}