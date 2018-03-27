import React from 'react';
import Layout from '../../components/Layout';
import Entries from './Entries';

const title = 'Entries';

function action() {
  return {
    chunks: ['welcome'],
    title,
    component: (
      <Layout>
        <Entries title={title} />
      </Layout>
    ),
  };
}

export default action;