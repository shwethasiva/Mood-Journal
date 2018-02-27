/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Page from '../../components/Page';
import home from '../../../README.md';
import s from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {/* <Page title="" {...home} /> */}
          <div className={s.main}>
            <div className={s.intro}>Learn about your emotions!</div>
            <a href="/search">Get Started</a>
            <div className={s.bg} />
            <div className={s.bg_wave} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
