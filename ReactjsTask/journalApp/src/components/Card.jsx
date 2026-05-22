import phoneicon from '../assets/images/phone-icon.png'
import mailIcon from '../assets/images/mail-icon.png'
export default function Card(props) {
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt={props.alt}
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src={phoneicon}
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src={mailIcon}
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}
