import './portfolio.css';
import { ReactComponent as Heart } from '../svgs/heart.svg';

const PortfolioItem = ({ className, img, alt, onMouseOver, heart }) => {
    return (
        <div className={className} onMouseOver={onMouseOver}>
            {heart && (
                <div className='heart'>
                    <Heart />
                </div>
            )}
            <img src={img} alt={alt} />
        </div>
    )
}

export default PortfolioItem