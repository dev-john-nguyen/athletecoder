import { useContext } from 'react';
import './blog.css';
import { ReactComponent as BlogSvg } from '../home/svgs/blog.svg';
import BlogItem from './item/BlogItem';
import { PostsContext } from '../../App';

const Blog = () => {
    const posts = useContext(PostsContext);

    return (
        <div className="container">
            <div className="blog-header">
                <h1>Blog</h1>
                <BlogSvg />
            </div>

            <div className="page-content">
                <div className="blog-content">
                    {
                        posts.map((post) => (
                            <BlogItem post={post} key={post.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog;