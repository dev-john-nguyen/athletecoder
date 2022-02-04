import './footer.css';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import blogPosts from '../blog/blog-posts.json';


const Navbar = () => {

    const renderBlogLinks = () => {
        const items = blogPosts.slice(0, 4)
        return items.map((post, i) => {
            const uri = `/blog/${post.id}`
            return <a href={uri} key={i}>{post.title}</a>
        })
    }

    return (
        <footer>
            <div className="footer">
                <section className="footer-section">
                    <a href='/'>
                        <Logo />
                    </a>
                </section>

                <section className="footer-section">
                    <div className="menu">
                        <h1>Menu</h1>
                        <a href='/'>Home</a>
                        <a href='/blog'>Blog</a>
                        <a href='/contact'>Contact</a>
                    </div>
                </section>

                <section className="footer-section">
                    <div className="menu">
                        <h1>Blog</h1>
                        {renderBlogLinks()}
                    </div>
                </section>

                <section className="footer-section">
                    <div className="menu">
                        <h1>Social</h1>
                        <a href='https://www.medium.com/@athletecoder' target="_blank" rel="noreferrer">Medium</a>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Navbar;