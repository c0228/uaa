import React from "react";
import { Tab, Highlight } from "e-ui-react";

const PBFT_EXAMPLE_JAVA = `import java.util.*;

class PBFTNode {
    int id;
    boolean isFaulty;

    PBFTNode(int id, boolean isFaulty) {
        this.id = id;
        this.isFaulty = isFaulty;
    }

    String vote(String value) {
        return isFaulty ? "malicious" : value;
    }
}

public class PBFTDemo {
    public static String pbftConsensus(List<PBFTNode> nodes, String value) {
        Map<String, Integer> count = new HashMap<>();
        for (PBFTNode node : nodes) {
            String vote = node.vote(value);
            count.put(vote, count.getOrDefault(vote, 0) + 1);
        }

        for (Map.Entry<String, Integer> entry : count.entrySet()) {
            if (entry.getValue() >= (2 * nodes.size()) / 3)
                return "Consensus reached: " + entry.getKey();
        }
        return "Consensus failed";
    }

    public static void main(String[] args) {
        List<PBFTNode> nodes = new ArrayList<>();
        for (int i = 0; i < 4; i++)
            nodes.add(new PBFTNode(i, i == 2));
        System.out.println(pbftConsensus(nodes, "BLOCK-XYZ"));
    }
}`;

const PBFT_EXAMPLE_JS = `class PBFTNode {
    constructor(id, isFaulty = false) {
        this.id = id;
        this.isFaulty = isFaulty;
    }

    vote(value) {
        return this.isFaulty ? 'malicious' : value;
    }
}

function pbftConsensus(nodes, value) {
    const votes = nodes.map(node => node.vote(value));
    const voteCount = {};

    for (const vote of votes) {
        voteCount[vote] = (voteCount[vote] || 0) + 1;
    }

    for (const [key, count] of Object.entries(voteCount)) {
        if (count >= (2 * nodes.length) / 3) {
            return \`Consensus reached: \${key}\`;
        }
    }

    return "Consensus failed";
}

// Example usage
const nodes = [
    new PBFTNode(0),
    new PBFTNode(1, true),
    new PBFTNode(2),
    new PBFTNode(3),
];

console.log(pbftConsensus(nodes, "BLOCK-ABC"));`;

const PBFT_EXAMPLE_PYTHON = `class PBFTNode:
    def __init__(self, node_id, is_faulty=False):
        self.node_id = node_id
        self.is_faulty = is_faulty

    def vote(self, value):
        return "malicious" if self.is_faulty else value

def pbft_consensus(nodes, proposed_value):
    votes = [node.vote(proposed_value) for node in nodes]
    result = max(set(votes), key=votes.count)
    if votes.count(result) >= (2 * len(nodes)) // 3:
        return f"Consensus reached: {result}"
    return "Consensus failed"

# Create 4 nodes (1 faulty allowed for PBFT)
nodes = [PBFTNode(i, is_faulty=(i == 1)) for i in range(4)]
print(pbft_consensus(nodes, "BLOCK-123"))`;

const Example = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={PBFT_EXAMPLE_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={PBFT_EXAMPLE_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={PBFT_EXAMPLE_PYTHON} lang="python" />
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Code Examples: PBFT Concept in Action</b></h2></div>
    <div className="mtop15p">We'll simulate a <b>PBFT voting system</b> where nodes agree on a transaction value.</div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;