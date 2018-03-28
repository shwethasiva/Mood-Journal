import React from 'react';
import axios from 'axios';


class Entry extends React.Component {

	render () {
		const card = this.props.card;
		return (
			<div>


			<h3>November 6, 2017 6:00PM</h3>
			<div>
			<h3>{card.title}</h3>
			<div dangerouslySetInnerHTML={{__html: card.text}} />

			</div>
			<h4>Preview</h4>

			</div>
			);
	}
}


export default Entry;
