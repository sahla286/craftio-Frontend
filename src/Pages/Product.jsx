import React, { useContext } from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import Rating from '../Components/Rating/Rating'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox product={product}/>
      <Rating product={product}/>
      <RelatedProducts productId={productId} />
    </div>
  )
}

export default Product;
