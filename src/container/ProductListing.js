import React from "react";
import ProductComponent from "./ProductComponent";
import axios from 'axios'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setproducts } from "../redux/actions/productAction";
import { useSelector } from "react-redux";
import "../App.css"
import "./style.css"
const ProductListing=()=>{
    const products=useSelector((state)=>state.allproducts.product)
    const dispatch=useDispatch();
    const fetchProducts=async()=>{
       const response= await axios.get('https://fakestoreapi.com/products')
       .catch((err)=>{
        console.log("err",err)
       })
       dispatch(setproducts(response.data))
    }
 
   useEffect(()=>{
      fetchProducts()
   },[])
console.log("products:",products)
    return(
        <div className="container">
            <ProductComponent/>
        </div>
    )
}
export default ProductListing