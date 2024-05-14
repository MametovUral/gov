import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function InticatorLayout() {
  return (
    <>
      <nav className="content-nav">
        <NavLink to={'/indi'}>ehtimol</NavLink>
      </nav>

      <div className="content-table">
        <Outlet />
      </div>
    </>
  );
}

export default InticatorLayout;
