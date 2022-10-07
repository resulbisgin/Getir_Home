import Title from "./ui/Title";
import Products from "api/products.json";
import { useEffect, useState } from "react";
import ProductItem from "./ui/ProductItem";
function Favorites() {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        setProducts(Products)
    },[])
    return (
        <div>
            <Title>Favoriler</Title>
            <div className="grid grid-cols-3 gap-0.1 rounded-lg overflow-hidden 2xl:grid-cols-9 xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-4">
                {products.length && products.map(product=><ProductItem key={product.id} product={product}/>)}
                </div> 
        </div>
    );
}

export default Favorites;