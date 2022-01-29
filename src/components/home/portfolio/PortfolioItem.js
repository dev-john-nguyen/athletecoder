import './portfolio.css';

const PortfolioItem = ({ className, img, alt, onMouseOver }) => {
    return (
        <div className={className} onMouseOver={onMouseOver}>
            <img src={img} alt={alt} />
        </div>
    )
}

export default PortfolioItem