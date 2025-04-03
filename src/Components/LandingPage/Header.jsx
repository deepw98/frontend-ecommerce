import React from "react";
import MenuBar from "./MenuBar";
import styled from "styled-components";

 const StyledHeader= styled.h1`
 display:inline-block;
 text-align:left;
 margin:0rem;
 `;

export default function Header(){
    return(
        <div>
            <StyledHeader>e-commerce</StyledHeader>
            <MenuBar/>
        </div>
    )
}