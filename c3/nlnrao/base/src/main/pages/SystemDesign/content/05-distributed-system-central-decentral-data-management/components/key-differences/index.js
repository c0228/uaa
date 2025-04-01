import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const KeyDifferences = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Key Differences Between Centralized and Decentralized Data Management</b></h2></div>
    <div className="mtop15p">
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr style={{ backgroundColor:'#eee' }}>
                        <td><b>Features</b></td>
                        <td><b>Centralized Data Management</b></td>
                        <td><b>Decentralized Data Management</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Control</b></td>
                        <td>Single authority</td>
                        <td>Distributed control</td>
                    </tr>
                    <tr>
                        <td><b>Scalability</b></td>
                        <td>Limited by infrastructure</td>
                        <td>Highly scalable</td>
                    </tr>
                    <tr>
                        <td><b>Fault Tolerance</b></td>
                        <td>Prone to single failure</td>
                        <td>Resistant to node failures</td>
                    </tr>
                    <tr>
                        <td><b>Data Consistency</b></td>
                        <td>Strong consistency</td>
                        <td>Eventual consistency</td>
                    </tr>
                    <tr>
                        <td><b>Security</b></td>
                        <td>Centralized security policies</td>
                        <td>Cryptographic security</td>
                    </tr>
                    <tr>
                        <td><b>Performance</b></td>
                        <td>Faster for transactions</td>
                        <td>Slower due to consensus</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="mtop15p"><h2 className="blog-head"><b>When to Use Centralized Data Management</b></h2></div>
        <div className="mtop15p">A centralized approach is preferable when:</div>
        <OrderList data={[(<div><b>Strict Consistency is Required:</b> Banking systems and financial applications where transactional accuracy is critical.</div>),
            (<div><b>Regulatory Compliance is Mandatory:</b> Industries like healthcare and government need centralized oversight.</div>),
            (<div><b>Performance Optimization is a Priority:</b> Applications demanding fast query execution and data retrieval benefit from centralized storage.</div>),
            (<div><b>Data Governance Needs Strong Control:</b> Organizations requiring stringent access control and policy enforcement opt for centralization.</div>)]} />
        <div className="mtop15p"><h2 className="blog-head"><b>When to Use DeCentralized Data Management</b></h2></div>
        <div className="mtop15p">A decentralized approach is suitable when:</div>
        <OrderList data={[(<div><b>Data Needs High Availability:</b> Applications requiring global accessibility without single points of failure.</div>),
            (<div><b>Trustless Environments are Necessary:</b> Blockchain-based applications where users must verify transactions without intermediaries.</div>),
            (<div><b>Scalability is Essential:</b> Large-scale distributed applications, such as content delivery networks (CDNs), benefit from decentralization.</div>),
            (<div><b>Resilience Against Censorship is Required:</b> Decentralized networks ensure data remains accessible without government or corporate interference.</div>)]} />
    
        <div className="mtop15p"><h2 className="blog-head"><b>Hybrid Approaches: Combining the Best of Both Worlds</b></h2></div>
        <div className="mtop15p">Many modern applications blend centralized and decentralized approaches to achieve the best balance of security, scalability, 
            and efficiency.</div>
        <div className="mtop15p"><b>Examples of Hybrid Systems:</b></div>
        <div>
            <ol>
                <li className="mtop15p"><b>Permissioned Blockchains:</b> Enterprise solutions like Hyperledger Fabric maintain decentralized records while 
                enforcing controlled access.</li>
                <li className="mtop15p"><b>Content Distribution Networks (CDNs):</b> Use centralized origin servers but distribute content across decentralized 
                edge nodes for faster access.</li>
                <li className="mtop15p"><b>Federated Databases:</b> Allow different databases to work together while maintaining autonomy over their data 
                management policies.</li>
            </ol>
        </div>
    
    </div>
 </div>);
};

export default KeyDifferences;