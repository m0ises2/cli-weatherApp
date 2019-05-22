const ora = require('ora')
const getWeather = require('../utils/weather')
const getLocation = require('../utils/location')

module.exports = async (args) => {
    const spinner = ora().start()

    try {
        const location = args.location || args.l || getLocation()
        const weather = await getWeather(location, args.apiKey)

        spinner.stop()

        console.log(`Current conditions in ${location}:`)
        console.log(`\t${weather.main.temp}° ${weather.weather[0].description}`)
    } catch (error) {
        spinner.stop()

        console.error(error)
    }
}