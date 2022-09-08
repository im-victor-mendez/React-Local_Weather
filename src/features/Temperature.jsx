import React from 'react'

function Temperature(props) {
    let temperature = props.temperature, unit = props.unit
    
    return(
        <div>
            <h2 id='temperature'>{temperature}</h2>
            <button id='convert' onClick={function() {
                switch(unit) {
                    case "C":
                        document.getElementById('temperature').innerText = (temperature * 1.8 + 32).toFixed(2)
                        temperature = temperature * 1.8 + 32
                        document.getElementById('convert').innerText = "°F"
                        unit = "F"
                        break
                    case "F":
                        document.getElementById('temperature').innerText = ((temperature - 32) / 1.8).toFixed(2)
                        temperature = (temperature - 32) / 1.8
                        document.getElementById('convert').innerText = "°C"
                        unit = "C"
                        break
                }
            }}>°C</button>
        </div>
    )
}

export default Temperature