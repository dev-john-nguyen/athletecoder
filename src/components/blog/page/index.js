import { useContext } from 'react';
import './styles.css';
import { ReactComponent as BlogSvg } from '../../home/svgs/blog.svg';
import { PostsContext } from '../../../App';

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}


const BlogPage = ({ path, loading }) => {
    const posts = useContext(PostsContext);

    const id = path.replace('/blog/', '')

    const blog = posts.find(blog => blog.id === id)

    if (!blog) return (
        <div className="container page-container">
            <div className="page-header">
                <h1>{loading ? "Loading..." : "Not Found"}</h1>
                <BlogSvg />
            </div>
        </div>
    )

    const renderDate = () => {
        let pubDate = blog.pubDate;
        if (pubDate) {
            const d = pubDate.split(' ')[0]
            return replaceAll(d, '-', '/')
        }
        return 'unknown'
    }


    return (
        <div className="container page-container">
            <div className="blog-post-header">
                <p>Published by John Nguyen on {renderDate()}</p>
                <h1>{blog.title}</h1>
            </div>
            <div className="blog-post" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    )
}

export default BlogPage;