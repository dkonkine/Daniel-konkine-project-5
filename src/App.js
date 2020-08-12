import React, { Component } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';
import './App.css';

const WEATHER_KEY = '45962206e241477700e0f4b9ce3f5897';


class App extends Component {

  constructor() {
    super();
    this.state = {
      weatherData: {},
      cityName: ''
    }  
  }

  componentDidMount() {
    

    const URL = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=toronto&units=m`

    axios
    .get(URL)
    .then((res) => {
      this.setState({
        weatherData: res.data,
        cityName: 'toronto'
      })
      
    })
    .catch(err => {
      if (err);
    })
  }


  userSubmit = (event, userInput) => {
    event.preventDefault();

    if(this.state.userInput === "") {
      alert("Input field required");
      return;
    }

    const secURL = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=${userInput}&units=m`
    
    console.log(secURL);
    axios
    .get(secURL)
    .then((res) => {
      this.setState({
        weatherData: res.data,
      })
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

    


    return (
    <div className="app">
      <main>

        <SearchBox userSubmit={this.userSubmit} onChange={this.weatherUpdate}/>

        {
          this.state.cityName === ''
          ? null
          : <div className="location-box">
              <div className="location">{this.state.weatherData.location.name} {this.state.weatherData.location.region}</div>
              <div className="date">{currentDate (new Date())}</div>
              <div className="weather-box">
              <div className="temp">{this.state.weatherData.current.temperature}℃</div>
              <div className="weather">{this.state.weatherData.current.weather_descriptions[0]}</div>
              <img src={this.state.weatherData.current.weather_icons[0]} alt="#"/>
              </div>
            </div>
        }

      </main>
    </div>
    );
  }

}

export default App;
