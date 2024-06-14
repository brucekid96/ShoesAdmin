import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductProvider from './contexts/ProductContext';
import AddProductForm from './Components/Products/AddProductForm';
import ProductListForm from './Components/Products/ProductListForm';
import { useState } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <ProductProvider>
    <div className="grid-container">
      <BrowserRouter>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/add-product" element={<AddProductForm />} />
          <Route path="/productlist" element={<ProductListForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    </ProductProvider>
  );
}

export default App;
