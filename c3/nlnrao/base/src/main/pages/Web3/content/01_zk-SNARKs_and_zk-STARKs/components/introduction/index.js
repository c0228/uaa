import React from 'react';
import OrderList from '@MainComponents/order-list/index.js';

const Introduction = () =>{
 return (<div id="introduction">
    <div className="mtop15p lh36p" style={{ fontSize:'16px' }}><i>Blockchain technology has transformed the way we think about data security, privacy, and scalability.</i></div>
    <div align="center" className="mtop15p"><h3><b>Zero-Knowledge Proofs in Blockchain: An Introduction</b></h3></div>
	  <div className="mtop15p lh25p">
	  <u>Zero-knowledge proofs (ZKPs)</u> are a cryptographic technique that allows one party (the prover) to prove to another party (the verifier)
	  that they know a certain piece of information without revealing the information itself.<br/> 
	  In the context of blockchain, ZKPs can be used to:
		<OrderList data={[(<div><b>Enhance privacy:</b> <i>(Ensuring user transaction data remains confidential)</i><br/>
			By allowing users to prove that they have the right to perform a transaction without revealing their identities or 
			transaction details. This is particularly useful for financial transactions and other sensitive data.</div>),
			(<div><b>Improve scalability:</b> <i>(Improving efficiency without sacrificing decentralization)</i><br/> 
			By allowing for off-chain computations and reducing the amount of data that needs to be stored on the blockchain. 
			This can help to increase the throughput of the blockchain and reduce transaction fees.</div>),
			(<div><b>Increase security:</b> <i>(Maintaining trust among participants without revealing sensitive data)</i><br/> 
			By allowing for more complex and secure authentication and authorization mechanisms.</div>)]} />
	  Zero Knowledge Proofs (ZKPs) were not part of the original version of blockchain (e.g., Bitcoin) but were later incorporated 
	  into advanced blockchain platforms focused on privacy, scalability and security.
	  </div>
 </div>);
};

export default Introduction;