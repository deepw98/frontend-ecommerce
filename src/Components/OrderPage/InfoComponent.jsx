import React,{useState,useEffect} from 'react';
import { TotalPrice } from '../ProductPage/ProductItem';
import styled from 'styled-components';
import StarComponent from '../ProductPage/StarComponent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const StyledDetails = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    justify-items:center;
`;

function GSTCalculator(price){
    price = price + (price*18/100)
    return price
}

function handleClick(){
    alert('This is a dummy website.')
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
        <StyledDetails>
            <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '300px' ,margin:'0 auto'}} />
            <div>
                <h2>{product.title}</h2>
                <p>Description: {product.description}</p>
               
                <p style={{display:'flex'}}>
                    <StarComponent rating={product.rating}/>
                    <b>{product.rating}</b> 
                </p>
                <p>Category: {product.category}</p>
                <p>Brand: {product.brand}</p>
                <hr />
                <p>Price: <span>₹{(product.price*85.53).toFixed(2)}</span></p>
                <p>Discount: {product.discountPercentage}%</p>
                <p>Discounted price:₹{TotalPrice(product).toFixed(2)}</p>
                <p>GST:18%</p>
                <hr />
                <p>Total price:<b>₹{GSTCalculator(TotalPrice(product)).toFixed(2)}</b></p>


                <button onClick={handleClick}style={{background:'rgb(35, 35, 225)',color:'white'}} title='Add to shopping cart'>
                    <AddShoppingCartIcon/>
                </button>
                <button onClick={handleClick}style={{background:'rgb(35,35,225)',color:'white',marginLeft:'0.3rem'}} title='Add to wishlist'>
                    <FavoriteBorderRoundedIcon/>
                </button>
            </div>
            <div>
                <h2>Reviews:</h2>
                <div>
                    {product.reviews.map((review)=>{
                        return(
                            <>
                                <h3>{review.reviewerName}</h3>
                                <p style={{display:'flex'}}>
                                    <StarComponent rating={review.rating}/>
                                    <b>{review.rating}</b> 
                                </p>
                                <p>{review.comment}</p>
                            </>
                        )
                    }
                    )}
                </div>
               
            </div>
        </StyledDetails>
    )
}