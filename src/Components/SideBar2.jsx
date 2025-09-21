import React from "react";
import "../scss/components/SideBar.scss";
import { NotificationCard } from "./NotificationCard";
import { ContactsCard } from "./ContactsCard";

export const SideBar2 = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="brand">Notifications</span>
      </div>
      <div className="sidebar-section">
        <ul className="sidebar-list">
          <NotificationCard title="You have a bug that needs..." time="Just now" />
          <NotificationCard icon="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-man.png" title="New user registered." time="59 minutes ago" />
          <NotificationCard title="You have a bug that needs..." time="12 hours ago" />
          <NotificationCard icon="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-nfc.png" title="Andi Lane subscribed to a page." time="Today, 11:59 AM" />
        </ul>
      </div>

      <div className="sidebar-header">
        <span className="brand">Activities</span>
      </div>
      <div className="sidebar-section">
        <ul className="sidebar-list">
          <NotificationCard icon="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-activity1.png" title="You have a bug that needs..." time="Just now" />
          <NotificationCard icon="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-activity2.png" title="Released a new version." time="59 minutes ago" />
          <NotificationCard icon="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-activity3.png" title="Submitted a bug." time="12 hours ago" />
          <NotificationCard icon="/https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-activity4.png" title="Modified data in Page X." time="Today, 11.59 AM" />
          <NotificationCard icon="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-activity5.png" title="Deleted a page in Project X." time="Feb 2, 2023" />
        </ul>
      </div>

      <div className="sidebar-header">
        <span className="brand">Contacts</span>
      </div>
      <div className="sidebar-section">
        <ul className="sidebar-list">
          <ContactsCard icon="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-natali.png" name="Natali Craig" />
          <ContactsCard icon="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-drew.png" name="Drew Cano" />
          <ContactsCard icon="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-Orlando.png" name="Orlando Diggs" />
          <ContactsCard icon="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-andi.png" name="Andi Lane" />
          <ContactsCard icon="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-kate.png" name="Kate Morrison" />
          <ContactsCard icon="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-koray.png" name="Koray Okumus" />
        </ul>
      </div>
    </aside>
  );
};
