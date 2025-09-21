import React from "react";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import {SideBar2 } from "../components/SideBar2";
import "../scss/Layout.scss";

export const Layout = ({ page, children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">{children}</div>
      </div>


{page ? <SideBar2 /> : null}


    </div>
  );
};
