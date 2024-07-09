import {Link} from "react-router-dom"

const Header = () => {

  return (
    <section className="hero-section relative flex flex-col gap-16 items-center justify-center">
      <div className="absolute w-full h-full bg-black/25"></div>
      <h1 className="hero-text">Bite into Happiness <br /> Savor the Sweetness</h1>
      <Link to={"/product-listing"} className="hero-button rounded-[5px]">
        <p >Shop now</p>
      </Link>
    </section>
  )
}

export default Header