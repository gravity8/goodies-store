import { NavLink } from 'react-router-dom';

import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";





const Navbar = () => {

  // //To set a nav link active
  //   const setNavLinkActive =(elementToSetActive)=>{
  //     const allLinks = document.querySelectorAll(".navlinks>li");
  //     // allLinks.forEach(el=>{
  //     //     if (el !== elementToSetActive) el.classList.remove("active")
  //     // })
  //     // elementToSetActive.classList.add("active")
  //   }

    // To toggle
    const  toggleDarkMode = () => {
      var element = document.body;
      element.classList.toggle("dark-mode");
      console.log(element)
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
    <nav className="navbar flex">
        <div className="nav-logo">
          <NavLink to={"/"}>Logo.</NavLink>
        </div>
        <div className="navlinks-container w-[]">
            <div className="close-X" onClick={toggleMenu}>
              <i className="fa-regular fa-x"></i>
            </div>
            <ul className="navlinks flex">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/product-listing"}>Products</NavLink>
                </li>
            </ul>
        </div>
        <div className="flex justify-between gap-[20px] items-center">

            <button className="darkmode-toggle" onClick={toggleDarkMode}>
                <FaSun />
                <FaMoon />
                <div className="sliding-bg"></div>
            </button>
            <div>
              <NavLink to="/cart">
                < BsCart />
              </NavLink>
            </div>
            <FiSearch />
            <div className="openNav-bars text-[20px]" onClick={toggleMenu}>
                <HiBars3 />
            </div>
        </div>
        
     </nav>
  )
}

export default Navbar