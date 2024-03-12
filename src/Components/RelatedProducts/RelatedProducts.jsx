// import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RelatedProducts.css'
import Item from '../Item/Item'
// import related_product from '../Assets/related_product'

    const RelatedProducts = ({ productId }) => {
          const [relatedProducts, setRelatedProducts] = useState([]);
        
          useEffect(() => {
            const fetchRelatedProducts = async () => {
              try {
                const response = await axios.get(`/api/products/${productId}/related`);
                setRelatedProducts(response.data);
              } catch (error) {
                console.error('Error fetching related products:', error);
              }
            };
        
            fetchRelatedProducts();
          }, [productId]);
        
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.map((item)=>{
            return <Item id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import Item from '../Item/Item'

// const RelatedProducts = ({ productId }) => {
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     const fetchRelatedProducts = async () => {
//       try {
//         const response = await axios.get(`/api/products/${productId}/related`);
//         setRelatedProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching related products:', error);
//       }
//     };

//     fetchRelatedProducts();
//   }, [productId]);

//   return (
//     <div>
//       <h2>Related Products</h2>
//       <ul>
//         {relatedProducts.map(product => (
//           <li key={product._id}>
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RelatedProducts;









// // import React, { useEffect, useState } from 'react'
// // import './RelatedProducts.css'
// // import Item from '../Item/Item'

// // const NewCollections = () => {
// //   const [new_collections,setNew_collection] = useState([]);
// //   useEffect(()=>{
// //     fetch('http://localhost:4000/relatedproducts')
// //     .then((response)=>response.json())
// //     .then((data)=>setNew_collection(data));
// //   },[])

// //   return (
// //     <div className='new-collections'>
// //       <h1>NEW COLLECTIONS</h1>
// //       <hr />
// //       <div className="collections">
// //         {new_collections.map((item,i)=>{
// //                 return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
// //             })}
// //       </div>
// //     </div>
// //   )
// // }

// // export default NewCollections;





// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Item from '../Item/Item'

// const RelatedProducts = ({ productId }) => {
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     const fetchRelatedProducts = async () => {
//       try {
//         const response = await axios.get(`/relatedproducts/${productId}`);
//         setRelatedProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching related products:", error);
//       }
//     };
//     fetchRelatedProducts();
//   }, [productId]);

//   return (
//     <div>
//       <h2>Related Products</h2>
//       <ul>
//         {relatedProducts.map(Item,i => (
//           <li key={Item.id}>
//             <Link to={`/product/${item.id}`}>{item.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RelatedProducts;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Item from '../Item/Item';

// const RelatedProducts = ({ productId }) => {
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     const fetchRelatedProducts = async () => {
//       try {
//         const response = await axios.get(`/relatedproducts/${productId}`);
//         setRelatedProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching related products:", error);
//       }
//     };
//     fetchRelatedProducts();
//   }, [productId]);

//   return (
//     <div>
//       <h2>Related Products</h2>
//       <ul>
//         {relatedProducts.map(item => ( // Corrected map function
//           <li key={item.id}>
//             <Link to={`/product/${item.id}`}>{item.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RelatedProducts;
