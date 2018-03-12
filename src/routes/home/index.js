/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
//Layout
import Layout from '../../components/Layout';

function action() {
  return {
    chunks: ['home'],
    title: 'Pocket Journal',
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  };
}
// the dispatch of the action
export default action;
