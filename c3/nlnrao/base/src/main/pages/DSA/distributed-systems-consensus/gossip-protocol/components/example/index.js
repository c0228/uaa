import React from "react";
import { Tab, Highlight } from "e-ui-react";

const GOSSIP_EXAMPLE_JAVA= `import java.util.*;

class Node {
    int id;
    boolean hasMessage = false;

    Node(int id) {
        this.id = id;
    }

    void gossip(List<Node> nodes) {
        if (hasMessage) {
            Collections.shuffle(nodes);
            for (int i = 0; i < Math.min(2, nodes.size()); i++) {
                nodes.get(i).hasMessage = true;
            }
        }
    }
}

public class GossipProtocol {
    public static void main(String[] args) {
        List<Node> nodes = new ArrayList<>();
        for (int i = 0; i < 10; i++) nodes.add(new Node(i));
        nodes.get(0).hasMessage = true;

        for (int round = 0; round < 5; round++) {
            for (Node node : nodes) node.gossip(nodes);
        }

        System.out.println("Nodes with the message:");
        for (Node node : nodes) {
            if (node.hasMessage) System.out.print(node.id + " ");
        }
    }
}`;

const GOSSIP_EXAMPLE_JS = `class Node {
    constructor(id) {
        this.id = id;
        this.hasMessage = false;
    }

    gossip(nodes) {
        if (this.hasMessage) {
            const peers = nodes.sort(() => 0.5 - Math.random()).slice(0, 2);
            for (const peer of peers) {
                peer.hasMessage = true;
            }
        }
    }
}

const nodes = [];
for (let i = 0; i < 10; i++) nodes.push(new Node(i));
nodes[0].hasMessage = true;

for (let round = 0; round < 5; round++) {
    for (const node of nodes) {
        node.gossip(nodes);
    }
}

console.log("Nodes with the message:");
nodes.forEach(node => {
    if (node.hasMessage) console.log(node.id);
});`;

const GOSSIP_EXAMPLE_PYTHON = `import random

class Node:
    def __init__(self, id):
        self.id = id
        self.has_message = False

    def gossip(self, nodes):
        if self.has_message:
            peers = random.sample(nodes, min(2, len(nodes)))  # pick 2 random peers
            for peer in peers:
                peer.has_message = True

# Initialize 10 nodes
nodes = [Node(i) for i in range(10)]
nodes[0].has_message = True  # First node has the message

# Spread the gossip
for _ in range(5):
    for node in nodes:
        node.gossip(nodes)

print("Nodes with the message:")
print([node.id for node in nodes if node.has_message])`;

const Example = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={GOSSIP_EXAMPLE_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={GOSSIP_EXAMPLE_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={GOSSIP_EXAMPLE_PYTHON} lang="python" />
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Code Examples: Simulating Gossip</b></h2></div>
    <div className="mtop5p">Let’s simulate a simple gossip system where one node starts with a message, and the rest 
    receive it through random communication.</div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;