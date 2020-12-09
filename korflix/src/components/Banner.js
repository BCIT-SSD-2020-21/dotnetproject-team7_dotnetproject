import React, { useEffect, useState } from 'react'
import axios from "../axios";
import requests from "../requests";

export default function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.koreanDrama);
            console.log(request.data.results)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData()
    }, [])



    console.log(movie);

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(http://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path})`,
                backgroundPosition: "center center",
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <h2 className="banner__desc">{movie.overview}</h2>
            </div>
        </header>
    )
}
