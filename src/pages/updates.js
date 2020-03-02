import React from 'react';
import { graphql } from 'gatsby'; 
import Layout from '../components/Layout';
import '../styles/styles.scss';

export const query = graphql`
  query {
    allUpdate {
        nodes {
            title
            tag
            id
          }      
    }
  }
`

export default ({ data }) => {
    const tagOptions = {
        personal: "🌱",
        work: "💫",
        art: "🌟"

    }
    const updates = data.allUpdate.nodes.map((update) => {
        return <li key={update.id}> {tagOptions[update.tag]} {update.title}</li>
    });

    return (
        <Layout>
            <section className="is-medium">
                <div className="container">
                    <h1>Here are all the things I've been up to</h1>
                    <ul>
                        {updates}
                    </ul>
                </div>
            </section>
        </Layout>
    );
}