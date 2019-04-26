import React from 'react';

const StarWarsCharacter = (props) => {
  console.log(props);
  return (
    <li>
      {props.attributes.name}
    </li>
  )
}


export default StarWarsCharacter;