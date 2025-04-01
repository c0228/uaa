import React from "react";

const CryptoWorks = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>How Cryptocurrency Wallets Works?</b></h2></div>
    <div className="mtop15p">
        <div>Understanding how wallets function is crucial for their proper usage.</div>
        <div className="mtop15p"><h4><b>Public and Private Keys</b></h4></div>
        <div className="mtop15p">
            <ul>
                <li><b>Public Key:</b> Acts as the wallet’s address for receiving funds.</li>
                <li className="mtop15p"><b>Private Key:</b> Grants access to the funds and must be kept confidential.</li>
            </ul>
        </div>

        <div className="mtop15p"><h4><b>Wallet Addresses and Their Role</b></h4></div>
        <div className="mtop15p">Each wallet generates a unique address derived from the public key. Users share this 
            address to receive cryptocurrency without exposing their private keys.</div>

        <div className="mtop15p"><h4><b>Seed Phrases and Backup</b></h4></div>
        <div className="mtop15p">A seed phrase is a set of words that can recover a wallet if lost. It must be stored 
            securely to prevent unauthorized access.</div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Comparison of Different Wallets</b></h2></div>
    <div className="mtop15p">
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr style={{ backgroundColor:'#eee' }}>
                        <td><b>Feature</b></td>
                        <td><b>Web Wallet</b></td>
                        <td><b>Mobile Wallet</b></td>
                        <td><b>Desktop Wallet</b></td>
                        <td><b>Hardware Wallet</b></td>
                        <td><b>Paper Wallet</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Security</b></td>
                        <td>Low</td>
                        <td>Medium</td>
                        <td>High</td>
                        <td>Very High</td>
                        <td>Very High</td>
                    </tr>
                    <tr>
                        <td><b>Convenience</b></td>
                        <td>High</td>
                        <td>High</td>
                        <td>Medium</td>
                        <td>Low</td>
                        <td>Low</td>
                    </tr>
                    <tr>
                        <td><b>Connectivity</b></td>
                        <td>Online</td>
                        <td>Online</td>
                        <td>Online</td>
                        <td>Offline</td>
                        <td>Offline</td>
                    </tr>
                    <tr>
                        <td><b>Best Use Case</b></td>
                        <td>Daily Transactions</td>
                        <td>Daily Transactions</td>
                        <td>Secure Storage</td>
                        <td>Long-term Storage</td>
                        <td>Long-term Storage</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Popular Cryptocurrency Wallets in the Market</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>MetaMask:</b> A widely used Ethereum-based web wallet.</li>
            <li className="mtop15p"><b>Trust Wallet:</b> A mobile wallet supporting multiple blockchains.</li>
            <li className="mtop15p"><b>Ledger & Trezor:</b> Leading hardware wallets for secure storage.</li>
            <li className="mtop15p"><b>Electrum:</b> A popular Bitcoin desktop wallet.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Security Best Practices for Wallets</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Never Share Private Keys:</b> Keep them confidential.</li>
            <li className="mtop5p"><b>Enable Two-Factor Authentication (2FA):</b> Adds an extra layer of security.</li>
            <li className="mtop5p"><b>Use Strong Passwords:</b> Avoid weak passwords and enable biometric security where possible.</li>
            <li className="mtop5p"><b>Avoid Phishing Scams:</b> Always verify URLs and sources before entering credentials.</li>
            <li className="mtop5p"><b>Backup Wallets:</b> Store seed phrases securely offline.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>How to Set Up a Wallet?</b></h2></div>
    <div className="mtop15p"><h4><b>Step-by-Step Guide</b></h4></div>
    <div className="mtop15p">
        <ol>
            <li>Choose a wallet based on your needs (hot or cold wallet).</li>
            <li className="mtop5p">Download and install the wallet software or set up a hardware device.</li>
            <li className="mtop5p">Generate a new wallet and secure the seed phrase.</li>
            <li className="mtop5p">Set a strong password and enable security features.</li>
            <li className="mtop5p">Receive cryptocurrency by sharing your wallet address.</li>
            <li className="mtop5p">Send cryptocurrency by entering the recipient’s address and confirming the transaction.</li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Advanced Features in Crypto Wallets</b></h2></div>
    <div className="mtop15p"><h4><b>Multi-Signature Wallets</b></h4></div>
    <div className="mtop15p">Multi-signature (multisig) wallets require multiple private keys to authorize a transaction, 
        increasing security for businesses and joint accounts.</div>
    <div className="mtop15p"><h4><b>Smart Contract-Based Wallets</b></h4></div>
    <div className="mtop15p">Smart contract wallets, such as Argent, enable decentralized features like automated payments 
        and security recovery mechanisms.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Future of Cryptocurrency Wallets</b></h2></div>
    <div className="mtop15p">
        <div>With advancements in blockchain technology, wallets are evolving with features like:</div>
        <div className="mtop15p">
            <ul>
                <li><b>Decentralized Identity Verification</b></li>
                <li className="mtop5p"><b>Integrated DeFi and Staking Solutions</b></li>
                <li className="mtop5p"><b>AI-Based Security Enhancements</b></li>
                <li className="mtop5p"><b>Cross-Blockchain Compatibility</b></li>
            </ul>
        </div>
    </div>
 </div>);
};

export default CryptoWorks;