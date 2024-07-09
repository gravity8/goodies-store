/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";

import "./Card.css"
import CartContext from "../../context/CartContext";


const CakeCard = ({item}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState(0);
  const [data,setData] = useState({});

  const {
    handleAddToCart,
  } = useContext(CartContext);

  useEffect(()=>{
    setData({
      id: item.id,
      image: item.src,
      name: item.name,
      price: item.price,
      size: item.sizes[activeSize],
      quantity: quantity,
    })
  },[activeSize, quantity])

  //To set a nav link active
 const setButtonActive = (index) => {
  setActiveSize(index)
}

const handleInputChange = (e) =>{
  const value = e.target.value;
  if (/^\d*$/.test(value)) {
      setQuantity(Number(e.target.value));
  }
}

  return (
    <div className="flex flex-col rounded-[1rem] card">
        <div 
          className="md:flex-[0.75] flex-auto w-[100%] h-[315px] rounded-tl-[1rem] rounded-tr-[1rem] image"
          style={{
            backgroundImage: `url(${item.src})`, 
            backgroundSize:"cover", 
            backgroundPosition:"center center",
            backgroundRepeat: "no-repeat" 
          }}
        >
          
        </div>
        <div className=" flex-[0.25] flex flex-col px-7 gap-2 py-5">
            <div className="flex justify-between items-center">
                <h3>{item.name}</h3>
                <div className="flex gap-[0.8rem]">
                  {
                    item.sizes.length>0 && item.sizes.map((size,index)=>(
                      <div 
                        id={`size-${index}`}
                        className={`button  ${index===activeSize? "active" :""}`} 
                        onClick={()=>setButtonActive(index)} 
                        key={index}
                        >
                          {size}
                        </div>
                    ))
                  }
                  <div className="button" onClick={()=>handleAddToCart(data)}>
                    <BsCartPlus />
                  </div>
                </div>
            </div>
            <div className="flex justify-between items-center quantity-counter">
              <p className="text-[1.2rem]">${item.price}</p>
              <div className="flex border border-black rounded-lg">
                <button
                  onClick={()=>quantity>1 && setQuantity(quantity-1)}
                >-</button>
                <input 
                  type="text" 
                  onChange={handleInputChange}
                  value={quantity}
                />
                <button
                  onClick={()=>setQuantity(quantity+1)}
                >+</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CakeCard