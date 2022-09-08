import React from 'react'

function Temperature(props) {
    //console.log(props.temperature, props.unit)
    let temperature = props.temperature, unit = props.unit
    /*function convert(temperature, unit) {
        switch(unit) {
            case "C":
                document.getElementById('temperature').innerText = temperature * 1.8 + 32
                break
            case "F":
                document.getElementById('temperature').innerText = (temperature - 32) / 1.8
                break
        }
    }*/
    return(
        <div>
            <h2 id='temperature'>{temperature}</h2>
            {/*<button onClick={convert(temperature, unit)} value={unit}>
                {props.unit == 'C' ? "°C" : "°F"}
            </button>*/}
        </div>
    )
}

export default Temperature