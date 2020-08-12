import React, { Component } from 'react';



class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            userSelection: ''
        }
    }

    userInput = (event) => {
        this.setState({
            userSelection: event.target.value
        })
    }

    render() {
        return (
            <form className="search-box">
                <label className="sr-only" htmlFor="weatherOutput">Enter City Name</label>
                <input onChange={this.userInput} type="text" className="search-bar" placeholder="Search City..."/>
                <button onClick={(event) => this.props.userSubmit(event, this.state.userSelection)}>Search Weather</button>
            </form>
        )
    }
}

export default SearchBox;
