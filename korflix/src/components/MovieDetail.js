import React, { Component } from 'react'
import { FiHeart } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Comments from './Comments'


export default class MovieDetail extends Component {
    render() {
        return (
            <div className="container d-flex">
                <div className="row">
                    <div className="col detail-box mt-3">
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT970Z5gAb4EAdKgyUt_vz_VBRCYitUD3i0NzGlgFxbvMVaLEKv" />

                        <div className="col col-md-7 title">
                            <h3 className="detail-title"> [고블린], Guardian: The Lonely and Great God</h3>
                            <div>
                                <p>release date:11/12/20 | average rating: 4.5/5</p>
                                <hr />
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
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
        )
    }
}

// const MovieDetail = ({ match }) => {
//     console.log(match);

//     const fetchMovieDetail = async (movieId) => {
//         try {
//             const { data } = await axios.get(`/moive/${movieId}`, {
//                 params: {

//                 }
//             })


//         }
//         return data;
//     }

//         catch (err) { }

// }
// return (
//     <div>whyyyyyyyy</div>
// )
// }

// export default MovieDetail

/////////////////////////////////////////////////////////////////

    // useEffect(() => {
    //     const fetchAPI = async => {
    //         setDetail(await fetchMovieDetail(movie.movieId));
    //     };


    // }, [movie.movieId]);