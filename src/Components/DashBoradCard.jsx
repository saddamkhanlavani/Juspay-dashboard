import "../scss/components/DashboardCard.scss"

export const DashBoardCard = ({
    title,
    value,
    variance,
  }) => {
    return <div className="dashboard-card">
        <div className="dashboard-card-title">{title}</div>
        <div className="dashboard-card-main">
        <div className="dashboard-card-main-value">{value}</div>
        <div className="dashboard-card-main-varience">{variance}<span>
    <img src='/Icons/upArrow.svg' alt="uparrow"/>
            </span></div>
        </div>
        </div>
}
