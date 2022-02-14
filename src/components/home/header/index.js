import { ReactComponent as Planet } from './space/planet.svg'
import Resume from '../../../assets/Resume.pdf';
import './style.css';

const Header = () => {
    const onClick = () => {
        window.location.href = './contact'
    }

    const openResume = () => {
        window.open(Resume)
    }

    return (
        <div className="header">
            <div className="header-content">
                <h1>Hi. I'm John.</h1>
                <h2>I’m a software developer, specializing in ReactJs. I develop mobile and web applications. Checkout my work below and feel free to get in touch if you want to work with me.</h2>
                <div className="header-content-buttons">
                    <button onClick={onClick}>Get In Touch</button>
                    <button onClick={openResume}>Resume</button>
                </div>
            </div>

            <div className="header-planet">
                <Planet />
            </div>
        </div >
    )
}

export default Header;