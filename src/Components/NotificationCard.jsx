import '../scss/components/NotificationCard.scss';

export const NotificationCard = ({ icon = "/Icons/bugIcon.svg", title, time }) => {
  return (
    <div className="notification-card">
      <div className="notification-card-logo">
        <img src={icon} alt="icon" />
      </div>
      <div className="notification-card-text">
        <p className="notification-card-text-title">{title}</p>
        <div className="notification-card-text-time">{time}</div>
      </div>
    </div>
  );
};
