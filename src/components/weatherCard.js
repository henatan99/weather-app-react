import React from 'react'

const WeatherCard = ({weather}) => {
    const {date, imageUrl, imageName, maxTemp, minTemp} = weather;
    return (
        <div>
            <h2>{date}</h2>
            <img src={imageUrl} alt={imageName}/>
            <div>
                <span>{maxTemp}</span>
                <span>{minTemp}</span>
            </div>
        </div>
    )
}

export default WeatherCard