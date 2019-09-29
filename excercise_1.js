function event (time, place) {
    return {
        time: () => {return time},
        place: () => {return place},
    }
};

function dataType (type, unit) {
    return {
        type: () => {return type},
        unit: () => {return unit},
    }
};

function weatherData (value, time, place, type, unit) {
    const dataType1 = dataType(type, unit);
    const event1 = event(time, place);
    return {
        value: () => {return value},
        dataType: () => {return dataType1},
        event: () => {return event1},
    }
};

function temperature(value, time, place, unit) {
    let weatherData1 = weatherData(value, time, place, 'temperature', unit);
    return {
        convertToF: () => {
            weatherData1 = weatherData(weatherData1.value(), weatherData1.event().time(), weatherData1.event().place()
            , weatherData1.dataType().type, weatherData1.dataType().unit());
            console.log("Converting: " + weatherData1.value() + " to fahrenheit.")
        },
        convertToC: () => {
            console.log("Converting: " + weatherData1.value() + " to celsius.")},
    }
}
function precipitation(value, time, place, precipitationType, unit) {
    const weatherData1 = weatherData(value, time, place, 'precipitation', unit);
    return {
        precipitationType : () => {return precipitationType},
        convertToInches : () => {console.log("Converting : "+ weatherData1.value() + " to inches")},
        convertToMM : () => {console.log("Converting : "+ weatherData1.value() + " to millimeters")}
    }
}
function cloudCoverage(value, time, place, unit) {
    const cloudCoverage1 = Object.assign({},weatherData(value, time, place, 'cloud coverage',unit));
    return cloudCoverage1;
}

function WeatherHistory(data) {
    return {
        getCurrentPlace: () => console.log("adam " + data[0].event().place()),
        setCurrentPlace: (place) => data[0] = weatherData(data[0].value(), data[0].time, place, data[0].type, data[0].unit),
        clearCurrentPlace: () => data[0] = weatherData(data[0].value(), data[0].time, "", data[0].type, data[0].unit),

        getCurrentType: () =>  { return " "},
        setCurrentType: (type) => { console.log("Type set") },
        clearCurrentType: () => { console.log("Cleared")},

        getCurrentPeriod: () => { return ""},
        setCurrentPeriod: (period) => { console.log(" Period set")},
        clearCurrentPeriod: () => { console.log("Cleared")},

        convertToUSUnits: () => { },
        convertToInternationalUnits: () => {},

        add: (addData) => { data.add(addData)},
        data: () => { return data}
    }
}

function WeatherPrediction(time, place, type, unit) {
    const dataType1 = dataType(type, unit);
    const event1 = event(time, place);
    return {
        dataType: () => { return dataType1 },
        event: () => { return event1 },
        matches: (data) => { return data.event().time() == time }, // Should compare multiple value
        to: () => { return -1 },
        from: () => {return -1 },
    }
};


function TemperaturePrediction(time, place, type, unit) {
    const weatherPrediction = WeatherPrediction(time, place, type, unit)

    return {
        convertToF: () => { console.log("Converting to F") },
        convertToC: () => { console.log("Converting to C")},
    }
};

function PrecipitationPrediction(time, place, type, unit) {
    const weatherPrediction = WeatherPrediction(time, place, type, unit)

    return {
        types: () => { console.log( "Returning types")},
        matches: (data) => { return data.event().time() == time },
        convertToInches: () => { console.log("Converting to inches")},
        convertToMM: () => { console.log("Converting to mm")},
    }
};


function WindPrediction(time, place, type, unit) {
    const weatherPrediction = WeatherPrediction(time, place, type, unit)

    return {
        directions: () => { console.log( "Returning directions")},
        matches: (data) => { return data.event().time() == time },
        convertToMPH: () => { console.log("Converting to mph")},
        convertToMS: () => { console.log("Converting to ms")},
    }
};

function cloudCoveragePrediction(value, time, place, unit) {
    const cloudCoveragePrediction1 = Object.assign({},weatherData(value, time, place, 'cloud coverage prediction',unit));
    return cloudCoveragePrediction1;
}

function WeatherForecast(data) {
    return {

        getCurrentPlace: () => console.log("adam " + data[0].event().place()),
        setCurrentPlace: (place) => data[0] = weatherData(data[0].value(), data[0].time, place, data[0].type, data[0].unit),
        clearCurrentPlace: () => data[0] = weatherData(data[0].value(), data[0].time, "", data[0].type, data[0].unit),

        getCurrentType: () =>  { return " "},
        setCurrentType: (type) => { console.log("Type set") },
        clearCurrentType: () => { console.log("Cleared")},

        getCurrentPeriod: () => { return ""},
        setCurrentPeriod: (period) => { console.log(" Period set")},
        clearCurrentPeriod: () => { console.log("Cleared")},

        convertToUSUnits: () => { },
        convertToInternationalUnits: () => {},

        add: (addData) => { data.add(addData)},
        data: () => { return data }
    }
}

function DateInterval(from, to) {
    return {
        from: () => { return from },
        to: () => {  return to },
        contains: (data) => { return data < to && data > from }
    }
}