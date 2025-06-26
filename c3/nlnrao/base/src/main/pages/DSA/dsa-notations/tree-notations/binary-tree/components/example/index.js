import React from "react";
import { Tab, Highlight } from "e-ui-react";

const BINARY_EXAMPLE_STRUCTURE = `        1
       / \\
      2   3
     / \\
    4   5
`;

const BINARY_STRUCTURE_JAVA = `class Node {
    int data;
    Node left, right;

    Node(int value) {
        data = value;
        left = right = null;
    }
}

public class BinaryTreeDemo {
    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);

        System.out.println("Left child of root: " + root.left.data);
    }
}`;

const BINARY_STRUCTURE_JS = `class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Left child of root:", root.left.data);`;

const BINARY_STRUCTURE_PYTHON = `class Node:
    def __init__(self, value):
        self.data = value
        self.left = None
        self.right = None

# Create nodes
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

# Print left child of root
print("Left child of root:", root.left.data)`;

const BINARY_EXAMPLE_VISUAL = `T = (V, E)

V = {1, 2, 3, 4, 5}
E = {(1,2), (1,3), (2,4), (2,5)}
`;

const Example = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={BINARY_STRUCTURE_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={BINARY_STRUCTURE_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={BINARY_STRUCTURE_PYTHON} lang="python" />
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example</b></h2></div>
    <div className="mtop15p">We’ll create a binary tree with structure:</div>
    <div className="mtop5p">
        <Highlight content={BINARY_EXAMPLE_STRUCTURE} lang="python" />
    </div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Visual Representation</b></h2></div>
    <div className="mtop5p">
        <Highlight content={BINARY_EXAMPLE_VISUAL} lang="python" />
    </div>
    <div className="mtop5p">
        This is a directed graph representation of the binary tree.
    </div>
 </div>);
};

export default Example;