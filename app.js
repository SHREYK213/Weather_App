const posStack = require('./utils/posStack')
const forecast = require('./utils/forecast')



const address = process.argv[2]


if (!address) {
    console.log('Please enter a location')
} else {

    posStack(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {

            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {

            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)

        })
    })
}






