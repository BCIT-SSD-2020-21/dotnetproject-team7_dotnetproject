import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchForm from './SearchForm';


const Row = () => {
    // const [movies, setMovies] = useState([]);
    // const [searchString, setSearchString] = useState('');

    // const getMovieRequest = async (searchString) => {
    //     const url = `https://korflixapi.azurewebsites.net/movie?search=${searchString}`
    //     const response = await fetch(url);
    //     const responseJson = await response.json();

    //     console.log(responseJson.slice(0, 20)); //------ working 

    //     if (responseJson.slice(0, 20)) {
    //         setMovies(responseJson.slice(0, 20));
    //     }

    //     return responseJson;
    // };

    // useEffect(() => {
    //     getMovieRequest(searchString);
    // }, [searchString]);

    //console.log(movies);
    return (

        <div className="container-fluid movie-pic">
            <div className='row'>
                <MovieListHeading heading="Movies" />
                {/* <SearchForm searchString={searchString} setSearchString={setSearchString} /> */}
            </div>
            {/* <div className='row'>
                <MovieList movies={movies} />
            </div>
            <div className='row'>
                <MovieListHeading heading="Trending" />
            </div>
            <div className='row'>
                <MovieList movies={movies} />
            </div>
        */} </div>
    )
}

export default Row;



