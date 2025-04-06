import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    .copyright-container{
        display:block;
        width:99vw;
        background-color:black;
        text-align:center;
        position:absolute;
        bottom:0;
    }
    .copyright-container p{
        color:white;
    }
`;

function setYear(){
    const year = new Date().getFullYear()
    return year
}
export default function Footer(props){
    return(
        <StyledFooter className='copyright-container'>
            <div className="copyright-container" style={{position:`${props.position}`}}>
                <p>Copyright &copy; {setYear()}</p>
                <p>All Rights Reserved</p>
            </div>
                
        </StyledFooter>
    )
}