import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class ClickMovie extends Component {
    render() {
        return (
            <Link key={this.props.id} to={"/movie/" + this.props.id} >
                <button className="btn btn-dark btn-sm">hello</button>
            </Link>
        )
    }
}
