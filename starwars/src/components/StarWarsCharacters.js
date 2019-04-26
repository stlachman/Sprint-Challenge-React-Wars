import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';

const StarWarsCharacters = (props) => {
  return (
    <ul className="wrapper">
      {
        props.characters.map(character => {
          return <StarWarsCharacter attributes={character} key={character.created}/>
        })
      }
    </ul>
  )
};

export default StarWarsCharacters;