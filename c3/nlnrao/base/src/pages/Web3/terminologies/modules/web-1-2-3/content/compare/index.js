import React from "react";

const Compare = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Web 1.0, Web 2.0 and Web 3.0 Comparison</b></h2></div>
    <div className="mtop15p table-responsive">
    <table className="table">
      <thead>
        <tr style={{ backgroundColor:'#000', color:'#fff' }}>
            <td><b>Features</b></td>
            <td><b>Web 1.0</b></td>
            <td><b>Web 2.0</b></td>
            <td><b>Web 3.0</b></td>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td><b>Interaction</b></td>
            <td>Read-only</td>
            <td>Read-write</td>
            <td>Read-write-own</td>
        </tr>
        <tr className="table-warning">
            <td><b>Content</b></td>
            <td>Static</td>
            <td>Dynamic</td>
            <td>Intelligent, semantic</td>
        </tr>
        <tr>
            <td><b>User Role</b></td>
            <td>Passive consumer</td>
            <td>Active contributor</td>
            <td>Owner and stakeholder</td>
        </tr>
        <tr className="table-warning">
            <td><b>Technology</b></td>
            <td>HTML, basic CSS</td>
            <td>AJAX, JavaScript, APIs</td>
            <td>Blockchain, AI, IoT, smart contracts</td>
        </tr>
        <tr>
            <td><b>Data Control</b></td>
            <td>Centralized</td>
            <td>Centralized (owned by companies)</td>
            <td>Decentralized (user-controlled)</td>
        </tr>
        <tr className="table-warning">
            <td><b>Economy</b></td>
            <td>No user economy</td>
            <td>Advertising-driven</td>
            <td>Tokenized, crypto-based</td>
        </tr>
        <tr>
            <td><b>Examples</b></td>
            <td>Early Yahoo, Craigslist</td>
            <td>Facebook, YouTube, Wikipedia</td>
            <td>Ethereum, NFTs, DAOs</td>
        </tr>
      </tbody>
    </table>
    </div>
 </div>);
};

export default Compare;