import React from "react";
import { Row, Col } from "e-ui-react";
import AlgoOverviewList from "@MainPages/DSA/components/algo-overview-list/index.js";

const DsDcbn = () =>{
 return (<div>
       <Row>
         <Col xl={6} xxl={6}>
            <AlgoOverviewList header="For Blockchain"
             desc=""
             data={[
                   ['Merkle Tree', 'Used to efficiently verify transactions in blocks (Bitcoin, Ethereum).','tech/dsa/blockchain/merkle-tree'],
                   ['Patricia Trie', 'Optimized version of a Merkle Trie, used in Ethereum for storing account balances and contract states.','tech/dsa/blockchain/patricia-trie'],
                   ['Skip List', 'Helps with efficient block validation and lookup in some blockchain protocols.','tech/dsa/probabilistics-data-structures-algorithms/skip-list'],
                   ['Directed Acyclic Graph (DAG)', ' Used in IOTA, Nano, and Hedera Hashgraph for high-speed transactions without miners.','tech/dsa/blockchain/directed-acyclic-graph'],
                   ['UtreeXO', 'A more compact version of the UTXO model for scalability.','tech/dsa/blockchain/utree-xo']
                 ]} />
            <AlgoOverviewList header="For NFTs"
                       desc=""
                       data={[
                             ['IPFS & Merkle DAG', 'Used for decentralized NFT metadata storage (e.g., ERC-721, ERC-1155).','tech/dsa/nfts/ipfs-merkle-DAG'],
                             ['Sparse Merkle Trie', 'Helps in verifying NFT ownership without full-chain data access.','tech/dsa/nfts/sparse-merkle-trie'],
                             ['Directed Graph', 'Used in NFT marketplaces for linking ownership history.','tech/dsa/nfts/directed-graph']
                           ]} />
          </Col>
          <Col xl={6} xxl={6}>
            <AlgoOverviewList header="For Cryptography"
                       desc=""
                       data={[
                             ['Elliptic Curve Cryptography (ECC)', 'Utilized in Bitcoin, Ethereum, and zk-SNARKs for digital signatures (e.g., secp256k1 curve).','tech/dsa/cryptography/elliptic-curve-cryptography-ecc'],
                             ['Bloom Filters', 'Used for fast membership testing (e.g., Bitcoin light clients).','tech/dsa/probabilistics-data-structures-algorithms/bloom-filter'],
                             ['Verkle Tree', 'A more efficient alternative to Merkle Trees, planned for Ethereum scalability improvements.','tech/dsa/cryptography/verkle-tree'],
                             ['Commitment ', 'Schemes (Pedersen Commitment, KZG Commitment): Used in privacy-preserving transactions and rollups.','tech/dsa/cryptography/commitment']
                           ]} />
           <AlgoOverviewList header="For DeFi & Smart Contracts"
                       desc=""
                       data={[
                             ['Heap / Priority Queue', 'Used in lending protocols like Aave and Compound for interest rate calculations.','tech/dsa/defi-smart-contracts/heap-priority-queue'],
                             ['Red-Black Tree / AVL Tree', 'Used in order book-based DEXs like Serum for efficient trade matching.','tech/dsa/defi-smart-contracts/red-black-tree-avl-tree'],
                             ['Sparse Merkle Tree', 'Used in rollups (e.g., Optimistic Rollups, ZK-Rollups) for state commitment.','tech/dsa/defi-smart-contracts/sparse-merkle-tree']
                           ]} />
          </Col>
       </Row>
  </div>);
};

export default DsDcbn;