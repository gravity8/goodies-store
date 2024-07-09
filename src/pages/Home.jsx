import React from "react"
import Header from "../components/Header"
import ProductSection from "../components/productsection/ProductSection"

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <ProductSection header={"Cakes"}/>
      <ProductSection header={"Pastries"}/>
      <ProductSection header={"Bread"}/>
    </React.Fragment>
  )
}

export default Home