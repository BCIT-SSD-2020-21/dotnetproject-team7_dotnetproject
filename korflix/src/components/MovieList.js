import React from 'react';
import { Link } from 'react-router-dom';

const base_url = "http://image.tmdb.org/t/p/original/";


const MovieList = (props) => {
    console.log(props.movies[0]);

    return (

        <>
            {props.movies.map(movie => (<div key={movie.movieId} className="image-container d-flex justify-content-start m-3">
                <Link key={movie.movieId} to={`/movies/${movie.movieId}`}>
                    <img src={`${base_url}${movie?.poster_path || movie?.backdrop_path}`} alt="movie" style={{ width: "200px", height: "280px" }}
                    />
                    <div className="overlay d-flex align-items-center justify-content-center">
                        <h6>{movie.name}</h6>
                    </div>
                </Link>

                {/* <Link key={movie.movieId} to={`/movies/${movie.movieId}`}>
                    <button type="button" className="btn btn-dark py-2 btn-block">See Details</button> */}

            </div>)
            )}
        </>
    )
}

export default MovieList;
