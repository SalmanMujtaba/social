import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import CreatePin from "../components/CreatePin";
import Feed from "../components/Feed";
import NavBar from "../components/NavBar";
import PinDetails from "../components/PinDetails";
import Search from "../components/Search";

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <NavBar
          searchTerm={searchTerm}
          user={user}
          setSearchTerm={setSearchTerm}></NavBar>
      </div>
      <div className='h-full'>
        <Routes>
          <Route
            path='/'
            element={<Feed />}></Route>
          <Route
            path='/category/:categoryId'
            element={<Feed />}></Route>
          <Route
            path='/pin-detail/:pinId'
            element={<PinDetails user={user} />}></Route>
          <Route
            path='/create-pin'
            element={<CreatePin user={user} />}></Route>
          <Route
            path='/search'
            element={
              <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
