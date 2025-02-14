import React from "react";
import OrderList from "@Components/order-list/index.js";

const ZkStarkImplLang = () =>{
 return (<div id="zkStarkImplLang">
    <div className="mtop15p"><h4 className="lh36p"><b>Implementations</b></h4></div>
    <div className="mtop15p lh25p">
    zk-STARK libraries are available in several programming languages, allowing developers to integrate them 
    into various platforms and blockchain ecosystems. Some of the most commonly used languages for zk-STARK 
    libraries include:
    <OrderList data={[(<div>
        <div><b>Rust:</b></div>
        <div>Rust is one of the primary languages for implementing zk-STARKs, particularly for high-performance 
            applications like blockchain scalability solutions. The <code><b>starkware</b></code> library, which 
            powers Ethereum Layer 2 solutions like StarkNet, is developed in Rust due to its speed and memory safety.</div>
    </div>),(<div>
        <div><b>Python:</b></div>
        <div>Python, known for its simplicity and readability, also supports zk-STARK implementations. Libraries   
        like <code><b>pycryptodome</b></code> and other zk-STARK-focused tools are available for those who prefer Python's 
        ecosystem, especially for prototyping and testing.</div>
    </div>),(<div>
        <div><b>Solidity:</b></div>
        <div>Solidity is the most widely used language for Ethereum smart contracts, and zk-STARKs can be integrated into 
            smart contracts via libraries like <code><b>starknet.js</b></code>. These libraries enable the use of zk-STARKs 
            in Ethereum-based applications and Layer 2 solutions for scalability and privacy.</div>
    </div>),(<div>
        <div><b>Go:</b></div>
        <div>Go is used for some zk-STARK libraries and tools, especially in blockchain projects requiring concurrent 
            processing and fast performance. Go libraries are popular for server-side integrations of zk-STARK proofs.</div>
    </div>),(<div>
        <div><b>JavaScript:</b></div>
        <div>JavaScript, via libraries like <code><b>starknet.js</b></code>, makes zk-STARKs accessible for web applications, allowing 
            front-end developers to interact with Layer 2 solutions and use zk-STARKs for privacy and scalability 
            enhancements.</div>
    </div>)]} />
    <div>These libraries are designed to work seamlessly within their respective ecosystems, offering developers flexibility 
        in implementing zk-STARKs across different platforms and use cases.</div>
    </div>
 </div>);
};

export default ZkStarkImplLang;