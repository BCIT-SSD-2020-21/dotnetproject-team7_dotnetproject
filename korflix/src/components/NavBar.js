import React from 'react'
import { Link } from "react-router-dom";
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
                            height="50px"
                        />

                    </a>
                </div>
                <div className="searchBar col-md-4 col-sm-12">
                    {/* <SearchForm searchResults={searchResults} setSearchResults={setSearchResults} /> */}
                    {/* <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-dark" type="submit">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                    </form> */}
                </div>
                <div className="widget-wrap col-lg-3 col-md-4">
                    <div className="row justify-content-between align-items-center py-3 mx-0 iconme">
                        <div className="register-btn">
                            <Link to="/login">
                                <button className="btn">Login / Register</button>
                            </Link>
                        </div>
                        <div className="icon-me"><BsFillPersonFill size={30} /></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
