import React from "react";
import {useState, useEffect} from "react";
import "../scss/components/SideBar.scss";

const SideBar = () => {
   
  const [theme, setTheme] = useState(
  document.documentElement.getAttribute("data-theme") || "light"
);
  // Update theme dynamically
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });
  
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  
    return () => observer.disconnect();
  }, []);
  //
  
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
          <li className="sidebar-item"> <img src="/assets/icon-marker.png" alt="Default logo" className="default" /> <img src={theme === "dark" ? "/assets/icon-dark-dashboard.png"  : "/assets/icon-default.png"} alt="Default logo" className="default" /> Default</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" /> <img src={theme === "dark" ? "/assets/icon-dark-eccomerce.png"  : "/assets/icon-eccommerce.png"} alt="Default logo" className="commerce" /> eCommerce</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" />  <img src={theme === "dark" ? "/assets/icon-dark-projects.png"  : "/assets/icon-projects.png"} alt="Default logo" className="projects" /> Projects</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" />  <img src={theme === "dark" ? "/assets/icon-dark-online.png"  : "/assets/icon-onlinecourses.png"} alt="Default logo" className="onlinecourses" />Online Courses</li>
        </ul>
      </div>

      <div className="sidebar-section">
        <div className="section-title">Pages</div>
        <ul className="sidebar-list">
          <li className="sidebar-item"> <img src="/assets/icon-downarrow.png" alt="Default logo" className="sidebar-arrow" />  <img src= {theme === "dark" ? "/assets/icon-dark-user.png"  : "/assets/icon-userprofile.png"} alt="Default logo" className="userprofile" /> User Profile</li>
          <li className="sidebar-subitem">Overview</li>
          <li className="sidebar-subitem">Projects</li>
          <li className="sidebar-subitem">Campaigns</li>
          <li className="sidebar-subitem">Documents</li>
          <li className="sidebar-subitem">Followers</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" />  <img src= {theme === "dark" ? "/assets/icon-dark-account.png"  : "/assets/icon-account.png"} alt="Default logo" className="account" /> Account</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" />  <img src= {theme === "dark" ? "/assets/icon-dark-corporate.png"  :"/assets/icon-corporate.png"} alt="Default logo" className="corporate" /> Corporate</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" />  <img src= {theme === "dark" ? "/assets/icon-dark-blog.png"  : "/assets/icon-blog.png"} alt="Default logo" className="blog" /> Blog</li>
          <li className="sidebar-item"> <img src="/assets/icon-arrow.png" alt="Default logo" className="sidebar-arrow" />  <img src= {theme === "dark" ? "/assets/icon-dark-social.png"  : "/assets/icon-social.png"} alt="Default logo" className="social" /> Social</li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
