const request = require('request-promise');

module.exports = async (location, apiKey) => {
    await new Promise(resolve => setTimeout(resolve, 5000))

    const options = {
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        qs: {
          q: `${location}`,
          APPID: apiKey
        },
        json: true
    }

    const results = await request(options);
    
    return results
}