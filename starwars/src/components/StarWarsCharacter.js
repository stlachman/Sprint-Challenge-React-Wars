import React from 'react';
import './StarWars.css';

const StarWarsCharacter = (props) => {
	return (
		<div className="character">
      <h3 className="title">{props.attributes.name}</h3>
			<ul className="character-list">
				<li>
					<span className="bold">Gender:</span> {props.attributes.gender}
				</li>
				<li>
					<span className="bold">Height:</span> {props.attributes.height}
				</li>
				<li>
					<span className="bold">Mass:</span> {props.attributes.mass}
				</li>
			</ul>
		</div>
	);
};

export default StarWarsCharacter;
