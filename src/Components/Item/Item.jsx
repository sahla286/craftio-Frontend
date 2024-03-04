import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
// import Rating from "../Rating/Rating";

const Item = (props) => {
  console.log(props.name)
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} style={{ textDecoration: 'none' }}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="products" /></Link>
      <p>{props.name}</p>
      {/* <div>
          <Rating value={props.rating} 
                    text={`${props.numReviews}Reviews`}/>
                    </div> */}
      <div className="item-prices">
        <div className="item-price-new">
          &#8377;{props.new_price}
          </div>
        <div className="item-price-old">
          &#8377;{props.old_price}
          </div>
      </div>
    </div>
  )
}

export default Item
