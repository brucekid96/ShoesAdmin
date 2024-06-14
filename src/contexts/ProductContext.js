// src/contexts/ProductContext.js
import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    // Logic to add the new product to the products array
    setProducts([...products, newProduct]);
  };

  // Other functions (deleteProduct, updateProduct, etc.) go here

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
