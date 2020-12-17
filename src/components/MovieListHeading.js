import React from 'react';

const MovieListHeading = (props) => {
    return (
        <div className='col'>
            <h1 className="movie-heading" style={{ padding: "5px", margin: "10px" }}>{props.heading}</h1>
        </div>
    )
}

export default MovieListHeading;