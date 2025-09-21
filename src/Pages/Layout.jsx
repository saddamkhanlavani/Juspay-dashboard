import React from "react";
import Sidebar from "../Components/SideBar";
import Header from "../Components/Header";
import {SideBar2 } from "../Components/SideBar2";
import "../scss/Layout.scss";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">{children}</div>
      </div>
      <SideBar2 />
    </div>
  );
};
