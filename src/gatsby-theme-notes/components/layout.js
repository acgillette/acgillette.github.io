import React from 'react';
import Layout from '../../components/Layout';

export default props => <Layout {...props}>
    <section className="section is-medium">
        {props.children}
    </section>
    </Layout>
