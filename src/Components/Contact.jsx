import React from 'react';
import Header from './LandingPage/Header';
import Footer from './LandingPage/Footer';
import styled from 'styled-components';

const StyledContact = styled.div`
   margin-left:1rem;
`
const StyledForm = styled.form`
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   height:400px;
   label{
      font-size:1.5rem;
   }
   input{
      width:15%
   }
   textarea{
      width:40%;
      rows:4;
      color:rgb(100,100,100)
      border:10px solid black;
   }
   button{
      width:10%;
      border-radius:0.5rem;
      color:rgb(00,00,00);
      background-color:rgb(183, 208, 39);
      font-size:1.1rem;
   }
`

export default function Contact(){
   return(
    <div>
         <Header/>
         <StyledContact>
            <h1>Contact Us</h1>
            <p>If you are experience any issues regarding our services, refund or any other questions.
               Feel free to contact us.
            </p>
            <p>You can contact and air your grievances, right here.</p>
            <StyledForm action="">
               <label htmlFor="name">Name</label>
               <input type="text" id='name' name='name'/>
               <label htmlFor="email">Email</label>
               <input type="email" id='email' name='email' />
               <label htmlFor="subject">Subject</label>
               <input type="text" id='subject' name='subject' />
               <label htmlFor="message">Message</label>
               <textarea name="message" id="message" placeholder='Enter you grievances here:' autoFocus></textarea>
               <button type='button'>Submit</button>
            </StyledForm>
         </StyledContact>
         <Footer/>
    </div>
   )
}