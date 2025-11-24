import React from "react";
import { Card, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const SQL_EXAMPLE_VIEW = `CREATE VIEW employee_basic AS
SELECT id, name, department
FROM employees;`;

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
			<div><h4 className="blog-head"><b>Pre-Introduction: How Views Even Became a Thing</b></h4></div>
			<div>Back in the early days of databases (think 1970s-80s when people wrote queries like they were 
				carving on stone), one big problem bugged developers:</div>
			<div><b>“Why do I need to write the same complicated SQL joins and filters again and again?”</b></div>
			<div>DB admins were tired. Developers were annoyed. And analysts were crying inside whenever they saw 
				five-table joins.</div>
			<div>So database pioneers said, <i><u>"Bro, chill… we’ll give you something called Views."</u></i></div>
			<div>This solved two big issues:</div>
			<div>
				<ul>
					<li className="mtop5p"><b>Reusability –</b> Write a complex query once, reuse everywhere.</li>
					<li className="mtop5p"><b>Security –</b> Give access to selected columns instead of full table data.</li>
				</ul>
			</div>
			<div>And that’s how SQL Views became a beloved tool in relational databases.</div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is a SQL View?</b></h2></div>
	<div className="mtop5p">
		<div>A SQL View is basically a <i><u>virtual table</u></i>.</div>
		<div>It’s not a real table storing data — instead, it stores a query.</div>
		<div>Whenever you query the view, the database runs the stored query behind the scenes.</div>
	</div>
	<div className="mtop5p">
		<div>You can think of it like:</div>
		<div>
			<ul>
				<li className="mtop5p">A shortcut</li>
				<li className="mtop5p">A saved query</li>
				<li className="mtop5p">A lens to show specific data</li>
				<li className="mtop5p">A "filtered version" of a table</li>
			</ul>
		</div>
	</div>
	<div className="mtop5p"><h5><b>Example of a View</b></h5></div>
	<div className="mtop5p">Assume we have a table <code><b>employees</b></code>:</div>
	<div className="mtop5p">
		<SimpleTable header={["id", "name", "department", "salary"]} 
                columns={[
                    ["1","Ravi","IT","75000"],
					["2","Kiran","HR","60000"],
					["3","Sita","IT","90000"]
				]} />
	</div>
	<div className="mtop15p">If the company doesn’t want HR team to see salary details but still needs employee names:</div>
	<div><Highlight content={SQL_EXAMPLE_VIEW} lang="sql" /></div>
	<div>Now HR can query:</div>
	<div><Highlight content={`SELECT * FROM employee_basic;`} lang="sql" /></div>
 </div>);
};

export default Introduction;