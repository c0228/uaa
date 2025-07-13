import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>The evolution of the internet from static pages (Web 1.0) to user-centric social platforms 
      (Web 2.0) has now entered a transformative era — <b>Web 3.0</b>, which emphasizes decentralization, transparency, and 
      user sovereignty. But to fully appreciate what Web 3.0 offers, we must understand what it aims to improve or replace. 
      That brings us to the bedrock of our current financial world — <b>Traditional Finance</b> or <b>TradFi</b>.</i></div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Traditional Finance (TradFi)?</b></h2></div>
   <div className="mtop15p">
      <div><b>Traditional Finance (TradFi)</b> refers to the legacy financial system that includes:</div>
      <div>
         <ul>
            <li>Centralized institutions such as <b>banks</b>, <b>insurance companies</b>, <b>stock exchanges</b>, and <b>central banks</b>.</li>
            <li className="mtop5p">Financial instruments like <b>loans</b>, <b>stocks</b>, <b>bonds</b>, and <b>mutual funds</b>.</li>
            <li className="mtop5p">Heavily regulated operations with <b>intermediaries</b>, <b>central authorities</b> and <b>compliance structures</b> like <b>KYC (Know Your Customer)</b> and <b>AML (Anti-Money Laundering)</b>.</li>
         </ul>
      </div>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>Characteristics of Traditional Finance (TradFi):</b></h4></div>
   <div className="mtop15p">
      <SimpleTable header={["Feature", "Description"]} 
               columns={[
                     [(<div><b>Centralized</b></div>),"Decisions and transactions are controlled by intermediaries"],
                     [(<div><b>Permissioned</b></div>),"Users must get approval to participate (e.g., open a bank)"],
                     [(<div><b>Slow Settlement</b></div>),"Transactions can take days (e.g., wire transfers)"],
                     [(<div><b>Regulatory Burden</b></div>),"Strict government regulations and compliance"],
                     [(<div><b>Limited Access</b></div>),"Not everyone can access all financial services globally"],
                  ]} />
   </div>
   <div className="mtop15p">In contrast, <b>Web 3.0</b> (through DeFi) seeks to eliminate these bottlenecks 
   using <b>blockchain</b>, <b>smart contracts</b>, and <b>token-based governance</b>.</div>

 </div>);
};

export default Introduction;