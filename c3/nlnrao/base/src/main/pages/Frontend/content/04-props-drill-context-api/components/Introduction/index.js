import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
		<div><h4 className="blog-head"><b>Pre-Introduction: Why This Problem Emerged</b></h4></div>
		<div>When component-based UI development became mainstream, libraries like React introduced a simple but powerful 
			idea: <b>data flows from parent to child via props.</b></div>
		<div className="mtop5p">This worked perfectly for small applications. But as applications grew, component trees 
			became deeper and more complex. A common problem started appearing:</div>
		<div className="mtop5p">A component needed data that existed far up the component tree, but several intermediate 
			components didn’t need that data at all.</div>
		<div>Developers were forced to pass props through multiple layers just to reach the target component. This 
			repetitive and unnecessary passing of props led to a new term:</div>
		<div><h5 className="blog-head"><b>Props Drilling</b></h5></div>
		<div className="mtop5p">To solve this structural pain point, React introduced the <b>Context API,</b> providing 
			a way to share data globally (or semi-globally) without manually passing props at every level.</div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
	<div className="list-group">
		<div className="list-group-item">
			<div><h4 className="blog-head"><b>What is Props Drilling?</b></h4></div>
			<div className="mtop5p"><b>Props Drilling</b> is the process of passing data from a parent component to deeply 
			nested child components through multiple intermediate components—even when those intermediate components 
			do not use the data.</div>
			<div className="mtop5p">
				<div><b>Key Idea:</b></div>
				<div>“Passing props down the tree even when they’re not needed along the way.”</div>
			</div>
		</div>
		<div className="list-group-item">
			<div><h4 className="blog-head"><b>What is Context API?</b></h4></div>
			<div className="mtop5p">The <b>Context API</b> allows you to create a shared data store that can be accessed 
			by any component within a specific part of the component tree — <b>without passing props manually.</b></div>
			<div className="mtop5p">
				<div><b>Key Idea:</b></div>
				<div>“Make data available where it’s needed, without drilling through every level.”</div>
			</div>
		</div>
	</div>
 </div>);
};

export default Introduction;