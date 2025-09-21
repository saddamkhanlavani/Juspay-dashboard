import '../scss/components/ContactsCard.scss'

export const ContactsCard = ({ icon ="/assets/icon-natali.png",name}) => {
return <div className ="contacts-card">
<div className="contacts-card-icon">
<img src="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/icon-natali.png" alt="icon" />
</div>
<p className="contacts-card-title">{name}</p>
</div>
}
