/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./ProductSection.css"
import CakeCard from "../cards/CakeCard"

const ProductSection = ({header}) => {

  const item = {
    src :"https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg",
    name: "Chocolate cake",
    price: "$10",
    sizes : ["S","M","L"]
  }
  return (
    <div className="mt-20 pb-10">
        <h2>{header}</h2>
        <p className="mb-10 see-all">
          <Link to={`product-listing#${header.toLowerCase()}`}>See all</Link>
        </p>
        <div className="px-8 md:px-[10rem] flex-col md:flex-row flex gap-[32px]">
          <CakeCard  item={item}/>
          <CakeCard  item={item}/>
          <CakeCard  item={item}/>
        </div>
    </div>
  )
}

export default ProductSection