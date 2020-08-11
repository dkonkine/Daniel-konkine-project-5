import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const WEATHER_KEY = '45962206e241477700e0f4b9ce3f5897';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: "Toronto",
    }  
  }

  componentDidMount() {
    const { cityName } = this.state;

    const URL = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=${cityName}&units=m`

    axios
    .get(URL)
    .then((res) => {
      return res.data;
      // console.log(res);
    }).then((data) => {
      this.setState({ 
        location: data.location.name,
        temperature: data.current.temperature, 
        weather_descriptions: data.current.weather_descriptions
      })
    })
    .catch(err => {
      if (err) console.log('error', err);
    })
  }

  render() {
    const currentDate = (d) => {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`
    }

    const { location, temperature, weather_descriptions } = this.props;


    return (
    <div className="app">
      <h1>Weather App</h1>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."/>
        </div>
        
        <div className="location-box">
        <div className="location">{location}</div>
          <div className="date">{currentDate (new Date())}</div>
        </div>

        <div className="weather-box">
        <div className="temp">{temperature}</div>
        <div className="weather">{weather_descriptions}</div>
        </div>

      </main>
    </div>
    );
  }

}

export default App;
