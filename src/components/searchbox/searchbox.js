import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from '../../redux/actions/actions';
import './searchbox.css';

function Searchbox() {
    const [city, newCity] = useState("Kielce");
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state);
    useEffect(() => {
        dispatch(fetchWeather("Kielce"));
    }, [dispatch]);

    return (
        <div className='ma4 f5 pa4 input'>
            <input
                className='f5 input br-pill grow no-underline ba  b--white-20 pv3 bg-white shadow-5'
                type='search'
                placeholder='type city to search...'
                onClick={() => dispatch(fetchWeather(city))}
                value={city}
                onChange={e => newCity(e.target.value)}
            />
        </div>

    );
}

export default Searchbox;