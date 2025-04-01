import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const ZkSnarkImpLang = () =>{
 return (<div id="zkSnarkImplLang">

  <div className="mtop15p"><h4 className="lh36p"><b>Implementations</b></h4></div>
  <div className="mtop15p lh25p">
	<i>zk-SNARK implementations are open source and can be integrated into your system. Several libraries 
    and frameworks provide zk-SNARK functionality, making it easier for developers to leverage this cryptographic 
    technology in their projects.<br/> 
	Here’s a breakdown of the most common languages used for zk-SNARK development:</i>
  </div>

  <OrderList data={[(<div>
     <div className="blog-hgl-title"><h4><b>C++</b></h4></div>
     <div className="pad15p">
		<div><u>Need to Choose</u> - High performance and close-to-metal control, suitable for computationally 
            intensive tasks.</div>
		<div><u>Libraries</u> - </div>
        <OrderList data={[(<div><code><b>libsnark</b></code>: A well-established library for zk-SNARKs, used 
            in early projects like Zcash.</div>)]} />
	 </div>
    </div>),
    (<div>
        <div className="blog-hgl-title"><h4><b>Rust</b></h4></div>
        <div className="pad15p">
			<div><u>Need to Choose</u> - Memory safety, performance, and growing adoption in cryptographic 
                applications.</div>
			<div><u>Libraries</u> - </div>
            <OrderList data={[(<div><code><b>ZoKrates</b></code>: Rust-based toolbox with a high-level language for zk-SNARKs.</div>),
                (<div><code><b>Halo2</b></code>: Zcash’s Rust implementation for zk-SNARKs and beyond.</div>),
                (<div><code><b>Arkworks</b></code>: A modular Rust ecosystem for zk-SNARKs.</div>)]} />
		</div>
    </div>),
    (<div>
        <div className="blog-hgl-title"><h4><b>JavaScript / TypeScript</b></h4></div>
		<div className="pad15p">
			<div><u>Need to Choose</u> - Easy integration with web-based platforms and dApps.</div>
			<div><u>Libraries</u> - </div>
            <OrderList data={[(<div><code><b>SnarkJS</b></code>: A lightweight JavaScript library for generating and 
                verifying zk-SNARK proofs.</div>)]} />
		</div>
    </div>),
    (<div>
        <div className="blog-hgl-title"><h4><b>Python</b></h4></div>
		<div className="pad15p">
			<div><u>Need to Choose</u> - Simplicity and readability, good for prototyping and educational purposes.</div>
			<div><u>Libraries</u> - </div>
            <OrderList data={[(<div><code><b>py_snark</b></code>: Python bindings for zk-SNARK functionalities.</div>)]} />
		</div>
    </div>),
    (<div>
        <div className="blog-hgl-title"><h4><b>Go (Golang)</b></h4></div>
		<div className="pad15p">
			<div><u>Need to Choose</u> - Lightweight and efficient, often used in blockchain systems.</div>
			<div><u>Libraries</u> - </div>
            <OrderList data={[(<div><code><b>gnark</b></code>: A Go library for zk-SNARKs developed by ConsenSys, supports smart contract 
                and blockchain-based integrations.</div>)]} />
		</div>
    </div>),
    (<div>
        <div className="blog-hgl-title"><h4><b>Solidity (Ethereum Smart Contracts)</b></h4></div>
        <div className="pad15p">
			<div><u>Need to Choose</u> - Direct integration with Ethereum and other EVM-based blockchains.</div>
			<div><u>Libraries</u> - </div>
            <OrderList data={[(<div>Solidity’s precompiled zk-SNARK verification contracts.</div>),
                (<div><code><b>ZoKrates</b></code>: Generates Solidity smart contracts for verification.</div>)]} />
        </div>
    </div>)
  ]} />

 </div>);
};

export default ZkSnarkImpLang;