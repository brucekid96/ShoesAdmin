import React,{useContext,useState} from 'react'
import './Home.css'
import DataTable from 'react-data-table-component';
import { ProductContext } from '../contexts/ProductContext';
import {BsFillArchiveFill,BsFillGrid3X3GapFill,
  BsPeopleFill,BsFillBellFill} from 'react-icons/bs'



function Home() {
  const { products } = useContext(ProductContext);

  const columns = [
  
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
    selector: row => row.newPrice* row.quantity,
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
    <main className="main-container">
    <div className='main-title'>
      <h3>DASHBOARD</h3>
    </div>

    <div className="main-cards">
      <div className="card">
      <div className="card-inner">
        <h3>PRODUCTS</h3>
        <BsFillArchiveFill className='card-iicon'/>
      </div>
      <h1>300</h1>
    </div>
    <div className="card">
      <div className="card-inner">
        <h3>New subscriptions</h3>
        <BsFillGrid3X3GapFill className='card-iicon'/>
      </div>
      <h1>12</h1>
    </div>
    <div className="card">
      <div className="card-inner">
        <h3>New orders</h3>
        < BsPeopleFill className='card-iicon'/>
      </div>
      <h1>33</h1>
    </div>
    <div className="card">
      <div className="card-inner">
        <h3>Avg. order revenue</h3>
        <BsFillBellFill className='card-iicon'/>
      </div>
      <h1>$1,080</h1>
    </div>
  </div>
  <div className="cartitems">
    
  <DataTable
  columns={columns}
  data={records}
  fixedHeader
  pagination
  keyField="id"
  ></DataTable>
</div>


    </main>
  )
}

export default Home
