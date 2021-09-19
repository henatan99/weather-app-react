import React, { useState } from 'react';
import WeatherCard from '../components/weatherCard';
import { imgUrl, apiUrl } from '../helpers/url';

const WeatherCardCont = () => {
  const [location, setLocation] = useState('London');
  const [weather, setWeather] = useState({});

  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  const handleClick = async () => {
    const response = await fetch(apiUrl(location));
    const data = await response.json();
    setWeather({
      date: 'Tuesday',
      imageUrl: imgUrl(data.weather[0].icon),
      imageName: data.weather[0].icon,
      maxTemp: data.main.temp_max,
      minTemp: data.main.temp_min,
    });
  };

  return (
    <div>
      <form>
        <input placeholder="Enter Location" value={location} onChange={handleChange} />
        <button type="button" onClick={handleClick}>Search</button>
      </form>
      <WeatherCard weather={weather} />
    </div>
  );
};

export default WeatherCardCont;
