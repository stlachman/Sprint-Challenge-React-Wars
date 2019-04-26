import React from 'react';
import './StarWars.css';

const StarWarsCharacter = (props) => {
  console.log(props);
  return (
    <ul className="character">
      <li>Name: {props.attributes.name}</li>
      <li>Height: {props.attributes.height}</li>
      <li>Mass: {props.attributes.mass}</li>
    </ul>
  )
}


export default StarWarsCharacter;