import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from "../axios";
import requests from "../requests";


const base_url = "http://image.tmdb.org/t/p/original/";


const Banner = (props) => {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.allMovies);
            const moviesData = request.data;
            
            const filteredMovies = moviesData.filter((m) => {
                return m.backdrop_path != null && m.poster_path != null;
            })
            // console.log(filteredMovies);

            const getRandomMovie = filteredMovies[Math.floor(Math.random()*filteredMovies.length)]

            console.log(getRandomMovie);
            setMovie(getRandomMovie);
            return request;
        }
        fetchData()
    },[])

  

    // Truncate function => takes in str and n params, and put "..." at the end when str exceed n of words.
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    

    return (
        
         <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movie.backdrop_path}`,
                backgroundPosition: "center center",
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie.name}
                </h1>
              <h2 className="banner__desc">{truncate(movie.overview, 200)}</h2>
                <div className="icon-menu">
                    <div className="icon-memu__stars">
                        <FontAwesomeIcon className="icon-menu__star" icon={faStar} />
                        <FontAwesomeIcon className="icon-menu__star" icon={faStar} />
                        <FontAwesomeIcon className="icon-menu__star" icon={faStar} />
                        <FontAwesomeIcon className="icon-menu__star" icon={faStar} />
                        <FontAwesomeIcon className="icon-menu__star" icon={faStar} />

                    </div>
                    <div className="icon-menu__icons">
                        <FontAwesomeIcon className="icon-menu__play" icon={faPlay} />
                        <FontAwesomeIcon className="icon-menu__heart" icon={faHeart} />
                    </div>

                </div>
            </div>
         </header>
        
    )
}

export default Banner;
