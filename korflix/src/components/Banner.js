import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faHeart } from '@fortawesome/free-solid-svg-icons'


const base_url = "http://image.tmdb.org/t/p/original/";


const Banner = (props) => {
    // console.log(props.movies[0]);

  

    // Truncate function => takes in str and n params, and put "..." at the end when str exceed n of words.
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    

    return (
        
         <header className="banner"
            style={{
                backgroundSize: "cover",
                //backgroundImage: `url(${base_url}${movies.backdrop_path}`,
                backgroundPosition: "center center",
            }}>
            <div className="banner__contents">
                {/* <h1 className="banner__title">
                    {movieName}
                </h1>
              <h2 className="banner__desc">{truncate(movieOverview, 200)}</h2> */}
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
