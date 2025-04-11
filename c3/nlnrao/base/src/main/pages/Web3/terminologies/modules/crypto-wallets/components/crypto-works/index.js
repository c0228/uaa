import React from "react";
import { Card } from "e-ui-react";

const CryptoWorks = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>How Cryptocurrency Wallets Works?</b></h2></div>
    <div className="padLeft5p">
    <div className="pad15p" style={{ border:'1px dashed #ccc' }}>
        <div>A Cryptocurrency Wallet is a</div>
        <div>
            <ul>
                <li>A <b>Key Generator</b> (it creates your keys)</li>
                <li>A <b>Key holder</b> (it stores your keys)</li>
                <li>A <b>transaction signer</b> (it uses your keys to send crypto)</li>
            </ul>
        </div>
    </div>
    <div className="pad15p" style={{ border:'1px dashed #ccc' }}>
        <div>Every wallet generates a unique pair of cryptographic keys -</div>
        <div className="padLeft5p">
        <div className="mtop15p"><h4><b>Private and Public Keys</b></h4></div>
        <div>
            <ul>
                <li className="mtop15p"><b>Private Key (Only User knows it):</b> Grants access to the funds and 
                must be kept confidential. Used to sign transactions digitally.</li>
                <li className="mtop15p"><b>Public Key (Every one see it):</b> Derived from the private key, acts 
                as the wallet’s address for receiving funds.</li>
            </ul>
        </div>

        <div className="mtop15p"><h4><b>Wallet Addresses and Their Role</b></h4></div>
        <div className="mtop15p">Each wallet generates a unique address derived from the public key. Users share this 
            address to receive cryptocurrency without exposing their private keys.</div>

        <div className="mtop15p"><h4><b>Seed Phrases and Backup</b></h4></div>
        <div className="mtop15p">A seed phrase (<i>Master key</i>) is a set of 12, 18, or 24 human-readable words that 
        can recover a wallet if lost. It must be stored securely to prevent unauthorized access. It generates all your 
        private keys and public keys behind the scenes.</div>
        <div className="mtop10p">
            <Card padding={10}><i>Seed phrase helps us to restore your wallet on any device.</i></Card>
        </div>
        </div>
    </div>
    <div className="pad15p" style={{ border:'1px dashed #ccc' }}>
        <div><h4><b>Process:</b></h4></div>
        <div className="mtop15p">For the <u><i>first time</i></u> -</div>
        <div>
            <ol>
                <li className="mtop5p">
                    <div><b>Entropy (Randomness) is Generated -</b></div>
                    <ol>
                        <li>Wallet generates <b><u>random number</u></b> in size 128–256 bit (called Entropy).</li>
                        <li>This is the core of your wallet's uniqueness and security.</li>
                    </ol>
                </li>
                <li className="mtop5p">
                    <div><b>Seed Phrase is Created -</b></div>
                    This random number is converted into a set of 12 - 24 words (called Seed Phrase) 
                    which is a Master Key.</li>
                <li className="mtop5p">Using Seed Phrase and Using <u><i>BIP-32 / BIP-39 / BIP-44 standards</i></u>, the wallet generates:
                    <ul>
                        <li>Your <b>Private Key</b></li>
                        <li>Your <b>Public Key</b></li>
                        <li>Your <b>Wallet Address</b></li>
                        <li>And can even generate multiple wallets (HD Wallets = Hierarchical Deterministic)</li>
                    </ul>
                </li>
            </ol>
        </div>
        <div className="mtop15p">While <u><i>Receiving Payment</i></u> -</div>
        <div>
            <ol>
                <li className="mtop5p">We will give someone Wallet Address.</li>
                <li className="mtop5p">They send Crypto to that Address.</li>
                <li className="mtop5p">The transaction is <b>broadcast to the network</b> and included in a block.</li>
                <li className="mtop5p">Your wallet <b>scans the blockchain</b> and detects that this address (which it 
                controls via private key) received crypto.</li>
                <li className="mtop5p">
                    <div>You now <b>see the balance</b> updated in your wallet.</div>
                    <Card padding={10}><b>Private key is not used during receiving — only public address is shared.</b></Card>
                </li>
            </ol>
        </div>
        <div className="mtop15p">While <u><i>Sending Payment</i></u> -</div>
        <div>
            <ol>
                <li className="mtop5p">You enter the <b>recipient’s wallet address</b> and the amount.</li>
                <li className="mtop5p">Your wallet creates a <b>transaction structure</b> with:
                    <ul>
                        <li>Inputs (coins you're using)</li>
                        <li>Outputs (who receives it, including change back to you)</li>
                    </ul>
                </li>
                <li className="mtop5p">The transaction must be <b>signed</b> using your <b>private key</b>.</li>
                <li className="mtop5p">The wallet <b>signs it locally</b> (private key never leaves your device).</li>
                <li className="mtop5p">The signed transaction is <b>broadcast to the network</b>.</li>
                <li className="mtop5p">Miners/validators <b>verify the signature </b>using your <b>public key</b>.</li>
                <li className="mtop5p">If the signature is valid, the transaction is added to a block.</li>
                <li className="mtop5p">The recipient sees the crypto arrive in their wallet.</li>
            </ol>
        </div>
        
        <div>

        </div>
    </div>
    <div className="mtop15p">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr style={{ backgroundColor:'#eee' }}>
                        <td><b>Concept</b></td>
                        <td><b>Purpose</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Public Key</b></td>
                        <td>Receive crypto</td>
                    </tr>
                    <tr>
                        <td><b>Wallet Address</b></td>
                        <td>Shortened form of public key</td>
                    </tr>
                    <tr>
                        <td><b>Private Key</b></td>
                        <td>Sign/send transactions</td>
                    </tr>
                    <tr>
                        <td><b>Seed Phrase</b></td>
                        <td>Backup for all your keys</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
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
    <div className="padLeft5p">
        <div className="mtop15p"><h4><b>Multi-Signature Wallets</b></h4></div>
        <div className="mtop15p">Multi-signature (multisig) wallets require multiple private keys to authorize a transaction, 
            increasing security for businesses and joint accounts.</div>
        <div className="mtop15p"><h4><b>Smart Contract-Based Wallets</b></h4></div>
        <div className="mtop15p">Smart contract wallets, such as Argent, enable decentralized features like automated payments 
            and security recovery mechanisms.</div>
    </div>

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