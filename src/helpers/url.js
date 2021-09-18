const imgBaseUrl = 'http://openweathermap.org/img/wn/';
const apiKey = 'acf739538aa6ff0a52056b27277473f7';
const apiBaseUrl = 'https://samples.openweathermap.org/data/2.5/weather';

export const imgUrl = (icon) => `${imgBaseUrl}${icon}.png`
export const apiUrl = (location) => `${apiBaseUrl}?q=${location}&appid=${apiKey}`;

