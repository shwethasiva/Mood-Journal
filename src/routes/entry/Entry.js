/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/*eslint-disable */

import styles from 'medium-editor/dist/css/medium-editor.css'
import theme from 'medium-editor/dist/css/themes/default.css'

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Parallax from 'react-springy-parallax';
import Editor from 'react-medium-editor';
import * as bs from 'react-bootstrap';
import {connect} from 'react-redux';

// Import Components
class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      title: "Super awesome title here"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getInitialState() {
      return { text: 'Fusce dapibus, tellus ac cursus commodo' };
    }
  handleChange(text, medium) {
    this.setState({text: text});
  }
  handleTitle(text, medium){
    this.setState({title: text});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="app container">
        <h1>How are you feeling today?</h1>
        <Editor
          tag="pre"
          className="editor"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          text={this.state.title}
          onChange={this.handleTitle}
          options={{toolbar: {buttons: ['bold', 'italic', 'underline']}}}
        />

        <h3>{this.state.title}</h3>
        <Editor style={{height: 200 }}
          text={this.state.text}
          onChange={this.handleChange}
        />

      </div>
    );
  }
}

const mapStateToProps = state => ({value: "toTimeString"});

export default withStyles(styles, theme)(connect(mapStateToProps)(Entry));

/*eslint-enable */
