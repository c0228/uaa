import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>
        In the transition from Web2.0 to Web3.0, we witness a fundamental shift — from centralized control to decentralized 
        ecosystems. One key concept that underpins this transformation is <b>Blockchain Governance</b>. It goes beyond technology; 
        it's a philosophy of managing digital ecosystems through collective decision-making, open protocols, and on-chain rules. 
        Whether you're a developer, investor, or enthusiast, understanding how governance works in a blockchain is essential to 
        shaping the decentralized future.
    </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Blockchain Governance?</b></h2></div>
    <div className="mtop15p">
        <b>Blockchain Governance</b> refers to the systems and processes by which decisions are made within a blockchain 
        ecosystem. It determines how protocol upgrades, dispute resolutions, and rule changes are 
        implemented — <b>who decides, how they decide, and how those decisions are enforced</b>.
    </div>
    <div className="mtop15p">
        <div>There are two main types:</div>
        <div>
            <ul>
                <li className="mtop5p"><b>On-chain governance:</b> Rules and voting mechanisms are embedded directly into the 
                blockchain via smart contracts.</li>
                <li className="mtop5p"><b>Off-chain governance:</b> Discussions and decisions happen off the blockchain (forums, 
                GitHub, community meetings) and are later enforced by core developers and miners.</li>
            </ul>
        </div>
        <div className="mtop5p">This is a vital part of <b>decentralized autonomy</b> — ensuring that no single entity holds 
        power over the protocol, and that changes reflect community consensus.</div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Key Components of Blockchain Governance</b></h2></div>
    <div className="mtop15p">
        <ol>
            <li>
                <div><b>Token Voting:</b></div>
                <div>Stakeholders use their tokens to vote on proposals (e.g., DAO governance).</div>
            </li>
            <li className="mtop5p">
                <div><b>Improvement Proposals:</b></div>
                <div>Developers submit protocol change proposals (e.g., Ethereum Improvement Proposals - EIPs).</div>
            </li>
            <li className="mtop5p">
                <div><b>Governance Frameworks:</b></div>
                <div>Tools like <b>Aragon</b>, <b>Snapshot</b>, <b>Tally</b>, or <b>Compound Governance</b> are used to manage decisions.</div>
            </li>
            <li className="mtop5p">
                <div><b>Delegation</b></div>
                <div>Token holders may delegate their votes to trusted representatives.</div>
            </li>
            <li className="mtop5p">
                <div><b>Quorum and Thresholds</b></div>
                <div>Minimum participation requirements and approval percentages to pass proposals.</div>
            </li>
        </ol>
    </div>
 </div>);
};

export default Introduction;