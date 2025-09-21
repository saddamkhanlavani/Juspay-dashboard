
import React from 'react';
import "../scss/components/RevenueByLocation.scss"

export const RevenueByLocation = () => {
  return (
    <div className="revenue-card">
      <div className="revenue-title">Revenue by Location</div>
      <div className="revenue-map-wrapper">
        <img src='https://saddamkhanlavani.github.io/Juspay-dashboard/assets/World_Map.png' alt="World Map" className="revenue-map-img"/>
      </div>
      <div className="revenue-row">
        <span>New York</span>
        <span>72K</span>
      </div>
      <div className="revenue-bar" style={{width: '70%'}} />
      <div className="revenue-row">
        <span>San Francisco</span>
        <span>39K</span>
      </div>
      <div className="revenue-bar" style={{width: '38%'}} />
      <div className="revenue-row">
        <span>Sydney</span>
        <span>25K</span>
      </div>
      <div className="revenue-bar" style={{width: '24%'}} />
      <div className="revenue-row">
        <span>
          <span className="revenue-link">Singapore</span>
        </span>
        <span>61K</span>
      </div>
      <div className="revenue-bar" style={{width: '59%'}} />
    </div>
  );
};
