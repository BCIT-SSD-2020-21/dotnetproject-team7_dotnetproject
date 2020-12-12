import React from 'react'
import NavBar from "./NavBar";
import Banner from "./Banner";


export default function Header({ searchString, setSearchString }) {
    return (
        <div>
            <NavBar searchString={searchString} setSearchString={setSearchString} />
            <Banner />
        </div>
    )
}
