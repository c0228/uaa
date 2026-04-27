import React from "react";
import { Card, Highlight } from "e-ui-react";

const QUERY_EXAMPLE_GRAPHQL = `query {
  user(id: 1) {
    id
    username
    email
  }
}`;

const RESPONSE_EXAMPLE_GRAPHQL = `{
  "data": {
    "user": {
      "id": 1,
      "username": "rao",
      "email": "rao@example.com"
    }
  }
}`;

const GRAPHQL_EXAMPLE_DEFINE = `const { buildSchema } = require("graphql");

const schema = buildSchema(\`
  type User {
    id: Int
    username: String
    email: String
  }

  type Query {
    user(id: Int): User
  }
\`);

module.exports = schema;`;

const GRAPHQL_EXAMPLE_RESOLVER = `const root = {
  user: ({ id }) => {
    return {
      id: id,
      username: "rao",
      email: "rao@example.com"
    };
  }
};

module.exports = root;`;

const GRAPHQL_EXAMPLE_SERVER = `const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const root = require("./resolver");

const app = express();

app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("GraphQL API running at http://localhost:4000/graphql");
});`;

const GRAPHQL_EXAMPLE_TEST = `query {
  user(id: 1) {
    username
    email
  }
}`;

const GRAPHQL_EXAMPLE_MUTATION = `mutation {
  createUser(username: "rao", email: "rao@example.com") {
    id
  }
}`;

const Examples = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Simple GraphQL Example</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>GraphQL Query</b></h4></div>
    <div className="mtop5p"><Highlight content={QUERY_EXAMPLE_GRAPHQL} lang="javascript" /></div>
    <div className="mtop15p"><h4 className="blog-head"><b>GraphQL Response</b></h4></div>
    <div className="mtop5p"><Highlight content={RESPONSE_EXAMPLE_GRAPHQL} lang="javascript" /></div>
    <div className="mtop5p"><b>Notice:</b></div>
    <ul>
      <li className="mtop5p">Response matches query structure</li>
      <li className="mtop5p">No extra fields</li>
      <li className="mtop5p">No missing fields</li>
    </ul>

    <div className="mtop15p"><h2 className="blog-head"><b>GraphQL Implementation Example (Node.js)</b></h2></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Step 1: Install Dependencies</b></h5></div>
    <div className="mtop5p"><Highlight content={`npm install express graphql express-graphql`} lang="html" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Step 2: Define GraphQL Schema</b></h5></div>
    <div className="mtop5p"><Highlight content={GRAPHQL_EXAMPLE_DEFINE} lang="javascript" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Step 3: Create Resolver</b></h5></div>
    <div className="mtop5p"><Highlight content={GRAPHQL_EXAMPLE_RESOLVER} lang="javascript" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Step 4: Setup Server</b></h5></div>
    <div className="mtop5p"><Highlight content={GRAPHQL_EXAMPLE_SERVER} lang="javascript" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Step 5: Test in GraphQL</b></h5></div>
    <div className="mtop5p"><Highlight content={GRAPHQL_EXAMPLE_TEST} lang="javascript" /></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Mutation Example</b></h2></div>
    <div className="mtop5p"><Highlight content={GRAPHQL_EXAMPLE_MUTATION} lang="javascript" /></div>
    <div className="mtop5p">(GraphQL mutations allow controlled data changes.)</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Advantages of GraphQL</b></h2></div>
    <ul>
      <li className="mtop5p">Client controls response</li>
      <li className="mtop5p">Single endpoint</li>
      <li className="mtop5p">Strong typing</li>
      <li className="mtop5p">Better performance for mobile apps</li>
      <li className="mtop5p">Excellent developer tooling</li>
    </ul>

    <div className="mtop15p"><h2 className="blog-head"><b>Challenges of GraphQL</b></h2></div>
    <ul>
      <li className="mtop5p">Learning curve</li>
      <li className="mtop5p">Query complexity needs control</li>
      <li className="mtop5p">Caching is harder than REST</li>
      <li className="mtop5p">Requires careful schema design</li>
    </ul>

    <div className="mtop15p"><h2 className="blog-head"><b>When to Use GraphQL</b></h2></div>
    <div>Use GraphQL when:</div>
    <ul>
      <li className="mtop5p">Frontend needs flexible data</li>
      <li className="mtop5p">Multiple clients (web, mobile)</li>
      <li className="mtop5p">Rapid UI changes</li>
      <li className="mtop5p">Complex relationships in data</li>
    </ul>
    <div>Avoid GraphQL when:</div>
    <ul>
      <li className="mtop5p">Simple CRUD APIs</li>
      <li className="mtop5p">Heavy file uploads</li>
      <li className="mtop5p">You want HTTP caching simplicity</li>
    </ul>
 </div>); 
};

export default Examples;