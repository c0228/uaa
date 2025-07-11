import React from "react";
import { Tab, Highlight } from "e-ui-react";

const BG_EXAMPLE_JAVA = `import java.util.*;

class Governance {
    Map<String, Integer> proposals = new HashMap<>();
    Map<String, String> delegations = new HashMap<>();

    void vote(String user, String proposalId, int weight) {
        proposals.put(proposalId, proposals.getOrDefault(proposalId, 0) + weight);
    }

    void delegate(String fromUser, String toUser) {
        delegations.put(fromUser, toUser);
    }

    int getVotes(String proposalId) {
        return proposals.getOrDefault(proposalId, 0);
    }
}

public class GovernanceDemo {
    public static void main(String[] args) {
        Governance gov = new Governance();
        gov.vote("alice", "prop1", 100);
        gov.vote("bob", "prop1", 150);

        System.out.println("Votes for prop1: " + gov.getVotes("prop1"));  // 250
    }
}`;

const BG_EXAMPLE_JS = `class Governance {
    constructor() {
        this.proposals = new Map();
        this.votes = new Map();
    }

    createProposal(id, description) {
        this.proposals.set(id, description);
        this.votes.set(id, []);
    }

    vote(id, user, weight) {
        if (this.votes.has(id)) {
            this.votes.get(id).push({ user, weight });
        }
    }

    tallyVotes(id) {
        return this.votes.get(id).reduce((sum, vote) => sum + vote.weight, 0);
    }
}

// Example Usage
const gov = new Governance();
gov.createProposal("upgrade-1", "Switch to PoS");
gov.vote("upgrade-1", "Alice", 10);
gov.vote("upgrade-1", "Bob", 5);

console.log("Total votes:", gov.tallyVotes("upgrade-1"));  // Output: 15`;

const BG_EXAMPLE_PYTHON = `class GovernanceSystem:
    def __init__(self):
        self.proposals = {}
        self.votes = {}

    def create_proposal(self, proposal_id, description):
        self.proposals[proposal_id] = description
        self.votes[proposal_id] = {}

    def vote(self, proposal_id, user, weight):
        self.votes[proposal_id][user] = weight

    def tally_votes(self, proposal_id):
        return sum(self.votes[proposal_id].values())

# Usage
gov = GovernanceSystem()
gov.create_proposal("P1", "Upgrade smart contract to v2.0")
gov.vote("P1", "Alice", 100)
gov.vote("P1", "Bob", 50)

print(f"Total votes for P1: {gov.tally_votes('P1')}")  # Output: 150`;

const Examples = () =>{

    const JavaCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <div className="mtop5p"><h5 className="blog-head"><b>Governance Model with Delegation</b></h5></div>
        <Highlight content={BG_EXAMPLE_JAVA} lang="java" />
    </div>);
    };

    const JSCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <div className="mtop5p"><h5 className="blog-head"><b>Web3 Governance with Delegation Concept</b></h5></div>
        <Highlight content={BG_EXAMPLE_JS} lang="javascript" />
    </div>);
    };

    const PythonCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <div className="mtop5p"><h5 className="blog-head"><b>Simulating a Simple Token Vote</b></h5></div>
        <Highlight content={BG_EXAMPLE_PYTHON} lang="python" />
    </div>);
    };


 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples: Coding Governance Simulations</b></h2></div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Real-World Examples</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>
                <div><b>Ethereum Governance (EIP system): </b></div>
                <div>Developers and the community review proposals off-chain, then adopt them via soft forks 
                    or client updates.</div>
            </li>
            <li>
                <div><b>MakerDAO:</b></div>
                <div>Uses MKR token holders to vote on parameters like interest rates and collateral types.</div>
            </li>
            <li>
                <div><b>Tezos:</b></div>
                <div>Implements <b>formal on-chain governance</b>, where every upgrade is voted on and self-executed.</div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Challenges in Blockchain Governance</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Voter Apathy:</b> Many token holders don’t vote.</li>
            <li className="mtop5p"><b>Centralization of Voting Power:</b> Whales (large holders) dominate outcomes.</li>
            <li className="mtop5p"><b>Coordination Problems:</b> Community fragmentation and conflicts.</li>
            <li className="mtop5p"><b>Security Risks:</b> Malicious proposals can hijack funds or logic if passed unnoticed.</li>
        </ul>
    </div>
 </div>);
};

export default Examples;