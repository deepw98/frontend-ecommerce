import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledNav=styled.nav`
display:flex;
justify-content:space-around;
font-size:1.5rem;
`
const StyledLink = styled(Link)`
text-decoration:none;
color:rgb(100,100,100)
`
export default function MenuBar(){
   
    return(
        <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to='/products'>Products</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
       
        </StyledNav>
    )
}