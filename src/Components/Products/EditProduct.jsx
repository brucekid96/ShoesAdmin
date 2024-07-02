// EditProductForm.jsx

import React, { useState } from 'react';

const EditProduct = ({ product, onSave, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState({
    ...product, // Initialize with existing product data
    image: null, // Initialize with null or existing image data
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      image: selectedImage,
    }));
  };

  const handleEdit = () => {
    // Call onSave with the updated product data
    onSave(editedProduct);
  };

  return (
    <div className="edit-product-form">
      {/* Render input fields, image upload, etc. */}
      {/* Example: */}
      <input
        type="text"
        name="name"
        value={editedProduct.name}
        onChange={handleInputChange}
      />
      {/* ... other input fields ... */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <button onClick={handleEdit}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditProduct;
