import React from "react";

const InDetail = () =>{
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div className="mtop15p"><h2 className="blog-head"><b>Transition from Devnet to Mainnet</b></h2></div>
    <div className="mtop15p">
        <div>The journey from development to a live blockchain application follows a structured process:</div>
        <div>
            <ol>
                <li className="mtop15p">
                    <div><h4><b>Development Phase (Devnet)</b></h4></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Code is written, tested, and refined in an isolated environment.</li>
                            <li className="mtop5p">Smart contracts are deployed and verified for correctness.</li>
                        </ul>
                    </div>
                </li>
                <li className="mtop15p">
                    <div><h4><b>Testing Phase (Testnet)</b></h4></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Applications are deployed on a public testnet for real-world simulation.</li>
                            <li className="mtop5p">Community testing is conducted to identify bugs and security vulnerabilities.</li>
                        </ul>
                    </div>
                </li>
                <li className="mtop15p">
                    <div><h4><b>Deployment Phase (Mainnet)</b></h4></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Finalized smart contracts and applications are deployed on the mainnet.</li>
                            <li className="mtop5p">Transactions involve real assets, and network security is fully enforced.</li>
                        </ul>
                    </div>
                </li>
            </ol>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Why Understanding This Lifecycle Matters?</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Prevents Costly Mistakes –</b> Deploying directly to the mainnet without testing can lead to 
                irreversible financial losses.</li>
            <li className="mtop5p"><b>Ensures Security –</b> Smart contracts undergo rigorous testing in the 
                testnet environment.</li>
            <li className="mtop5p"><b>Optimizes Performance –</b> Developers can fine-tune applications before 
                public launch.</li>
            <li className="mtop5p"><b>Encourages Community Feedback –</b> Public testing helps identify potential 
                issues before a full rollout.</li>
        </ul>
    </div>
 </div>);
};

export default InDetail;