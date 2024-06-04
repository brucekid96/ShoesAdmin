import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProductForm from './Components/Products/AddProductForm';
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
    <div className="grid-container">
      <BrowserRouter>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/add-product" element={<AddProductForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
