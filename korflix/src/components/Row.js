import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';


const Row = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const getMovieRequest = async () => {
        const url = "https://api.themoviedb.org/3/search/movie?api_key=59ff1e5e8dcca98569ad357b9d91a30b&query=avengers"
        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson.results); //------ working 


        setMovies(responseJson.results);

        return responseJson;
    };

    useEffect(() => {
        getMovieRequest();
    }, []);
    console.log(movies);
    return (

        <div className="container-fluid movie-pic">
            <div className='row'>

            </div>
            <div className='row'>
                <MovieList movies={movies} />
            </div>
        </div>


    )
}

export default Row;



