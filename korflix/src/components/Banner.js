import React, { useEffect, useState } from 'react'
import axios from "../axios";
import requests from "../requests";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {
    const [movie, setMovie] = useState([]);

  

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.allMovies);
            const data = request.data.results;
            console.log(data);
            setMovie(
                // request.data.results[
                //     // randomize movie picture
                //     Math.floor(Math.random() * request.data.results.length)
                // ]
            );
            
        }
        fetchData()
    },[])

    console.log(movie);




    // Truncate function => takes in str and n params, and put "..." at the end when str exceed n of words.
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(http://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`,
                backgroundPosition: "center center",
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
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
