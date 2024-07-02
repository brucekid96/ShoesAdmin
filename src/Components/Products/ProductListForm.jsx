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
     selector: row => row.quantity,
     sortable:true
    } ,
    {
     name: 'Amount',
     selector: row => row.newPrice* row.quantity ,
     sortable:true
    } ,
    {
      name: 'Actions',
      cell: (row) => (
        <div>
          <button onClick={() => handleEdit(row)}>Edit</button>
          <button onClick={() => handleDelete(row)}>Delete</button>
        </div>
      ),
    },
   ];
   const data = products;
   const [records, setRecords] = useState(data);
   function handleFilter(event) {
    const newData = data.filter(row => {
      return row.product_name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }

  const handleEdit = (row) => {
    // Implement your edit logic here
    console.log('Edit product:', row);
  };

  // Handle delete action (you can implement your own delete logic)
  const handleDelete = (row) => {
    // Implement your delete logic here
    console.log('Delete product:', row);
  };
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

       
        

     
      
    </div>
  )
}

export default ProductListForm
