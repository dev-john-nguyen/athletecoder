import { ReactComponent as Stars } from './space/stars.svg'
import { ReactComponent as Planet } from './space/planet.svg'
import { ReactComponent as Astro } from './space/astronaut.svg';
import { ReactComponent as Platform } from './space/platform.svg';
import { ReactComponent as Sun } from './space/sun.svg';
import './style.css';

const Header = () => {

    const onClick = () => {
        window.location.href = './contact'
    }

    return (
        <div className="header">
            <div className="header-content">
                <h1>Hi. I'm John.</h1>
                <h2>
                    I’m a software developer, specializing in ReactJs. I develop mobile and web applications. Checkout my work below and feel free to get in touch if you want to work with me.
                </h2>
                <button onClick={onClick}>Get In Touch</button>
            </div>
            <div className="header-stars">
                <Stars />
            </div>
            <div className="header-sun">
                <Sun />
            </div>
            <div className="header-planet">
                <Planet />
            </div>
            <div className="header-astro">
                <Astro />
            </div>
            <div className="header-platform">
                <Platform />
            </div>
            <div className="shooting-star shooting-star-1" />
            <div className="shooting-star shooting-star-2" />
            <div className="shooting-star shooting-star-3" />
        </div>
    )
}

export default Header;