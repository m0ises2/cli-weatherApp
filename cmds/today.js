const ora = require('ora')
const getWeather = require('../utils/weather')

module.exports = async (args) => {
    const spinner = ora().start()

    try {
        const location = args.location || args.l
        const weather = await getWeather(location, args.apiKey)

        spinner.stop()

        console.log(`Current conditions in ${location}:`)
        console.log(`\t${weather.condition.temp}° ${weather.condition.text}`)
    } catch (error) {
        spinner.stop()

        console.error(error)
    }
}