/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";

import "./Card.css"


const CakeCard = ({item}) => {
  const [quantity, setQuantity] = useState(1)
  const [activeSize, setActiveSize] = useState(0);

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
    <div className="flex flex-col gap-6 rounded-[1rem] card">
        <div className=" flex-[0.75]">
          <img src={item.src} className="image" alt="" loading="lazy"/>
        </div>
        <div className=" flex-[0.25] flex flex-col px-7 gap-2">
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
                  <div className="button">
                    <BsCartPlus />
                  </div>
                </div>
            </div>
            <div className="flex justify-between items-center quantity-counter">
              <p className="text-[1.2rem]">{item.price}</p>
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