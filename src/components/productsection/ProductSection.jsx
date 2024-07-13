/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./ProductSection.css"
import CakeCard from "../cards/CakeCard"
import { Puff } from "react-loader-spinner";
import { useEffect, useState } from "react";
import axios from "axios";


const ORG_ID = import.meta.env.VITE_ORG_ID;
const APP_ID = import.meta.env.VITE_APP_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

const ProductSection = ({header, show, setShow, getItemForDescription}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true);
    axios.get(`/api/products?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`)
    .then((response) => {
      setItems(response.data.items);
      setLoading(false);
    });
  },[])

  // const items = [
  //   {
  //     id: uuidv4(),
  //     src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
  //     name: "Chocolate cake",
  //     price: 10,
  //     sizes : ["S","M","L"]
  //   },
  //   {
  //     id: uuidv4(),
  //     src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
  //     name: "Chocolate cake",
  //     price: 10,
  //     sizes : ["S","M","L"]
  //   },
  //   {
  //     id: uuidv4(),
  //     src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
  //     name: "Chocolate cake",
  //     price: 10,
  //     sizes : ["S","M","L"]
  //   },
  //   {
  //     id: uuidv4(),
  //     src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
  //     name: "Chocolate cake",
  //     price: 10,
  //     sizes : ["S","M","L"]
  //   },
  //   {
  //     id: uuidv4(),
  //     src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
  //     name: "Chocolate cake",
  //     price: 10,
  //     sizes : ["S","M","L"]
  //   },
  //   {
  //     id: uuidv4(),
  //     src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
  //     name: "Chocolate cake",
  //     price: 10,
  //     sizes : ["S","M","L"]
  //   },
  //   {
  //     id: uuidv4(),
  //     src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
  //     name: "Chocolate cake",
  //     price: 10,
  //     sizes : ["S","M","L"]
  //   },
  //   {
  //     id: uuidv4(),
  //     src :"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
  //     name: "Chocolate cake",
  //     price: 10,
  //     sizes : ["S","M","L"]
  //   }
  // ]
  return (
    <>
      <div className="mt-20 pb-10">
          <h2 className="!text-[70px]">{header}</h2>
          <p className="mb-10 !text-[24px] see-all">
            <Link to={`product-listing#${header.toLowerCase()}`}>See all</Link>
          </p>
          {
            loading ? 
            
            <Puff
              visible={true}
              height="50"
              width="50"
              color="#EC566D"
              ariaLabel="puff-loading"
              wrapperStyle={{justifyContent: 'center'}}
              wrapperClass=""
            />
            :
            <div className="px-8 md:px-[12vw] flex-col md:flex-row flex flex-wrap w-full gap-16 md:gap-2">
              {
                items?.length>0 && 
                items.filter((item)=>item?.categories[0].name===header.toLowerCase())
                      .slice(0,6)
                      .map((item, index)=>(
                        <CakeCard show={show} setShow={setShow} key={index} item={item} getItemForDescription={getItemForDescription}/>
                      ))
              }
            </div>
          }
      </div>
    </>
  )
}
export default ProductSection;