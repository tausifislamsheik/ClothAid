import { NavLink } from "react-router-dom";
import navLogo from '../assets/clothes.png'
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const navLinks = <>
            <NavLink>Home</NavLink>
            <NavLink>Donation Campaigns</NavLink>
            <NavLink>How to Help</NavLink>
            <NavLink>Dashboard</NavLink>
         </>
    return (
        <div className="navbar bg-base-100 py-8">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {navLinks}
                </ul>
                </div>
                <div className="flex gap-2 items-center">
                <img className="w-8 md:w-10" src={navLogo} alt="" />
                <p className="text-xl md:text-3xl font-bold">ClothAid</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6 text-lg">
                {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <FaUserCircle className="text-3xl" />
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;