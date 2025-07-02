import React from "react";
import { Tab, Highlight } from "e-ui-react";

const TTRA_EXAMPLE_JAVA = `class TokenRingNode {
    int nodeId;
    boolean hasToken;
    TokenRingNode nextNode;

    public TokenRingNode(int id) {
        this.nodeId = id;
        this.hasToken = false;
    }

    public void setNext(TokenRingNode node) {
        this.nextNode = node;
    }

    public void receiveToken() {
        this.hasToken = true;
        System.out.println("Node " + nodeId + " received the token.");
        passToken();
    }

    public void passToken() {
        if (hasToken) {
            System.out.println("Node " + nodeId + " is processing a task.");
            this.hasToken = false;
            nextNode.receiveToken();
        }
    }

    public static void main(String[] args) {
        TokenRingNode[] nodes = new TokenRingNode[5];
        for (int i = 0; i < 5; i++) nodes[i] = new TokenRingNode(i);
        for (int i = 0; i < 5; i++) nodes[i].setNext(nodes[(i + 1) % 5]);

        nodes[0].hasToken = true;
        nodes[0].passToken();
    }
}`;

const TTRA_EXAMPLE_JS = `class TokenRingNode {
    constructor(id) {
        this.nodeId = id;
        this.hasToken = false;
        this.nextNode = null;
    }

    setNext(node) {
        this.nextNode = node;
    }

    receiveToken() {
        this.hasToken = true;
        console.log(\`Node \${this.nodeId} received the token.\`);
        this.passToken();
    }

    passToken() {
        if (this.hasToken) {
            console.log(\`Node \${this.nodeId} is processing a task.\`);
            this.hasToken = false;
            this.nextNode.receiveToken();
        }
    }
}

// Create ring
const nodes = Array.from({ length: 5 }, (_, i) => new TokenRingNode(i));
nodes.forEach((node, i) => node.setNext(nodes[(i + 1) % nodes.length]));

// Start the token
nodes[0].hasToken = true;
nodes[0].passToken();`;

const TTRA_EXAMPLE_PYTHON = `class TokenRingNode:
    def __init__(self, node_id):
        self.node_id = node_id
        self.has_token = False
        self.next_node = None

    def set_next(self, next_node):
        self.next_node = next_node

    def pass_token(self):
        if self.has_token:
            print(f"Node {self.node_id} is processing a task.")
            self.has_token = False
            self.next_node.receive_token()

    def receive_token(self):
        self.has_token = True
        print(f"Node {self.node_id} received the token.")
        self.pass_token()


# Setup ring
nodes = [TokenRingNode(i) for i in range(5)]
for i in range(len(nodes)):
    nodes[i].set_next(nodes[(i + 1) % len(nodes)])

# Start token at node 0
nodes[0].has_token = True
nodes[0].pass_token()`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={TTRA_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={TTRA_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={TTRA_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };


 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example</b></h2></div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;