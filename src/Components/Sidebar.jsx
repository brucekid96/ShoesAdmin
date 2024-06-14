import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
   BsFillGearFill,BsChevronDown} from 'react-icons/bs'

function Sidebar({openSidebarToggle,OpenSidebar}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = (e) => {
    e.preventDefault();
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
     <div className='sidebar-title'>
       <div className="sidebar-brand">
        <BsCart3 className='icon_header'/> SHOP
       </div>
       <span className='icon close_icon' onClick={OpenSidebar}>X</span>
     </div>
     <ul className='sidebar-list'>
      <li className='sidebar-list-item'>
      <Link to="/">
          <BsGrid1X2Fill className='icon'/> Home
        </Link>
      </li>
      <li className='sidebar-list-item'>
        <a href="" onClick={handleDropdownClick}>
          <BsFillArchiveFill className='icon'/> Products <BsChevronDown />
        </a>
        {isDropdownOpen && (
        <ul className="sub-menu">
        <li className='sidebar-list-item'>
           <Link to="/add-product">Add Product</Link>
        </li>

            <li className='sidebar-list-item'>
              <Link to="/productlist">Product List</Link>
            </li>
          </ul>
           )}
      </li>
      <li className='sidebar-list-item'>
        <a href="">
          <BsFillGrid3X3GapFill className='icon'/> Categories
        </a>
      </li>
      <li className='sidebar-list-item'>
        <a href="">
          <BsPeopleFill className='icon'/> Customers
        </a>
      </li>
      <li className='sidebar-list-item'>
        <a href="">
          <BsListCheck className='icon'/> Inventory
        </a>
      </li>
      <li className='sidebar-list-item'>
        <a href="">
          <BsMenuButtonWideFill className='icon'/> reports
        </a>
      </li>
      <li className='sidebar-list-item'>
        <a href="">
          <BsFillGearFill className='icon'/> Settings
        </a>
      </li>
     </ul>

    </aside>
  )
}

export default Sidebar
