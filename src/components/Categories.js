import { useEffect, useState } from "react";
import CategoryData from "../api/categories.json"
import Category from "components/ui/Category";
function Categories() {

    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        //İstek atıcam
        setCategories(CategoryData)
    },[])
    return (
        <div className="bg-white py-4">
           <div className="container mx-auto">
            <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
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