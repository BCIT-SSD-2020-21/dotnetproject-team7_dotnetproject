import React from 'react';

const base_url = "http://image.tmdb.org/t/p/original/";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map(movie => (<div key={movie.id} className="d-flex justify-content-start m-3">
                <img src={`${base_url}${movie?.poster_path || movie?.backdrop_path}`} alt="movie" style={{ width: "200px", height: "280px" }} />
            </div>)
            )}
        </>
    )
}

export default MovieList;