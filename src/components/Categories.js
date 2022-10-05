import { useEffect, useState } from "react";
import CategoryData from "../api/categories.json"
import Category from "components/ui/Category";
import Title from "./ui/Title";
function Categories() {

    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        //İstek atıcam
        setCategories(CategoryData)
    },[])
    return (
        <div className="bg-white py-4">
           <div className="container mx-auto">
            <Title>Kategoriler</Title>
            <div className="grid grid-cols-10">
                {categories && categories.map((category,index)=>
                    <Category key={index} category={category}/>
                )}
            </div>
           </div>
        </div>
    );
}

export default Categories;