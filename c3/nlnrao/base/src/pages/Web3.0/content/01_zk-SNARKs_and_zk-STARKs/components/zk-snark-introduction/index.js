import React from "react";
import OrderList from '@Components/order-list/index.js';

const ZkSnarkIntroduction = () =>{
 return (<div id="zkSnarkIntroduction">

  <div align="center" className="mtop35p">
    <h3 className="lh42p">
        <b>Unlocking zk-SNARKs: The Power of Zero-Knowledge Proofs Simplified</b>
    </h3>
  </div>

  <div className="mtop15p lh25p">
	<i><u>zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge)</u> is a cryptographic 
    proof system which is first introduced in Zcash Blockchain Platform that allows one party (the prover) 
    to prove to another party (the verifier) that they know a piece of information, without revealing what 
    that information is.</i>
  </div>

  <div className="mtop15p"><h4 className="lh36p"><b>Key Terms</b></h4></div>
  <OrderList data={[(<div><b>Zero-Knowledge:</b> The verifier learns nothing about the information being 
    proven, except that the statement is true/false.</div>),
    (<div><b>Succinct:</b> The proof is very small in size and can be verified in milliseconds, even for 
    complex computations.</div>),
    (<div><b>Non-Interactive:</b> No back-and-forth communication is required between the prover and 
        verifier. The proof is generated once and can be verified anytime.</div>),
    (<div><b>Argument of Knowledge:</b> The proof guarantees that the prover possesses the knowledge they 
        claim to have.</div>)]} />

 </div>);
};

export default ZkSnarkIntroduction;