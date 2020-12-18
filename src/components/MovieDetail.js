import React, { useEffect, useState } from 'react'
import { FiHeart } from 'react-icons/fi';
import ReactStars from "react-stars";
import axios from "../axios";
import Comments from "./Comments";
import { useHistory } from 'react-router-dom';

const base_url = "http://image.tmdb.org/t/p/original/";



const MovieDetail = ({ match }) => {
    const history = useHistory();

    const id = match.params.id;
    const [movie, setMovie] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/movie/${id}`);
            const moviesData = request.data;

            setMovie(moviesData);
            return request;
        }
        fetchData()
    }, [])

    const postRating = (rating) => {
        fetch('https://korflixapi.azurewebsites.net/rating', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                movieId: id,
                userId: sessionStorage.getItem("userId"),
                rating: rating,
            })
        })

    }

    const submitRating = (rating) => {
        var isAuth = !!sessionStorage.getItem("bearer-token")
        // console.log(token)
        if (!isAuth) {
            history.push("/login")
        } else {
            postRating(rating);
        }
    }

    return (
        <>
            <div className="container d-flex">
                <div className="row">
                    <div className="col detail-box mt-3">
                        <img src={`${base_url}${movie?.poster_path}`} alt={movie.name} />

                        <div className="col col-md-7 title">
                            <h3 className="detail-title">{movie.name}</h3>
                            <div>
                                <p>Release Date: {movie.first_air_date} | Average Rating: {movie?.tmdB_average || movie?.korlfix_average}/5</p>
                                <hr />
                                <p className="detail-overview">{movie.overview}</p>
                            </div>
                            <ReactStars
                                count={5}
                                onChange={submitRating}
                                size={24}
                                color2={'#ffd700'} />
                        </div>
                    </div>
                    <FiHeart className="detail-icon" size={40} />

                </div>
            </div>
            <Comments />
        </>
    )
}

export default MovieDetail;