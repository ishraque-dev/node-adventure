import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
function Header() {
  return (
    <div className="  bg-[#F9F9F9] py-5 px-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-[10%]">
          {/* left */}
          <h1 className="text-xl font-bold text-[#191825]">Node.adv</h1>
        </div>
        <div className="flex w-[50%] items-center justify-around">
          {/* middle */}
          {/* <Link className="font-medium text-[#18122B]">Home</Link>

          <Link className="font-medium text-[#18122B]">Tours</Link>
          <Link className="font-medium text-[#18122B]">About Us</Link> */}
          <NavBar />
        </div>
        <div className="mx-w-[20%] mr-10 hidden justify-end gap-5 rounded-md bg-[#EEEEEE] py-1 px-3 md:mr-0 md:flex">
          {/* right */}
          <Link className="border-r-3  text-lg font-medium">Login </Link>
          <Link className="rounded-lg   text-lg font-medium ">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
