import React from 'react';

const base_url = "http://image.tmdb.org/t/p/original/";
const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => <div>
                <img src={`${base_url}${movie.poster_path}`} alt="movie"></img>

            </div>)}
        </>
    )
}

export default MovieList;