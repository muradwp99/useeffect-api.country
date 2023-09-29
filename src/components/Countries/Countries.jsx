import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const[countries, setCountries] = useState([]);
    useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);
    return (
        <div className='countries'>
            {
        countries.map(country => <Country flags={country.flags.png} name={country.name.common} population={country.population} area={country.area} capital={country.capital} ></Country>)
      }
        </div>
    );
};

export default Countries;