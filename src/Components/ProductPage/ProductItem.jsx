import React,{useState,useEffect} from "react";
import styled from "styled-components";


export default function ProductItem(){
    const [allproducts,setAllProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
            .then((response)=>{
                if(!response.ok){
                    throw new Error('failed to fetch data')
                }
                return response.json()
            })
            .then((data)=>{
                setAllProducts(data.products)
                setLoading(false)
            })
            .catch((error)=>{
                setError(error.message)
                setLoading(false)
            })
    },[]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const StyledDiv = styled.div`
    display:grid;
    justify-content:space-between;
    grid-template-columns:repeat(4,1fr);
    @media(max-width:768px){
        grid-template-columns:repeat(2,1fr);
        justify-content:space-between;
    }
    @media(max-width:500px){
        grid-template-columns:1fr;
        align-items:center;
        justify-content:center;
    }
    
    `

    return(
        <StyledDiv>
            {allproducts.map((product) => {
                    return(
                        // {key={product.products.id}}
                        <div key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <p>{product.category}</p>
                            <h3>{product.title}</h3>
                        </div>
                    )
                    
            })}
        </StyledDiv>
    )
    
}