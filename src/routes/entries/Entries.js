import React from 'react';
import Entry from './Entry';
import axios from 'axios';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Button from 'react-bootstrap/lib/Button';
import Link from '../../components/Link';
import custom from './entries.css'

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
				<div className={custom.body}>
					<div className={ custom.topOfPage }>
					<h1>Read your Entries!</h1>
					<h2>Express how you feel. Let it all out!</h2>
					<div className={custom.button}>
					<Link to="/entry">
						<Button>
							Create New Entry!
						</Button>
					</Link>
					</div>
					</div>

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
				</div>
			);
	}
}

export default withStyles(custom)(Entries);
