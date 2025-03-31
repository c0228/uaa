import React from "react";

const Architecture = () =>{
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div className="mtop15p"><h2 className="blog-head"><b>DAO Architecture in Web3.0</b></h2></div>
    <div className="mtop15p">
        <div>A DAO consists of several fundamental architectural components:</div>
        <div>
            <ol>
                <li className="mtop15p">
                    <div><h4><b>Smart Contracts</b></h4></div>
                    <div className="mtop15p">Smart contracts define the rules of the DAO, handling proposals, 
                        voting, and fund management. They ensure trustless execution of operations.</div>
                </li>
                <li className="mtop15p">
                    <div><h4><b>Governance Mechanisms</b></h4></div>
                    <div className="mtop15p">Governance models vary across DAOs, including:</div>
                    <div>
                        <ul>
                            <li className="mtop5p"><b>Token-based Voting:</b> Members vote on proposals using governance tokens.</li>
                            <li className="mtop5p"><b>Quadratic Voting:</b> A weighted voting system to prevent whales from dominating decisions.</li>
                            <li className="mtop5p"><b>Delegated Voting:</b> Members delegate their votes to trusted representatives.</li>
                        </ul>
                    </div>
                </li>
                <li className="mtop15p">
                    <div><h4><b>Treasury Management</b></h4></div>
                    <div className="mtop15p">DAOs often manage a treasury through multi-signature wallets or smart contracts 
                        to fund projects, development, or grants.</div>
                </li>
                <li className="mtop15p">
                    <div><h4><b>Consensus Models</b></h4></div>
                    <div className="mtop15p">
                        <div>DAOs employ various consensus mechanisms such as:</div>
                        <div>
                            <ul>
                                <li className="mtop5p"><b>Off-chain Governance:</b> Using platforms like Snapshot for gasless voting.</li>
                                <li className="mtop5p"><b>On-chain Governance:</b> Direct execution of governance decisions via smart contracts.</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="mtop15p">
                <div><h4><b>DAO Frameworks</b></h4></div>
                    <div className="mtop15p">
                        <div>Several frameworks help developers deploy DAOs efficiently:</div>
                        <div>
                            <ul>
                                <li className="mtop5p"><b>Aragon:</b> A platform for creating and managing DAOs.</li>
                                <li className="mtop5p"><b>DAOstack:</b> Provides modular governance tools.</li>
                                <li className="mtop5p"><b>MolochDAO:</b> Focuses on grant-based DAOs.</li>
                                <li className="mtop5p"><b>Gnosis Safe:</b> Secure multi-signature wallet solutions.</li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Improvements and Challenges in DAO Development</b></h2></div>
    <div className="mtop15p">
        <div><h4><b>Recent Advancements</b></h4></div>
        <div className="mtop15p">
            <div>
                <ul>
                    <li><b>Cross-chain Governance:</b> DAOs now operate across multiple blockchains using bridges and 
                        interoperability solutions.</li>
                    <li className="mtop5p"><b>AI-powered DAOs:</b> AI-driven governance mechanisms are being explored to 
                        enhance decision-making.</li>
                    <li className="mtop5p"><b>NFT-based DAOs:</b> DAOs using NFTs for membership and governance 
                        participation.</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="mtop15p">
        <div><h4><b>Challenges</b></h4></div>
        <div className="mtop15p">
            <div>
                <ul>
                    <li><b>Security Risks:</b> Smart contract vulnerabilities remain a significant risk.</li>
                    <li className="mtop5p"><b>Legal Uncertainty:</b> DAOs face regulatory challenges in different jurisdictions.</li>
                    <li className="mtop5p"><b>Scalability Issues:</b> Managing large-scale DAOs efficiently is still a challenge.</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>The Future of DAOs</b></h2></div>
    <div className="mtop15p">
        <div>DAOs are expected to evolve further with:</div>
        <div className="mtop5p">
            <div>
                <ul>
                    <li><b>Legally Recognized DAOs:</b> Some jurisdictions like Wyoming have granted 
                        legal status to DAOs.</li>
                    <li className="mtop5p"><b>Improved Governance Models:</b> Hybrid models blending on-chain 
                        and off-chain governance.</li>
                    <li className="mtop5p"><b>Integration with DeFi and NFTs:</b> DAOs will play a significant role 
                        in DeFi and NFT ecosystems.</li>
                </ul>
            </div>
        </div>
    </div>


 </div>);
};

export default Architecture;