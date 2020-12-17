import React from 'react'
import NavBar from "./NavBar";



export default function Header({ searchString, setSearchString }) {
    return (
        <div>
            <NavBar searchString={searchString} setSearchString={setSearchString} />
        </div>
    )
}
