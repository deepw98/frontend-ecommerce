import React from "react";
import ProductSection from "./ProductSection";
import Header from "../LandingPage/Header";
import Footer from "../LandingPage/Footer";

export default function ProductPage(){
    return(
        <div>
            <Header/>
            <ProductSection limit='16' skip='20'/>
            <Footer position='relative'/>
        </div>
    )
}