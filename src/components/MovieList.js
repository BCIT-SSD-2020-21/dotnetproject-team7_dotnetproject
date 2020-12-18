import React from 'react';
import { Link } from 'react-router-dom';

const base_url = "http://image.tmdb.org/t/p/original/";


const MovieList = (props) => {
    console.log(props.movies[0]);


    return (
        <>
            <div className="container-fluid movie-pic">
                <div className="row">
                    <h1 className="movie-heading" style={{ padding: "5px", margin: "10px" }}>Explore Korean TV Shows</h1>
                </div>

                <div className="row">
                    {props.movies.map(movie => (<div key={movie.movieId} className="image-container d-flex justify-content-start m-3">
                        <Link key={movie.movieId} to={`/movies/${movie.movieId}`}>
                            <img src={`${base_url}${movie?.poster_path || movie?.backdrop_path}`} alt="movie" style={{ width: "200px", height: "280px" }}
                            />
                            <div className="overlay d-flex align-items-center justify-content-center">
                                <h6>{movie.name}</h6>
                            </div>
                        </Link>
                    </div>)
                    )}
                </div>
            </div>
        </>
    )
}

export default MovieList;
