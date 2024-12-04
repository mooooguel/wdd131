const temperature = 50;  // Test wind chill by setting this value to 51
const wind = 20;
const conditions = "Partly Cloudy";
// let chill = "N/A";
// document.getElementById("chill").innerHTML = "N/A";
// console.log("Chill0 = " + chill);               // TODO DEBUG

//-------------------------------------------------------------------------------------
// https://www.backpacker.com/skills/how-to-calculate-wind-chill
//
// The National Weather Service’s formula to calculate wind chill is:
// 35.74 + 0.6215T – 35.75(V0.16) + 0.4275T(V0.16).
//
// T represents air temperature in Fahrenheit 
// V represents wind speed in miles per hour.
// (Humidity does not affect the overall wind chill enough to be considered a factor.)
// The equation only works for temperatures at or below 50°F and gusts above 3 mph.
//-------------------------------------------------------------------------------------

function calculateWindChill(T, V) {
    return 35.74 + (0.6215 * T) - (35.75 * (Math.pow(V, 0.16))) + (0.4275 * T) * (Math.pow(V, 0.16));
}

// For Fun & Experience - Added "Calculate Wind Chill" button
// if (temperature <= 50 && wind > 3) {
//     chill = calculateWindChill(temperature, wind);
// }

document.getElementById("temp").innerHTML = temperature + "&deg;C";
document.getElementById("condition").innerHTML = conditions;
document.getElementById("wind").innerHTML = wind + " km/h";
// Set initial chill string to be "N/A"
document.getElementById("chill").innerHTML = "N/A";

// const chill = calculateWindChill(temperature,wind);
// document.getElementById("chill").innerText = chill.toFixed(2);

document.getElementById("chill-button").addEventListener("click", () => {
    // Calculate and update the "chill" value
    let chill = "N/A";
    document.getElementById("chill").innerHTML = chill;

    // console.log("Chill1 = " + chill);           // TODO DEBUG
    if (temperature <= 50 && wind > 3) {
        chill = calculateWindChill(temperature, wind);
        // console.log("Chill2 = " + chill);       // TODO DEBUG
        const stringChill = String(chill.toFixed(2));
        // console.log("Chill = " + stringChill);  // TODO DEBUG
        document.getElementById("chill").innerHTML = String(chill.toFixed(2)) + "&deg;C";
    } else {
        // console.log("Chill3 = " + chill);       // TODO DEBUG
        chill = "N/A"
        document.getElementById("chill").innerHTML = chill;
    }
})