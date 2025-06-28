import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>
   In distributed computing, reaching agreement among multiple unreliable or failing systems is a monumental challenge. 
   Imagine a group of servers trying to agree on a value — but some may crash, messages may be delayed, or some servers 
   might be disconnected. In such scenarios, how can systems <i>agree reliably</i>? That’s where <b>Paxos</b> — one of the most 
   influential consensus algorithms — plays a crucial role.   
   </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Paxos Algorithm</b></h2></div>
    <div className="mtop15p">The <b>Paxos Algorithm</b>, proposed by <b>Leslie Lamport</b>, is a family of protocols used to 
    achieve consensus in a network of unreliable processors (nodes). Paxos ensures that a group of computers can agree on a 
    single value, even if some of them fail or the network is unstable.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Why is Consensus Important?</b></h4></div>
    <div className="mtop15p">Consensus is the backbone of:
      <ul>
         <li>Distributed Databases</li>
         <li>Blockchains</li>
         <li>Configuration Management</li>
         <li>Leader Election</li>
         <li>Replicated State Machines</li>
      </ul>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Paxos Use Cases:</b></h4></div>
    <div>
      <ul>
         <li>Google’s Chubby Lock Service</li>
         <li>Apache Zookeeper (inspired by Paxos)</li>
         <li>Microsoft Azure Storage</li>
         <li>Raft (a simpler alternative) was designed due to Paxos’ complexity</li>
      </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Core Paxos Roles and Phases</b></h2></div>
    <div className="mtop15p">
      <div>Paxos involves <b>3 primary roles</b>:</div>
      <div>
         <ol>
            <li><b>Proposer:</b> Proposes a value to the group.</li>
            <li><b>Acceptor:</b> Accepts or rejects proposals.</li>
            <li><b>Learner:</b> Learns the chosen value after consensus.</li>
         </ol>
      </div>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Phases of Paxos:</b></h4></div>
    <div>
      <ol>
         <li>
            <div><b>Prepare Phase:</b></div>
            <div>
               <ul>
                  <li>A proposer sends a <code><b>Prepare(n) </b></code> request to a majority of acceptors.</li>
                  <li><code><b>n</b></code> is a unique proposal number.</li>
                  <li>Acceptors respond with a promise not to accept proposals with a lower number and optionally 
                  return the highest-numbered proposal they've already accepted.</li>
               </ul>
            </div>
         </li>
         <li>
            <div><b>Accept Phase:</b></div>
            <div>
               <ul>
                  <li>The proposer, after receiving promises from the majority, sends an <code><b>Accept(n, value)</b></code> message.</li>
                  <li>Acceptors accept the proposal unless they have already promised to consider a higher number.</li>
               </ul>
            </div>
         </li>
         <li>
            <div><b>Learn  Phase:</b></div>
            <div>
               <ul>
                  <li>Once a value is accepted by the majority, learners are informed of the decision</li>
               </ul>
            </div>
         </li>
      </ol>
    </div>
 </div>);
};

export default Introduction;