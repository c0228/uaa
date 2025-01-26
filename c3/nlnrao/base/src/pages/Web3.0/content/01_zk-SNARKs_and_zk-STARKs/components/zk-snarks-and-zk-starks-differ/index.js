import React from "react";
import OrderList from '@Components/order-list/index.js';

const ZkSnarksAndZkStarksDiffer = () =>{
 return (<div id="zkSnarksAndZkStarksDiffer">
    <div className="mtop35p">
        <h4 className="lh36p"><b>How zk-STARKs Differ from zk-SNARKs and Other Cryptographic Protocols?</b></h4>
    </div>
    <div className="pad15p">
        <div>The main difference between zk-STARKs and zk-SNARKs lies in their underlying cryptographic structures, 
            with zk-STARKs offering enhanced scalability, transparency, and quantum resistance, while zk-SNARKs 
            require a trusted setup and are more compact in proof size.</div>
        <OrderList data={[(<div>
            <div><b>Trusted Setup:</b></div>
            <div>One key difference between zk-STARKs and zk-SNARKs is that zk-SNARKs require a trusted setup, 
                a one-time process where specific cryptographic parameters are generated. If the setup is compromised, 
                it can jeopardize the security of the entire system. zk-STARKs, on the other hand, do not require such 
                a setup, making them more transparent and secure.</div>
        </div>),(<div>
            <div><b>Proof Size and Efficiency:</b></div>
            <div>zk-SNARKs are succinct (short) proofs but can become inefficient as data size grows. zk-STARKs, 
                while the proofs may be larger, offer scalability because their proof size doesn't grow drastically 
                as the complexity of the computation increases. This scalability makes zk-STARKs more suitable for 
                handling large datasets, especially in blockchain applications.</div>
        </div>),(<div>
            <div><b>Cryptographic Foundations:</b></div>
            <div>zk-SNARKs rely on elliptic curve cryptography, which is computationally efficient but can be more 
                vulnerable to future quantum computing threats. zk-STARKs, however, are based on hash functions and 
                are quantum-resistant, providing better security against potential future threats.</div>
        </div>),(<div>
            <div><b>Transparency and Security:</b></div>
            <div>zk-STARKs offer greater transparency because they do not rely on a trusted setup. In contrast, the 
                security of zk-SNARKs depends on the integrity of the trusted setup process, creating a potential 
                vulnerability if the setup is compromised.</div>
        </div>)]} />
        <div>In summary, zk-STARKs differ from zk-SNARKs and other cryptographic protocols mainly in their setup 
            requirements, scalability, and quantum resistance. zk-STARKs are non-interactive, more scalable, and 
            more transparent, offering significant advantages in terms of security and usability in decentralized 
            systems like blockchain.</div>
    </div>
 </div>);
};

export default ZkSnarksAndZkStarksDiffer;