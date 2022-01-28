import './blog.css';
import { ReactComponent as BlogSvg } from '../home/svgs/blog.svg';
import BlogItem from './item/BlogItem';
import blogPosts from './blog-posts.json';

const Blog = () => {
    return (
        <div className="container">
            <div className="page-header">
                <h1>Blog</h1>
                <BlogSvg />
            </div>

            <div className="page-content">
                <div className="blog-content">
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
                    <BlogItem
                        img={"https://cdn-images-1.medium.com/max/1024/0*k6DYMimQrjXLMJif"}
                        title={blogPosts[0].title}
                        des={blogPosts[0].content}
                        uri={blogPosts[0].link}
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog;