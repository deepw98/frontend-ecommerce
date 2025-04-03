import React from 'react';


export default function Contact(){
    <div>
         <h1>Contact Us</h1>
         <p>If you are experience any issues regarding our services, refund or any other questions.
            Feel free to contact us.
         </p>
         <p>You can contact and air your grievances, right here.</p>
         <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name'/>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' />
            <label htmlFor="subject"></label>
            <input type="text" id='subject' name='subject' />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message">Enter you grievances here:</textarea>
            <button type='button'>Submit</button>
         </form>
    </div>
   
}