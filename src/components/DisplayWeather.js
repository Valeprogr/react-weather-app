import React from 'react';
import "./displayWeather.css"

const DisplayWeather = (props) => {
    console.log("displayWeather");
    console.log(props.data)
    return (
        <div className='displayWeather'>
            <div className='maincard'>
                <span className='cardTitle'>
                    {props.data.data.name}, {props.data.data.sys.country}. Weather.
                </span>
                <span className='cardsubtitle'>
                    As of {new Date().toLocaleTimeString()}
                </span>
            </div>
        </div>
    );
}

export default DisplayWeather;
