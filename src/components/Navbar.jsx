import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium sticky top-0">
      <Link to="/">
        <h1 className="text-3xl font-extrabold text-white">VASTRA VERSE</h1>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-white">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-white mx-auto hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-white mx-auto hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-white mx-auto hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-white mx-auto hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
       <Link to="/collection">
       <img
          onClick={()=>setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer invert"
          alt="Search"
        />
        </Link> 

        <div className="group relative">
          <Link to="/login">
            <img src={assets.profile_icon} className="w-5 cursor-pointer invert" alt="Profile" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-black rounded">
              <p className="cursor-pointer hover:text-purple-400">My Profile</p>
              <p className="cursor-pointer hover:text-purple-400">Orders</p>
              <p className="cursor-pointer hover:text-purple-400">LogOut</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5 invert" alt="cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden invert"
          alt="menu"
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`fixed top-0 right-0 h-full z-50 bg-black transition-all duration-300 ${visible ? 'w-3/4 max-w-xs px-4' : 'w-0'
          } overflow-y-auto`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer border-b"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180 " alt="back" />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className="py-3 pl-4 border-b" to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-4 border-b" to="/collection">
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-4 border-b" to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-4 border-b" to="/contact">
            CONTACT
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
