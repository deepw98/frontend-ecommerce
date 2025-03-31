import React,{useState,useEffect} from "react";


export default function ProductItem(){
    const [product,setProduct] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
            .then((response)=>{
                if(!response.ok){
                    throw new Error('failed to fetch data')
                }
                return response.json()
            })
            .then((data)=>{
                setProduct(data)
                setLoading(false)
            })
            .catch((error)=>{
                setError(error.message)
                setLoading(false)
            })
    },[]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return(
        <div>
           <img src={product.thumbnail} alt={product.title} />
           <p>{product.category}</p>
           <h6>{product.title}</h6>
        </div>
    )
}