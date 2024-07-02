import React, { useContext,useState } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import './AddProductForm.css'
import ProductManagement from './ProductManagement';



const AddProductForm = () => {

  const { addProduct } = useContext(ProductContext);
  const [product, setProduct] = useState({
    name: '',
    quantity:'',
    gender: '',
    category:'',
    description: '',
    size: '', 
    model: '', 
    newPrice: '',
    oldPrice: '', 
    image: null, 
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setProduct({ ...product, image: selectedImage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission (e.g., send data to the server)
    console.log('Submitting Product:', product);
    addProduct(product);
    
    
   
    setProduct({
      name: '',
      quantity:'',
      gender: '',
      category:'',
      description: '',
      size: '', 
      model: '', 
      newPrice: '', 
      oldPrice: '', 
      image: null, 
    });
  };

  return (
    <div className="add-product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        
      <div className="form-fields">
        <input
        className='product-name'
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleInputChange}
        />
        <input
        className='product-quantity'
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={product.quantity}
          onChange={handleInputChange}
        />
        <div className="small-inputs">
     <select
      className='gender'
      name="gender"
      value={product.gender}
      onChange={handleInputChange}
    >
      <option value="">Select Gender</option>
      <option value="Men">Men</option>
      <option value="Kids">Kids</option>
      <option value="Women">Women</option>
    </select>
    <select
      className='category'
      name="category"
      value={product.category}
      onChange={handleInputChange}
    >
      <option value="">Select Category</option>
      <option value="Men">New Collections</option>
      <option value="Kids">New Popular</option>
      <option value="Women">Air Nike</option>
    </select>
    </div>
         <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleInputChange}
        />
        <div className="small-inputs">
        <input
        className='size'
          type="text"
          name="size"
          placeholder="Size"
          value={product.size}
          onChange={handleInputChange}
        />
        <input
        className='model'
          type="text"
          name="model"
          placeholder="Model"
          value={product.model}
          onChange={handleInputChange}
        />
        </div>
        <div className="small-inputs">
        <input
        className='new-price'
          type="number"
          name="newPrice"
          placeholder="New Price"
          value={product.newPrice}
          onChange={handleInputChange}
        />
        <input
        className='old-price'
          type="number"
          name="oldPrice"
          placeholder="Old Price"
          value={product.oldPrice}
          onChange={handleInputChange}
        />
        </div>
      </div>
       
        
        <div className="image-upload-container">
          <div className="image-title"><h2>Upload Image</h2></div>
        <div className="image-holder">
        {product.image && (
            <img
              src={URL.createObjectURL(product.image)}
              alt="Selected Product Image"
            />
          )}
           </div>
           <div className="upload-image-button">
           <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
           </div>
           </div>
        
        <button type="button" onClick={handleSubmit}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
