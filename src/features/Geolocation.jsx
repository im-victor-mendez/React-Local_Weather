import React from 'react'

/*function Geolocation() {
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
    //Add button to change temperature
}*/

class Geolocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            api: 'https://weather-proxy.freecodecamp.rocks/api/current?',
            country: "Country State"
        }

        this.success = this.success.bind(this)
    }

    success(position) {
        this.setState({
            api: 'https://weather-proxy.freecodecamp.rocks/api/current?lon=' + position.coords.longitude + '&lat' + position.coords.latitude
        })
    }

    render() {
        navigator.geolocation.getCurrentPosition(this.success)
        /*fetch(this.state.api)
            .then(response => response.json())
            .then(
                d => {
                    this.setState({
                        country: d.name + ', ' + d.sys.country
                    })
                    const country = d.name + ', ' + d.sys.country
                    const temperature = d.main.temp
                    const main = d.weather[0].main
                    const icon = d.weather[0].icon
                    console.log(country, temperature, main, icon)
                }
            )*/
        return(
            <div>
                <p>{this.state.api}</p>
                <p>{this.state.country}</p>
            </div>
        )
    }
}

export default Geolocation