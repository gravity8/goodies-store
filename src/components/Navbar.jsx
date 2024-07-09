/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";

import { useContext, useState } from 'react';

import Logo from "../assets/companyLogo.svg"
import CartContext from '../context/CartContext';


const Navbar = ({toggleSearch}) => {
    const [darkMode, setDarkMode] = useState(false);
    const {cartItems} = useContext(CartContext);
  

    // To toggle
    const  toggleDarkMode = () => {
      setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    //to toggle menu for the mobile screen
  const toggleMenu = () => {
    const menu = document.querySelector(".navlinks-container");
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
    }
    else{
        menu.classList.add("active");
    }
    
  }

  return (
    <nav className="navbar flex justify-between items-center px-[1rem] md:px-[5rem] lg:px-[10rem] py-[15px] z-[11] sticky top-0">
        <div className="nav-logo">
          <NavLink to={"/"}>
            <img src={Logo} loading="lazy"></img>
          </NavLink>
        </div>
        <div className="navlinks-container">
            <div className="close-X" onClick={toggleMenu}>
              <RiCloseLargeFill size={21} />
            </div>
            <ul className="navlinks flex gap-10">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/product-listing"}>Products</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}> Contact</NavLink>
                </li>
            </ul>
        </div>
        <div className="flex justify-between gap-[2.5rem] items-center">

            <button className="darkmode-toggle" onClick={toggleDarkMode}>
                {
                  darkMode ? (<FaSun size={21} />) : (<FaMoon size={21} />)
                }
            </button>
            <div>
              <NavLink to="/cart">
                <div className='relative'>
                  < BsCart size={21}/>
                  <span className=' absolute -top-3 -right-3 px-[9px] py-[1px] rounded-full bg-[#118A11] text-white'>{cartItems.length}</span>
                </div>
                
              </NavLink>
            </div>
            <div onClick={toggleSearch}>
              <FiSearch size={21} />  
            </div>
            <div className="openNav-bars text-[20px]" onClick={toggleMenu}>
                <HiBars3 size={24} />
            </div>
        </div>
        
     </nav>
  )
}

export default Navbar