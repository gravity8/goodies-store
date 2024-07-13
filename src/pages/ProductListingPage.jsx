import cakeIcon from "../assets/cake-logo-icon.svg"
import pastriesIcon from "../assets/pastries.svg"
import breadIcon from "../assets/bread.svg"
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProductLists from "../components/productlisting/ProductLists";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const ORG_ID = import.meta.env.VITE_ORG_ID;
const APP_ID = import.meta.env.VITE_APP_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

const ProductListingPage = ({show, setShow}) => {
  const location = useLocation();
  const [activeOption, setActiveOption] = useState("cakes");
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
        return <ProductLists 
          show = {show} setShow={setShow}
          loading={loading} id={"cakes"} items={items.filter((item)=>item.categories[0]?.name==="cakes")} />
      case 'pastries':
        return <ProductLists 
        show = {show} setShow={setShow}
        loading={loading} id={"pastries"} items={items.filter((item)=>item.categories[0]?.name==="pastries")} />
      case 'bread':
        return <ProductLists 
        show = {show} setShow={setShow}
        loading={loading} id={"bread"} items={items.filter((item)=>item.categories[0]?.name==="bread")} />
    }
  };

  return (
    <div className="productListing px-[1rem] md:px-[12vw]">
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