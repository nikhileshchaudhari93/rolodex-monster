import './search-box.styles.css';
import React from 'react';

export const SearchBox = (props) => {

    return (
        <div className="search-box">
            <input type="search" placeholder="Search Users" onChange={ props.handleChange }/>
        </div>
    );
};