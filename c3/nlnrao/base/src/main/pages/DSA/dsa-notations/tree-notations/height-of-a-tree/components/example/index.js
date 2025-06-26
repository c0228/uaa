
import React from "react";
import { Tab, Highlight } from "e-ui-react";

const HT_EXAMPLE_JAVA = `class Node {
    String data;
    Node left, right;

    Node(String value) {
        data = value;
        left = right = null;
    }
}

public class TreeHeight {
    public static int height(Node root) {
        if (root == null) return -1;
        return 1 + Math.max(height(root.left), height(root.right));
    }

    public static void main(String[] args) {
        Node root = new Node("A");
        root.left = new Node("B");
        root.right = new Node("C");
        root.left.left = new Node("D");
        root.right.right = new Node("E");
        root.right.right.right = new Node("F");

        System.out.println("Height of tree (h): " + height(root)); // Output: 3
    }
}`;

const HT_EXAMPLE_JS = `class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

function height(root) {
    if (root === null) return -1;
    return 1 + Math.max(height(root.left), height(root.right));
}

const root = new Node('A');
root.left = new Node('B');
root.right = new Node('C');
root.left.left = new Node('D');
root.right.right = new Node('E');
root.right.right.right = new Node('F');

console.log("Height of tree (h):", height(root)); // Output: 3`;

const HT_EXAMPLE_PYTHON = `class Node:
    def __init__(self, value):
        self.data = value
        self.left = None
        self.right = None

def height(root):
    if root is None:
        return -1  # height of empty tree is -1 (edges)
    return 1 + max(height(root.left), height(root.right))

# Build tree
root = Node('A')
root.left = Node('B')
root.right = Node('C')
root.left.left = Node('D')
root.right.right = Node('E')
root.right.right.right = Node('F')

print("Height of tree (h):", height(root))  # Output: 3`;

const Example = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={HT_EXAMPLE_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={HT_EXAMPLE_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={HT_EXAMPLE_PYTHON} lang="python" />
        </div>);
    };


 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples: Calculating Tree Height</b></h2></div>
    <div className="mtop5p">We’ll write code to calculate the height <b>h</b> of a binary tree using recursion.</div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;