import React, { useEffect, useState } from "react";

import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { client } from "../client";
import logo from "../assets/logo.png";
import { userQuery } from "../utils/data";

export const Home = () => {
  const [user, setUser] = useState(null);
  const userInfo =
    !!localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
  const [toggleSideBar, setToggleSideBar] = useState(false);
  useEffect(() => {
    const query = userQuery(userInfo?._id);
    client.fetch(query).then((data) => {
      console.log(data[0]);
      setUser(data[0]);
    });
    return () => {
      // cleanup;
    };
  }, []);

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-100 ease-out '>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar></Sidebar>
      </div>
      <div className='flex md:hidden flex-row'>
        <HiMenu
          fontSize={40}
          className='cursor-pointer'
          onClick={() => setToggleSideBar(false)}></HiMenu>
        <Link to='/'>
          <img
            className='w-28'
            src={logo}
            alt='logo'></img>
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          {" "}
          <img
            className='w-28'
            src={user?.image}
            alt='user'></img>
        </Link>
      </div>
    </div>
  );
};
