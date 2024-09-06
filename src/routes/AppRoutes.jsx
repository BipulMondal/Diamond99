import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "../view/auth/Login";
import Main from "../view/layout/main/Main";
import Dashboard from "../view/Dashboard/Dashboard";
import GameDetails from "../view/gameDetails/GameDetails";


function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.pathname || "/";
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (from === "/") {
        navigate("/");
      } else {
        navigate(from, { replace: true });
      }
      setloggedIn(true);
    } else {
      navigate("/login");
    }
  }, [loggedIn]);

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Dashboard />} />
        <Route path="gamedetails" element={<GameDetails />} />
    
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
