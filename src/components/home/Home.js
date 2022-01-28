import { useState } from 'react';
import Me from '../../assets/Me.png';
import Habt from '../../assets/Port-Habt.png';
import Books from '../../assets/Port-Books.png';
import Link from '../../assets/Port-Link.png';
import Softlete from '../../assets/Port-Softlete.png';
import PVOC from '../../assets/Port-PVOC.png';
import Contact from '../contact/Contact';
import { ReactComponent as PortfolioSvg } from './svgs/portfolio.svg';
import { ReactComponent as BlogSvg } from './svgs/blog.svg';
import { ReactComponent as ContactSvg } from './svgs/contact.svg';
import blogPosts from '../blog/blog-posts.json';
import './home.css';
import BlogItem from '../blog/item/BlogItem';
import PortfolioItem from './PortfolioItem';

const Home = () => {
    const [] = useState('item')
    return (
        <div className="container">
            <div className="header">
                <div className="header-text">
                    <h1>Hi. I'm John.</h1>
                    <h2>
                        I’m a software developer, specializing in ReactJs. I develop mobile and web applications. Checkout my work below and feel free to get in touch if you want to work with me.
                    </h2>
                </div>
                <div className="header-image">
                    <img src={Me} alt='me' />
                </div>
            </div>

            <div className="portfolio space-between-content">
                <div className="home-header">
                    <PortfolioSvg />
                    <h1 className="home-header">Portfolio</h1>
                </div>

                <div className="portfolio-grid">

                    <PortfolioItem
                        className="portfolio-hor-long-1"
                        img={Books}
                        alt='books'
                    />

                    <div className="portfolio-item" onMouseOver={() => console.log('hover')}>
                        <img src={Habt} alt='habt' />
                    </div>

                    <div className="portfolio-item">
                        <img src={Softlete} alt='softlete' />
                    </div>

                    <div className="portfolio-item">
                        <img src={Link} alt='letslink' />
                    </div>


                    <div className="portfolio-hor-long-2">
                        <img src={PVOC} alt='PVOC' />
                    </div>
                </div>
            </div>

            <div className="blog space-between-content">

                <div className="home-header">
                    <BlogSvg />
                    <a href='./blog'>
                        <h1 className="home-header">Blog</h1>
                    </a>
                </div>

                <div className="blog-flex">
                    <BlogItem
                        img={"https://cdn-images-1.medium.com/max/1024/0*k6DYMimQrjXLMJif"}
                        title={blogPosts[0].title}
                        des={blogPosts[0].content}
                        uri={blogPosts[0].link}
                    />
                    <BlogItem
                        img={"https://cdn-images-1.medium.com/max/1024/0*k6DYMimQrjXLMJif"}
                        title={blogPosts[0].title}
                        des={blogPosts[0].content}
                        uri={blogPosts[0].link}
                    />
                </div>
            </div>


            <div className="contact space-between-content">

                <div className="home-header">
                    <ContactSvg />
                    <h1 className="home-header">Contact</h1>
                </div>

                <Contact />
            </div>

        </div>
    )
}

export default Home;