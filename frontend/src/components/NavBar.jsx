import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import React from "react";

const NavBar = ({ searchTerm, user, setSearchTerm }) => {
  const navigate = useNavigate();
  if (!user) {
    return null;
  }

  return (
    <div className=' flex md:gap-5 mt-5 pb-7 w-full gap-2'>
      <div className='flex justify-start items-center w-full -px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm'>
        <IoMdSearch
          fontSize={21}
          className='ml-1'></IoMdSearch>
        <input
          type='text'
          placeholder='Search'
          onFocus={() => navigate("/search")}
          value={searchTerm}
          className='p-2 w-full bg-white ouline-none'
          onChange={(e) => setSearchTerm(e.target.value)}></input>
      </div>
      <div className='flex gap-3'>
        <Link
          to={`user-profile/${user?._id}`}
          className='hidden md:block'>
          <img
            src={user?.image}
            alt='user'
            className='w-14 h-12 rounded-lg'></img>
        </Link>
        <Link
          to='/create-pin'
          className='bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center'>
          <IoMdAdd></IoMdAdd>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
