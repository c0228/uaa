import React from "react";
import { Highlight } from "e-ui-react";

const PBFT_IMPL_NODEJS = `class PBFTNode {
    constructor(id) {
        this.id = id;
        this.state = "idle";
    }
    proposeBlock(block) {
        console.log(\`Node \${this.id} proposing block: \${block}\`);
        this.state = "pre-prepare";
    }
}
const node = new PBFTNode(1);
node.proposeBlock("Block-1");`;

const PBFT_IMPL_PYTHON = `class PBFTNode:
    def __init__(self, node_id):
        self.node_id = node_id
        self.state = "idle"
    
    def propose_block(self, block):
        print(f"Node {self.node_id} proposing block: {block}")
        self.state = "pre-prepare"

node = PBFTNode(1)
node.propose_block("Block-1")`;

const PBFT_IMPL_JAVA = `class PBFTNode {
    int id;
    String state;

    PBFTNode(int id) {
        this.id = id;
        this.state = "idle";
    }
    
    void proposeBlock(String block) {
        System.out.println("Node " + id + " proposing block: " + block);
        state = "pre-prepare";
    }
}
public class Main {
    public static void main(String[] args) {
        PBFTNode node = new PBFTNode(1);
        node.proposeBlock("Block-1");
    }
}`;

const TENDERMINT_CODE_NODEJS = `class TendermintNode {
    constructor(id) {
        this.id = id;
        this.state = "idle";
    }
    proposeBlock(block) {
        console.log(\`Node \${this.id} proposing: \${block}\`);
        this.state = "propose";
    }
}
const node = new TendermintNode(1);
node.proposeBlock("Block-TM-1");`;

const TENDERMINT_CODE_PYTHON = `class TendermintNode:
    def __init__(self, node_id):
        self.node_id = node_id
        self.state = "idle"
    
    def propose_block(self, block):
        print(f"Node {self.node_id} proposing: {block}")
        self.state = "propose"

node = TendermintNode(1)
node.propose_block("Block-TM-1")`;

const TENDERMINT_CODE_JAVA = `class TendermintNode {
    int id;
    String state;

    TendermintNode(int id) {
        this.id = id;
        this.state = "idle";
    }
    
    void proposeBlock(String block) {
        System.out.println("Node " + id + " proposing: " + block);
        state = "propose";
    }
}
public class Main {
    public static void main(String[] args) {
        TendermintNode node = new TendermintNode(1);
        node.proposeBlock("Block-TM-1");
    }
}`;

const Practical = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Practical Byzantine Fault Tolerance (PBFT)</b></h2></div>
    <div className="mtop15p mbot15p">
        <div><h4><b>Overview</b></h4></div>
        <div className="mtop15p"><i>Practical Byzantine Fault Tolerance (PBFT)</i> is one of the first practical BFT algorithms designed 
        for distributed systems. Unlike Proof-of-Work (PoW), PBFT does not require computationally expensive mining.</div>
        <div className="mtop15p"><h4><b>Working Mechanism</b></h4></div>
        <div className="mtop15p">
            <div>PBFT operates in a series of four phases:</div>
            <div>
                <ol>
                    <li><b>Pre-Prepare:</b> The leader (primary node) proposes a new block.</li>
                    <li><b>Prepare:</b> Nodes validate and broadcast their agreement.</li>
                    <li><b>Commit:</b> Nodes confirm they received the same message.</li>
                    <li><b>Reply:</b> The final decision is made, and consensus is reached.</li>
                </ol>
            </div>
        </div>
        <div className="mtop15p"><h4><b>Practical Byzantine Fault Tolerance (PBFT) Code Example</b></h4></div>
        <div className="padLeft5p"><b>Node.js Implementation:</b></div>
        <Highlight content={PBFT_IMPL_NODEJS} lang="javascript" />
        <div className="padLeft5p"><b>Python Implementation:</b></div>
        <Highlight content={PBFT_IMPL_PYTHON} lang="python" />
        <div className="padLeft5p"><b>Java Implementation:</b></div>
        <Highlight content={PBFT_IMPL_JAVA} lang="java" />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Tendermint Consensus</b></h2></div>
    <div className="mtop15p mbot15p">
        <div><h4><b>Overview</b></h4></div>
        <div className="mtop15p">Tendermint is a BFT consensus algorithm used in <b>Cosmos Network</b>. It improves 
        upon PBFT by combining BFT consensus with <b>Proof-of-Stake (PoS)</b>.</div>
        <div className="mtop15p"><h4><b>Working Mechanism</b></h4></div>
        <div className="mtop15p">Tendermint operates in rounds:</div>
        <div>
            <ol>
                <li><b>Propose:</b> A validator proposes a new block.</li>
                <li><b>Prevote:</b> Validators vote on the proposed block.</li>
                <li><b>Precommit:</b> If 2/3 majority prevotes, nodes commit the block.</li>
            </ol>
        </div>
        <div className="mtop15p"><h4><b>Tendermint Code Example</b></h4></div>
        <div><b>Node JS Implementation:</b></div>
        <Highlight content={TENDERMINT_CODE_NODEJS} lang="javascript" />
        <div><b>Python Implementation:</b></div>
        <Highlight content={TENDERMINT_CODE_PYTHON} lang="python" />
        <div><b>Node JS Implementation:</b></div>
        <Highlight content={TENDERMINT_CODE_JAVA} lang="java" />
    </div>
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Comparison of PBFT and Tendermint</b></h2></div>
    <div className="table-responsive-sm">
        <table className="table">
            <thead>
                <tr style={{ backgroundColor:'#eee' }}>
                    <td><b>Feature</b></td>
                    <td><b>PBFT</b></td>
                    <td><b>Tendermint</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Consensus Type</b></td>
                    <td>BFT</td>
                    <td>BFT + PoS</td>
                </tr>
                <tr>
                    <td><b>Scalability</b></td>
                    <td>Limited</td>
                    <td>Better</td>
                </tr>
                <tr>
                    <td><b>Complexity</b></td>
                    <td>High</td>
                    <td>Moderate</td>
                </tr>
                <tr>
                    <td><b>Blockchain Use Case</b></td>
                    <td>Private chains</td>
                    <td>Cosmos Network</td>
                </tr>
            </tbody>
        </table>
    </div>
 </div>);
};

export default Practical;