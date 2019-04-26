import React, { Component } from 'react';
import './App.css';
import StarWarsCharacters from './components/StarWarsCharacters';
import Pagination from './components/Pagination';

class App extends Component {
	constructor() {
		super();
		this.state = {
			starwarsChars: [],
			next: null,
			count: 0
		};
	}

	handleClick = (event) => {
		event.preventDefault();
		this.getCharacters(event.target.href);
	};

	componentDidMount() {
		this.getCharacters('https://swapi.co/api/people/');
	}

	getCharacters = (URL) => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({ starwarsChars: data.results, next: data.next, count: data.count });
			})
			.catch((err) => {
				throw new Error(err);
			});
	};

	render() {
		return (
			<div className="App">
				<h1 className="Header">React Wars</h1>
				<StarWarsCharacters characters={this.state.starwarsChars} />
				<Pagination onHandleClick={this.handleClick} count={this.state.count} nextPage={this.state.next} />
			</div>
		);
	}
}

export default App;
