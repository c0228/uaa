import React from "react";
import SimpleTimeline from '@Components/simple-timeline/index.js';

const Introduction = () =>{

 const data = [{
    title:(<div>Bitcoin (2009)</div>),
    desc:(<div>While not a DAO itself, Bitcoin introduced decentralization by enabling trustless transactions 
        without intermediaries.</div>)
 },{
    title:(<div>The DAO (2016)</div>),
    desc:(<div>A pivotal moment in DAO history, The DAO was launched on Ethereum as a venture capital 
        fund governed by smart contracts. However, a security flaw led to a $50 million hack, resulting in the 
        Ethereum hard fork.</div>)
 },{
    title:(<div>Aragon, MakerDAO, and Others (2017-Present)</div>),
    desc:(<div>After the lessons learned from The DAO hack, various DAOs emerged with improved security and governance models.</div>)
 }];

 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div><i>In the era of Web3.0, decentralized systems are reshaping traditional structures of governance, finance, 
        and community engagement. One of the most transformative innovations in this space is the 
        <b>Decentralized Autonomous Organization (DAO)</b>. Unlike conventional organizations that rely on hierarchical 
        decision-making, DAOs operate through smart contracts and community-driven governance, ensuring transparency, 
        autonomy, and efficiency. This guide explores the history, architecture, and evolving landscape of DAOs in the 
        Web3.0 ecosystem.</i></div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
    <div className="mtop15p">Decentralized Autonomous Organizations (DAOs) are a revolutionary concept in blockchain and 
        Web3.0, aiming to redefine governance by removing centralized control. A DAO is an organization run by smart 
        contracts, where decision-making is democratized among token holders.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>History of DAO</b></h2></div>
    <div className="mtop15p">
        <div>The concept of DAOs traces back to the early days of blockchain. Here are key milestones in its evolution:</div>
        <div className="mtop15p">
            <SimpleTimeline data={data} />
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>The Idea Behind DAOs</b></h2></div>
    <div className="mtop15p">
        <div>DAOs aim to create self-governing organizations that function without central authorities. The key 
            principles include:</div>
        <div>
            <ol>
                <li className="mtop5p"><b>Decentralization:</b> Decision-making is distributed among members.</li>
                <li className="mtop5p"><b>Autonomy:</b> Smart contracts execute predefined rules without human intervention.</li>
                <li className="mtop5p"><b>Transparency:</b> All transactions and governance decisions are recorded on the blockchain.</li>
                <li className="mtop5p"><b>Community Ownership:</b> Members have voting rights proportional to their token holdings.</li>
            </ol>
        </div>
    </div>

 </div>);
};

export default Introduction;