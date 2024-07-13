/* eslint-disable react/prop-types */
import React from "react"
import Header from "../components/Header"
import ProductSection from "../components/productsection/ProductSection"

const Home = ({show, setShow}) => {
  return (
    <React.Fragment>
      <Header />
      <ProductSection show={show} setShow={setShow} header={"Cakes"}/>
      <ProductSection show={show} setShow={setShow} header={"Pastries"}/>
      <ProductSection show={show} setShow={setShow} header={"Bread"}/>
    </React.Fragment>
  )
}

export default Home