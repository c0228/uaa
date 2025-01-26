import React from "react";
import OrderList from "@Components/order-list/index.js";

const ZkStarkImplDrawback = () =>{
 return (<div id="zkStarkImplDrawback">
    <div className="mtop15p"><h4 className="lh36p"><b>Limitations / Drawbacks of zk-STARKS</b></h4></div>
    <div className="mtop15p lh25p">
        <div>While zk-STARKs offer significant benefits such as scalability, transparency, and no trusted 
            setup, they also come with some limitations and drawbacks. Here are the main ones:</div>
        <OrderList data={[(<div>
            <div><h5><b>Larger Proof Size</b></h5></div>
            <div className="mtop15p"><b>Drawback:</b> zk-STARKs generally have larger proof sizes compared to zk-SNARKs.</div>
            <div><b>Impact:</b> This can increase the amount of data that needs to be transmitted and 
            stored, which may lead to higher bandwidth costs and storage requirements for certain use cases.</div>
        </div>),(<div>
            <div><h5><b>Higher Computational Overhead</b></h5></div>
            <div className="mtop15p"><b>Drawback:</b> The process of generating zk-STARK proofs is computationally more 
            intensive than zk-SNARKs.</div>
            <div><b>Impact:</b> Proof generation requires more computational power, which can result in higher costs for 
            systems requiring large numbers of proofs.</div>
        </div>),(<div>
            <div><h5><b>Complexity in Circuit Design</b></h5></div>
            <div className="mtop15p"><b>Drawback:</b> Designing circuits for zk-STARKs can be more complex and less 
            intuitive than zk-SNARKs.</div>
            <div><b>Impact:</b> Developers may face a steeper learning curve and require specialized tools (like Cairo or 
                StarkWare's frameworks) to design efficient circuits.</div>
        </div>),(<div>
            <div><h5><b>Limited Tooling and Ecosystem</b></h5></div>
            <div className="mtop15p"><b>Drawback:</b> While zk-SNARKs have a mature ecosystem and tooling support 
            (e.g., ZoKrates, SnarkJS), zk-STARKs are still in the process of developing full ecosystem support.</div>
            <div><b>Impact:</b> There are fewer libraries and tools available for zk-STARKs, making integration and 
                development more challenging, particularly for newcomers.</div>
        </div>),(<div>
            <div><h5><b>Proof Verification Costs on-chain</b></h5></div>
            <div className="mtop15p"><b>Drawback:</b> Even though zk-STARK proofs are generally faster to verify than 
                zk-SNARKs, they still require significant computation on-chain.</div>
            <div><b>Impact:</b> On-chain verification costs, especially in the case of large proofs, can still be expensive 
                for decentralized applications, limiting their scalability for certain use cases.</div>
        </div>),(<div>
            <div><h5><b>Limited Adoption</b></h5></div>
            <div className="mtop15p"><b>Drawback:</b> zk-STARKs are not as widely adopted as zk-SNARKs, especially in 
            production systems.</div>
            <div><b>Impact:</b> The lack of wide adoption means fewer real-world use cases, fewer case studies, and potentially 
                slower development of standards and best practices.</div>
        </div>),(<div>
            <div><h5><b>Not Fully Backward Compatible</b></h5></div>
            <div className="mtop15p"><b>Drawback:</b> zk-STARKs use a different cryptographic approach from zk-SNARKs, 
            so they are not directly compatible with existing zk-SNARK-based systems.</div>
            <div><b>Impact:</b> If you want to transition a project from zk-SNARKs to zk-STARKs, the entire cryptographic setup 
                and infrastructure need to be redesigned, which can incur significant costs.</div>
        </div>),(<div>
            <div><h5><b>Requires Specialized Knowledge</b></h5></div>
            <div className="mtop15p"><b>Drawback:</b> Implementing zk-STARKs requires advanced cryptographic knowledge, 
                especially related to polynomial commitments and hash functions.</div>
            <div><b>Impact:</b> This can make zk-STARKs less accessible to general blockchain developers without a deep 
                understanding of cryptography, limiting its widespread use in the developer community.</div>
        </div>)]} />
    </div>
    <div>Despite these drawbacks, zk-STARKs offer strong privacy and scalability features that make them a promising 
        choice for Layer 2 solutions and privacy-preserving technologies. However, balancing these trade-offs with the 
        specific needs of your project is crucial.</div>
 </div>);
};

export default ZkStarkImplDrawback;