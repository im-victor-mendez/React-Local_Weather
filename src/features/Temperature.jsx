import React from 'react'
import './Temperature.css'

function Temperature(props) {
    let temperature = props.temperature, unit = props.unit
    
    return(
        <div className='Temperature'>
            <h2 id='temperature'>{temperature == 0 ? "" : temperature}</h2>
            <button id='convert' onClick={function() {
                switch(unit) {
                    case "C":
                        document.getElementById('temperature').innerText = (temperature * 1.8 + 32).toFixed(2)
                        temperature = temperature * 1.8 + 32
                        document.getElementById('convert').innerText = "°F"
                        unit = "F"
                        document.getElementById('help').innerText = "(Click the unit to calculate °C)"
                        break
                    case "F":
                        document.getElementById('temperature').innerText = ((temperature - 32) / 1.8).toFixed(2)
                        temperature = (temperature - 32) / 1.8
                        document.getElementById('convert').innerText = "°C"
                        unit = "C"
                        document.getElementById('help').innerText = "(Click the unit to calculate °F)"
                        break
                }
            }}>°C</button>
            <p id='help'>(Click the unit to calculate °F)</p>
        </div>
    )
}

export default Temperature