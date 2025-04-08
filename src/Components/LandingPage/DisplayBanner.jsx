import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display:flex;
    justify-content:space-around;
    background-color:black;
    color:white;
    width:100vw;
    height:min-content;
    div{
        display:flex;
        flex-direction:column;
        order:1;
    }
    h2,h3{
        margin-bottom:7rem;
        order:1;
    }
    img{
        height:500px;
        width:350px;
    }
    
    @media(max-width:768px){
        flex-direction:column;
        justify-content:center;
        div h1{
            order:1;
            margin:0;
        }
        img{
            order:0;
            padding:0;
            margin:0;
            height:300px;
            width:200px;
        }
        h2,h3{
            margin:0;
        }
    }
`;

export default function DisplayBanner(){
    return(
       < StyledDiv>
            <h1 style={{color:"white"}}>CyberMonday is here</h1>
            <div>
                
                <h2>Get 10% off on laptops</h2>
                <h3>Starting from <span style={{color:'rgb(42, 102, 215)'}}>₹20000</span> only.</h3>
            </div>
            
            <img src="/pexels-junior-teixeira-1064069-2047905.jpg" alt="30% off chairs"/>
        </StyledDiv>
    )
}