/* eslint-disable react/prop-types */

import CakeCard from "../cards/CakeCard"
import { Puff } from "react-loader-spinner";


const ProductLists = ({id, items,loading,show, setShow, getItemForDescription}) => {

  return (
    <>
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
    <div id={id} className="w-full flex flex-wrap gap-16 md:gap-2 mt-[33px]">
      {
        items?.length>0 && items.map((item,index)=>(
          <CakeCard 
          show = {show} setShow={setShow}
          key={index} item={item} getItemForDescription={getItemForDescription}/>
        ))
      }
    </div>
  }
  </>
  )
}

export default ProductLists