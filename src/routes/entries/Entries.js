import React from 'react';
import Entry from './Entry';
import axios from 'axios';
import Button from 'react-bootstrap/lib/Button';

class Entries extends React.Component {
	render() {
		return (
				<div>
				<h1>Read your Entries!</h1>
				<h2>Let us know how you feel.</h2>
				<Button onClick={this.clickHandler}>
				Create New Entry!
				</Button>
				<Entry />
				</div>
			);
	}
}

export default Entries;