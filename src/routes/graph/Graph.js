/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import s from './Graph.css';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {BarChart} from 'react-easy-chart';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own

class Graph extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      tones: [
              {
              "score": 0.577251,
              "tone_id": "sadness",
              "tone_name": "Sadness"
              }
            ]
          };
    }
    render() {
      const tones = this.props.tones;
      return(
        <div>
          <p>Intensity: {Math.round(tones.score * 100)}%</p>
          <BarChart
          axes
          width = {100}
          height = {100}
          yTickNumber={2}
          //barWidth={1}
          yDomainRange={[0,1]}
          margin={{top: 5, right: 10, bottom: 10, left: 30}}
              data={
                [
                  {
                    x: tones.tone_id,
                    y: tones.score,
                    color: '#00549E',
                  }
                ]
              }
        />
      </div>
      )
    }
  }

export default withStyles(s)(Graph);
