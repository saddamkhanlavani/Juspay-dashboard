import React from "react";
import "../scss/components/SideBar.scss";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/assets/icon-Byewind.png" alt="ByeWind Logo" className="logo" />
        <span className="brand">ByeWind</span>
      </div>

      <div className="sidebar-section">
        <div className="section-title">Favorites</div>
        <ul className="sidebar-list">
          <li className="sidebar-item active">Overview</li>
          <li className="sidebar-item">Projects</li>
        </ul>
      </div>

      <div className="sidebar-section">
        <div className="section-title">Dashboards</div>
        <ul className="sidebar-list">
          <li className="sidebar-item"> <img src="/assets/icon-marker.png" alt="Default logo" className="default" /> <img src="/assets/icon-default.png" alt="Default logo" className="default" /> Default</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" /> <img src="/assets/icon-eccommerce.png" alt="Default logo" className="commerce" /> eCommerce</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" />  <img src="/assets/icon-projects.png" alt="Default logo" className="projects" /> Projects</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" />  <img src="/assets/icon-onlinecourses.png" alt="Default logo" className="onlinecourses" />Online Courses</li>
        </ul>
      </div>

      <div className="sidebar-section">
        <div className="section-title">Pages</div>
        <ul className="sidebar-list">
          <li className="sidebar-item"> <img src="/assets/icon-downarrow.png" alt="Default logo" className="sidebar-arrow" />  <img src="/assets/icon-userprofile.png" alt="Default logo" className="userprofile" /> User Profile</li>
          <li className="sidebar-subitem">Overview</li>
          <li className="sidebar-subitem">Projects</li>
          <li className="sidebar-subitem">Campaigns</li>
          <li className="sidebar-subitem">Documents</li>
          <li className="sidebar-subitem">Followers</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" />  <img src="/assets/icon-account.png" alt="Default logo" className="account" /> Account</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" />  <img src="/assets/icon-corporate.png" alt="Default logo" className="corporate" /> Corporate</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" />  <img src="/assets/icon-blog.png" alt="Default logo" className="blog" /> Blog</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" />  <img src="/assets/icon-social.png" alt="Default logo" className="social" /> Social</li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
