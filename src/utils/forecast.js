
const request = require('request')

const forecast = (lat, long, callback) => {
    const url = "https://api.darksky.net/forecast/f01b46a107857518bf692692c0f308bc/"+lat +","+ long+"?units=si"
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service",undefined)
        }
        else if (body.error) {
            callback("Unable to find location", undefined)
        }
        else {
            const forecastMessage = "It is currently " + body.currently.temperature + " degrees. There is a " + body.currently.precipProbability  + " chance of rain."
            callback(undefined, forecastMessage)
        }
    
    });

}

  module.exports = forecast;