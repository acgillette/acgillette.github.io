import React from "react"
import { graphql, Link } from "gatsby";
import Layout from '../components/Layout';
import '../styles/styles.scss';

export const query = graphql`
  query {
    allUpdate(limit: 5) {
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
            <section className="section is-medium">
                <div className="container">
                    <p>Hey there! I'm an artist, writer and developer currently based in the Bay Area. My day job is building interfaces for scientific software. When I'm not doing that, I can be found making art, writing, or baking bread, among other things.</p><br></br>
                    <p>This is my personal spot for my art, writing, and whatever else I feel like dropping in here. I'm interested in tending to this site as one might tend to a garden, in that I primarily am looking to plant some thoughts and see how it grows.</p><br></br>
                    <p>You can find me on the World Wide Web at <a href="https://twitter.com/quartzcrusher" target="blank">Twitter</a> and <a href="https://glitch.com/@acgillette" target="blank">Glitch</a></p><br></br>
                    <p>If you're interested in seeing some things I've made, I have an ongoing feed of things I make at <Link to="/imadethis">imadethis</Link>.</p><br></br>
                    <p>I keep my notes about various things I'm interested in a <Link to="/notes">notes</Link> section.</p><br></br>
                    <p>If you'd like to drop me a line you can reach me at contact@acgillette.net</p><br></br>
                </div>
                <div className="container">
                <h1>Here are some things I've been up to:</h1><br></br>
                <ul>
                    { updates }
                </ul><br></br>
                <Link to="/updates">See all my updates</Link>
              </div>
            </section>
        </Layout>
    );
}  