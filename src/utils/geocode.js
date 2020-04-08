const request = require('request')


const gecocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiYWJvcmVuc3p0YWpuIiwiYSI6ImNrNXVwcHhpbDA1aDgzZG1kc3h0emwxaTMifQ.2Gz7eSqBJFh1_tADOmEqUA&limit=1"

    request({url, json: true}, (error, { body }) => {
        console.log(body)
        if (error) {
            callback("Unable to connect to location services", undefined)
        }
        else if (body.features.length === 0){
            console.log("here here")
            callback("Unable to find location. Try another search.", undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
    
};

module.exports = gecocode;