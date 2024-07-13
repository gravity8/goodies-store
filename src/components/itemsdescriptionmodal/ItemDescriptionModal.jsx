/* eslint-disable react/prop-types */
import { HiXMark } from "react-icons/hi2"
import "./ItemDesciptionModal.css"


const ItemDescriptionModal = ({show, setShow}) => {

    const toggleBodyScrollProperty = () => {
        if(!show){
          document.body.classList.add("no-scroll")
        }
        else{
          document.body.classList.remove("no-scroll")
        }
      }

    const handleItemDescriptionModal = () =>{
        toggleBodyScrollProperty()
        setShow(!show)
    }
  return (
    <div 
        onClick={()=>setShow(!show)}
        className={`modal-bg fixed top-0 ${show ? "show" : ""} w-full fixed z-[400] bg-black/25 h-[100vh] justify-center items-center`}>
          <div 
            onClick={e=>e.stopPropagation()}
            className={`item-description-card ${show ? "show" : ""} rounded-xl`}>
                <HiXMark size={25} className={`${show ? "show" : ""}`} onClick={handleItemDescriptionModal}/>
                
        </div>
    </div>
  )
}

export default ItemDescriptionModal