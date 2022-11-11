const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e9eb61139a9257d1138f7b5fceb85db2&query=' + latitude + ',' + longitude


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain. The humidity of the city is '+body.current.humidity+'.')
        }
    })
}

module.exports = forecast