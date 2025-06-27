import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <Card padding={15} backgroundColor="#eee">
    <div><h4 className="blog-head"><b>How Do Large Networks Spread Information?</b></h4></div>
    <div className="mtop15p"><i>
        <div>In real life, rumors or gossip spread quickly through word of mouth — one person tells a few others, and 
        they each tell a few more. In a short time, the entire community knows the news.</div>
        <div className="mtop15p">Distributed computer systems work similarly when they need to spread data across a 
        large network. Rather than broadcasting everything to everyone at once (which is slow and inefficient), they 
        rely on a technique inspired by real-world gossip. This technique is known as the <b>Gossip Protocol</b>.</div>
    </i></div>
    </Card>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Introduction: What is the Gossip Protocol?</b></h2></div>
    <div className="mtop15p">The <b>Gossip Protocol</b>, also known as <b>Epidemic Protocol</b>, is a communication method 
    used in distributed systems where nodes (computers) share information randomly with other nodes. Over time, all nodes 
    in the system learn about new data or updates — just like gossip spreading in a social network.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Key Features:</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li><b>Scalable:</b> Works efficiently with thousands of nodes.</li>
            <li><b>Decentralized:</b> No central coordinator needed.</li>
            <li><b>Fault-tolerant:</b> Still works if some nodes fail or disconnect.</li>
            <li><b>Eventually Consistent:</b> All nodes will eventually have the same information.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>How it works?</b></h2></div>
    <div className="mtop15p">
        <ol>
            <li>A node receives a new message or update.</li>
            <li>It randomly picks a few peers and sends the message.</li>
            <li>Each peer repeats the process with other peers.</li>
            <li>The information “infects” the network until all nodes have it.</li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Real-World Uses of Gossip Protocol</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Apache Cassandra</b> (for node state sharing)</li>
            <li><b>Amazon DynamoDB</b></li>
            <li><b>Blockchain peer discovery</b></li>
            <li><b>Service discovery in microservices</b> (like Consul)</li>
            <li><b>Failure detection in clusters</b></li>
        </ul>
    </div>

 </div>);
};

export default Introduction;