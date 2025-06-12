import React from "react";
import { Row, Col } from "e-ui-react";
import AlgoOverviewList from "@MainPages/DSA/components/algo-overview-list/index.js";

const ADcbn = () =>{
 return (<div>
      <Row>
        <Col xl={6} xxl={6}>
            <AlgoOverviewList header="Consensus Algorithms"
                data={[
                    ['Proof of Work (PoW)', 'Used in Bitcoin (SHA-256) and Ethereum (Ethash before PoS).','tech/dsa/consensus-algorithms/proof-of-work-PoW'],
                    ['Proof of Stake (PoS)', 'Used in Ethereum 2.0, Cardano, and Solana.','tech/dsa/consensus-algorithms/proof-of-stake-PoS'],
                    ['Delegated Proof of Stake (DPoS)', 'Used in EOS, TRON for faster block production.','tech/dsa/consensus-algorithms/delegated-proof-of-stake-DPoS'],
                    ['Practical Byzantine Fault Tolerance (PBFT)', 'Used in Hyperledger Fabric, Zilliqa','tech/dsa/consensus-algorithms/practical-byzantine-fault-tolerance-PBFT'],
                    ['Proof of Burn (PoB)','Requires burning (destroying) coins to gain mining rights. Used in Slimcoin','tech/dsa/consensus-algorithms/proof-of-burn-PoB'],
                    ['Proof of History (PoH)', 'Used in Solana for timestamping transactions efficiently.','tech/dsa/consensus-algorithms/proof-of-history-PoH'],
                    ['Proof of Humanity (PoH)', 'Used in Worldcoin, BrightID (Verifies unique users)','tech/dsa/consensus-algorithms/proof-of-humanity-PoH'],
                    ['Proof of Authority (PoA)', 'Used in private blockchains like VeChain.','tech/dsa/consensus-algorithms/proof-of-authority-PoA'],
                    ['Proof of Elapsed Time (PoET)', 'Used in Hyperledger Sawtooth','tech/dsa/consensus-algorithms/proof-of-elapsed-time-PoET'],
                    ['Proof of Space & Proof of Time (PoST/Pot)', 'Used in Chia Network','tech/dsa/consensus-algorithms/proof-of-space-and-proof-of-time-PoST-Pot'],
                    ['Directed Acyclic Graph (DAG-based Consensus)', 'Used in IOTA (Tangle), Nano, Hedera Hashgraph','tech/dsa/consensus-algorithms/directed-acyclic-graph-DAG-based-consensus'],
                    ['Hybrid PoW/PoS', 'Combines PoW security with PoS governance. Used in Decred, Horizen','tech/dsa/consensus-algorithms/hybrid-PoW-PoS']
                ]} />
            <AlgoOverviewList header=" NFT-Specific Algorithms"
                desc="NFT platforms rely on specialized algorithms for minting, trading, security, and interoperability."
                data={[
                    ['Minting & Ownership Algorithms', (<div>NFTs must be uniquely created and linked to an owner.
                        <ul>
                            <li className="mtop15p"><b>ERC-721 Standard –</b> Used in Ethereum, Polygon, Binance Smart Chain (One-of-a-kind NFTs)</li>
                            <li className="mtop15p"><b>ERC-1155 Standard –</b> Used in Enjin, Immutable X (Supports both unique and semi-fungible tokens)</li>
                            <li className="mtop15p"><b>SPL Token Standard –</b> Used in Solana (Cheaper NFT minting than Ethereum)</li>
                            <li className="mtop15p"><b>FA2 Standard –</b> Used in Tezos (Flexible multi-asset NFT standard)</li>
                            <li className="mtop15p"><b>On-Chain Randomness (Chainlink VRF, RANDAO) –</b> Used for generative NFT minting.</li>
                            <li className="mtop15p"><b>Lazy Minting –</b> Optimized approach where NFTs are minted only when sold (used in OpenSea).</li>
                        </ul>
                    </div>),'tech/dsa/nft-specific-algorithms/minting-and-ownership-algorithms'],
                    ['NFT Trading & Marketplace Algorithms', (<div>These algorithms enable NFT buying, selling, and royalties.
                        <ul>
                            <li className="mtop15p"><b>Automated Market Makers (AMM) for NFTs –</b> Used in Sudoswap, NFTX (NFT price discovery with liquidity pools)</li>
                            <li className="mtop15p"><b>Dutch Auction Mechanism –</b> Used in Art Blocks (Gradual price reduction until sold)</li>
                            <li className="mtop15p"><b>Royalties Enforcement (ERC-2981) –</b> Used in LooksRare, OpenSea (Ensures creator royalties on resale)</li>
                            <li className="mtop15p"><b>Royalty Fee Splitting (EIP-2981) –</b> Algorithm for handling NFT royalties on secondary sales.</li>
                            <li className="mtop15p"><b>Fractional Ownership Model –</b> Used in Fractional.art (Splits NFTs into tradable ERC-20 tokens)</li>
                        </ul>
                    </div>),'tech/dsa/nft-specific-algorithms/NFT-trading-and-marketplace-algorithms'],
                    ['NFT Interoperability & Cross-Chain Bridges', (<div>NFTs should be transferable across different blockchains.
                        <ul>
                            <li className="mtop15p"><b>Wrapped NFTs (wNFTs) –</b> Used in Axie Infinity, Aavegotchi (Bridge NFTs to other chains)</li>
                            <li className="mtop15p"><b>Cross-Chain NFT Bridges –</b> Used in LayerZero, Wormhole, Polkadot (Transfers NFTs across ecosystems)</li>
                            <li className="mtop15p"><b>Composable NFTs (ERC-998) –</b> Used in NFT games, Metaverse assets (NFTs that own other NFTs)</li>
                        </ul>
                    </div>),'tech/dsa/nft-specific-algorithms/NFT-interoperability-and-cross-chain-bridges'],
                    ['NFT Privacy & Security Algorithms', (<div>Protecting NFT ownership and transaction data.
                        <ul>
                            <li className="mtop15p"><b>zk-SNARKs (Zero-Knowledge Proofs) –</b> Used in Tornado Cash, Aztec Protocol (Private NFT ownership)</li>
                            <li className="mtop15p"><b>Soulbound Tokens (SBTs) –</b> Used in Ethereum’s EIP-5114 proposal (Non-transferable NFTs for identity)</li>
                            <li className="mtop15p"><b>NFT Forgery Detection (AI + Blockchain) –</b> Used in Adobe Content Authenticity Initiative (Prevents fake NFTs)</li>
                        </ul>
                    </div>),'tech/dsa/nft-specific-algorithms/NFT-privacy-and-security-algorithms']
                ]} />
        </Col>
        <Col xl={6} xxl={6}>
            <AlgoOverviewList header="DeFi Algorithms"
                data={[
                    ['Automated Market Maker (AMM) Algorithm', (<div>Used in decentralized exchanges (DEXs) to facilitate trading:
                        <ul>
                            <li className="mtop15p"><b>Constant Product Formula –</b> Used in Uniswap (x * y = k) (Maintains liquidity balance)</li>
                            <li className="mtop15p"><b>StableSwap Invariant –</b> Used in Curve Finance (Optimized for stablecoins)</li>
                            <li className="mtop15p"><b>Hybrid Liquidity Models –</b> Used in Balancer, Bancor (Customizable pools with dynamic weights)</li>
                        </ul>
                        </div>),'tech/dsa/defi-algorithms/automated-market-maker-amm-algorithm'],
                    ['Bonding Curves', 'Used in token price determination (e.g., Bancor, Rari Capital).','tech/dsa/defi-algorithms/bonding-curves'],
                    ['Lending Protocol Interest Rate Algorithms', (<div>Used in DeFi lending protocols to determine interest rates and risk:
                        <ul>
                            <li className="mtop15p"><b>Utilization Rate Model –</b> Used in Aave, Compound (Adjusts interest rates dynamically).</li>
                            <li className="mtop15p"><b>Overcollateralization & Liquidation Models –</b> Used in MakerDAO, Compound (Ensures solvency)</li>
                        </ul>
                        </div>),'tech/dsa/defi-algorithms/lending-protocol-interest-rate-algorithms'],
                    ['Yield Farming & Staking Algorithms', (<div>Reward users for staking and providing liquidity:
                        <ul>
                            <li className="mtop15p"><b>Liquidity Mining –</b> Used in SushiSwap, Yearn Finance (Rewards LP providers)</li>
                            <li className="mtop15p"><b>Auto-compounding Strategies –</b> Used in Yearn Finance, Beefy Finance (Maximizes returns)</li>
                        </ul>
                        </div>),'tech/dsa/defi-algorithms/yield-farming-and-staking-algorithms'],
                    ['Cross-Chain & Interoperability Algorithms', (<div>Enable DeFi protocols to work across multiple blockchains:
                        <ul>
                            <li className="mtop15p"><b>Atomic Swaps –</b> Used in ThorChain, Liquality (Trustless token swaps)</li>
                            <li className="mtop15p"><b>Layer-0 & Bridge Protocols –</b> Used in Polkadot, Cosmos IBC (Cross-chain DeFi transactions)</li>
                        </ul>
                        </div>),'tech/dsa/defi-algorithms/cross-chain-and-interoperability-algorithms'],
                    ['Oracle Algorithms', (<div>DeFi platforms need accurate price feeds from external sources:
                        <ul>
                            <li className="mtop15p"><b>Decentralized Oracles –</b> Used in Chainlink, Band Protocol (Aggregates data from multiple sources)</li>
                            <li className="mtop15p"><b>Push-Based vs Pull-Based Feeds –</b> Used in Tellor, API3 (Push sends updates; Pull requests when needed)</li>
                            <li className="mtop15p"><b>Medianizer Algorithm –</b> Used in MakerDAO (Eliminates price manipulation by taking the median)</li>
                        </ul>
                    </div>),'tech/dsa/defi-algorithms/oracle-algorithms'],
                    ['Flash Loan Algorithms (For Instant, No-Collateral Borrowing)', (<div>
                        <ul>
                            <li className="mtop15p"><b>Atomic Execution Model –</b> Used in Aave, dYdX (Loans must be repaid in the same transaction)</li>
                            <li className="mtop15p"><b>Collateral Swap Model –</b> Used in Furucombo (Allows leveraging assets instantly)</li>
                        </ul>
                    </div>),'tech/dsa/defi-algorithms/flash-loan-algorithms-for-instant-no-collateral-borrowing'],
                    ['Governance Algorithms (For DAO-Based Decision Making)', (<div>DeFi projects often use Decentralized Autonomous Organizations (DAOs):
                        <ul>
                            <li className="mtop15p"><b>Token-Based Voting (1 Token = 1 Vote) –</b> Used in Uniswap, Aave</li>
                            <li className="mtop15p"><b>Quadratic Voting –</b> Used in Gitcoin Grants (Prevents whales from dominating)</li>
                            <li className="mtop15p"><b>Convex Voting –</b> Used in Curve Finance (Boosts rewards for long-term holders)</li>
                        </ul>
                    </div>),'tech/dsa/defi-algorithms/governance-algorithms-for-DAO-based-decision-making'],
                    ['MEV (Miner Extractable Value) Algorithms', (<div>MEV refers to profits miners or validators can extract by reordering transactions:
                        <ul>
                            <li className="mtop15p"><b>Priority Gas Auctions (PGA) –</b> Used in Ethereum (Users bid to get transactions confirmed faster).</li>
                            <li className="mtop15p"><b>Flashbots Algorithm –</b> Used in Ethereum 2.0 (Prevents front-running attacks).</li>
                        </ul>
                    </div>),'tech/dsa/defi-algorithms/mev-miner-extractable-value-algorithms'],
                    ['Liquidity Management Algorithms', (<div>DeFi platforms need efficient liquidity provision strategies:
                        <ul>
                            <li className="mtop15p"><b>Uniswap V3 Concentrated Liquidity –</b> Allows LPs to provide liquidity in specific price ranges</li>
                            <li className="mtop15p"><b>Impermanent Loss Mitigation –</b> Used in Bancor, Tokemak (Reduces loss in liquidity pools)</li>
                        </ul>
                    </div>),'tech/dsa/defi-algorithms/liquidity-management-algorithms'],
                    ['Insurance & Risk Management Algorithms', (<div>DeFi insurance platforms use risk assessment models:
                        <ul>
                            <li className="mtop15p"><b>Parametric Insurance Models –</b> Used in Nexus Mutual, InsurAce (Payouts based on smart contract failures)</li>
                            <li className="mtop15p"><b>Credit Delegation –</b> Used in Aave (Trust-based lending without collateral)</li>
                        </ul>
                    </div>),'tech/dsa/defi-algorithms/insurance-and-risk-management-algorithms']
                    
                    
                    
                    
                    
                    













                    


                ]} />
        </Col>
      </Row>
      <Row>
        <Col xl={12} xxl={12}>
        <AlgoOverviewList header="Cryptographic Algorithms"
                data={[
                    ['Hashing Algorithms (One-Way Encryption)', (<div>Used to generate fixed-length unique fingerprints of data.
                        <ul>
                            <li className="mtop15p"><b>SHA-256 (Secure Hash Algorithm 256-bit) –</b> Used in Bitcoin, Ethereum, and blockchain hashing</li>
                            <li className="mtop15p"><b>MD5 –</b></li>
                            <li className="mtop15p"><b>bcrypt (password hashing) –</b></li>
                            <li className="mtop15p"><b>Keccak-256 (SHA-3 Variant) –</b> Used in Ethereum, BNB Smart Chain</li>
                            <li className="mtop15p"><b>Blake2b & Blake3 –</b> Used in Zcash, Filecoin (Faster than SHA-256)</li>
                            <li className="mtop15p"><b>RIPEMD-160 –</b> Used in Bitcoin for generating addresses from public keys</li>
                        </ul>
                    </div>)],
                    ['Public Key Cryptography (Asymmetric Encryption)', (<div>Used for wallets, transactions, and digital signatures:
                        <ul>
                            <li className="mtop15p"><b>RSA (Rivest-Shamir-Adleman) –</b> Used in older cryptographic systems, but less used in blockchain</li>
                            <li className="mtop15p"><b>ECC (Elliptic Curve Cryptography) –</b></li>
                            <li className="mtop15p"><b>ECDSA (Elliptic Curve Digital Signature Algorithm) –</b> Used in Bitcoin, Ethereum for private-public key pairs</li>
                            <li className="mtop15p"><b>EdDSA (Ed25519, Ed448) –</b> Used in Solana, Monero (Faster than ECDSA, higher security)</li>
                        </ul>
                    </div>)],
                    ['Symmetric Encryption (For Data Privacy & Secure Storage)', (<div>
                        Used for secure messaging and encrypted databases:
                        <ul>
                            <li className="mtop15p"><b>AES (Advanced Encryption Standard - 128/256-bit) –</b> Used in blockchain wallets, encrypted messages</li>
                            <li className="mtop15p"><b>ChaCha20-Poly1305 –</b> Used in TLS encryption for secure web connections</li>
                            <li className="mtop15p"><b>DES –</b></li>
                            <li className="mtop15p"><b>Blowfish –</b></li>
                        </ul>
                    </div>)],
                    ['Zero-Knowledge Proofs (ZKPs)', (<div>Used for privacy-preserving transactions in DeFi & NFTs.
                        <ul>
                            <li className="mtop15p"><b>zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) –</b> Used in Zcash, Tornado Cash, zkSync</li>
                            <li className="mtop15p"><b>zk-STARKs (Scalable Transparent Argument of Knowledge) –</b> Used in StarkNet, Loopring (Scalable alternative to zk-SNARKs)</li>
                            <li className="mtop15p"><b>Bulletproofs –</b> Used in Monero (Shorter proof sizes than zk-SNARKs, but no trusted setup)</li>
                            <li className="mtop15p"><b>Poseidon Hash –</b></li>
                        </ul>
                    </div>)],
                    ['Key Exchange Protocols (For Secure Communication)', (<div>
                        Used for secure transaction signing and off-chain communication:
                        <ul>
                            <li className="mtop15p"><b>ECDH (Elliptic Curve Diffie-Hellman) –</b> Used in Ethereum’s Whisper Protocol for private messaging</li>
                            <li className="mtop15p"><b>X25519 –</b> Used in Signal, Telegram, and encrypted web protocols (More secure than ECDH)</li>
                        </ul>
                    </div>)],
                    ['Post-Quantum Cryptography (Future-Proof Security)', (<div>Used to protect against quantum computing attacks:
                        <ul>
                            <li className="mtop15p"><b>Lattice-Based Cryptography –</b> Used in NIST post-quantum cryptography candidates like Kyber, Dilithium</li>
                            <li className="mtop15p"><b>Hash-Based Signatures (SPHINCS+) –</b> Used in Quantum-secure blockchain research</li>
                        </ul>
                    </div>)]
                ]} />
        </Col>
      </Row>
 </div>);
};

export default ADcbn;