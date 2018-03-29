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
import custom from './Entry.css'

import React from 'react';
import axios from 'axios';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Parallax from 'react-springy-parallax';
import Editor from 'react-medium-editor';
import Button from 'react-bootstrap/lib/Button';
import FormErrors from './FormErrors'
import Graph from '../graph/Graph'
import {connect} from 'react-redux';

// Import Components
class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      title: "",
      text: "",
      sentiment: "",
      formErrors: {title: '', text: ''},
    titleValid: false,
    textValid: false,
    requestSent: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
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
  clickHandler(){
    let self = this;
    let entry = {}
    entry.title = this.state.title;
    entry.text = this.state.text;
    axios({
      method: 'post',
      url: '/api/entries/create',
      data: entry
    }).then(function(response){
      console.log(response.sentiment)
      self.setState({sentiment: response.sentiment})
    })
    this.state.requestSent = true;

  }

  render() {
    return (
      <div className="app container">
      <div className={custom.container}>
      
        <div className={ custom.topOfPage }>
          <h1>Write an Entry!</h1>
          <h2>Express how you feel. Let it all out!</h2>
        </div>

      <div className={custom.entryCard}>


        <Editor
          tag="pre"
          className="editor hideOverflow"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          text={this.state.title}
          onChange={this.handleTitle}
          options={{toolbar: {buttons: []},
          placeholder: {text: "What do you want to title this?", hideOnClick: true}
        }}
        />

        <h3>{this.state.title}</h3>
        <Editor
          text={this.state.text}
          className={custom.editorBorder}
          onChange={this.handleChange}
          options={{placeholder: {text: 'How do you feel today?',
          hideOnClick: true
        }}}
        />
        <Button onClick={this.clickHandler} href="/entries">
        Done!
        </Button>
        <p>{this.state.sentiment}</p>

      </div>

      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({value: "toTimeString"});

export default withStyles(styles, theme, custom)(connect(mapStateToProps)(Entry));

/*eslint-enable */
