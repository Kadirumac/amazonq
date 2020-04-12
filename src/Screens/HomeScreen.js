import React from 'react';
import data from "../data";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    return (

         <ul className="products">
         {data.products.map((item,index)=>{       
            return <li>
               <div className="product">
                 <img className="product-image" src={item.image} alt="product" />
                 <div className="product-name">
                   <Link to={'/product/' + item._id}> {item.name} </Link>
                 </div>
                 <div className="product-brand"> {item.brand} </div>
                 <div className="product-price"> {item.price} </div>
                 <div className="product-rating"> {item.rating} Stars ({item.numReviews} Reviews)</div>
               </div>
             </li>
         })}
       

        </ul>
      
    );
};

export default HomeScreen;