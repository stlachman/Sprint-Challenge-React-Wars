import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';

const StarWarsCharacters = (props) => {
  return (
    <div className="wrapper">
      {
        props.characters.map(character => {
          return <StarWarsCharacter attributes={character} key={character.created}/>
        })
      }
    </div>
  )
};

export default StarWarsCharacters;