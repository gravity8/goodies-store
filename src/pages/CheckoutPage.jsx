/* eslint-disable react/prop-types */
import { useState } from "react"
import companyLogo from "../assets/PlaceOrderLogo.svg"



const CheckoutPage = ({setSuccessMessage}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");


  const handleOrder = () =>{
    setSuccessMessage("Order has been placed successfully.")
  }
  return (
    <div className="checkoutPage pt-6 px-[1rem] md:px-[10rem] relative mb-32">
      <h2 className="!text-[2.3rem] md:!text-[2.5rem] text-left mb-[40px]">Shipping Address</h2>

      <div className="flex flex-col md:flex-row w-full justify-between gap-[8%]">
        <div className="flex flex-col w-full md:w-[45%] mb-10 md:mb-0">
          <div className="flex flex-col md:flex-row justify-between gap-0 md:gap-10">
            <input 
              value={firstName} 
              onChange={(e)=>setFirstName(e.target.value)} 
              type="text"  
              placeholder="First Name"/>
            <input 
              value={lastName} 
              onChange={(e)=>setLastName(e.target.value)} 
              type="text" 
              placeholder="Last Name"/>
          </div>
          <input 
            value={streetAddress} 
            onChange={(e)=>setStreetAddress(e.target.value)} 
            type="text" 
            placeholder="Street Address"
          />
          <input 
            value={apartment} 
            onChange={(e)=>setApartment(e.target.value)} 
            type="text" 
            placeholder="Apartment"/>
          <input 
            value={city} 
            onChange={(e)=>setCity(e.target.value)} 
            type="text" 
            placeholder="City"/>
          <input 
            value={phone} 
            onChange={(e)=>setPhone(e.target.value)} 
            type="text" 
            placeholder="Phone"/>
          <button
            onClick={handleOrder}
          >Place Order</button>
        </div>
        <div className="flex flex-col w-full md:w-[40%] gap-10 h-[60vh] md:h-[unset]">
          <div className="mb-10 bg-[#fdf8fb] shadow-md rounded-[5px] p-5 relative flex-1 order-summary">
            <h2 className="!text-[1.5rem]">Order Summary</h2>
            <div className="flex justify-between">
              <div>
                <p>Strawberry cupcake</p>
                <p className="item-summary">1 Dozen</p>
              </div>
              <p>$70</p>
            </div>
            <div className="absolute bottom-5 w-full pe-10">
              <div className="flex justify-between w-full">
                <span>Sub Total</span>
                <span>$70</span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span>$70</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 font-sans font-medium text-l border-2 border-black border-dashed p-7">
            <img src={companyLogo} alt="" />
            <div>
              <p>Love in every bite</p>
              <p>Freshly baked goods</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage