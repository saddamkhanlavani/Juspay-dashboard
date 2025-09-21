import React from "react";
import "../styles/OrderList.css";

const orders = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "/assets/icon-natali.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/assets/icon-kate.png" },
    project: "CRM Admin pages",
    address: "Larry Son Francisco",
    date: "A minute ago",
    status: "pending",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/assets/icon-drew.png" },
    project: "Client Project",
    address: "Bagweli Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/assets/icon-orlando.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/assets/icon-andi.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "/assets/icon-natali.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/assets/icon-kate.png" },
    project: "CRM Admin pages",
    address: "Larry Son Francisco",
    date: "A minute ago",
    status: "Completed",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/assets/icon-drew.png" },
    project: "Client Project",
    address: "Bagweli Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/assets/icon-orlando.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/assets/icon-andi.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

const OrderList = () => {
  return (
    <div className="order-list">
      <h2 className="order-title">Order List</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td className="user-cell">
                <img
                  src={order.user.avatar}
                  alt={order.user.name}
                  className="avatar"
                />
                <span>{order.user.name}</span>
              </td>
              <td>{order.project}</td>
              <td>{order.address}</td>
              <td className="date-cell">
                <img
                  src="/assets/icon-date.png"
                  alt="date"
                  className="date-icon"
                />
                <span>{order.date}</span>
              </td>
              <td>
                <td>
                  <span
                    className={`status ${order.status
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    {order.status}
                  </span>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        
    </div>
  );
};

export default OrderList;
