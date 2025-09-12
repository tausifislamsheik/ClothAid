import { Link, NavLink } from "react-router-dom";
import navLogo from '../assets/clothes.png'
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {

    const {user,logoutUser} = useContext(AuthContext);

    const handleLogout = () =>{
          logoutUser()
          .then(() =>{
            toast('User logout successfully')
          })
          .catch((error) => console.log(error.message))
    }

    const navLinks = <>
            <NavLink to='/' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-600 font-semibold" : ""
                    }>Home</NavLink>
            <NavLink to='/donation-campaigns' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-600 font-semibold" : ""
                    }>Donation Campaigns</NavLink>
            <NavLink to='/how-to-help' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-600 font-semibold" : ""
                    }>How to Help</NavLink>
            <NavLink to='/dashboard' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-600 font-semibold" : ""
                    }>Dashboard</NavLink>
         </>
    return (
        <div className="navbar bg-base-100 py-8 sticky top-0 z-50">
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
                <div onClick={() => window.location.reload()} className="flex gap-2 items-center cursor-pointer">
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
                
                {
                    user ? <div className="flex items-center gap-3"> 
                    <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="profile" />
                        <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1">{user?.displayName}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 p-5 shadow-sm space-y-2">
                        <p className='text-sm font-semibold'>{user?.email}</p>
                        <Link className="btn border hover:border-red-600 hover:bg-white bg-red-600 text-white hover:text-red-600 mx-7" onClick={handleLogout}>Log-out</Link>
                        
                    </ul>
                    </div>
                    </div> :<>
                    <FaUserCircle className="text-3xl" />
                    <Link to='/login'>
                   <button className="btn border hover:border-orange-600 hover:bg-white bg-orange-600 text-white hover:text-orange-600 px-7">Login</button>
                  </Link>
                    </> 
                }
            </div>
        </div>
    );
};

export default Navbar;