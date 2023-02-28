import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useWindowResize from '../../hooks/useWindowResize';
import BackDrop from '../UI/BackDrop';
const NavBar = () => {
  const navItems = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Tours',
      to: '/tours',
    },
    {
      name: 'About',
      to: '/about',
    },
    {
      name: 'Login',
      to: '/login',
      lg: false,
    },
    {
      name: 'Signup',
      to: '/signup',
      lg: false,
    },
  ];
  const location = useLocation();
  const [activeMenu] = useWindowResize();

  const [open, setOpen] = useState(false);
  //Prevent scrolling when the menu is opened
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const handleDropClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        {activeMenu && (
          <div className="flex items-center justify-center">
            {navItems
              .filter((item) => item.lg !== false)
              .map((navItem) => (
                <NavLink
                  key={navItem.name}
                  to={navItem.to}
                  className={`mx-7 lg:mx-11 ${
                    location.pathname === navItem.to && 'font-bold'
                  }`}
                >
                  {navItem.name}
                </NavLink>
              ))}
          </div>
        )}
        {!open ? (
          <FaBars
            className="sidebar absolute top-6 right-2.5 ml-auto cursor-pointer md:hidden lg:top-7 lg:hidden"
            onClick={() => {
              // setActiveMenu((pre) => !pre);
              setOpen(true);
            }}
          />
        ) : (
          <AiOutlineCloseCircle
            className="absolute left-4 top-3 z-50 cursor-pointer text-2xl md:hidden lg:hidden "
            onClick={() => {
              // setActiveMenu((pre) => !pre);
              setOpen(false);
            }}
          />
        )}
        {open && (
          <div className="sidebar absolute right-0 top-0 z-50 h-full w-1/3 animate-slideright rounded-l-md bg-[#232F3E]">
            {navItems.map((navItem) => (
              <NavLink
                key={navItem.name}
                to={navItem.to}
                className={`mx-10 ${
                  location.pathname === navItem.to && 'font-bold'
                }`}
              >
                <div
                  className="ml-3 text-white"
                  onClick={() => {
                    // setActiveMenu((pre) => !pre);
                    setOpen(false);
                  }}
                >
                  {navItem.name}
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </div>
      {ReactDOM.createPortal(
        <BackDrop onClick={handleDropClick} open={open} />,
        document.getElementById('back-drop-root')
      )}
    </>
  );
};
export default NavBar;
