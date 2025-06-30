import React from "react";
import { Tab, Highlight } from "e-ui-react";

const MERKLETREE_EXAMPLE_JAVA = `import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.List;

public class MerkleTree {
    public static String hash(String data) throws Exception {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hash = digest.digest(data.getBytes("UTF-8"));
        StringBuilder hex = new StringBuilder();
        for (byte b : hash) hex.append(String.format("%02x", b));
        return hex.toString();
    }

    public static String buildMerkleRoot(List<String> leaves) throws Exception {
        if (leaves.size() == 1) return leaves.get(0);

        if (leaves.size() % 2 != 0) leaves.add(leaves.get(leaves.size() - 1));

        List<String> newLevel = new ArrayList<>();
        for (int i = 0; i < leaves.size(); i += 2) {
            newLevel.add(hash(leaves.get(i) + leaves.get(i + 1)));
        }

        return buildMerkleRoot(newLevel);
    }

    public static void main(String[] args) throws Exception {
        List<String> data = List.of("A", "B", "C", "D");
        List<String> hashed = new ArrayList<>();
        for (String d : data) hashed.add(hash(d));
        String merkleRoot = buildMerkleRoot(hashed);
        System.out.println("Merkle Root: " + merkleRoot);
    }
}`;

const MERKLETREE_EXAMPLE_JS = `const crypto = require('crypto');

function hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

function buildMerkleTree(leaves) {
    if (leaves.length === 1) return leaves[0];

    if (leaves.length % 2 !== 0) {
        leaves.push(leaves[leaves.length - 1]);
    }

    const newLevel = [];
    for (let i = 0; i < leaves.length; i += 2) {
        newLevel.push(hash(leaves[i] + leaves[i + 1]));
    }

    return buildMerkleTree(newLevel);
}

// Usage
const data = ['A', 'B', 'C', 'D'];
const hashedLeaves = data.map(hash);
const merkleRoot = buildMerkleTree(hashedLeaves);
console.log("Merkle Root:", merkleRoot);`;

const MERKLETREE_EXAMPLE_PYTHON = `import hashlib

def hash_data(data):
    return hashlib.sha256(data.encode('utf-8')).hexdigest()

def merkle_tree(leaves):
    if len(leaves) == 1:
        return leaves[0]
    
    if len(leaves) % 2 != 0:
        leaves.append(leaves[-1])  # Duplicate last if odd

    new_level = []
    for i in range(0, len(leaves), 2):
        combined = leaves[i] + leaves[i+1]
        new_level.append(hash_data(combined))
    
    return merkle_tree(new_level)

# Usage
data_blocks = ['A', 'B', 'C', 'D']
leaf_hashes = [hash_data(data) for data in data_blocks]
root_hash = merkle_tree(leaf_hashes)
print("Merkle Root:", root_hash)`;

const Example = () =>{

   const JavaCode = ()=>{
   return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
   <Highlight content={MERKLETREE_EXAMPLE_JAVA} lang="java" />
   </div>);
   };

   const JSCode = ()=>{
   return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
   <Highlight content={MERKLETREE_EXAMPLE_JS} lang="javascript" />
   </div>);
   };

   const PythonCode = ()=>{
   return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
   <Highlight content={MERKLETREE_EXAMPLE_PYTHON} lang="python" />
   </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;