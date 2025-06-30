import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Risks and Challenges of MEV</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Risk","Description"]} 
            columns={[
                ["Centralization","MEV extraction favors sophisticated players, concentrating power."],
                ["User Experience","Users face failed or frontrun transactions."],
                ["Fairness","Neutrality of blockchain is compromised."],
                ["Censorship","Validators may ignore or delay transactions that don't benefit them."],
                ["Reorgs","High-value MEV blocks lead to chain reorganizations (e.g., time-bandit attacks)."],
            ]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Mitigating MEV: Tools and Research</b></h2></div>
    <div>
        <ol>
            <li className="mtop5p">
                <div><b>Flashbots</b></div>
                <ul>
                    <li>A protocol enabling ethical MEV extraction via private transaction bundles.</li>
                    <li>Reduces harmful front-running and improves transparency.</li>
                </ul>
            </li>
            <li className="mtop5p">
                <div><b>MEV-Boost</b></div>
                <ul>
                    <li>Used in Ethereum post-Merge (Proof of Stake).</li>
                    <li>Allows validators to accept blocks from trusted builders in a decentralized way.</li>
                </ul>
            </li>
            <li className="mtop5p">
                <div><b>Private Mempools</b></div>
                <ul>
                    <li>Users submit transactions directly to validators to avoid public exposure.</li>
                </ul>
            </li>
            <li className="mtop5p">
                <div><b>Fair Ordering Protocols</b></div>
                <ul>
                    <li>Enforcing transaction ordering by timestamps or cryptographic randomness.</li>
                </ul>
            </li>
        </ol>
    </div>


    <div className="mtop15p"><h2 className="blog-head"><b>Real-World Example of MEV</b></h2></div>
    <div className="mtop15p">
        <div>A user submits a 500 ETH trade on Uniswap.</div>
        <ul>
            <li className="mtop5p">A <b>searcher bot</b> detects the transaction in the mempool.</li>
            <li className="mtop5p">It submits a <b>front-run transaction</b> to buy before the user’s trade.</li>
            <li className="mtop5p">Then it submits a <b>back-run transaction</b> to sell after.</li>
            <li className="mtop5p">The validator includes the bot’s transactions in the block to earn MEV rewards (shared via Flashbots).</li>
        </ul>
    </div>

    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h2 className="blog-head"><b>Ethical Considerations</b></h2></div>
            <div>
                <ul>
                    <li className="mtop5p"><b>Good MEV:</b> Arbitrage that improves market efficiency.</li>
                    <li className="mtop5p"><b>Bad MEV:</b> Frontrunning and sandwich attacks that harm users.</li>
                    <li className="mtop5p"><b>Ugly MEV:</b> Reorgs and censorship that destabilize the chain.</li>
                </ul>
            </div>
            <div className="mtop5p">There is a growing push to differentiate 
            between <b>“constructive MEV”</b> and <b>“malicious MEV”</b>, much like distinguishing ethical 
            hacking from cybercrime.</div>
        </Card>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion: MEV Is the Dark Forest of DeFi</b></h2></div>
    <div className="mtop15p">MEV is like the hidden tax of blockchains — <b>invisible but impactful</b>. It exposes deep 
    economic layers within decentralized systems, showing how validator incentives can diverge from user fairness.</div>
    <div className="mtop15p">While projects like <b>Flashbots</b>, <b>MEV-Boost</b>, and <b>fair ordering research</b> aim 
    to control the harmful aspects of MEV, it remains an unsolved challenge in blockchain governance and design.</div>
    <div className="mtop15p">Understanding MEV is <b>not just for developers</b> — it’s crucial for users, dApp creators, 
    and protocol designers to ensure <b>fairness</b>, <b>neutrality</b>, and <b>decentralization</b> in the future of 
    finance.</div>
 </div>);
};

export default Conclusion;