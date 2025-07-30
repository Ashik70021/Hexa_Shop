import { Link } from "react-router-dom";
import Button from "../Reusable_component/Button";

const Navbar = () => {

    const link = <>
        <li className='text-lg hover:text-[#F63232] '> <Link to="/">Home</Link> </li>
        <li className='text-xl hover:text-[#F63232] '> <Link to="/mens">Men&apos;s</Link> </li>
        <li className='text-xl hover:text-[#F63232] '> <Link to="/womens">Womrn&apos;s</Link> </li>
        <li className='text-xl hover:text-[#F63232] '> <Link to="/kids">kid&apos;s</Link> </li>
        <li className='text-xl hover:text-[#F63232] '> <Link to="/about">About us</Link> </li>
        <li className='text-xl hover:text-[#F63232] '> <Link to="/contact">Contact</Link> </li>
    </>
    return (
        <div className=" text-[#000000] bg-[#D9D9D9] relative z-10">
            <nav className=' navbar pl-0 md:pl-4 pr-2 md:pr-4'>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-12" src="../../../src/assets/images/logo.png" alt="logo" />
                        <div>
                            <p className="text-md md:text-xl font-bold pl-2 md:pl-4">HEXASHOP</p>
                            <p className="text-sm md:text-md pl-2 md:pl-4">ONLINE SHOPPING</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex text-[#000000]">
                    <ul className="menu shadow-none menu-horizontal px-1">
                        {link}
                    </ul>

                </div>
                <div className="navbar-end">
                    <Link to="signin"><Button ButtonText={"Login/Signup"}></Button></Link>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;