import React from 'react';
import Layout from '../../components/Layout';
import Welcome from '../welcome/Welcome';
import Entry from './Entry'
const title = 'swag';

function action() {
  return {
    chunks: ['welcome'],
    title: 'Welcome',
    component: (
      <Layout>
        <Entry />
      </Layout>
    ),
  };
}

export default action;
