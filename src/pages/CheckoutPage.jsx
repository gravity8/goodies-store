/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import companyLogo from "../assets/PlaceOrderLogo.svg"
import CartContext from "../context/CartContext";

const CheckoutPage = ({ setSuccessMessage }) => {
  const { cartItems, subtotal, handleClearCart } = useContext(CartContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const total = subtotal + 5000;

  const handleOrder = (e) => {
    e.preventDefault();
    
    if (!validateCardNumber(cardNumber)) {
      setErrorMessage('Invalid card number');
      return;
    }

    if (!validateExpiryDate(expiryDate)) {
      setErrorMessage('Invalid expiry date');
      return;
    }

    if (!validateCVV(cvv)) {
      setErrorMessage('Invalid CVV');
      return;
    }

    setErrorMessage('');
    handleClearCart();
    setSuccessMessage("Order has been placed successfully.")
  }

  const validateCardNumber = (cardNumber) => {
    let sanitizedCardNumber = cardNumber.replace(/\s+/g, '');
    return /^\d{16}$/.test(sanitizedCardNumber);
  };

  const validateExpiryDate = (expiryDate) => {
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) return false;
    let [month, year] = expiryDate.split('/').map(Number);
    if (month < 1 || month > 12) return false;
    let currentYear = new Date().getFullYear() % 100;
    if (year < currentYear || year > currentYear + 10) return false;
    return true;
  };

  const validateCVV = (cvv) => {
    return /^\d{3,4}$/.test(cvv);
  };

  return (
    <div className="checkoutPage pt-[6.94vw] px-[1rem] md:px-[10rem] relative mb-32">
      <h2 className="!text-[36px] text-left mb-[36px]">Shipping Address</h2>
      <form onSubmit={handleOrder}>
        <div className="flex flex-col md:flex-row w-full justify-between gap-[8%]">
          <div className="flex flex-col w-full md:w-[50%] mb-10 md:mb-0">
            <div className="flex flex-col md:flex-row justify-between gap-0 md:gap-[2.64vw]">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="!w-[100%] !h-[72px] md:!w-[17.57vw] md:!h-[5vw]"
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                className="!w-[100%] !h-[72px] md:!w-[17.57vw] md:!h-[5vw]"
              />
            </div>
            <input
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              type="text"
              placeholder="Street Address"
            />
            <input
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
              type="text"
              placeholder="Apartment"
            />
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="City"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Phone"
            />
            <h2 className="!text-[36px] text-left mb-[36px] mt-[36px]">Payment Details</h2>
            <input
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              type="text"
              placeholder="Card Number"
            />
            <input
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              type="text"
              placeholder="Cardholder Name"
            />
            <input
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              type="text"
              placeholder="Expiry Date (MM/YY)"
            />
            <input
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              type="text"
              placeholder="CVV"
              className={`${errorMessage ? "!mb-1" :""}`}
            />
            {errorMessage && <p className="text-red-500 text-[18px] mb-8">{errorMessage}</p>}
            <button type="submit">Place Order</button>
          </div>
          <div className="flex flex-col w-full md:w-[50%] gap-10 !h-[650px] overflow-hidden mt-[87px] md:mt-[0]">
            <div className="mb-10 bg-[#fdf8fb] shadow-md rounded-[5px] relative flex-1 order-summary h-[60%]">
              <h2 className="!text-[28px]">Order Summary</h2>
              <div className="px-10 pt-10 h-[66%] overflow-scroll">
                {cartItems.length > 0 && cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between mb-6">
                    <div>
                      <p className="!text-[24px]">{item.name}</p>
                      <p className="item-summary !text-[18px]">{item.quantity} - {item.size}</p>
                    </div>
                    <p className="!text-[20px]">&#8358;{item.quantity * item.price}</p>
                  </div>
                ))}
                {cartItems.length === 0 &&
                  <div className="flex justify-center items-center mb-6">
                    <p className="!text-[24px]">No item to display</p>
                  </div>
                }
              </div>
              <div className="absolute bottom-0 w-full py-8 px-10 pe-10 bg-[#fdf8fb]">
                <div className="flex justify-between w-full">
                  <span className="!text-[20px]">Sub Total</span>
                  <span className="!text-[18px]">&#8358;{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="!text-[20px]">Total</span>
                  <span className="!text-[18px]">&#8358;{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 font-sans font-medium text-l border-2 border-black border-dashed p-7">
              <img src={companyLogo} alt="" />
              <div>
                <p className="!text-[24px]">Love in every bite</p>
                <p className="!text-[24px]">Freshly baked goods</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CheckoutPage
