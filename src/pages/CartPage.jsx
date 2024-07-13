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
    
  const total = subtotal + 5000; // Assuming a fixed delivery fee of $5

  return (
    <div className=" cart">
      <h2 className="!text-[36px] text-left md:ps-[8rem]">Cart</h2>
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
          <p className="flex justify-between !text-[20px]"><span>Subtotal</span> <span>&#8358;{subtotal.toFixed(2)}</span></p>
          <p className="flex justify-between !text-[20px]"><span>Delivery</span> <span>&#8358;5000.00</span></p>
          <p className="flex justify-between !text-[20px]"><span>Total</span>  <span>&#8358;{total.toFixed(2)}</span></p>
          <div className="flex justify-center md:justify-end">
            <Link to={"/checkout"} className="!text-[18px] flex justify-center items-center bg-[#363636] -mr-6 mt-7 md:mt-5 rounded-md !w-[230px] !h-[50px] text-white md:hover:text-[#363636] md:hover:bg-[#FFD2D9]">Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage