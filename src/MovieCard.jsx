const MovieCard = ({movie}) =>{
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://assets.kompasiana.com/items/album/2020/09/26/kotak-kosong-5f6f07da097f3662fe035ff2.jpg?t=o&v=770'} alt={movie.Title}></img>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;