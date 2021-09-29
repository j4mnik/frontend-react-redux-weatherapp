import {useSelector } from "react-redux";
import './widget.css';

const today = new Date();
const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();


function Widget() {
    const state = useSelector(state => state);
    const { weather} = state;

    return (
        <article className="grow br4 b--black-10 mv4 w-100 pa1 w-50-m w-25-l mw5 center bg-white shadow-5">
            <div className="pa2 ph3-ns pb-ns">
                <div className="dt w-100 mt1">
                    <div className="dtc">
                        <h1 className="f5 mv0 grow">{weather?.name}, {weather?.sys?.country}</h1>
                    </div>
                    <div className="dtc tr">
                        <h2 className="f5 mv0 grow">{date}</h2>
                    </div>
                </div>
                <ul className="list pl0 ml0 center mw5">
                    <li className="f5 ph3 pv2">Temperature: {weather?.main.temp}{"°C"}</li>
                    <li className="f5 ph3 pv2">Feels like: {weather?.main.feels_like}{"°C"}</li>
                    <li className="f5 ph3 pv2">Description:  {weather?.weather[0].description} </li>
                    <li className="f5 ph3 pv2">Pressure: {weather?.main.pressure} {"hPa"} </li>
                    <li className="f5 ph3 pv2">Humidity: {weather?.main.humidity}{"%"} </li>
                    <li className="f6 ph3 pv2">Data provider: openweathermap.org</li>
                </ul>
            </div>
        </article>
    );
}
export default Widget;
