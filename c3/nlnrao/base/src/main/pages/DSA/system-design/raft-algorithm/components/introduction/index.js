import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>
      <div>In distributed computing, consensus is critical to ensure all nodes in a cluster agree on a single source of 
         truth — even in the presence of failures. Traditional algorithms like <b>Paxos</b> are foundational but often difficult 
         to understand and implement. To address this, the <b>Raft algorithm</b> was introduced as a more understandable and 
         practical alternative. It’s widely adopted in systems like etcd, Consul, and even Kubernetes for leader election and 
         log replication.</div>   
   </i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Raft Algorithm</b></h2></div>
   <div className="mtop15p">The <b>Raft algorithm</b> is a <b>consensus protocol</b> that 
   ensures <b>replicated state machines</b> stay consistent across multiple nodes (servers) in a distributed system. It was 
   designed to be more understandable than Paxos while offering the same fault-tolerance and safety guarantees.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Core Concepts</b></h4></div>
   <div>
      <ol>
         <li className="mtop5p"><b>Leader Election:</b> One node becomes the <i>leader</i> and handles all client requests.</li>
         <li className="mtop5p"><b>Log Replication:</b> The leader replicates logs to followers to keep all nodes consistent.</li>
         <li className="mtop5p"><b>Safety:</b> Ensures that once a log entry is committed, it won’t be lost.</li>
         <li className="mtop5p"><b>Membership Changes:</b> Raft allows nodes to join or leave without disrupting the cluster.</li>
      </ol>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>Roles in Raft Algorithm</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p"><b>Leader:</b> Handles all requests and coordinates log replication.</li>
         <li className="mtop5p"><b>Follower:</b> Passive node that responds to requests from leaders and candidates.</li>
         <li className="mtop5p"><b>Candidate:</b> A node that attempts to become a leader during elections.</li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>How Raft Works (Simplified Flow)</b></h2></div>
   <div>
      <ol>
         <li className="mtop5p"><b>Startup:</b> All nodes start as followers.</li>
         <li className="mtop5p"><b>Election Timeout:</b> If a follower doesn’t hear from a leader, it becomes a candidate and starts an election.</li>
         <li className="mtop5p"><b>Voting:</b> Other nodes vote for the candidate. If a candidate gets the majority, it becomes the new leader.</li>
         <li className="mtop5p"><b>Heartbeat:</b> The leader sends regular heartbeats to maintain authority.</li>
         <li className="mtop5p"><b>Log Replication:</b> Leader appends logs and replicates them to followers.</li>
         <li className="mtop5p"><b>Commitment:</b> Once logs are safely replicated to a majority, they’re considered committed.</li>
      </ol>
   </div>
 </div>);
};

export default Introduction;