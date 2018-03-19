/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/*eslint-disable */

import React from 'react';
import Parallax from 'react-springy-parallax';
import {connect} from 'react-redux';

// Import Components
class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <textarea name="journalEntry" form="entryForm"></textarea>
      <form id="entryForm" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="textarea" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}

const mapStateToProps = state => ({value: "toTimeString"});

export default connect(mapStateToProps)(Entry);

/*eslint-enable */
