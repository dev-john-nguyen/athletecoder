import { ReactComponent as Stars } from './space/stars.svg'
import { ReactComponent as Planet } from './space/planet.svg'
import { ReactComponent as Astro } from './space/astronaut.svg';
import { ReactComponent as Ship } from './space/ship.svg';
import { ReactComponent as Rocket } from './space/rocket.svg';
import Resume from '../../../assets/Resume.pdf';
import './style.css';
import { useRef, useState } from 'react';

const Header = () => {
    const windowRef = useRef();
    const [mousePos, setMousePos] = useState({
        x: 0,
        y: 0
    })

    const [mousePosRel, setMousePosRel] = useState({
        x: 0,
        y: 0
    })

    const [move, setMove] = useState(false)

    const onClick = () => {
        window.location.href = './contact'
    }

    const openResume = () => {
        window.open(Resume)
    }

    const onMouseMove = (e) => {

        setMousePos({
            x: e.pageX - mousePosRel.x,
            y: e.pageY - mousePosRel.y
        })
    }

    const renderPosX = () => {
        if (!move) return 0;

        const limit = window.innerWidth / 4;

        if (mousePos.x > limit) return limit
        if (mousePos.x < -limit) return -limit

        return mousePos.x
    }

    const renderPosY = () => {
        if (!move) return 0

        const limit = window.innerHeight / 5;

        if (mousePos.y > limit) return limit;
        if (mousePos.y < -limit) return -limit
        return mousePos.y
    }

    return (
        <div className="header">
            <div className="buttons">
                <button onClick={onClick} id='touch'>Get In Touch</button>
                <button onClick={openResume} id='resume'>Resume</button>
            </div>
            <div className="ship">
                <div className="space" style={{
                    transform: `translate(${renderPosX()}px, ${renderPosY()}px)`
                }}>
                    <div className="header-stars">
                        <Stars />
                    </div>
                    <div className="header-planet">
                        <Planet />
                    </div>

                    <div className="header-content">
                        <h1>Hi. I'm John.</h1>
                        <h2>
                            I’m a software developer, specializing in ReactJs. I develop mobile and web applications. Checkout my work below and feel free to get in touch if you want to work with me.
                        </h2>
                    </div>
                    <div className="rocket">
                        <Rocket />
                    </div>
                    <div className="shooting-star shooting-star-1" />
                    <div className="shooting-star shooting-star-2" />
                    <div className="shooting-star shooting-star-3" />

                </div>



                <div
                    className="ship-window"
                    ref={windowRef}
                    onMouseMove={onMouseMove}
                    onMouseDown={(e) => {
                        const offsets = windowRef.current.getBoundingClientRect();
                        setMousePosRel({
                            x: e.pageX - offsets.left,
                            y: e.pageY - offsets.top
                        })
                        setMove(true)
                    }}
                    onMouseUp={() => setMove(false)}
                    onMouseLeave={() => setMove(false)}
                >
                    <Ship />
                    <div className="header-astro">
                        <Astro />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;