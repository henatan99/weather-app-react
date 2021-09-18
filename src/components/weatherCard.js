import React from 'react'

const WeatherCard = ({weather}) => {
    const {date, imageUrl, imageName, maxTemp, minTemp} = weather;
    return (
        <div className="weather-card-div">
            <h2 className="weather-card-h2">{date}</h2>
            <img src={imageUrl} alt={imageName} className="weather-card-img" />
            <div className="weather-card-temp-wrapper">
                <span className="weather-card-temp">{maxTemp}</span>
                <span className="weather-card-temp">{minTemp}</span>
            </div>
        </div>
    )
}

export default WeatherCard