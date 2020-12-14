import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Banner(movie) {
    const movieResult = movie.movie;
    
    const [oneMovie, setOneMovie] = useState([]);

    console.log(movieResult)

    useEffect(()=>{

       
    })
    


    // Truncate function => takes in str and n params, and put "..." at the end when str exceed n of words.
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(http://image.tmdb.org/t/p/original/${movieResult?.backdrop_path || movieResult?.poster_path}`,
                backgroundPosition: "center center",
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movieResult?.title || movieResult?.name || movieResult?.original_name}
                </h1>
                <h2 className="banner__desc">{truncate(movieResult.overview, 200)}</h2>
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
