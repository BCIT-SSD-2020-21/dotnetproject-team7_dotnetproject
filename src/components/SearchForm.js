import React from 'react';

const SearchForm = (props) => {
    return (
        <div className="col">
            <div className="input-group">
                <input className="form-control" value={props.value} onChange={(event) => props.setSearchString(event.target.value)} placeholder="Search" />

            </div>
        </div>
    )
}

export default SearchForm;