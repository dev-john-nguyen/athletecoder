import './styles.css'
import { ReactComponent as AboutSvg } from './about.svg';

const About = () => {
    return (
        <div className="container">
            <div className="page-header">
                <h1>About Me</h1>
                <AboutSvg />
            </div>

            <div className="page-content">
                <div className="about">
                    <p>I am a software developer with two years of experience. I've built multiple full-stack mobile & web applications. I have collaborated with clients to enhance and fix software functionalities.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;