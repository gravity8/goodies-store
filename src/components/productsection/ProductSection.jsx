/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./ProductSection.css"
import CakeCard from "../cards/CakeCard"
import { v4 as uuidv4 } from 'uuid';

const ProductSection = ({header}) => {

  const items = [
    {
      id: uuidv4(),
      src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
      name: "Chocolate cake",
      price: 10,
      sizes : ["S","M","L"]
    },
    {
      id: uuidv4(),
      src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
      name: "Chocolate cake",
      price: 10,
      sizes : ["S","M","L"]
    },
    {
      id: uuidv4(),
      src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
      name: "Chocolate cake",
      price: 10,
      sizes : ["S","M","L"]
    },
    {
      id: uuidv4(),
      src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
      name: "Chocolate cake",
      price: 10,
      sizes : ["S","M","L"]
    },
    {
      id: uuidv4(),
      src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
      name: "Chocolate cake",
      price: 10,
      sizes : ["S","M","L"]
    },
    {
      id: uuidv4(),
      src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
      name: "Chocolate cake",
      price: 10,
      sizes : ["S","M","L"]
    },
    {
      id: uuidv4(),
      src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
      name: "Chocolate cake",
      price: 10,
      sizes : ["S","M","L"]
    },
    {
      id: uuidv4(),
      src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
      name: "Chocolate cake",
      price: 10,
      sizes : ["S","M","L"]
    }
  ]
  return (
    <div className="mt-20 pb-10">
        <h2>{header}</h2>
        <p className="mb-10 see-all">
          <Link to={`product-listing#${header.toLowerCase()}`}>See all</Link>
        </p>
        <div className=" px-[5rem] md:px-[10rem] flex-col md:flex-row flex flex-wrap w-full">
          {
            items.length>0 && items.map((item, index)=>(
              <CakeCard  key={index} item={item}/>
            ))
          }
        </div>
    </div>
  )
}

export default ProductSection