import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
            <div align="center"><h4 className="blog-head"><b>Pre-Introduction: How These Formats Entered the Tech World</b></h4></div>
            <div>Every era of software development comes with a unique way of structuring and exchanging data. First, enterprises needed something flexible yet rigid 
                enough for validation — boom, XML showed up in the late ’90s.<br/>
                Then developers got tired of verbose tags and wanted something lighter — JSON became the community’s sweetheart in the mid-2000s.<br/>
                As systems grew more domain-specific, developers started inventing custom formats for internal or experimental use.<br/>
                As software systems grew more complex, teams started wanting:
                <ul>
                    <li>Validation rules inside the config</li>
                    <li>Modular configs</li>
                    <li>Dynamic references</li>
                    <li>Versioning inside the config itself</li>
                    <li>Better support for hierarchical structures</li>
                </ul>
                <div>In this way, experimental formats started emerging.</div>
                <div>To solve data exchange limitations in various platforms, developers introduced formats like:</div>
                <div><b>JSON -</b> (Built for APIs)</div>
                <div><b>TOON -</b> (Built for AI Models)</div>
                <div><b>VSC -</b> (Built for AI Agents)</div>
            </div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: XML, JSON, TOON, and VSC</b></h2></div>
    <div className="mtop15p">
        Config formats have evolved dramatically over the last two decades, each one shaped by the needs of the technology around it. What started 
        as simple structured documents eventually became powerful, modular systems that can drive entire engines and applications.
    </div>
    <div><h4><b>XML – The Early Giant</b></h4></div>
    <div className="mtop15p">
        XML was one of the earliest widely adopted data formats. It brought structure, validation (via XSD), and hierarchy at a time when the web 
        desperately needed consistent data exchange. Although verbose, XML is still strong where strict schemas and deep nesting matter—like banking, 
        enterprise apps, and legacy systems.
    </div>
    <div className="mtop15p"><h4><b>JSON – The Simplicity Revolution</b></h4></div>
    <div className="mtop15p">Then JSON entered the scene and flipped everything. With its lightweight syntax and easy readability, JSON became the 
        default choice for APIs, mobile apps, and modern web systems. It’s fast, simple, and supported everywhere—but limited when configs become 
        large or logic-heavy.</div>
    <div className="mtop15p"><h4><b>TOON – The Flexible Rule-Centric Format</b></h4></div>
    <div className="mtop15p">TOON emerged as a more expressive, human-friendly option. It feels like a blend of JSON and YAML but is designed for 
        defining rules, steps, workflows, or automation pipelines. It supports comments, flexible structures, and easier manual editing—making it 
        ideal for ML engines, decision systems, or dynamic automation scripts.</div>
    <div className="mtop15p"><h4><b>VSC – The Structured, Version-Aware Evolution</b></h4></div>
    <div className="mtop15p">VSC (Versioned Structured Config) is the next step forward. Built for large systems, VSC focuses on versioning, 
        schema validation, modular imports, and compatibility. It’s perfect for scenarios where configs grow huge, must evolve over time, and 
        need strict consistency—like microservices, AI pipelines, or enterprise automation platforms.</div>
    <div className="mtop15p">
        <div>Together, XML - JSON - TOON - VSC represent an evolution:</div>
        <div>from <b><i>verbose structure</i></b>,</div>
        <div>to <b><i>simplified data</i></b>,</div>
        <div>to <b><i>human-friendly flexibility</i></b>,</div>
        <div>to <b><i>enterprise-grade versioned configs</i></b>.</div>
    </div>
 </div>);
};

export default Introduction;