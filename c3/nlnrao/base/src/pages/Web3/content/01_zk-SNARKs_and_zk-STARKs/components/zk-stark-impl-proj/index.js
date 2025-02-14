import React from "react";
import OrderList from "@Components/order-list/index.js";
import { Order } from "e-ui-react";

const ZkStarkImplProj = () =>{
 return (<div id="zkStarkImplProj">
    <div className="mtop15p"><h4 className="lh36p"><b>Implementing zk-STARKs in a Project</b></h4></div>
    <div className="pad15p">
        To apply zk-STARKs in Layer 2 solutions for Ethereum and other blockchain platforms, you can follow a 
        similar step-by-step process as with zk-SNARKs, but tailored for zk-STARKs. Here's how you can implement it:

        <div className="mtop15p"><h5><b>1. Define the Circuit</b></h5></div>
        <div>
            <div className="mtop15p"><b>Common Approach:</b> The circuit for zk-STARKs is also defined using a 
            specific language for circuit design. Unlike zk-SNARKs, zk-STARKs do not require a trusted setup and 
            rely on a different mathematical framework, such as the use of polynomials.</div>
            <div className="mtop15p">Languages/Tools:</div>
            <OrderList data={[(<div>zk-STARK circuits are often written in a language like Cairo or StarkWare's 
                own tools.</div>),
                (<div>You can also use libraries like <code><b>starkex</b></code> for developing Layer 2 solutions 
                on Ethereum, particularly with zk-Rollups.</div>)]} />
            <div className="mtop15p">Variations Across Tools:</div>
            <OrderList data={[(<div>In Cairo, the circuit is described in .cairo files.</div>),
                (<div>StarkWare and zkRollup implementations involve creating an optimized circuit for Ethereum's 
                    scalability, with focus on reducing the complexity of proofs.</div>)]} />
        </div>

        <div className="mtop15p"><h5><b>2. Generate the Proof</b></h5></div>
        <div>
            <div className="mtop15p"><b>Common Approach:</b> Once the circuit is defined, you need to generate 
            zk-STARK proofs. zk-STARKs use hash functions and polynomial commitments to create verifiable 
            proofs.</div>
            <div className="mtop15p"><b>Steps:</b></div>
            <OrderList data={[(<div>Execute the circuit with input data to generate the proof.</div>),
                (<div>zk-STARK proofs are larger than zk-SNARKs but do not require a trusted setup.</div>)]} />
            <div className="mtop15p"><b>Tools:</b></div>
            <OrderList data={[(<div>For Cairo, use <code><b>cairo-compiler</b></code> and <code><b>starknet.py</b></code> 
                to generate proofs for zk-Rollups.</div>),
                (<div>StarkWare has its own suite of tools to generate and verify proofs on Ethereum.</div>)]} />
        </div>

        <div className="mtop15p"><h5><b>3. Verify the Proof</b></h5></div>
        <div>
            <div className="mtop15p"><b>Common Approach:</b> Proof verification involves checking the validity of 
            the proof using the public inputs and the corresponding verification algorithm.</div>
            <div className="mtop15p"><b>Steps:</b></div>
            <OrderList data={[(<div>The verifier checks the proof on-chain, ensuring the proof is valid without 
                revealing private data.</div>)]} />
            <div className="mtop15p"><b>Tools:</b></div>
            <OrderList data={[(<div>In Ethereum, zk-STARK verification is usually handled by the smart contract 
                deployed on the Layer 2 (Rollup) network.</div>),
                (<div>StarkWare’s tools, including <code><b>starkex</b></code>, handle the verification process 
                for zk-Rollups on Ethereum.</div>)]} />
        </div>

        <div className="mtop15p"><h5><b>4. Set Up the Layer 2 Solution</b></h5></div>
        <div>
            <div className="mtop15p"><b>Common Approach:</b> zk-STARKs are primarily used in Layer 2 solutions 
            like zk-Rollups to scale Ethereum and other blockchains. You’ll need to set up a system where:</div>
            <OrderList data={[(<div>Transactions are aggregated off-chain.</div>),
                (<div>Proofs for these transactions are submitted to the Ethereum mainnet, providing scalability 
                    and security.</div>),(<div>
                        <div><b>Steps:</b></div>
                        <OrderList data={[(<div>Build a zk-Rollup architecture to aggregate and submit 
                            transactions.</div>),(<div>Use zk-STARKs to compress and verify these transactions 
                            efficiently.</div>)]} />
                    </div>),(<div>
                        <div><b>Tools:</b></div>
                        <OrderList data={[(<div>You can leverage StarkWare’s <code><b>StarkEx</b></code> for 
                            deploying zk-Rollups and zk-STARKs for Ethereum.</div>),(<div>
                            Other Layer 2 networks like zkSync and Loopring also leverage zk-STARKs for their rollups.
                            </div>)]} />
                    </div>)]} />
        </div>

        <div className="mtop15p"><h5><b>5. Integrate zk-STARKs with Blockchain Smart Contracts</b></h5></div>
        <div>
            <div className="mtop15p"><b>Common Approach:</b> After generating and verifying zk-STARK proofs, you can 
            integrate them into your blockchain application to handle large transaction batches or private data on 
            Ethereum.</div>
            <div className="mtop15p"><b>Steps:</b></div>
            <OrderList data={[(<div>Deploy smart contracts that validate zk-STARK proofs on Ethereum or other blockchains.</div>),
                (<div>Use the zk-STARK proof as a data input for these smart contracts, allowing verification without revealing 
                    the actual data.</div>)]} />
            <div className="mtop15p"><b>Tools:</b></div>
            <OrderList data={[(<div>Tools like <code><b>starknet.py</b></code>, <code><b>Cairo</b></code>, or 
                <code><b>zkSync</b></code>’s platform allow you to interface zk-STARKs with Ethereum smart contracts, 
                handling proof verification on-chain.</div>)]} />
        </div>

        <div className="mtop15p"><h5><b>6. Optimize for Efficiency</b></h5></div>
        <div>
            <div className="mtop15p"><b>Common Approach:</b> zk-STARKs are larger and more complex than zk-SNARKs, 
            so optimization for gas costs and proof generation time is critical.</div>
            <div className="mtop15p"><b>Steps:</b></div>
            <OrderList data={[(<div>Minimize the size of the proofs by optimizing the circuit design.</div>),
                (<div>Consider batching multiple proofs or using efficient commitment schemes to reduce costs.</div>)]} />
            <div className="mtop15p"></div> 
        </div>

        <div>By following these steps, you can implement zk-STARKs in Layer 2 solutions on Ethereum or other blockchain 
            platforms to improve scalability and privacy.</div>
    </div>
 </div>);
}

export default ZkStarkImplProj;