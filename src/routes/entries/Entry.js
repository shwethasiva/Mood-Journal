import React from 'react';
import axios from 'axios';
import custom from './entries.css';
import bootstrap from 'react-bootstrap';

class Entry extends React.Component {

	render () {
		const card = this.props.card;
		for 
		const mood = card.sentiment.document_tone.tones[0].tone_name;
		console.log(mood)


		return (
			<div className="container">

			<div className={custom.date}>
					<div>{card.date.slice(0,10)}</div>
					</div>

			<div className="row">
				
				<div className="col-xs-8">
					<h3>{card.title}</h3>
				</div>

					<div className="col-xs-4">
						<h3>Mood Detected: {card.sentiment.document_tone.tones[0][tone_name]}</h3>
					<ul>
          				{this.props.list.map(function(listValue){
            			return <li>{listValue}</li>;
          				})}
        			</ul>


					</div>

			</div>

			<div dangerouslySetInnerHTML={{__html: card.text}} />

			
				
			
			<h4>Preview</h4>

			</div>
			);
	}
}


export default Entry;
