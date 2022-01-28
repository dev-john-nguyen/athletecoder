const PortfolioItem = ({ className, img, alt }) => {
    return (
        <div className={className}>
            <img src={img} alt={alt} />
        </div>
    )
}

export default PortfolioItem