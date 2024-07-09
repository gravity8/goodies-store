import { useContext } from "react";
import CartItem from "../components/CartItem";
import CartContext from "../context/CartContext";
import {Link} from "react-router-dom"

const CartPage = () => {
  const {
      subtotal, 
      handleRemoveFromCart,
      handleUpdateQuantity,
      cartItems,
    } = useContext(CartContext)
    
  const total = subtotal + 5; // Assuming a fixed delivery fee of $5

  return (
    <div className="cart">
      <h2 className="!text-[2.2rem] md:!text-[2.5rem] text-left md:ps-[8rem]">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center my-24">Your cart is empty.</p>
      ) : (
        <ul className="flex-col gap-5 md:px-[8rem]">
          {cartItems.map((item,index) => (
            <CartItem
              key={index}
              item={item}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary  md:px-[19rem] border-t-slate-200">
          <p className="flex justify-between"><span>Subtotal</span> <span>${subtotal.toFixed(2)}</span></p>
          <p className="flex justify-between"><span>Delivery</span> <span>$5.00</span></p>
          <p className="flex justify-between"><span>Total</span>  <span>${total.toFixed(2)}</span></p>
          <div className="flex justify-center md:justify-end">
            <Link to={"/checkout"} className="bg-[#363636] -mr-6 mt-7 md:mt-5 rounded-md px-20 py-2 text-white md:hover:text-[#363636] md:hover:bg-[#FFD2D9]">Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage