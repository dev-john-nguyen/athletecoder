import './active-portfolio.css';

const ActivePortfolio = ({ item, hide }) => {


    const renderContent = () => {
        if (item) {
            const { title,
                description,
                img,
                className,
                github,
                job,
                date,
                website,
            } = item;
            return (
                <div className="active-portfolio-content">
                    <img src={img} alt='title' />
                    <div className="active-portfolio-header">
                        <h1>{title}</h1>
                        <p><b>Date:</b> {date}</p>
                        <p><b>Position:</b> {job}</p>
                    </div>
                    <div className="active-portfolio-description">
                        {description}
                    </div>
                    {
                        !!github ? (
                            <a href={github} target="_blank" rel="noreferrer">Visit GitHub</a>
                        ) : (
                            <button className='inactive'>Private Github</button>
                        )
                    }

                    {
                        !!website ? (
                            <a href={website} target="_blank" rel="noreferrer">Visit Website</a>
                        ) : (
                            <button className='inactive'>Discontinued Project</button>
                        )
                    }
                </div>
            )
        }
    }


    return (
        <div className={`active-portfolio ${hide ? 'slideOut' : 'slideIn'}`}>
            {renderContent()}
        </div>
    )
}
export default ActivePortfolio;