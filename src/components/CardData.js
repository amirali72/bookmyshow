
const CardData = ({image,name,language,summary,genres}) => {
    return (
        <div className="card-item">
            
            <img src={image.medium}
            alt="rest-img"/>
                        
            <div className="card-items-below">
                <h2>{name}</h2>
                <h5>{genres?.join(", ")} ({language})</h5>
                <p>{summary}</p>
                <h4>{}</h4>
            </div>
         </div>
    )
}

export default CardData;