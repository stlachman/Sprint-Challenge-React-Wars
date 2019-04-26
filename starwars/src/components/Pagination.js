import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
	// Get total number of characters
	let count = props.count;
	// Divide total number of characters by amount of characters displayed per page and round up (since anything over a multiple of 10 would need it's own page)
	let total = Math.ceil(count / 10);
	let index = [];
	for (let i = 1; i <= total; i++) {
		index.push(i);
	}
	return (
		<div className="pagination">
			<ul>
				{index.map((item) => {
					return (
						<li key={item}>
							<a href={`https://swapi.co/api/people/?page=${item}`} onClick={props.onHandleClick}>
								{item}
							</a>
						</li>
					);
				})}
				{/*  Get next page functionality
          <li><a onClick={props.onHandleClick} href={props.nextPage}>2</a></li> 
        */}
			</ul>
		</div>
	);
};

export default Pagination;
