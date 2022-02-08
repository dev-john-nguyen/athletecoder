import { useEffect, useLayoutEffect, useRef, useState, useContext } from 'react';
import Contact from '../contact/Contact';
import { ReactComponent as PortfolioSvg } from './svgs/portfolio.svg';
import { ReactComponent as BlogSvg } from './svgs/blog.svg';
import { ReactComponent as ContactSvg } from './svgs/contact.svg';
import { ReactComponent as QuoteSvg } from './svgs/quote.svg';
import './home.css';
import BlogItem from '../blog/item/BlogItem';
import PortfolioItem from './portfolio/PortfolioItem';
import ActivePortfolio from './portfolio/active/ActivePortfolio';
import portfolioItems from './portfolioItems';
import Testimonial from './testimonial';
import TestOne from '../../assets/test-one.png'
import TestTwo from '../../assets/test-two.png';
import Header from './header';
import { PostsContext } from '../../App';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState();
    const [hide, setHide] = useState(true);
    const portRef = useRef();
    const blogRef = useRef();
    const testRef = useRef();
    const contactRef = useRef();
    const portPos = useRef();
    const blogPos = useRef();
    const testPos = useRef();
    const contactPos = useRef();
    const posts = useContext(PostsContext);

    const shouldAnimateDiv = (windowPos, divPos, divRef) => {
        if (divPos && divRef && windowPos > divPos) {
            divRef.classList.add('animate-div')
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            const windowPos = window.pageYOffset;
            shouldAnimateDiv(windowPos, portPos.current, portRef.current)
            shouldAnimateDiv(windowPos, blogPos.current, blogRef.current)
            shouldAnimateDiv(windowPos, contactPos.current, contactRef.current)
            shouldAnimateDiv(windowPos, testPos.current, testRef.current)
        });
    }, [])

    const getPos = (ref) => {
        return ref.getBoundingClientRect().top
    }

    useLayoutEffect(() => {
        if (portRef.current) {
            portPos.current = getPos(portRef.current)
            blogPos.current = getPos(blogRef.current)
            contactPos.current = getPos(contactRef.current)
            testPos.current = getPos(testRef.current)
        }
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <div className="portfolio space-between-content" ref={portRef}>
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

                <div className="blog space-between-content" ref={testRef}>

                    <div className="home-header">
                        <QuoteSvg />
                        <h1 className="home-header">Testimonial</h1>
                    </div>

                    <div className="blog-flex">
                        <Testimonial img={TestOne} quote={`"He's extremely passionate about his work and is always seeking ways to improve."`} name='- Shane' />
                        <Testimonial img={TestTwo} quote={`"John's responsive and quickly solves issues as they arise. He's a pleasure to work with!"`} name='- Barbara' />
                    </div>
                </div>

                <div className="blog space-between-content" ref={blogRef}>

                    <div className="home-header">
                        <BlogSvg />
                        <a href='/blog'>
                            <h1 className="home-header">Blog</h1>
                        </a>
                    </div>

                    <div className="blog-flex">
                        {
                            posts.length > 1 && (
                                <>
                                    <BlogItem post={posts[0]} />
                                    <BlogItem post={posts[1]} />
                                </>
                            )
                        }
                    </div>
                </div>


                <div className="contact space-between-content" ref={contactRef}>

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