import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const EVM_EXAMPLE_SOLIDITY = `pragma solidity ^0.8.0;

contract Counter {
    uint public count = 0;

    function increment() public {
        count += 1;
    }
}`;

const SVM_EXAMPLE_RUST = `pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    msg!("Incrementing counter");
    let account = &mut accounts[0];
    let mut data = account.try_borrow_mut_data()?;
    data[0] += 1;
    Ok(())
}`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>EVM vs SVM: Feature Comparison Table</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Feature","Ethereum Virtual Machine (EVM)","Solana Virtual Machine (SVM)"]} 
        columns={[
            ["Programming Language","Solidity, Vyper","Rust, C, C++"],
            ["Execution Model","Sequential","Parallel (Sealevel)"],
            ["Throughput","~15–30 TPS","Up to 65,000 TPS"],
            ["Gas Fee","High","Low to negligible"],
            ["Ecosystem","Large and mature","Growing, less mature"],
            ["Compatibility","EVM-compatible chains (Polygon, BSC)","Not EVM-compatible"],
            ["Smart Contract Storage","In contract","In separate on-chain accounts"],
            ["Tooling & IDE Support","Extensive (Truffle, Hardhat, Remix)","Moderate (Anchor, Solana CLI, Seahorse)"],
          ]} />
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Code Example Comparison</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>EVM (Solidity)</b></h4></div>
    <div className="mtop5p"><Highlight content={EVM_EXAMPLE_SOLIDITY} lang="javascript" /></div>
    <div className="mtop15p"><h4 className="blog-head"><b>SVM (Rust using Solana Program Library)</b></h4></div>
    <div className="mtop5p"><Highlight content={SVM_EXAMPLE_RUST} lang="javascript" /></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Use Cases and Adoption</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>EVM</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">dApps, DeFi protocols, DAOs, NFTs</li>
            <li className="mtop5p">Enterprise-grade adoption</li>
            <li className="mtop5p">Most new blockchains aim for EVM compatibility for network effect</li>
        </ul>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>SVM</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">High-frequency DeFi (e.g., Serum)</li>
            <li className="mtop5p">NFT games and real-time apps (e.g., Star Atlas)</li>
            <li className="mtop5p">High-throughput dApps requiring low latency</li>
        </ul>
    </div>
 </div>);
};

export default Example;
