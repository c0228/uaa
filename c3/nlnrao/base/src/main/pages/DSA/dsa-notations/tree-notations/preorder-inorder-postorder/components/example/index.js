import React from "react";
import { Tab, Highlight } from "e-ui-react";

const PIP_BINARY_EXAMPLE = `        A
       / \\
      B   C
     / \\
    D   E
`;

const PIP_BINARY_JAVA = `class Node {
    String data;
    Node left, right;

    Node(String val) {
        data = val;
        left = right = null;
    }
}

public class TreeTraversal {
    public static void preorder(Node node) {
        if (node != null) {
            System.out.print(node.data + " ");
            preorder(node.left);
            preorder(node.right);
        }
    }

    public static void inorder(Node node) {
        if (node != null) {
            inorder(node.left);
            System.out.print(node.data + " ");
            inorder(node.right);
        }
    }

    public static void postorder(Node node) {
        if (node != null) {
            postorder(node.left);
            postorder(node.right);
            System.out.print(node.data + " ");
        }
    }

    public static void main(String[] args) {
        Node root = new Node("A");
        root.left = new Node("B");
        root.right = new Node("C");
        root.left.left = new Node("D");
        root.left.right = new Node("E");

        System.out.println("Preorder:");
        preorder(root);
        System.out.println("\\nInorder:");
        inorder(root);
        System.out.println("\\nPostorder:");
        postorder(root);
    }
}`;

const PIP_BINARY_JS = `class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function preorder(node) {
    if (node) {
        process.stdout.write(node.data + " ");
        preorder(node.left);
        preorder(node.right);
    }
}

function inorder(node) {
    if (node) {
        inorder(node.left);
        process.stdout.write(node.data + " ");
        inorder(node.right);
    }
}

function postorder(node) {
    if (node) {
        postorder(node.left);
        postorder(node.right);
        process.stdout.write(node.data + " ");
    }
}

const root = new Node("A");
root.left = new Node("B");
root.right = new Node("C");
root.left.left = new Node("D");
root.left.right = new Node("E");

console.log("Preorder:");
preorder(root);
console.log("\\nInorder:");
inorder(root);
console.log("\\nPostorder:");
postorder(root);`;

const PIP_BINARY_PYTHON = `class Node:
    def __init__(self, val):
        self.data = val
        self.left = None
        self.right = None

def preorder(node):
    if node:
        print(node.data, end=' ')
        preorder(node.left)
        preorder(node.right)

def inorder(node):
    if node:
        inorder(node.left)
        print(node.data, end=' ')
        inorder(node.right)

def postorder(node):
    if node:
        postorder(node.left)
        postorder(node.right)
        print(node.data, end=' ')

# Tree construction
root = Node('A')
root.left = Node('B')
root.right = Node('C')
root.left.left = Node('D')
root.left.right = Node('E')

print("Preorder:")
preorder(root)
print("\\nInorder:")
inorder(root)
print("\\nPostorder:")
postorder(root)`;

const Example = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={PIP_BINARY_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={PIP_BINARY_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={PIP_BINARY_PYTHON} lang="python" />
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example</b></h2></div>
    <div className="mtop15p">We’ll use this binary tree:</div>
    <div className="mtop5p">
        <Highlight content={PIP_BINARY_EXAMPLE} lang="css" />
    </div>
    <div className="mtop15p">
        <ul>
            <li><b>Preorder:</b> A B D E C</li>
            <li><b>Inorder:</b> D B E A C</li>
            <li><b>PostOrder:</b> D E B C A</li>
        </ul>
    </div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;