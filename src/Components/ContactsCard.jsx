import '../scss/components/ContactsCard.scss'

export const ContactsCard = ({ icon ="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-natali.png",name}) => {
return <div className ="contacts-card">
<div className="contacts-card-icon">
<img src={icon} alt="icon" />
</div>
<p className="contacts-card-title">{name}</p>
</div>
}
