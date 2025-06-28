import React from "react";
import { Tab, Highlight } from "e-ui-react";

const RAFT_EXAMPLE_JAVA = `import java.util.*;

class Node {
    int id;
    String state = "follower";
    int votes = 0;

    Node(int id) {
        this.id = id;
    }

    void becomeCandidate() {
        this.state = "candidate";
        this.votes = 1;
        System.out.println("Node " + id + " became candidate and voted for self");
    }
}

public class RaftLeaderElection {
    public static void main(String[] args) {
        List<Node> nodes = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            nodes.add(new Node(i));
        }

        Random rand = new Random();
        Node candidate = nodes.get(rand.nextInt(nodes.size()));
        candidate.becomeCandidate();

        for (Node node : nodes) {
            if (node != candidate && rand.nextBoolean()) {
                candidate.votes++;
            }
        }

        if (candidate.votes > nodes.size() / 2) {
            candidate.state = "leader";
            System.out.println("Node " + candidate.id + " is elected as leader with " + candidate.votes + " votes");
        } else {
            System.out.println("Node " + candidate.id + " failed to become leader");
        }
    }
}`;

const RAFT_EXAMPLE_JS = `class Node {
  constructor(id) {
    this.id = id;
    this.state = "follower";
    this.votes = 0;
  }

  becomeCandidate() {
    this.state = "candidate";
    this.votes = 1;
    console.log(\`Node \${this.id} became candidate and voted for self\`);
  }
}

function electLeader(nodes) {
  const candidate = nodes[Math.floor(Math.random() * nodes.length)];
  candidate.becomeCandidate();

  nodes.forEach(node => {
    if (node !== candidate && Math.random() > 0.5) {
      candidate.votes++;
    }
  });

  if (candidate.votes > nodes.length / 2) {
    candidate.state = "leader";
    console.log(\`Node \${candidate.id} is elected as leader with \${candidate.votes} votes\`);
  } else {
    console.log(\`Node \${candidate.id} failed to become leader\`);
  }
}

const nodes = Array.from({ length: 5 }, (_, i) => new Node(i));
electLeader(nodes);`;

const RAFT_EXAMPLE_PYTHON = `import random
import time

class Node:
    def __init__(self, id):
        self.id = id
        self.state = "follower"
        self.votes = 0

    def become_candidate(self):
        self.state = "candidate"
        self.votes = 1  # vote for self
        print(f"Node {self.id} became candidate and voted for self")

def elect_leader(nodes):
    candidate = random.choice(nodes)
    candidate.become_candidate()

    for node in nodes:
        if node != candidate:
            if random.choice([True, False]):
                candidate.votes += 1

    if candidate.votes > len(nodes) // 2:
        candidate.state = "leader"
        print(f"Node {candidate.id} is elected as leader with {candidate.votes} votes")
    else:
        print(f"Node {candidate.id} failed to become leader")

nodes = [Node(i) for i in range(5)]
elect_leader(nodes)`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={RAFT_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={RAFT_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={RAFT_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples: Simplified Raft Leader Election Simulation</b></h2></div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;