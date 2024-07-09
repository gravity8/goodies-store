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

function App() {

  const [successMessage, setSuccessMessage] = useState("")

  const toggleBodyScrollProperty = () => {
    if(successMessage){
      document.body.classList.add("no-scroll")
    }
    else{
      document.body.classList.remove("no-scroll")
    }
  }

  useEffect(()=>{
    toggleBodyScrollProperty();
  },[successMessage])
  
  return (
    <div className='relative'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product-listing" element={<ProductListingPage />} />
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
    </div>
  )
}

export default App
