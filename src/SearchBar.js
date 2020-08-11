import React, { Component } from 'react';


class SearchBar extends Component {
    render() {
        return (
            <div className="search-box">
                 <input type="text" className="search-bar" placeholder="Search..."/>
            </div>
        )
    }
}


export default SearchBar;