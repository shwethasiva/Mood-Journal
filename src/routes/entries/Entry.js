import React from 'react';
import axios from 'axios';
import custom from './entries.css';
import bootstrap from 'react-bootstrap';
import Graph from '../graph/Graph'

class Entry extends React.Component {

	render () {
		const card = this.props.card;
		//const mood = card.sentiment.document_tone.tones[0].tone_name;

		return (
			

			<div className={custom.entryCard}>

			<div className={custom.date}>
					<div>{card.date.slice(0,10)}</div>
					</div>

			<div className="row">

				<div className="col-xs-8">
					<h3>{card.title}</h3>
				</div>

				<div className="col-xs-4">
					<h3>Mood Detected: {card.sentiment.tone_name}</h3>
				</div>
			
			</div>

			<div className="row">

				<div className="col-xs-8">
					<div dangerouslySetInnerHTML={{__html: card.text}} />
				</div>

				<div className="col-xs-4">
					<Graph tones={card.sentiment} />
				</div>
			
			</div>

			</div>
			);
	}
}


export default Entry;
