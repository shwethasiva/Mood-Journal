import React from 'react';
import Layout from '../../components/Layout';
import Welcome from '../welcome/Welcome';
import Graph from './Graph';
const title = 'swag';

function action() {
  return {
    chunks: ['welcome'],
    title: 'Welcome',
    component: (
      <Layout>
      <Graph tones=""/>
      </Layout>
    ),
  };
}

export default action;
