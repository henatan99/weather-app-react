import React, { useState } from 'react';
import PropTypes from 'prop-types'; // eslint disable import/no-extraneous-dependencies

const WeatherCard = ({ weather }) => {
  const {
    date, imageUrl, imageName, maxTemp, minTemp,
  } = weather;

  const [scale, setScale] = useState('\xB0C');

  const handleClick = (e) => {
    e.preventDefault();
    setScale(scale === '\xB0C' ? '\xB0F' : '\xB0C');
  };

  return (
    <div className="weather-card-div">
      <h2 className="weather-card-h2">{date}</h2>
      <img src={imageUrl} alt={imageName} className="weather-card-img" />
      <div className="weather-card-temp-wrapper">
        <span className="weather-card-temp">
          {scale === '\xB0C' ? Math.floor(maxTemp - 273) : Math.floor((maxTemp - 273) * (9 / 5) + 32) }
        </span>
        <span className="weather-card-temp">
          {scale === '\xB0C' ? Math.floor(minTemp - 273) : Math.floor((minTemp - 273) * (9 / 5) + 32) }
        </span>
        <button type="button" onClick={handleClick}>{scale}</button>
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
