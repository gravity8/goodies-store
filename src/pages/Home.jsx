/* eslint-disable react/prop-types */
import React from "react"
import Header from "../components/Header"
import ProductSection from "../components/productsection/ProductSection"

const Home = ({show, setShow, getItemForDescription}) => {
  return (
    <React.Fragment>
      <Header />
      <ProductSection show={show} setShow={setShow} header={"Cakes"} getItemForDescription={getItemForDescription}/>
      <ProductSection show={show} setShow={setShow} header={"Pastries"} getItemForDescription={getItemForDescription}/>
      <ProductSection show={show} setShow={setShow} header={"Bread"} getItemForDescription={getItemForDescription}/>
    </React.Fragment>
  )
}

export default Home