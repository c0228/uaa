import React from "react";
import SimpleTimeline from '@Components/simple-timeline/index.js';
import OrderList from '@Components/order-list/index.js';

const Timeline = () =>{
 const data=[{
    title:(<div>1985 - Theoretical Foundation</div>),
    desc:(<div>The concept of Zero Knowledge Proofs was theoretically on the paper.</div>)
 },{
    title:(<div>2009 - Introduced Bitcoin</div>),
    desc:(<div>Bitcoin (the first blockchain) didn't use ZKPs. It relied on transparency and public verification, 
				meaning all transaction details are visible on the blockchain.</div>)
 },{
    title:(<div>2015 - Introduced Ethereum</div>),
    desc:(<div>Ethereum also didn't use ZKPs. It relied on on-chain transactions and smart contracts to verify and execute actions, making 
			  all information publicly visible on the blockchain.</div>)
 },{
    title:(<div>2016 - Introduced ZCash</div>),
    desc:(<div>
            <OrderList data={[(<div>Zcash was the first blockchain platform to implement ZKPs in a practical and large-scale way.</div>),
                (<div>It introduced <i>zk-SNARKs</i>, allowing completely private transactions while still being verifiable 
					on the blockchain.</div>),
                (<div>With zk-SNARKs, users could prove they had sufficient funds and authorized a transaction without revealing 
					sender, receiver, or amount.</div>)]}/>
        </div>)
 },{
    title:(<div>Post 2017 - Ethereum and zk-SNARKs</div>),
    desc:(<div>Ethereum added support for zk-SNARKs through tools like ZoKrates to enable privacy-focused 
			  applications (e.g., private smart contracts).</div>)
 },{
    title:(<div>2018 - Introduced zk-STARKs</div>),
    desc:(<div>zk-STARKs emerged as a more scalable and transparent alternative to zk-SNARKs. It eliminate the 
        need for a trusted setup and improve computational efficiency, making them suitable for high-throughput 
        blockchain systems.</div>)
 },{
    title:(<div>2020 – Growth of Privacy and Layer-2 Solutions</div>),
    desc:(<div>
            <OrderList data={[(<div><b>Aztec Protocol:</b><br/> It introduces zk-SNARK-based privacy solutions on 
                    Ethereum for confidential transactions. Later evolves into Aztec 2.0, introducing advanced privacy-preserving 
                    DeFi applications.</div>),
                    (<div><b>StarkWare Mainnet Launch:</b><br/> StarkWare launches StarkEx, a zk-STARK-based scaling engine.
			        Applications like Immutable X and dYdX use StarkEx for high-performance trading and gaming platforms.</div>)]} />
        </div>)
 },{
    title:(<div>2021 – Polygon Acquires zk-Rollup Solutions</div>),
    desc:(<div><OrderList data={[(<div>Polygon, a popular Ethereum scaling platform, acquires Hermez Network and 
					integrates zk-Rollup technology.</div>),
                    (<div>zk-Rollups leverage ZKP to batch multiple transactions into a single proof, 
					improving Ethereum scalability.</div>)]} /></div>)
 },{
    title:(<div>2022 – Mina Protocol: The Lightweight Blockchain</div>),
    desc:(<div>
            <OrderList data={[(<div>Mina Protocol introduces a blockchain using zk-SNARKs to maintain a tiny blockchain size (~22 KB).</div>),
                (<div>Users can validate the blockchain with minimal computational resources.</div>)]} />
        </div>)
 },{
    title:(<div>2023 – zkEVM Revolution</div>),
    desc:(<div>zkEVM (Zero Knowledge Ethereum Virtual Machine) emerges as the latest breakthrough:
        <OrderList data={[(<div><b>Polygon zkEVM:</b> Provides a scalable and privacy-preserving Ethereum-compatible environment.</div>),
            (<div><b>Scroll:</b> A zkEVM solution focused on decentralization and performance.</div>),
            (<div><b>zkSync Era:</b> Another zkEVM implementation for faster, cheaper, and private transactions on Ethereum</div>)]} />
    </div>)
 },{
    title:(<div>2024 - 2025 : Latest Advancements in ZKP for Blockchain</div>),
    desc:(<div>
        <div><b>Plonky2 (Polygon):</b></div>
        <OrderList data={[(<div>A highly optimized zk-SNARK implementation supporting fast proofs and recursion.</div>),
            (<div>Enables efficient zk-Rollups and zkEVM development</div>)]} />
        <div><b>Halo 2 (Electric Coin Company):</b></div>
        <OrderList data={[(<div>Introduces recursive zk-SNARKs without a trusted setup.</div>),
            (<div>Used in Zcash to make proofs more efficient and scalable.</div>)]} />
        <div><b>zkID:</b></div>
        <OrderList data={[(<div>ZKP is being integrated into decentralized identity systems, allowing users to prove credentials without 
            revealing private data.</div>),
            (<div><u><i>For Example</i></u> - Proving age without sharing the birthdate.</div>)]} />
        <div><b>DeFi Privacy:</b></div>
        <OrderList data={[(<div>Advanced privacy-preserving protocols for Decentralized Finance (DeFi) using ZKPs, ensuring transaction 
            confidentiality.</div>)]} />
        <div><b>Cross-Chain ZKP Applications:</b></div>
        <OrderList data={[(<div>ZKPs are being used to enhance interoperability between blockchains, ensuring trustless cross-chain 
            communication.</div>)]} />
    </div>)
 }];
 return (<div id="timeline">
   <div className="mtop15p"><h3><b>Timeline of ZKP in Blockchain</b></h3></div>
   <div className="mtop15p">
    <SimpleTimeline data={data} />
   </div>
 </div>);
};

export default Timeline;