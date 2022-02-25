import { useContext } from 'react';
import './styles.css';
import { ReactComponent as BlogSvg } from '../../home/svgs/blog.svg';
import { PostsContext } from '../../../App';
import BlogItem from '../../blog/item/BlogItem';

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


    const getRecommendations = () => {
        let recommends = [];
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            if (post.id === blog.id) continue;
            if (recommends.length == 3) break;
            recommends.push(post)
        }

        return recommends;
    }


    return (
        <div className="container">
            <div className="page-container">
                <div className="blog-post-header">
                    <p>Published by John Nguyen on {renderDate()}</p>
                    <h1>{blog.title}</h1>
                </div>
                <div className="blog-post" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
            <div className="recommendations">
                <h1>Other Posts You May Like</h1>
                <div className="blog-content">
                    {
                        getRecommendations().map(p => (
                            <BlogItem post={p} key={p.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogPage;