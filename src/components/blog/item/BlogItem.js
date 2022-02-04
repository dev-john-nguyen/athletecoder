import './blog-item.css'


const BlogItem = ({ post }) => {
    const { thumbnail, title, description, id } = post;
    const uri = `/blog/${id}`
    return (
        <div className="blog-item">
            <a href={uri}>
                <div className="blog-item-img">
                    <img src={thumbnail} alt={title} />
                </div>
            </a>

            <div className="blog-item-content">
                <h2 className="blog-item-title">
                    {title}
                </h2>
                <div className="blog-item-des" dangerouslySetInnerHTML={{ __html: description }}>
                </div>
                <a href={uri}>
                    Read More
                </a>
            </div>
        </div>
    )
}

export default BlogItem;