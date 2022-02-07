import Habt from '../../assets/Port-Habt.png';
import Books from '../../assets/Port-Books.png';
import Link from '../../assets/Port-Link.png';
import Softlete from '../../assets/Port-Softlete.png';
import PVOC from '../../assets/Port-PVOC.png';

export default [
    {
        title: 'Books&Brewskies',
        job: 'React Developer',
        date: '02/2020 - 05/2020',
        description: (
            <>
                <p>Books&Brewskies was a ecommerce website created with React. The website included:"
                </p>
                <ul>
                    <li>A store that interacts with Stripe's API to handle payment processing</li>
                    <li>A blog</li>
                    <li>An Admin Panel to update blog content and store items</li>
                </ul>
            </>
        ),
        img: Books,
        className: 'portfolio-hor-long-1',
        github: 'https://github.com/nguyening20/booksandbrewskies',
        website: ''
    },
    {
        title: 'Habts',
        job: 'Full Stack Developer (React & Firebse)',
        date: '03/2021 - Present',
        description: (
            <>
                <p>Habts is a habit tracker app to help people implement and/or remove habits. It was created with React Native. Key functionalities include:
                </p>
                <ul>
                    <li>Daily Notifications</li>
                    <li>Cloud scheduler</li>
                    <li>Multiple banners awards awarded for reaching goals</li>
                    <li>Note Tool</li>
                    <li>IAP (In App Purchase)</li>
                </ul>
            </>
        ),
        img: Habt,
        className: 'portfolio-item',
        github: 'https://github.com/nguyening20/Habts',
        website: 'https://habt-b0f23.web.app/'
    },
    {
        title: 'Softlete',
        job: 'Full Stack Developer (React, Firebase, and Node)',
        date: '07/2021 - Present',
        description: (
            <>
                <p>Softlete is a tool/service to help athletes manage their workouts and to enhance their training. There is a social networking aspect to it as well. There are many functionalites configured in this app, but a couple functionalities include:
                </p>
                <ul>
                    <li>Notifications</li>
                    <li>CRUD Actions</li>
                    <li>Networking (Profile, Chat, Followers)</li>
                    <li>Analytics</li>
                    <li>Apple Health Integration</li>
                    <li>IAP (In App Purchase)</li>
                    <li>Live updates with Sockets</li>
                </ul>
            </>
        ),
        img: Softlete,
        className: 'portfolio-item',
        github: 'https://github.com/nguyening20/softlete_public',
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
                    <li>Website content and design</li>
                    <li>Administer of Google Admin</li>
                    <li>Launched and designed email marketing campaigns with Mailchimp</li>
                </ul>
            </>
        ),
        img: PVOC,
        className: 'portfolio-hor-long-2',
        github: '',
        website: 'https://www.peoplesvoiceonclimate.org/'
    },
]