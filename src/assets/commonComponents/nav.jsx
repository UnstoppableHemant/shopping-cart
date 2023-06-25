import Buttons from "./buttons";
import navLogo from "../img/logo-color.png";
import cartImg from "../img/cart-logo.png";
import {Link} from "react-router-dom";

const Nav=({productCount})=>{
    return(
        <>
         {/* fixed z-10 */}
        <nav className="w-full place-items-center text-center p-3 bg-[#0074D9] fixed z-10">
            <img src={navLogo} className="w-60 mr-20 inline"/>
            <input type="search" className="h-8 p-2"/>
            <Buttons btnname="Search" style="m-2 pl-2 pr-2 h-8 bg-[#FF851B] text-white focus:scale-90"/>
            <Link to='/cart'><div className="inline-grid"><img src={cartImg} className="inline w-10"/><span className="mt-[-45px] ml-[20px] text-xl bg-white rounded-md w-4 h-6"><strong className="">{productCount}</strong></span></div></Link>
            {/*bg-[url('assets/img/cart-logo.png')]*/}
        </nav>
        </>
    )
}
export default Nav;