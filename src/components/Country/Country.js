import React from 'react';
import './Country.css'

const Country = (props) => {
  // console.log(props.country);
  const { name, population, area, region, flags } = props.country
  return (
    <div className='country'>
      <h1>Country Name: {name.common}</h1>
      <h4>Population: {population}</h4>
      <p><small>Area: {area}</small></p>
      <p><small>Region: {region}</small></p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;