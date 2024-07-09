/* eslint-disable react/prop-types */

import { useContext, useState } from "react"
import CartContext from "../context/CartContext";
import { MdDelete } from "react-icons/md";



const CartItem = ({
    item
}) => {

  const { handleRemoveFromCart, handleUpdateQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(item.quantity);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setQuantity(value);
      handleUpdateQuantity(item.id, value);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    handleUpdateQuantity(item.id, newQuantity);
  };

  const handleDecrease = () => {
    const newQuantity = Math.max(quantity - 1, 1); // Ensure quantity doesn't go below 1
    setQuantity(newQuantity);
    handleUpdateQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item relative !pb-20 md:!pb-[20px]">
      <div className="item-details items-start w-full md:w-[unset] flex flex-col md:flex-row md:items-center gap-[1.5rem]">
        <div
        className="w-[100%] h-[400px] md:w-[150px] md:h-[150px] rounded-lg"
          style={{
            backgroundImage: `url(${item.image})`, 
            backgroundSize:"cover", 
            backgroundPosition:"center center",
            backgroundRepeat: "no-repeat" 
          }}

        >
        </div>
        <div className="flex flex-col items-start">
          <h3>{item.name}</h3>
          <p>Size: {item.size}</p>
        </div>
      </div>
      <div className="flex border absolute md:relative bottom-8 right-15 md:bottom-0 border-grey rounded-lg quantity-control">
        <button onClick={handleDecrease}>−</button>
        <input 
          type="text" 
          onChange={handleInputChange}
          value={quantity}
        />
        <button onClick={handleIncrease}>+</button>
      </div>
      <div className="flex flex-col md:gap-2 gap-1 absolute md:relative bottom-20 md:bottom-0 right-0 items-center">
        <p>${item.price * quantity}</p>
        <button className="remove-button flex justify-center" onClick={() => handleRemoveFromCart(item.id)}>
          <MdDelete size={24}/>
        </button>
      </div>
    </div>
  );
}

export default CartItem