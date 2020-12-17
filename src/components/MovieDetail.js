import React, { useEffect, useState } from 'react'
import { FiHeart } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from "../axios";
import Comments from "./Comments";

const base_url = "http://image.tmdb.org/t/p/original/";


export default function MovieDetail({match}) {
        const id = match.params.id;
        const [movie, setMovie] = useState([]);

        useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(`/movie/${id}`);
            const moviesData = request.data;

            setMovie(moviesData);
            return request;
        }
        fetchData()
        },[])

        // console.log(movie);
        
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
                                    <p>{movie.overview}</p>
                                </div>
                                <div className="detail-stars">
                                    <FontAwesomeIcon className="icon-menu__star" icon={faStar} />
                                    <FontAwesomeIcon className="icon-menu__star" icon={faStar} />
                                    <FontAwesomeIcon className="icon-menu__star" icon={faStar} />
                                    <FontAwesomeIcon className="icon-menu__star" icon={faStar} />
                                    <FontAwesomeIcon className="icon-menu__star" icon={faStar} />

                                </div>
                            </div>
                            <FiHeart className="detail-icon" size={40} />
                        </div>
                    </div>
                </div>
                <Comments />
            </>
        )
}
