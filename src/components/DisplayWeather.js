import React from 'react';
import "./displayWeather.css"

const DisplayWeather = (props) => {
    console.log("displayWeather");
    console.log(props.data)
    return (
        <div className='displayWeather'>
            <div className='maincard'>
                <span className='classTitle'>
                    {props.data.data.name}, {props.data.data.sys.country} Weather.
                </span>
            </div>
        </div>
    );
}

export default DisplayWeather;
