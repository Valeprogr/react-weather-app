import React, {useState} from 'react';
import "./weather.css";
import "./DisplayWeather";
import DisplayWeather from './DisplayWeather';

const API_KEY =process.env.REACT_APP_API_KEY;
const Weather = () => {
    

console.log(API_KEY)
    const [form, setForm] =useState({
        city:"",
        country:""
    });

    const [weather, setWeather] = useState({});


    async function weatherData(e){
        e.preventDefault();
        if(form.city === ""){
            alert("Add a value")
        }else{
            const data = await fetch(
             `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${API_KEY}`
            ).then ((res)=>(res.json()))
            .then((data)=> setWeather(prev => {return {...prev, data}}))
            
            console.log(weather);
        }
    }

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        if(name === 'city'){
           setForm ({...form, city:value})
        }

        if(name === 'country'){
            setForm ({...form, country:value})
         }
         //console.log(form.city, form.country)
    }
    return (
        <div className='weather'>
            <span className='title'>Weather App</span>
            <br/>

            <form>
                <input type="text" name='city' placeholder='city' onChange={handleChange}/>
                <input type="text" name='country' placeholder='country' onChange={handleChange}/>
                <button type='submit' className='getWeather' onClick={(e)=>weatherData(e)}>Submit</button>
            </form>

            {
                weather.data !== undefined ?
                <div>
                    <DisplayWeather data={weather} />
                </div>
                :
              null
            }
        </div>
    );
}

export default Weather;
