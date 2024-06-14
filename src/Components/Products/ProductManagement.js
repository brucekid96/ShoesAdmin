// ProductManagement.js (Parent Component)
import React, { useState } from 'react';
import AddProductForm from './AddProductForm';
import ProductListForm from './ProductListForm';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <AddProductForm addProduct={addProduct} />
      <ProductListForm products={products} />
    </div>
  );
};

export default ProductManagement;
