import React from 'react';
import Layout from '../components/Layout';
import { Gallery }from 'gatsby-theme-gallery';
export default () => (
    <Layout>
        <section classNam="section is-medium">
            <div className="container">
                <p>Here is a feed of things I have made, in no particular order</p>
            </div>
        </section>
        <section className="section is-medium">
            <div className="container">
                <Gallery />
            </div>
        </section>
    </Layout>
)