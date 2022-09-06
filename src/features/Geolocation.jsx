import React from 'react'

function Geolocation() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            fetch('https://weather-proxy.freecodecamp.rocks/api/current?lon=' + lon + '&lat=' + lat)
            .then(response => response.json())
            .then(
                d => {
                    const country = d.name + ', ' + d.sys.country
                    const temperature = d.main.temp
                    const main = d.weather[0].main
                    const icon = d.weather[0].icon
                    console.log(country, temperature, main, icon)
                }
            )
        }
    )
}

export default Geolocation