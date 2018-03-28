import React from 'react';
import Entry from './Entry';
import axios from 'axios';
import Button from 'react-bootstrap/lib/Button';
import Link from '../../components/Link';

class Entries extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			entries: []
		}



	}

	componentDidMount() {
		let self = this;
		axios.get('/api/entries')
  		.then(function (response) {
    		self.setState({entries: response.data})
    	//	self.state.entries = response.data
    		console.log(response.data)
	  	})
	  	.catch(function (error) {
	    	console.log(error);
	  	});
	}




	render() {
		console.log("testing")
		console.log(this.state.entries);


		return (
				<div>
					<h1>Read your Entries!</h1>
					<h2>Let us know how you feel.</h2>
					<Link to="/entry">
						<Button>
							Create New Entry!
						</Button>
					</Link>
					<ul>
						{
						this.state.entries.map(function(item, i) {
						return(
								<div key={i}>
									<Entry card={item}/>
								</div>)
						})
					}

					</ul>

				</div>
			);
	}
}

export default Entries;
