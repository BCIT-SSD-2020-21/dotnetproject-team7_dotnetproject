import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchForm = (props) => {
    return (
        <div className="col">
            <div className="input-group">
                <input className="form-control" placeholder="Search" />
                <div className="input-group-append">
                    <button className="btn btn-dark" type="submit">
                        <FaSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchForm;