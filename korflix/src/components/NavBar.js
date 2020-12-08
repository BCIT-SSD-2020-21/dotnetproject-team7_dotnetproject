import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg="white">
            <Navbar.Brand href="/">
                <img
                    src="./img/logo.png"
                    width="200"
                    height="50"
                    className="d-inline-block align-top"
                    alt="brand logo"
                />
            </Navbar.Brand>
        </Navbar>
    )
}
// {/* <h1 className="header">This is nav</h1>
//             <h2 className="subheader">This is subheader!</h2>
//             <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//             <button className="primary-btn">My profile</button> */}