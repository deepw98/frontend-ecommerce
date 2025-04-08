import React,{useState,useEffect} from "react";
import styled from "styled-components";
import StarComponent from "./StarComponent";
import { useNavigate } from "react-router-dom";


const StyledDiv = styled.div`
    display:grid;
    justify-content:space-between;
    justify-items:center;
    grid-template-columns:repeat(4,1fr);
    @media(max-width:768px){
        grid-template-columns:repeat(2,1fr);
        justify-content:space-between;
    }
    @media(max-width:600px){
        grid-template-columns:1fr;
        align-items:start;
        justify-items:start;
        margin-left:0.2rem;
    }
    `;
const StyledSection = styled.section`
    text-align:left;
`;

const StyledButton = styled.button`
    display:flex;
    justify-content:center;
    font-size:1.5rem;
    border-radius:0.5rem;
    margin: 0 auto;
    background-color:rgb(25, 200, 177);
    box-shadow:0.1rem 0.1rem;
`;

function TotalPrice(product){
    let total = product.price - (product.price*product.discountPercentage/100)
    total = total * 85.53
    return total
}

export default function ProductItem(props){
    const [allproducts,setAllProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [limit] = useState(props.limit)
    const [skip, setSkip] = useState(props.skip)
    const [hasMore, setHasMore] = useState(true)
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then((response)=>{
                if(!response.ok){
                    throw new Error('failed to fetch data')
                }
                return response.json()
            })
            .then((data)=>{
                setAllProducts((prevProducts) => {
                    const uniqueProducts = data.products.filter(
                      (product) => !prevProducts.some((p) => p.id === product.id)
                    );
                    return [...prevProducts, ...uniqueProducts];
                  });
                setLoading(false)
                
                if (allproducts.length + data.products.length >= data.total) {
                    setHasMore(false);
                }
            })
            .catch((error)=>{
                setError(error.message)
                setLoading(false)
            })
    },[limit,skip,allproducts.length]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

        const handleLoadMore = () => {
            setSkip((prevSkip) => {
                console.log(prevSkip)
                const newSkip = parseInt(prevSkip) + parseInt(limit);
                console.log(newSkip)
                return newSkip;
            });
        };

        const handleOnClick = (productId)=>{
            navigate(`/product/${productId}`)
        }

    return(
        <>
            <StyledDiv>
                {allproducts.map((product) => {
                        return(
                            <div key={product.id}>
                                <hr />
                                <img src={product.thumbnail} alt={product.title} />
                                <StyledSection>
                                    <p>{product.category}</p>
                                    <h3 onClick={()=>{handleOnClick(product.id)}}  style={{cursor:'pointer'}}>
                                        {product.title}
                                    </h3>

                                    <p style={{display:"flex"}}>
                                        <StarComponent rating={product.rating}/>
                                        {product.rating}
                                    </p>

                                    <p><b>₹{TotalPrice(product).toFixed(2)}</b></p>

                                    <p>
                                        <span style={{textDecoration:'line-through'}}>₹{(product.price*85.53).toFixed(2)}</span>
                                         <b> -{product.discountPercentage}%</b>
                                    </p>
                                </StyledSection>
                            </div>
                        )
                        
                })}
               
            </StyledDiv>
            {hasMore &&(
                <StyledButton type="button" onClick={handleLoadMore} style={{textAlign:'center'}}>
                    Load More
                </StyledButton>
            )}
        </>
    )
    
}
export {TotalPrice};
