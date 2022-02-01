import { useState } from 'react';
import Me from '../../assets/Me.png';
import Contact from '../contact/Contact';
import { ReactComponent as PortfolioSvg } from './svgs/portfolio.svg';
import { ReactComponent as BlogSvg } from './svgs/blog.svg';
import { ReactComponent as ContactSvg } from './svgs/contact.svg';
import { ReactComponent as QuoteSvg } from './svgs/quote.svg';
import blogPosts from '../blog/blog-posts.json';
import './home.css';
import BlogItem from '../blog/item/BlogItem';
import PortfolioItem from './portfolio/PortfolioItem';
import ActivePortfolio from './portfolio/active/ActivePortfolio';
import portfolioItems from './portfolioItems';
import Testimonial from './testimonial';
import TestOne from '../../assets/test-one.png'
import TestTwo from '../../assets/test-two.png';
import Header from './header';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState();
    const [hide, setHide] = useState(true);

    return (
        <>
            <Header />
            <div className="container">
                <div className="portfolio space-between-content">
                    <div className="home-header">
                        <PortfolioSvg />
                        <h1 className="home-header">Portfolio</h1>
                    </div>

                    <div className="portfolio-grid" onMouseLeave={() => setHide(true)}>
                        <ActivePortfolio
                            item={portfolioItems[activeIndex]}
                            hide={hide}
                        />
                        {
                            portfolioItems.map((item, i) => (
                                <PortfolioItem
                                    className={item.className}
                                    img={item.img}
                                    alt={item.title}
                                    onMouseOver={() => {
                                        setActiveIndex(i)
                                        setHide(false)
                                    }}
                                    key={i}
                                />
                            ))
                        }

                    </div>
                </div>

                <div className="blog space-between-content">

                    <div className="home-header">
                        <QuoteSvg />
                        <h1 className="home-header">Testimonial</h1>
                    </div>

                    <div className="blog-flex">
                        <Testimonial img={TestOne} quote={`"He's extremely passionate about his work and is always seeking ways to improve."`} name='- Shane' />
                        <Testimonial img={TestTwo} quote={`"John's responsive and quickly solves issues as they arise. He's a pleasure to work with!"`} name='- Barbara' />
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
        </>
    )
}

export default Home;