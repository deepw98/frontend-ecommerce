import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display:flex;
    justify-content:space-around;
    background-color:black;
    color:white;
    width:100%;
    height:min-content;
    div{
        display:flex;
        flex-direction:column;
    }
    h1,h2,h3{
        margin-bottom:8rem;
    }
`;

export default function DisplayBanner(){
    return(
       < StyledDiv>
            <div>
                <h1 style={{color:"white"}}>CyberMonday is here</h1>
                <h2>Get 10% off on laptops</h2>
                <h3>The offers stands for monday only.</h3>
            </div>
            
            <img src="/pexels-junior-teixeira-1064069-2047905.jpg" alt="30% off chairs" width={'400px'} />
        </StyledDiv>
    )
}