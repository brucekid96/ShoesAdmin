import React, { useContext,useState } from 'react'
import './ProductListForm.css'
import { ProductContext } from '../../contexts/ProductContext'
import action_icon from '../Assets/action.png'
const ProductListForm = () => {
  const { products } = useContext(ProductContext);

    // Create a Set to store unique shoe names
    const uniqueShoeNames = new Set();

    // Extract and add shoe names to the Set
    products.forEach((product) => {
      const cleanedName = product.name.trim(); // Supprime les espaces vides au début et à la fin
      if (cleanedName) {
        uniqueShoeNames.add(cleanedName);
      }
    });
  
    // Get the count of unique shoe names
    const numberOfUniqueShoes = uniqueShoeNames.size;
  return (
    <div className='cartitems'>

      <ul className="cartitems-format-main">
        <li>Products</li>
        <li>Title</li>
        <li>Model</li>
        <li>Size</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Action</li>
      </ul>
      <hr />
      
          <div>
          {products.map((product) => (
         <div key={product.id} className="cartitems-format cartitems-format-main">
              {product.image && (
              <img
                src={URL.createObjectURL(product.image)} 
                alt={product.name}
                className='carticon-product-icon'
              />
            )}
             <p>{product.name}</p>
             <p>{product.model}</p>
             <p>{product.size}</p>
             <button className="cartitems-quantity">{numberOfUniqueShoes}</button>
             <p>${product.newPrice}</p>
             <img src={action_icon}  alt="" className='cartitems-action-icon'/>
         </div>
          ))}
         <hr />
         
       </div>
       
        

     
      
    </div>
  )
}

export default ProductListForm
