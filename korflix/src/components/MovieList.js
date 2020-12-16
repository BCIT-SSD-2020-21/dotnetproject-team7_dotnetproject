import React from 'react';
import { Link } from 'react-router-dom';

const base_url = "http://image.tmdb.org/t/p/original/";


const MovieList = (props) => {
    return (

        <>
            {props.movies.map(movie => (<div key={movie.id} className="image-container d-flex justify-content-start m-3">
                <img src={`${base_url}${movie?.poster_path || movie?.backdrop_path}`} alt="movie" style={{ width: "200px", height: "280px" }}
                />
                <div className="overlay d-flex align-items-center justify-content-center">
                    <h6>{movie.name}</h6>
                </div>

                <Link key={movie.id} to={"/movie/" + movie.id}>
                    <button type="button" className="btn btn-dark py-2 btn-block">See Details</button>
                </Link>
            </div>)
            )}
        </>
    )
}

export default MovieList;
