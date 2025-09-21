import React from "react";
import "../scss/components/SideBar.scss";
import {NotificationCard} from "./NotificationCard";
import {ContactsCard} from "./ContactsCard";

export const SideBar2 = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="brand">Notifications</span>
      </div>


      <div className="sidebar-section">
        <ul className="sidebar-list">
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
         </ul>
      </div>

      <div className="sidebar-header">
        <span className="brand">Activities</span>
      </div>

      <div className="sidebar-section">
        <ul className="sidebar-list">
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
         </ul>
      </div>

      <div className="sidebar-header">
        <span className="brand">Contacts</span>
      </div>

      <div className="sidebar-section">
        <ul className="sidebar-list">
            <ContactsCard/>
            <ContactsCard/>
            <ContactsCard/>
            <ContactsCard/>
         </ul>
      </div>

    </aside>
  );
};
