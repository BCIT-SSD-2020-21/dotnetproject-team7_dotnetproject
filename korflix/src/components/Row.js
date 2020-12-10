import React, { useState } from 'react';
import MovieList from './MovieList';


const Row = () => {
    const [movies, setMovies] = useState([
        {
            "adult": false,
            "backdrop_path": "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
            "genre_ids": [
                12,
                28,
                878
            ],
            "id": 11,
            "original_language": "en",
            "original_title": "Star Wars",
            "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
            "popularity": 99.95,
            "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
            "release_date": "1977-05-25",
            "title": "Star Wars",
            "video": false,
            "vote_average": 8.2,
            "vote_count": 14682
        },
        {
            "adult": false,
            "backdrop_path": "/1Lhc32P0a62BgMFgd20wXR1osR3.jpg",
            "genre_ids": [
                16,
                12,
                35,
                10751,
                878
            ],
            "id": 732670,
            "original_language": "en",
            "original_title": "The Lego Star Wars Holiday Special",
            "overview": "Rey leaves her friends to prepare for Life Day as she sets off on an adventure to gain a deeper knowledge of the Force. At a mysterious temple, she is hurled into a cross-timeline adventure. Will she make it back in time for Life Day?",
            "popularity": 347.222,
            "poster_path": "/zyzJSI7UZZzz5Toj10rYGF5689z.jpg",
            "release_date": "2020-11-17",
            "title": "The Lego Star Wars Holiday Special",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 52
        },
        {
            "adult": false,
            "backdrop_path": "/SPkEiZGxq5aHWQ2Zw7AITwSEo2.jpg",
            "genre_ids": [
                28,
                12,
                878
            ],
            "id": 181812,
            "original_language": "en",
            "original_title": "Star Wars: The Rise of Skywalker",
            "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
            "popularity": 178.739,
            "poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
            "release_date": "2019-12-18",
            "title": "Star Wars: The Rise of Skywalker",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 5993
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 749336,
            "original_language": "en",
            "original_title": "Star Wars: Wrath of the Mandalorian",
            "overview": "Years after the Clone Wars end, Darth Vader sends bounty hunter Boba Fett to Kashyyyk to track down the last of the Jedi. Fett, motivated by revenge for his father's death, proves effective - but he soon finds out a terrible truth about Vader while on the hunt that gives him a change of heart.",
            "popularity": 183.576,
            "poster_path": "/ksil1FjB7AfNk34LAti0636pyTd.jpg",
            "release_date": "2008-07-06",
            "title": "Star Wars: Wrath of the Mandalorian",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 15
        },
    ])
    return (
        <div>
            <MovieList movies={movies} />
        </div>
    )
}

export default Row;



