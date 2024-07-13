/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";

import "./Card.css"
import CartContext from "../../context/CartContext";



const CakeCard = ({item, show, setShow, getItemForDescription}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState(0);
  const [data,setData] = useState({});
  
  const {
    handleAddToCart,
  } = useContext(CartContext);
  

  const handleItemDescriptionModal = (item) =>{
      setShow(!show)
      getItemForDescription(item)
  }

    const sizes = ["S","M","L"];


  useEffect(()=>{
    setData({
      id: item.id,
      image: `https://api.timbu.cloud/images/${item.photos[0]?.url}`,
      name: item.name,
      price: item.current_price[0].NGN[0],
      size: sizes[activeSize],
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
            backgroundImage: `url(https://api.timbu.cloud/images/${item.photos[0]?.url})`, 
            backgroundSize:"cover", 
            backgroundPosition:"center center",
            backgroundRepeat: "no-repeat" 
          }}
        >
          <div className="card-image-overlay flex justify-center items-center rounded-tl-[1rem] rounded-tr-[1rem]">
            <button className="!w-[50%] !h-[40px]" onClick={()=>handleItemDescriptionModal(item)}>View more</button>
          </div>
        </div>
        <div className=" flex-[0.25] flex flex-col px-7 gap-2 py-5">
            <div className="flex justify-between items-center">
                <h3>{item.name}</h3>
                <div className="flex gap-[0.8rem]">
                  {
                    ["S","M","L"].map((size,index)=>(
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
              <p className="text-[24px]">&#8358;{item.current_price[0].NGN[0]}</p>
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