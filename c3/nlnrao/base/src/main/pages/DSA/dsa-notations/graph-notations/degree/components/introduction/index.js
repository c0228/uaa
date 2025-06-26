import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>
        Graphs are powerful mathematical structures used to model pairwise relationships between objects. Whether you're 
        navigating a map, optimizing a social network, or modeling computer networks — <b>graph theory</b> provides a strong 
        foundation. One of the most basic and essential concepts in  is the <b>degree of a vertex</b> — denoted as <b>Deg(v)</b>.
    </i></div>
    <div className="mtop15p">Understanding the degree is crucial before jumping into more complex topics like connectivity, 
    centrality, or spanning trees.</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Deg(v)</b></h2></div>
    <div className="mtop10p">In graph theory, the <b>degree of a vertex</b> is the number of edges incident (i.e., connected) 
    to that vertex.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Definition</b></h4></div>
    <div className="mtop5p">
        <ul>
            <li>
                <div>In <b>Undirected Graphs</b>:</div>
                <div><code><b>Deg(v)</b></code> is simply the <b>count of edges</b> attached to vertex <code><b>v</b></code>.</div>
            </li>
            <li className="mtop10p">
                <div>In <b>Directed Graphs</b>:</div>
                <div>
                    <ul>
                        <li><b>In-degree:</b> Number of edges <u><i>coming into</i></u> the vertex</li>
                        <li>
                            <div><b>Out-degree:</b> Number of edges <u><i>going out from</i></u> the vertex</div>
                            <div>So, <code><b>Deg(v) = InDeg(v) + OutDeg(v)</b></code></div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <div>
        <Card padding={15} backgroundColor="#eee">
            <div><b>Notation:</b></div>
            <div><code><b>Deg(v)</b></code> = Total degree</div>
            <div><code><b>InDeg(v)</b></code> = Number of incoming edges</div>
            <div><code><b>OutDeg(v)</b></code> = Number of outgoing edges</div>
        </Card>
    </div>
 </div>);
};

export default Introduction;