import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductListingPage from './pages/ProductListingPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaCheck } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import ItemDescriptionModal from './components/itemsdescriptionmodal/ItemDescriptionModal'

function App() {

  const [successMessage, setSuccessMessage] = useState("")
  const [search, setSearch ] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);
  const [itemToDisplay, setItemTodisplayInModal] = useState(null);

  const toggleBodyScrollProperty = () => {
    if(show){
      document.body.classList.add("no-scroll")
    }
    else{
      document.body.classList.remove("no-scroll")
    }
  }

  useEffect(()=>{
    toggleBodyScrollProperty();
  },[show])

  const toggleSearch= () =>{
    setSearch(!search);
  }

  const searchItem = () => {
    // For now toggle search
    toggleSearch()
  }
  
  const  getItemForDescription = (itemToDisplay) =>{
    setItemTodisplayInModal(itemToDisplay)
  }

  return (
    <div className='relative w-full'>
      <div 
        onClick={toggleSearch}
        className={`search-component ${search ? "flex" : "hidden"} w-full fixed z-[400] bg-black/25 h-[100vh]`}>
          <div 
            onClick={e=>e.stopPropagation()}
            className={`${search ? "flex" : "hidden"} fixed w-full bg-white py-10 md:py-14 z-[400] flex justify-center`}>
              <div  className='flex border-[0.5px] rounded-lg py-4 w-[80%]  md:w-[40%] px-5 items-center'>
                <input 
                  className='flex-1 bg-transparent border-none ps-3 focus:outline-none'
                  value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  type="text"
                  placeholder='Search for an item'
                  />  
                <div onClick={searchItem}>
                  <FiSearch size={21}/>  
                </div>
              </div>    
        </div>
      </div>
      
      <Navbar toggleSearch={toggleSearch}/>
      <Routes>
        <Route path="/" element={<Home show={show} setShow={setShow} getItemForDescription={getItemForDescription}/> }/>
        <Route path="/product-listing" element={<ProductListingPage show={show} setShow={setShow}  getItemForDescription={getItemForDescription}/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage setSuccessMessage={setSuccessMessage}/>} />
      </Routes>
      <Footer />
      {successMessage && (
        <div 
          onClick={()=>setSuccessMessage("")}
          className='fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center bg-black bg-opacity-50 z-[1000]'>
          <div className="modal bg-white text-center p-8 rounded-lg shadow-lg flex justify-center items-center flex-col gap-6">
            <FaCheck size={100} className="text-[#00C100]" />
            <p>Order has been placed successfully.</p>
          </div>
        </div>
      )}

      <ItemDescriptionModal item={itemToDisplay} show={show} setShow={setShow}/>
    </div>
  )
}

export default App
