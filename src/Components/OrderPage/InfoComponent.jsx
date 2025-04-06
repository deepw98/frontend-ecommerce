import React,{useState,useEffect} from 'react';
import { TotalPrice } from '../ProductPage/ProductItem';




function GSTCalculator(price){
    price = price + (price*18/100)
    return price
}



export default function InfoComponent({productId}){
    const [product,setProduct]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        fetch(`https://dummyjson.com/products/${productId}`)
        .then((response)=>{
            if(!response.ok){
                throw new Error('Failed to fetch Product');
            }
            return response.json();
        })
        .then((data)=>{
            setProduct(data);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false);
        })
    },[productId])

    if (loading) return <p>loading...</p>
    if (error) return <p>Error:{error}</p>
    if (!product) return <p>Product not found.</p>
    return(
        <div>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '300px' ,margin:'0 auto'}} />
            <p>Description: {product.description}</p>
            <p>Price: <span style={{textDecoration:'line-through'}}>₹{(product.price*85.53).toFixed(2)}</span></p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Reduced price:₹{TotalPrice(product).toFixed(2)}</p>
            <p>GST:18%</p>
            <p>Total price:{GSTCalculator(TotalPrice(product)).toFixed(2)}</p>
            <p>Rating: {product.rating}</p>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
        </div>
    )
}