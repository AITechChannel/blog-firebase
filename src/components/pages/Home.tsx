import React from "react";
import { Outlet, useLocation, useMatches, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const matches = useMatches();

  return (
    <div onClick={() => navigate("/dashboard")}>
      <div style={{ background: "red", height: 50, width: 50 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
