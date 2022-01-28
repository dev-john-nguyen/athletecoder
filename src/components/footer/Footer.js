import './footer.css';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import blogPosts from '../blog/blog-posts.json';


const Navbar = () => {
    return (
        <footer>
            <div className="footer">
                <section className="footer-section">
                    <Logo />
                </section>

                <section className="footer-section">
                    <div className="menu">
                        <h1>Menu</h1>
                        <a href='./'>Home</a>
                        <a href='./blog'>Blog</a>
                        <a href='./contact'>Contact</a>
                    </div>
                </section>

                <section className="footer-section">
                    <div className="menu">
                        <h1>Blog</h1>
                        <a href={blogPosts[0].link} target="_blank" rel="noreferrer">{blogPosts[0].title}</a>
                    </div>
                </section>

                <section className="footer-section">
                    <div className="menu">
                        <h1>Social</h1>
                        <a>Instagram</a>
                        <a href='https://www.medium.com/@athletecoder' target="_blank" rel="noreferrer">Medium</a>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Navbar;