import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchForm from './SearchForm';


const Row = () => {
    const [movies, setMovies] = useState([]);
    const [searchString, setSearchString] = useState('');

    const getMovieRequest = async (searchString) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=59ff1e5e8dcca98569ad357b9d91a30b&query=${searchString}`
        const response = await fetch(url);
        const responseJson = await response.json();

        //console.log(responseJson.results); //------ working 


        if (responseJson.results) {
            setMovies(responseJson.results);
        }

        return responseJson;
    };

    useEffect(() => {
        getMovieRequest(searchString);
    }, [searchString]);

    //console.log(movies);
    return (

        <div className="container-fluid movie-pic">
            <div className='row'>
                <MovieListHeading heading="Movies" />
                <SearchForm searchString={searchString} setSearchString={setSearchString} />
            </div>
            <div className='row'>
                <MovieList movies={movies} />
            </div>
            <div className='row'>
                <MovieListHeading heading="Trending" />
            </div>
            <div className='row'>
                <MovieList movies={movies} />
            </div>
        </div>



    )
}

export default Row;



