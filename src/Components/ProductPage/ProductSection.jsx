import React from 'react';
import ProductItem from './ProductItem';

export default function ProductSection(props){
    return(
        <div>
            <ProductItem limit={props.limit} skip={props.skip}/>
        </div>
    )
}