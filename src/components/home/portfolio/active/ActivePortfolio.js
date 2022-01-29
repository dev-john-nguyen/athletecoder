import './active-portfolio.css';

const ActivePortfolio = ({ item }) => {

    if (!item) return <></>

    const { title,
        description,
        img,
        className,
        github,
        job,
        date,
        website,
    } = item;

    const onButtonPress = () => {

    }

    return (
        <div className="active-portfolio">
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
        </div>
    )
}
export default ActivePortfolio;