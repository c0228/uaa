import React from "react";
import OrderList from "@MainComponents/order-list/index.js";
import BlogListHeader from "@MainComponents/blog-list-header/index.js";

const AdditionalInfo = () =>{
 return (<div>
 <BlogListHeader label="Latest / Modern ZKP Technologies" />
 <div className="list-group">
    <div className="list-group-item" style={{ backgroundColor:'#f8f9fa' }}>
        <div className="mtop15p">
             <div><b>1. zk-Rollups</b></div>
             <div className="mtop15p lh25p">Batch thousands of transactions off-chain and generate succinct proofs for on-chain verification.</div>
             <div className="mtop15p lh25p"><u><i>Examples</i></u>: Polygon zkEVM, StarkNet, zkSync Era</div>
        </div>
        <div className="mtop15p">
            <div><b>2. zkEVM (Ethereum-Compatible ZKP Environments)</b></div>
            <div className="mtop15p lh25p">Ethereum-compatible ZKP environments enable scalable smart contracts with privacy.</div>
            <div className="mtop15p lh25p"><u><i>Examples</i></u>: Scroll, Polygon zkEVM</div>
        </div>
        <div className="mtop15p">
            <div><b>3. zk-STARKs (Zero-Knowledge Scalable Transparent Arguments of Knowledge)</b></div>
            <div className="mtop15p lh25p">Transparent and scalable ZKP technology for high throughput and low cost.</div>
            <div className="mtop15p lh25p"><u><i>Examples</i></u>: Immutable X, dYdX</div>
        </div>
        <div className="mtop15p">
            <div><b>4. Recursive Proofs</b></div>
            <div className="mtop15p lh25p">Smaller, efficient proofs that verify other proofs, enabling scalability and composability.</div>
            <div className="mtop15p lh25p"><u><i>Examples</i></u>: Halo 2, Plonky2</div>
        </div>
        <div className="mtop15p">
            <div><b>5. Privacy Layers</b></div>
            <div className="mtop15p lh25p">ZKP-based protocols enhancing privacy for DeFi and payment solutions.</div>
            <div className="mtop15p lh25p"><u><i>Examples</i></u>: Aztec, Manta Network</div>
        </div>
        <div className="mtop15p">
            <div><b>6. zk-ID (Decentralized Identity)</b></div>
            <div className="mtop15p lh25p">Use ZKP for identity verification while maintaining privacy.</div>
            <div className="mtop15p lh25p"><u><i>Examples</i></u>: Polygon ID</div>
        </div>
    </div>
  </div>
  <BlogListHeader label="Additional Innovations" />
  <div className="list-group">
    <div className="list-group-item"  style={{ backgroundColor:'#f8f9fa' }}>
        <OrderList data={[(<div><b>Polygon zkEVM:</b><br/> Polygon's ZKP-based Ethereum Virtual Machine ensures scalable and 
            privacy-friendly transactions.</div>),(<div><b>StarkWare:</b><br/> A layer-2 scaling solution for Ethereum that 
            uses zk-STARKs for enhanced privacy and scalability.</div>),(<div><b>Aleph Zero & Mina Protocol:</b><br/> These 
            blockchains focus on lightweight, efficient implementations of ZKPs.</div>)]} />
    </div>
  </div>
  </div>);
};

export default AdditionalInfo;