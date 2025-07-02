import React from "react";
import { Card, Highlight } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>Modern applications demand speed, availability, and reliability. In a world where every millisecond 
   counts, a single slow server can degrade user experience significantly. Load balancing algorithms solve this by distributing 
   traffic across multiple backend servers. But not all servers are built the same — some have more power, memory, or network 
   capacity than others. That’s where <b>Weighted Least Connections</b> comes into play, making intelligent decisions based not 
   only on the number of connections but also on server strength.</i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: The Quest for Intelligent Load Distribution</b></h2></div>
   <div className="mtop15p"><h4 className="blog-head"><b>What is Weighted Least Connections?</b></h4></div>
   <div className="mtop15p"><b>Weighted Least Connections</b> is a dynamic load balancing algorithm that assigns client requests 
   to backend servers based on:</div>
   <div>
      <ol>
         <li className="mtop5p"><b>Current active connections</b> (the fewer, the better), and</li>
         <li className="mtop5p"><b>Server weight</b> (higher weight = more capable server).</li>
      </ol>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>Core Formula:</b></h4></div>
   <div className="mtop5p"><Highlight content={`Effective Load = Active Connections / Weight`} lang="javascript" /></div>
   <div className="mtop5p">
      <ul>
         <li className="mtop5p"><b>Active Connections:</b> The current number of ongoing client connections on the server.</li>
         <li className="mtop5p"><b>Weight:</b> A pre-configured value assigned to the server representing its processing 
         capacity or power.</li>
      </ul>
   </div>
   <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
         The server with the <i><u>lowest effective load</u></i> is selected for the next incoming request.
      </Card>
   </div>
   
   <div className="mtop15p"><h4 className="blog-head"><b>Why use Weighted Least Connections?</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p">Perfect for systems where server performance varies.</li>
         <li className="mtop5p">Ideal for handling long-lived connections (e.g., WebSocket, API sessions).</li>
         <li className="mtop5p">Ensures resource-heavy servers handle more traffic without overloading weaker ones.</li>
      </ul>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>Formula (Simplified):</b></h4></div>
   <div className="mtop5p"><Highlight content={`Effective Load = Active Connections / Weight`} lang="javascript" /></div>
   <div className="mtop5p">The server with the lowest "Effective Load" wins the next incoming connection.</div>
 </div>);
};

export default Introduction;