import cakeIcon from "../assets/cake-logo-icon.svg"
import pastriesIcon from "../assets/pastries.svg"
import breadIcon from "../assets/bread.svg"
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProductLists from "../components/productlisting/ProductLists";
import { v4 as uuidv4 } from 'uuid';


const ProductListingPage = () => {
  const location = useLocation();
  const [activeOption, setActiveOption] = useState("cakes");

  const optionItems = [
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

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setActiveOption(hash);
    }
  }, [location])

  const setButtonActive = (index) => {
    setActiveOption(index)
  }

  const renderItems = () => {
    switch (activeOption) {
      case 'cakes':
        return <ProductLists id={"cakes"} items={optionItems} />
      case 'pastries':
        return <ProductLists id={"pastries"} items={optionItems} />
      case 'bread':
        return <ProductLists id={"bread"} items={optionItems} />
    }
  };

  return (
    <div className="productListing px-[1rem] md:px-[10rem]">
      <h1>Product Listing</h1>

      <div className="options flex gap-6 md:gap-16 justify-center py-10 ">
          <Link to={"#cakes"}>
            <div 
                className={`px-5 py-3 md:px-5 md:py-5 ${"cakes"===activeOption? "active" :""}`}
                onClick={()=>setButtonActive("cakes")} 
              >
              <img src={cakeIcon} />
              <p className=" cursor-pointer">Cakes</p>
            </div>
          </Link>
          <Link to={"#pastries"}>
            <div 
              className={`px-5 py-3 md:px-5 md:py-5 ${"pastries"===activeOption? "active" :""}`}
              onClick={()=>setButtonActive("pastries")} 
            >
              <img src={pastriesIcon} />
              <p className=" cursor-pointer">Pastries</p>
            </div>
          </Link>
          <Link to={"#bread"}>
            <div 
              className={`px-5 py-3 md:px-5 md:py-5 ${"bread"===activeOption? "active" :""}`}
              onClick={()=>setButtonActive("bread")} 
            >
              <img src={breadIcon} />
              <p className=" cursor-pointer">Bread</p>
            </div>
        </Link>
      </div>

      <div className="Option-item-display">
        {renderItems()}
      </div>
    </div>
  )
}

export default ProductListingPage