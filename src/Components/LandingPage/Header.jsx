import React from "react";
import MenuBar from "./MenuBar";
import styled from "styled-components";

 const StyledHeader= styled.h1`
 display:inline-block;
 text-align:left;
 margin:0rem;
 span{
    color:rgb(42, 102, 215);
 }
 `;

export default function Header(){
    return(
        <div>
            <StyledHeader>e<span>shop</span>pr</StyledHeader>
            <MenuBar/>
        </div>
    )
}