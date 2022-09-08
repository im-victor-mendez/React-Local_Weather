import React from 'react'
import Temperature from './Temperature'
class Geolocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            country: "",
            temperature: 0,
            unit: "C",
            main: "",
            icon: ""
        }

        this.success = this.success.bind(this)
    }

    success(position) {
        const api = 'https://weather-proxy.freecodecamp.rocks/api/current?lon=' + position.coords.longitude + '&lat=' + position.coords.latitude
        fetch(api)
        .then(response => response.json())
        .then(
            d => {
                this.setState({
                    country: d.name + ', ' + d.sys.country,
                    temperature: d.main.temp,
                    main: d.weather[0].main,
                    icon: d.weather[0].icon
                })
            }
        )
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success)
    }

    render() {
        return(
            <div>
                <h1>{this.state.country}</h1>
                <Temperature temperature={this.state.temperature} unit={this.state.unit}/>
                <h3>{this.state.main}</h3>
                <img src={this.state.icon}/>
            </div>
        )
    }
}

export default Geolocation