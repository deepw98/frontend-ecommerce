import React from "react";
import MenuBar from "./MenuBar";
import styled from "styled-components";

 const StyledHeader= styled.h1`
 display:inline-block;
 text-align:left;
 `;

export default function Header(){
    return(
        <>
            <StyledHeader>e-commerce</StyledHeader>
            <MenuBar/>
        </>
    )
}