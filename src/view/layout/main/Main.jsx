import React, { useState, useEffect } from "react";

// Components
import Header from "./../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

export default function Main() {
  // const [loggedIn, setloggedIn] = useState(false);
  const [loggedIn, setloggedIn] = useState(true);
  // useEffect(() => {
  //   if (
  //     localStorage.getItem("Authorization") &&
  //     localStorage.getItem("userType")
  //   ) {
  //     setloggedIn(true);
  //   } else {
  //     setloggedIn(false);
  //   }
  // }, []);

  return (
    <>
      {loggedIn === true ? (
        <div className="main_structure">
          <Header />
          <div className="main_body">
            <Sidebar />
            <div className="main_content">
              <div className="">
                <Outlet />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="">
          <div className="">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
