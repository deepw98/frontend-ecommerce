import React from 'react';
import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import InfoComponent from './InfoComponent';
import { useParams } from 'react-router-dom';

export default function OrderPage(){
    const {productId} = useParams();
    return(
        <div>
             <Header/>
             <InfoComponent productId={productId}/>
             <Footer position='relative'/>
        </div>
       
    )
}