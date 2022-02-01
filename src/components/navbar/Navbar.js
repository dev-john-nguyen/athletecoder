import './navbar.css';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

const Navbar = ({ trans }) => {
    console.log(trans)
    return (
        <div className={`nav ${trans ? 'trans' : ''}`}>
            <div className="nav-container">
                <div className="nav-left">
                    <a href='./'>
                        <Logo />
                    </a>
                </div>
                <div className="nav-right">
                    <a href='./'>Home</a>
                    <a href='./blog'>Blog</a>
                    <a href='./about'>About</a>
                    <a href='./contact'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;