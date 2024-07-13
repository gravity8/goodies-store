/* eslint-disable react/prop-types */

import CakeCard from "../cards/CakeCard"
import { Puff } from "react-loader-spinner";
import { useState } from "react";


const ProductLists = ({id, items,loading,show, setShow, getItemForDescription}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

    // Calculate total pages
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Slice items for the current page
    const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

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
        currentItems.length > 0 && currentItems.map((item,index)=>(
          <CakeCard 
          show = {show} setShow={setShow}
          key={index} item={item} getItemForDescription={getItemForDescription}/>
        ))
      }
    </div>
  }
    <div className="pagination w-[280px] md:w-[400px] flex overflow-scroll mx-auto justify-center gap-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`page-button h-[40px] w-[40px] border border-[#EC566D] hover:bg-[#EC566D] hover:text-white rounded-full flex justify-center items-center ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
  </>
  )
}

export default ProductLists