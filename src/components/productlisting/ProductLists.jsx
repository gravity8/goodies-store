/* eslint-disable react/prop-types */

import CakeCard from "../cards/CakeCard"


const ProductLists = ({id, items}) => {
  return (
    <div id={id} className="w-full flex flex-wrap gap-16 md:gap-2 mt-[33px]">
      {
        items?.length>0 && items.map((item,index)=>(
          <CakeCard key={index} item={item}/>
        ))
      }
    </div>
  )
}

export default ProductLists