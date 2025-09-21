import '../scss/components/NotificationCard.scss'

export const  NotificationCard = ( ) => {
return <div className = "notification-card">
    <div className="notification-card-logo">
        <img src="/Icons/bugIcon.svg"/>
    </div>
    <div className="notification-card-text">
        <p className="notification-card-text-title">You have a bug that needs to be fixed.</p>
        <div className="notification-card-text-time">Just now</div>
    </div>
</div>
}
