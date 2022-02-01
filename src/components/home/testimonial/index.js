import './styles.css';

const Testimonial = ({ img, quote, name }) => {
    return (
        <div className="testimonial">

            <div className="testimonial-img">
                <img src={img} alt={name} />
            </div>

            <div className="testimonial-quote">
                <h1>{quote}</h1>
            </div>

            <div className="testimonial-name">
                <p>{name}</p>
            </div>

        </div>
    )
}

export default Testimonial;