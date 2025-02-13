import React from "react";
import { Row, Col } from "e-ui-react";
import AlgoOverviewList from "@Pages/DSA/components/algo-overview-list/index.js";

const ADcbn = () =>{
 return (<div>
      <Row>
        <Col xl={6} xxl={6}>
            <AlgoOverviewList header="Consensus Algorithms"
                data={[
                    ['Proof of Work (PoW)', 'Used in Bitcoin (SHA-256) and Ethereum (Ethash before PoS).'],
                    ['Proof of Stake (PoS)', 'Used in Ethereum 2.0, Cardano, and Solana.'],
                    ['Delegated Proof of Stake (DPoS)', 'Used in EOS, TRON for faster block production.'],
                    ['Practical Byzantine Fault Tolerance (PBFT)', 'Used in Hyperledger Fabric, Zilliqa'],
                    ['Proof of Burn (PoB)','Requires burning (destroying) coins to gain mining rights. Used in Slimcoin'],
                    ['Proof of History (PoH)', 'Used in Solana for timestamping transactions efficiently.'],
                    ['PoH (Proof of Humanity)', 'Used in Worldcoin, BrightID (Verifies unique users)']
                    ['Proof of Authority (PoA)', 'Used in private blockchains like VeChain.'],
                    ['Proof of Elapsed Time (PoET)', 'Used in Hyperledger Sawtooth'],
                    ['Proof of Space & Proof of Time (PoST/Pot)', 'Used in Chia Network'],
                    ['Directed Acyclic Graph (DAG-based Consensus)', 'Used in IOTA (Tangle), Nano, Hedera Hashgraph'],
                    ['Hybrid PoW/PoS', 'Combines PoW security with PoS governance. Used in Decred, Horizen']
                ]} />
            <AlgoOverviewList header=" NFT-Specific Algorithms"
                desc="NFT platforms rely on specialized algorithms for minting, trading, security, and interoperability."
                data={[
                    ['Minting & Ownership Algorithms', (<div>NFTs must be uniquely created and linked to an owner.
                        <ul>
                            <li><b>ERC-721 Standard –</b> Used in Ethereum, Polygon, Binance Smart Chain (One-of-a-kind NFTs)</li>
                            <li><b>ERC-1155 Standard –</b> Used in Enjin, Immutable X (Supports both unique and semi-fungible tokens)</li>
                            <li><b>SPL Token Standard –</b> Used in Solana (Cheaper NFT minting than Ethereum)</li>
                            <li><b>FA2 Standard –</b> Used in Tezos (Flexible multi-asset NFT standard)</li>
                            <li><b>On-Chain Randomness (Chainlink VRF, RANDAO) –</b> Used for generative NFT minting.</li>
                            <li><b>Lazy Minting –</b> Optimized approach where NFTs are minted only when sold (used in OpenSea).</li>
                        </ul>
                    </div>)],
                    ['NFT Trading & Marketplace Algorithms', (<div>These algorithms enable NFT buying, selling, and royalties.
                        <ul>
                            <li><b>Automated Market Makers (AMM) for NFTs –</b> Used in Sudoswap, NFTX (NFT price discovery with liquidity pools)</li>
                            <li><b>Dutch Auction Mechanism –</b> Used in Art Blocks (Gradual price reduction until sold)</li>
                            <li><b>Royalties Enforcement (ERC-2981) –</b> Used in LooksRare, OpenSea (Ensures creator royalties on resale)</li>
                            <li><b>Royalty Fee Splitting (EIP-2981) –</b> Algorithm for handling NFT royalties on secondary sales.</li>
                            <li><b>Fractional Ownership Model –</b> Used in Fractional.art (Splits NFTs into tradable ERC-20 tokens)</li>
                        </ul>
                    </div>)],
                    ['NFT Interoperability & Cross-Chain Bridges', (<div>NFTs should be transferable across different blockchains.
                        <ul>
                            <li><b>Wrapped NFTs (wNFTs) –</b> Used in Axie Infinity, Aavegotchi (Bridge NFTs to other chains)</li>
                            <li><b>Cross-Chain NFT Bridges –</b> Used in LayerZero, Wormhole, Polkadot (Transfers NFTs across ecosystems)</li>
                            <li><b>Composable NFTs (ERC-998) –</b> Used in NFT games, Metaverse assets (NFTs that own other NFTs)</li>
                        </ul>
                    </div>)],
                    ['NFT Privacy & Security Algorithms', (<div>Protecting NFT ownership and transaction data.
                        <ul>
                            <li><b>zk-SNARKs (Zero-Knowledge Proofs) –</b> Used in Tornado Cash, Aztec Protocol (Private NFT ownership)</li>
                            <li><b>Soulbound Tokens (SBTs) –</b> Used in Ethereum’s EIP-5114 proposal (Non-transferable NFTs for identity)</li>
                            <li><b>NFT Forgery Detection (AI + Blockchain) –</b> Used in Adobe Content Authenticity Initiative (Prevents fake NFTs)</li>
                        </ul>
                    </div>)]
                ]} />
        </Col>
        <Col xl={6} xxl={6}>
            <AlgoOverviewList header="DeFi Algorithms"
                data={[
                    ['Automated Market Maker (AMM) Algorithm', (<div>Used in decentralized exchanges (DEXs) to facilitate trading:
                        <ul>
                            <li><b>Constant Product Formula –</b> Used in Uniswap (x * y = k) (Maintains liquidity balance)</li>
                            <li><b>StableSwap Invariant –</b> Used in Curve Finance (Optimized for stablecoins)</li>
                            <li><b>Hybrid Liquidity Models –</b> Used in Balancer, Bancor (Customizable pools with dynamic weights)</li>
                        </ul>
                        </div>)],
                    ['Bonding Curves', 'Used in token price determination (e.g., Bancor, Rari Capital).'],
                    ['Lending Protocol Interest Rate Algorithms', (<div>Used in DeFi lending protocols to determine interest rates and risk:
                        <ul>
                            <li><b>Utilization Rate Model –</b> Used in Aave, Compound (Adjusts interest rates dynamically).</li>
                            <li><b>Overcollateralization & Liquidation Models –</b> Used in MakerDAO, Compound (Ensures solvency)</li>
                        </ul>
                        </div>)],
                    ['Yield Farming & Staking Algorithms', (<div>Reward users for staking and providing liquidity:
                        <ul>
                            <li><b>Liquidity Mining –</b> Used in SushiSwap, Yearn Finance (Rewards LP providers)</li>
                            <li><b>Auto-compounding Strategies –</b> Used in Yearn Finance, Beefy Finance (Maximizes returns)</li>
                        </ul>
                        </div>)],
                    ['Cross-Chain & Interoperability Algorithms', (<div>Enable DeFi protocols to work across multiple blockchains:
                        <ul>
                            <li><b>Atomic Swaps –</b> Used in ThorChain, Liquality (Trustless token swaps)</li>
                            <li><b>Layer-0 & Bridge Protocols –</b> Used in Polkadot, Cosmos IBC (Cross-chain DeFi transactions)</li>
                        </ul>
                        </div>)],
                    ['Oracle Algorithms', (<div>DeFi platforms need accurate price feeds from external sources:
                        <ul>
                            <li><b>Decentralized Oracles –</b> Used in Chainlink, Band Protocol (Aggregates data from multiple sources)</li>
                            <li><b>Push-Based vs Pull-Based Feeds –</b> Used in Tellor, API3 (Push sends updates; Pull requests when needed)</li>
                            <li><b>Medianizer Algorithm –</b> Used in MakerDAO (Eliminates price manipulation by taking the median)</li>
                        </ul>
                    </div>)],
                    ['Flash Loan Algorithms (For Instant, No-Collateral Borrowing)', (<div>
                        <ul>
                            <li><b>Atomic Execution Model –</b> Used in Aave, dYdX (Loans must be repaid in the same transaction)</li>
                            <li><b>Collateral Swap Model –</b> Used in Furucombo (Allows leveraging assets instantly)</li>
                        </ul>
                    </div>)],
                    ['Governance Algorithms (For DAO-Based Decision Making)', (<div>DeFi projects often use Decentralized Autonomous Organizations (DAOs):
                        <ul>
                            <li><b>Token-Based Voting (1 Token = 1 Vote) –</b> Used in Uniswap, Aave</li>
                            <li><b>Quadratic Voting –</b> Used in Gitcoin Grants (Prevents whales from dominating)</li>
                            <li><b>Convex Voting –</b> Used in Curve Finance (Boosts rewards for long-term holders)</li>
                        </ul>
                    </div>)],
                    ['MEV (Miner Extractable Value) Algorithms', (<div>MEV refers to profits miners or validators can extract by reordering transactions:
                        <ul>
                            <li><b>Priority Gas Auctions (PGA) –</b> Used in Ethereum (Users bid to get transactions confirmed faster).</li>
                            <li><b>Flashbots Algorithm –</b> Used in Ethereum 2.0 (Prevents front-running attacks).</li>
                        </ul>
                    </div>)],
                    ['Liquidity Management Algorithms', (<div>DeFi platforms need efficient liquidity provision strategies:
                        <ul>
                            <li><b>Uniswap V3 Concentrated Liquidity –</b> Allows LPs to provide liquidity in specific price ranges</li>
                            <li><b>Impermanent Loss Mitigation –</b> Used in Bancor, Tokemak (Reduces loss in liquidity pools)</li>
                        </ul>
                    </div>)],
                    ['Insurance & Risk Management Algorithms', (<div>DeFi insurance platforms use risk assessment models:
                        <ul>
                            <li><b>Parametric Insurance Models –</b> Used in Nexus Mutual, InsurAce (Payouts based on smart contract failures)</li>
                            <li><b>Credit Delegation –</b> Used in Aave (Trust-based lending without collateral)</li>
                        </ul>
                    </div>)]
                    
                    
                    
                    
                    
                    













                    


                ]} />
        </Col>
      </Row>
      <Row>
        <Col xl={12} xxl={12}>
        <AlgoOverviewList header="Cryptographic Algorithms"
                data={[
                    ['Hashing Algorithms (One-Way Encryption)', (<div>Used to generate fixed-length unique fingerprints of data.
                        <ul>
                            <li><b>SHA-256 (Secure Hash Algorithm 256-bit) –</b> Used in Bitcoin, Ethereum, and blockchain hashing</li>
                            <li><b>MD5 –</b></li>
                            <li><b>bcrypt (password hashing) –</b></li>
                            <li><b>Keccak-256 (SHA-3 Variant) –</b> Used in Ethereum, BNB Smart Chain</li>
                            <li><b>Blake2b & Blake3 –</b> Used in Zcash, Filecoin (Faster than SHA-256)</li>
                            <li><b>RIPEMD-160 –</b> Used in Bitcoin for generating addresses from public keys</li>
                        </ul>
                    </div>)],
                    ['Public Key Cryptography (Asymmetric Encryption)', (<div>Used for wallets, transactions, and digital signatures:
                        <ul>
                            <li><b>RSA (Rivest-Shamir-Adleman) –</b> Used in older cryptographic systems, but less used in blockchain</li>
                            <li><b>ECC (Elliptic Curve Cryptography) –</b></li>
                            <li><b>ECDSA (Elliptic Curve Digital Signature Algorithm) –</b> Used in Bitcoin, Ethereum for private-public key pairs</li>
                            <li><b>EdDSA (Ed25519, Ed448) –</b> Used in Solana, Monero (Faster than ECDSA, higher security)</li>
                        </ul>
                    </div>)],
                    ['Symmetric Encryption (For Data Privacy & Secure Storage)', (<div>
                        Used for secure messaging and encrypted databases:
                        <ul>
                            <li><b>AES (Advanced Encryption Standard - 128/256-bit) –</b> Used in blockchain wallets, encrypted messages</li>
                            <li><b>ChaCha20-Poly1305 –</b> Used in TLS encryption for secure web connections</li>
                            <li><b>DES –</b></li>
                            <li><b>Blowfish –</b></li>
                        </ul>
                    </div>)],
                    ['Zero-Knowledge Proofs (ZKPs)', (<div>Used for privacy-preserving transactions in DeFi & NFTs.
                        <ul>
                            <li><b>zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) –</b> Used in Zcash, Tornado Cash, zkSync</li>
                            <li><b>zk-STARKs (Scalable Transparent Argument of Knowledge) –</b> Used in StarkNet, Loopring (Scalable alternative to zk-SNARKs)</li>
                            <li><b>Bulletproofs –</b> Used in Monero (Shorter proof sizes than zk-SNARKs, but no trusted setup)</li>
                            <li><b>Poseidon Hash –</b></li>
                        </ul>
                    </div>)],
                    ['Key Exchange Protocols (For Secure Communication)', (<div>
                        Used for secure transaction signing and off-chain communication:
                        <ul>
                            <li><b>ECDH (Elliptic Curve Diffie-Hellman) –</b> Used in Ethereum’s Whisper Protocol for private messaging</li>
                            <li><b>X25519 –</b> Used in Signal, Telegram, and encrypted web protocols (More secure than ECDH)</li>
                        </ul>
                    </div>)],
                    ['Post-Quantum Cryptography (Future-Proof Security)', (<div>Used to protect against quantum computing attacks:
                        <ul>
                            <li><b>Lattice-Based Cryptography –</b> Used in NIST post-quantum cryptography candidates like Kyber, Dilithium</li>
                            <li><b>Hash-Based Signatures (SPHINCS+) –</b> Used in Quantum-secure blockchain research</li>
                        </ul>
                    </div>)]
                ]} />
        </Col>
      </Row>
 </div>);
};

export default ADcbn;