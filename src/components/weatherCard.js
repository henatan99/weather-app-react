import React from 'react';
import PropTypes from 'prop-types';

const WeatherCard = ({ weather }) => {
  const {
    date, imageUrl, imageName, maxTemp, minTemp,
  } = weather;
  return (
    <div className="weather-card-div">
      <h2 className="weather-card-h2">{date}</h2>
      <img src={imageUrl} alt={imageName} className="weather-card-img" />
      <div className="weather-card-temp-wrapper">
        <span className="weather-card-temp">{maxTemp}</span>
        <span className="weather-card-temp">{minTemp}</span>
      </div>
    </div>
  );
};

WeatherCard.defaultProps = {
  weather: {
    date: '',
    imageUrl: '',
    imageName: '',
    maxTemp: null,
    minTemp: null,
  },
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    date: PropTypes.string,
    imageUrl: PropTypes.string,
    imageName: PropTypes.string,
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number,
  }),
};

export default WeatherCard;
