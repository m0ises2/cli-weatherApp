const request = require('request-promise');

module.exports = async (location, apiKey) => {
    const options = {
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
          q: `${location}`,
          APPID: apiKey
        },
    }

    const results = await request(options);
    console.log('%o', results)

    return results
}