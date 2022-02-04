import './styles.css';
import { ReactComponent as BlogSvg } from '../../home/svgs/blog.svg';
import blogPosts from '../blog-posts.json';

const BlogPage = ({ path }) => {
    const id = path.replace('/blog/', '')

    const blog = blogPosts.find(blog => blog.id === id)

    if (!blog) return (
        <div className="container page-container">
            <div className="page-header">
                <h1>Not Found</h1>
                <BlogSvg />
            </div>
        </div>
    )

    return (
        <div className="container page-container">
            <div className="blog-post-header">
                <h1>{blog.title}</h1>
            </div>
            <div className="blog-post" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    )
}

export default BlogPage;