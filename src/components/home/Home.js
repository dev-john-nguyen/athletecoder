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
import PortfolioItem from './portfolio/PortfolioItem';
import ActivePortfolio from './portfolio/active/ActivePortfolio';


const portfolioItems = [
    {
        title: 'Books&Brewskies',
        job: 'React Developer',
        date: '02/2020 - 05/2020',
        description: (
            <>
                <p>Books&Brewskies was a website created for a podcast. The website had a store that used stripe to handle the payment processing. It also had a blog page that could be dynamically updated from the admin panel."
                </p>
            </>
        ),
        img: Books,
        className: 'portfolio-hor-long-1',
        github: 'https://github.com/nguyening20/booksandbrewskies',
        website: ''
    },
    {
        title: 'Habts',
        job: 'React Developer (Mobile & Web)',
        date: '03/2021 - Present',
        description: (
            <>
                <p>Habts is a habit tracker app to help people implement and/or remove habits. It was created with React Native. Key functionalities include:
                </p>
                <ul>
                    <li>Notifications</li>
                    <li>Cloud scheduler</li>
                    <li>Banner awards</li>
                </ul>
            </>
        ),
        img: Habt,
        className: 'portfolio-item',
        github: '',
        website: 'https://habt-b0f23.web.app/'
    },
    {
        title: 'Softlete',
        job: 'React Developer (Mobile & Web)',
        date: '07/2021 - Present',
        description: (
            <>
                <p>Softlete is an app to help athletes manage their training. There is a social networking aspect to it as well. There are many functionalites configured in this app, but a couple functionalities include:
                </p>
                <ul>
                    <li>Notifications</li>
                    <li>CRUD Actions</li>
                    <li>Networking (Profile, Chat, Followers)</li>
                    <li>Analytics</li>
                    <li>Apple Health Integration</li>
                </ul>
            </>
        ),
        img: Softlete,
        className: 'portfolio-item',
        github: '',
        website: 'https://www.softlete.com/',
    },
    {
        title: 'Letslink',
        date: '01/2021 - 04/2021',
        job: 'React Developer (Mobile & Web)',
        description: (
            <>
                <p>Letslink is a social media app. It shows you users within a 1 mile radius. Developed during covid. I thought it would be a cool way to meet people out in public while social distancing. There are many functionalites configured in this app, but a couple functionalities include:
                </p>
                <ul>
                    <li>Notifications</li>
                    <li>Networking (Profile, Chat, Followers)</li>
                    <li>Map</li>
                    <li>Live location updates</li>
                </ul>
            </>
        ),
        img: Link,
        className: 'portfolio-item',
        github: 'https://github.com/nguyening20/BreakTheIce',
        website: ''
    },
    {
        title: 'PeoplesVoiceOnClimate',
        job: 'Volunteer',
        date: '03/2021 - Present',
        description: (
            <>
                <p>PVOC is a nonprofit organization that promotes climate assemblies. Key duties include, but not limited to:
                </p>
                <ul>
                    <li>Maintain the Squarespace website</li>
                    <li>Administer Google Admin</li>
                    <li>Launched email marketing campaigns with Mailchimp.</li>
                </ul>
            </>
        ),
        img: PVOC,
        className: 'portfolio-hor-long-2',
        github: '',
        website: 'https://www.peoplesvoiceonclimate.org/'
    },
]

const Home = () => {
    const [activeIndex, setActiveIndex] = useState();

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

                <div className="portfolio-grid" onMouseLeave={() => setActiveIndex(undefined)}>
                    <ActivePortfolio
                        item={portfolioItems[activeIndex]}
                    />
                    {
                        portfolioItems.map((item, i) => (
                            <PortfolioItem
                                className={item.className}
                                img={item.img}
                                alt={item.title}
                                onMouseOver={() => {
                                    setActiveIndex(i)
                                }}
                            />
                        ))
                    }

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