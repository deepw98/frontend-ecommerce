import React from "react";
import MenuBar from "./MenuBar";
import styled from "styled-components";

 const StyledH1= styled.h1`
 display:inline-block;
 text-align:left;
 `;

export default function Header(){
    return(
        <>
            <StyledH1>e-commerce</StyledH1>
            <MenuBar/>
        </>
    )
}