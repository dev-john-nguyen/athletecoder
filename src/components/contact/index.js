import { ReactComponent as ContactSvg } from '../home/svgs/contact.svg';
import Contact from './Contact';

const ContactPage = () => {
    return (
        <div className="container page-container">
            <div className="page-header">
                <h1>Contact</h1>
                <ContactSvg />
            </div>

            <div className="page-content">
                <Contact />
            </div>
        </div>
    )
}

export default ContactPage;