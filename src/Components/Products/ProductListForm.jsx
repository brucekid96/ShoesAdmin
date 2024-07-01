import React, { useContext,useState } from 'react'
import './ProductListForm.css'
import DataTable from 'react-data-table-component'
import { ProductContext } from '../../contexts/ProductContext'
import action_icon from '../Assets/action.png'

const ProductListForm = () => {
  const { products } = useContext(ProductContext);
  const columns = [
    {
      name: 'Product',
      selector: row =>row.image && (
        <img
          src={URL.createObjectURL(row.image)} // Use the actual image URL or base64 data here
          
          className='carticon-product-icon'
        />
      )
      ,
      sortable:true
     },
    {
     name: 'Product Name',
     selector: row => row.name,
     sortable:true
    },
    {
     name: 'Size',
     selector: row => row.size,
     sortable:true
    } ,
    {
     name: 'Price',
     selector: row => row.newPrice,
     sortable:true
    } ,
    {
     name: 'Quantity',
     selector: row => numberOfUniqueShoes,
     sortable:true
    } ,
    {
     name: 'Amount',
     selector: row => row.newPrice* numberOfUniqueShoes,
     sortable:true
    } ,
   ];
   const data = products;
   const [records, setRecords] = useState(data);
   function handleFilter(event) {
    const newData = data.filter(row => {
      return row.product_name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }
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

      {/* <ul className="cartitems-format-main">
        <li>Products</li>
        <li>Name</li>
        <li>Size</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Action</li>
      </ul>
      <hr /> */}

<DataTable
  columns={columns}
  data={records}
  fixedHeader
  pagination
  ></DataTable>
{/*       
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
              <p>{product.size}</p>
             <button className="cartitems-quantity">{numberOfUniqueShoes}</button>
             <p>${product.newPrice}</p>
             <img src={action_icon}  alt="" className='cartitems-action-icon'/>
         </div>
          ))}
         <hr />
         
       </div> */}
       
        

     
      
    </div>
  )
}

export default ProductListForm
