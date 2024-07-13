/* eslint-disable react/prop-types */
import { HiXMark } from "react-icons/hi2"
import "./ItemDesciptionModal.css"
import { BsCartPlus } from "react-icons/bs";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { useState, useEffect } from "react";


const ItemDescriptionModal = ({show, setShow, item}) => {
    const {
        handleAddToCart,
      } = useContext(CartContext);
    const [data,setData] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [activeSize, setActiveSize] = useState(0);
    const sizes = ["S","M","L"];


    const handleItemDescriptionModal = () =>{
        setShow(!show)
    }

    useEffect(() => {
        if (item) {
          console.log(item);
          setData({
            id: item?.id,
            image: `https://api.timbu.cloud/images/${item?.photos[0]?.url}`,
            name: item?.name,
            price: item?.current_price[0].NGN[0],
            size: sizes[activeSize],
            quantity: quantity,
          });
        }
      }, [item, activeSize, quantity]);

      const handleInputChange = (e) =>{
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setQuantity(Number(e.target.value));
        }
      }

      const setButtonActive = (index) => {
        setActiveSize(index)
      }

  return (
    <div 
        onClick={()=>setShow(!show)}
        className={`modal-bg fixed top-0 ${show ? "show" : ""} w-full fixed z-[400] bg-black/25 h-[100vh] justify-center items-center`}>
          <div 
            onClick={e=>e.stopPropagation()}
            className={`item-description-card ${show ? "show" : ""} rounded-xl !h-[90vh] md:!h-[75vh] overflow-scroll`}>
                <div className="flex justify-end py-4 pe-4">
                    <HiXMark size={27} className={`cancel_button ${ show ? "show" : ""}`} onClick={handleItemDescriptionModal}/>
                </div>

                <div className="flex flex-col md:flex-row items-center h-[100%] md:h-[70%] md:mt-4 md:overflow-hidden">
                    <div className="flex flex-col flex-[0.35] items-center md:ps-10 mb-10">
                        <div className="w-[250px] h-[250px] rounded-lg mb-10">
                            <img 
                            className={"w-[100%] h-[100%] rounded-lg"}
                            src={`https://api.timbu.cloud/images/${item?.photos[0]?.url}`} 
                            alt={item?.name} />
                        </div>
                        

                        <div className="flex gap-5 mb-5">
                        {
                                ["S","M","L"].map((size,index)=>(
                                <div 
                                    id={`size-${index}`}
                                    className={`button  ${index===activeSize? "active" :""} h-[40px] w-[40px]`} 
                                    onClick={()=>setButtonActive(index)} 
                                    key={index}
                                    >
                                    {size}
                                    </div>
                                ))
                            }
                        </div>
                        <p className="mb-5 text-[20px]">Price: &#8358;{item?.current_price[0].NGN[0]*quantity}</p>
                        <div className="flex justify-between items-center quantity-counter">
                                {/* <p className="text-[24px]">&#8358;{item?.current_price[0]?.NGN[0]}</p> */}
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
                    <div className="flex-[0.65] px-10 pb-10">
                        <h2>{item?.name}</h2>
                        <div className="mb-5">{item?.description}</div>
                        <div>
                            <button 
                                className=" flex justify-center gap-3 items-center h-[50px] bg-[#363636] text-[20px] text-white w-[100%] rounded-lg hover:bg-[#FFD2D9] hover:text-black"
                                onClick={()=>handleAddToCart(data)}> 
                                
                                Add to cart <span ><BsCartPlus /></span>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ItemDescriptionModal