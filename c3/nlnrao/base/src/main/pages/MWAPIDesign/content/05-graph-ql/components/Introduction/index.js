import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 const REST_EXAMPLE_APIS = `GET /users/1
GET /users/1/posts
GET /users/1/comments`;

 const GRAPH_EXAMPLE_APIS = `query {
  user(id: 1) {
    name
    posts {
      title
    }
    comments {
      text
    }
  }
}`;

 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
		<div><h4 className="blog-head"><b>Pre-Introduction: How GraphQL Was Introduced?</b></h4></div>
		<div>Around 2012, large web applications started facing serious problems with traditional APIs.</div>
		<div>At Facebook, developers were building complex mobile applications. These apps had a few major challenges:</div>
		<ul>
			<li className="mtop5p">Mobile networks were <b>slow and unreliable</b></li>
			<li className="mtop5p">REST APIs returned <b>too much data (over-fetching)</b></li>
			<li className="mtop5p">Multiple API calls were required to fetch related data (under-fetching)</li>
			<li className="mtop5p">Backend changes often <b>broke frontend apps</b></li>
		</ul>
		<div>Example problem with REST:</div>
		<ul>
			<li className="mtop5p">One API gives user data</li>
			<li className="mtop5p">Another API gives posts</li>
			<li className="mtop5p">Another API gives comments</li>
		</ul>
		<div>This caused:</div>
		<ul>
			<li className="mtop5p">More network calls</li>
			<li className="mtop5p">Slower apps</li>
			<li className="mtop5p">Tight coupling between frontend and backend</li>
		</ul>
		<div>To solve this, Facebook internally developed <b>GraphQL in 2012</b> and open-sourced it in <b>2015</b>.</div>
		<div>GraphQL was designed to give <b>clients full control over the data they need.</b></div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Is GraphQL?</b></h2></div>
	<div className="mtop5p"><b>GraphQL</b> is a <b>query language for APIs</b> and a <b>runtime for executing those queries.</b></div>
	<div className="mtop5p">Instead of the server deciding what data to send, <b>the client asks exactly what it needs.</b></div>
	<div className="mtop5p"><h4 className="blog-head"><b>Key Idea of GraphQL</b></h4></div>
	<div className="mtop5p">"The client defines the shape of the response."</div>
	<div className="mtop5p"><h4 className="blog-head"><b>Core Features</b></h4></div>
	<ul>
		<li className="mtop5p">Single endpoint</li>
		<li className="mtop5p">Strongly typed schema</li>
		<li className="mtop5p">No over-fetching or under-fetching</li>
		<li className="mtop5p">Real-time updates (subscriptions)</li>
	</ul>

	<div className="mtop15p"><h2 className="blog-head"><b>REST vs GraphQL (Conceptual Difference)</b></h2></div>
	<div className="mtop5p"><h4 className="blog-head"><b>REST</b></h4></div>
	<div className="mtop5p"><Highlight content={REST_EXAMPLE_APIS} lang="html" /></div>
	<div className="mtop5p"><h4 className="blog-head"><b>GraphQL</b></h4></div>
	<div className="mtop5p"><Highlight content={GRAPH_EXAMPLE_APIS} lang="javascript" /></div>
	<ul>
		<li className="mtop5p">One Request</li>
		<li className="mtop5p">Exact Data</li>
		<li className="mtop5p">Better performance</li>
	</ul>

	<div className="mtop15p"><h2 className="blog-head"><b>GraphQL Basic Concepts</b></h2></div>
	<ol>
		<li className="mtop5p">
			<div><b>Schema</b></div>
			<div className="mtop5p">Defines <b>what data is available.</b></div>
		</li>
		<li className="mtop5p">
			<div><b>Query</b></div>
			<div className="mtop5p">Used to <b>fetch data.</b></div>
		</li>
		<li className="mtop5p">
			<div><b>Mutation</b></div>
			<div className="mtop5p">Used to <b>modify data</b> (create/update/delete).</div>
		</li>
		<li className="mtop5p">
			<div><b>Resolver</b></div>
			<div className="mtop5p">Functions that <b>fetch actual data.</b></div>
		</li>
	</ol>

 </div>);

};

export default Introduction;