import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';

export default function NavBar() {
    return (

        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="logo col-sm-2">
                    <a href="/" className="brand-wrap">
                        <img
                            src="./img/logo.png"
                            alt="korflix"
                            width="200px"
                        />

                    </a>
                </div>
                <div className="search col-md-4 col-sm-12">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-dark" type="submit">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="widget-wrap col-lg-3 col-md-4">
                    <div className="row justify-content-between align-items-center py-3 mx-0 iconme">
                        <div className="register-btn">
                            <button className="btn">Login / Register</button>
                        </div>
                        <h3 className="icon-me"><BsFillPersonFill /></h3>
                    </div>
                </div>
            </div>
        </div>

    )
}
// {/* <h1 className="header">This is nav</h1>
//             <h2 className="subheader">This is subheader!</h2>
//             <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//             <button className="primary-btn">My profile</button> */}