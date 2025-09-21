import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
