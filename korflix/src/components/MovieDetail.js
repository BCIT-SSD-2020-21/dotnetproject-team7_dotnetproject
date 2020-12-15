import React, { Component } from 'react'


export default class MovieDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            name: "",
            // category: "",
            // date: "",
            // overview: "",
            // popularity: "",
            // runtime: "",
            // img: ""
        };
    }

    componentDidMount() {
        this.fetchDetails();
    }


    fetchDetails() {
        const id = this.props.match.params.id;


        fetch(`https://korflixapi.azurewebsites.net/movie/${id}`)

            .then((res) => res.json())
            .then((detail) => {
                console.log(detail);

                this.setState({
                    id: detail.id,
                    name: detail.name,
                    // category: product.category,
                    // overview: product.overview,
                    // popularity: product.popularity,
                    // runtime: product.runtime,
                    // date: product.release_date,
                    // img: product.poster_path
                });
            });
    }
    render() {
        const { name } = this.state;
        // const { title, overview, popularity, runtime, date, img } = this.state;

        return (
            <div class="card detail-card my-4">
                <div class="row no-gutters">
                    {/* <div className="col-md-4 text-center my-3"><img src={`http://image.tmdb.org/t/p/w185/${img}`} class="card-img" alt="movie" /></div> */}
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 className="card-title text-center">{name}</h3>
                            {/* <p className="card-text">{overview}</p>
                            <p className="card-text">Popularity : {popularity}</p>
                            <p className="card-text">Runtime : {runtime} mins</p>
                            <p className="card-text">Release date : {date}</p> */}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
