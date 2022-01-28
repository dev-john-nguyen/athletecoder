import './blog-item.css'


const BlogItem = ({ img, title, des, uri }) => {
    return (
        <div className="blog-item">
            <div className="blog-item-img">
                <img src={img} alt={title} />
            </div>

            <div className="blog-item-content">
                <p className="blog-item-title">
                    {title}
                </p>
                <p className="blog-item-des">
                    {des}
                </p>
                <a href={uri} target="_blank" rel="noreferrer">
                    Read More
                </a>
            </div>
        </div>
    )
}

export default BlogItem;