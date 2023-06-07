import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import "../App.css"

const ProductComponent=()=>{
    const products=useSelector((state)=>state.allproducts.product)
    const renderList=products.map((product)=>{
       const {id, title, image, price, category}=product;
        return(
            <span className="product-cards" key={id}>
                 <Link to={`/product/${id}`}>
                    <div className="card">
                        <div className="product-image">
                            <img src={image} alt={title}/>
                        </div>
                    <div className="product-title">{title}</div>
                        <div className="content">
                            <div className="product-price">$ {price}</div>
                            <div className="product-category">{category}</div>

                        </div>
                    </div>
               </Link>
            </span>
        )

    })
    return(
        <div className="product-container">
            {renderList}
        </div>
    )
}
export default ProductComponent