import './blog-item.css'


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}


const BlogItem = ({ post }) => {
    const { thumbnail, title, description, id, pubDate } = post;
    const uri = `/blog/${id}`;

    const renderDate = () => {
        if (pubDate) {
            const d = pubDate.split(' ')[0]
            return replaceAll(d, '-', '/')
        }
        return 'unknown'
    }

    return (
        <div className="blog-item" onClick={() => window.location.href = uri}>
            <a href={uri}>
                <div className="blog-item-img">
                    <img src={thumbnail} alt={title} />
                </div>
            </a>

            <div className="blog-item-content">
                <div className="blog-item-date">
                    <p>Published: {renderDate()}</p>
                </div>
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