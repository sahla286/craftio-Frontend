import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import Rating from "../Rating/Rating";

const ProductDisplay = (props) => {
  const {product} = props;

  const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <Rating value={product.rating} />
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">&#8377;{product.old_price}</div>
          <div className="productdisplay-right-price-new">&#8377;{product.new_price}</div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> Paper craft,Wooden,Jute</p>
      </div>
    </div>
  );
};

export default ProductDisplay;