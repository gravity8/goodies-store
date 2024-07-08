import Logo from "../assets/footer-logo.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-[15vh] md:gap-[10vw] footer justify-center items-center">
        <div>
            <img src={Logo}/>
        </div>
        <div className="text-white">
            <h3>Contact us</h3>
            <div className="flex flex-col gap-4 mt-2">
                <Link to="">Instagram</Link>
                <Link to="">Facebook</Link>
                <Link to="">Twitter</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Footer