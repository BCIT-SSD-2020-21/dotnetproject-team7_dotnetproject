import React from 'react';

const base_url = "http://image.tmdb.org/t/p/original/";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => <div className="d-flex justify-content-start m-3">
                <img src={`${base_url}${movie.poster_path}`} alt="movie" style={{ width: "200px", height: "280px" }}></img>

            </div>)
            }
        </>
    )
}

export default MovieList;