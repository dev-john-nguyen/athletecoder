import './blog.css';
import { ReactComponent as BlogSvg } from '../home/svgs/blog.svg';
import BlogItem from './item/BlogItem';
import blogPosts from './blog-posts.json';

const Blog = () => {
    return (
        <div className="container page-container">
            <div className="page-header">
                <h1>Blog</h1>
                <BlogSvg />
            </div>

            <div className="page-content">
                <div className="blog-content">
                    {
                        blogPosts.map((post) => (
                            <BlogItem post={post} key={post.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog;