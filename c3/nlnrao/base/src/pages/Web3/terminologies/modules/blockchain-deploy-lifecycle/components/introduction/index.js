import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div><i>Blockchain development follows a structured lifecycle that ensures applications are rigorously tested before 
        deployment. This process involves different environments — <b>Devnet, Testnet and Mainnet</b> — each serving a 
        unique purpose in the journey from initial development to real-world implementation. Understanding these networks 
        is crucial for developers, businesses, and blockchain enthusiasts looking to build or interact with decentralized 
        applications (DApps) and smart contracts securely and efficiently.</i></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
    <div className="mtop15p">In blockchain technology, deploying an application directly to the mainnet without prior 
        testing can be risky and costly. To mitigate these risks, blockchain ecosystems provide <b>development networks 
        (Devnets)</b>, <b>test networks (Testnets)</b> and the <b>final live environment (Mainnet)</b>. Each of these 
        networks plays a vital role in ensuring the security, stability, and performance of blockchain-based applications 
        before they go live.
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Lifecycle of Blockchain Development</b></h2></div>
    <div className="mtop15p">
        <ol>
            <li>
                <div><h4><b>Devnet (Development Network)</b></h4></div>
                <div className="mtop15p">
                    <ul>
                        <li><b>Purpose:</b> Internal development and testing by individual developers or teams.</li>
                        <li className="mtop5p">
                            <div><b>Features:</b></div>
                            <div>
                                <ul>
                                    <li className="mtop5p">Private and often local or cloud-hosted.</li>
                                    <li className="mtop5p">Allows developers to write, debug, and refine code without network congestion.</li>
                                    <li className="mtop5p">Tokens have no value and are issued for internal use.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="mtop5p">Used in platforms like: Ethereum, Solana, BNB Chain, Polygon.</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><h4><b>Testnet (Testing Network)</b></h4></div>
                <div className="mtop15p">
                    <ul>
                        <li><b>Purpose:</b> Public testing environment for developers and users to test blockchain applications.</li>
                        <li className="mtop5p">
                            <div><b>Features:</b></div>
                            <div>
                                <ul>
                                    <li className="mtop5p">Operates on a public blockchain but with free test tokens.</li>
                                    <li className="mtop5p">Simulates real-world scenarios to test smart contracts, transactions, and DApps.</li>
                                    <li className="mtop5p">Separate from the main blockchain to prevent financial loss.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="mtop5p">
                            <div><b>Common Testnets:</b></div>
                            <div>
                                <ul>
                                    <li className="mtop5p"><b>Ethereum:</b> Goerli, Sepolia.</li>
                                    <li className="mtop5p"><b>BNB Chain:</b> Binance Smart Chain Testnet.</li>
                                    <li className="mtop5p"><b>Solana:</b> Solana Devnet/Testnet.</li>
                                    <li className="mtop5p"><b>Polygon:</b> Mumbai Testnet.</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><h4><b>Mainnet (Main Network)</b></h4></div>
                <div className="mtop15p">
                    <ul>
                        <li><b>Purpose:</b> The final, fully operational blockchain where real transactions occur.</li>
                        <li className="mtop5p">
                            <div><b>Features:</b></div>
                            <div>
                                <ul>
                                    <li className="mtop5p">Live and immutable, with real economic value.</li>
                                    <li className="mtop5p">Requires actual cryptocurrency for transactions and smart contract deployment.</li>
                                    <li className="mtop5p">Transactions are permanent and validated by network participants.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="mtop5p">
                            <div><b>Examples:</b></div>
                            <div>
                                <ul>
                                    <li className="mtop5p"><b>Ethereum Mainnet –</b> Used for ETH and smart contract execution.</li>
                                    <li className="mtop5p"><b>BNB Chain Mainnet –</b> Binance Smart Chain’s live network.</li>
                                    <li className="mtop5p"><b>Solana Mainnet –</b> The production blockchain for Solana-based applications.</li>
                                    <li className="mtop5p"><b>Polygon Mainnet –</b> Layer 2 solution for Ethereum scalability.</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ol>
    </div>
    
 </div>);
};

export default Introduction;