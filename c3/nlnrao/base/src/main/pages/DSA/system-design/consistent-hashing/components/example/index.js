import React from "react";
import { Tab, Highlight } from "e-ui-react";

const CH_EXAMPLE_JAVA = `import java.util.*;
import java.security.MessageDigest;
import java.math.BigInteger;

public class ConsistentHashRing {
    private final TreeMap<BigInteger, String> ring = new TreeMap<>();
    private final int replicas;

    public ConsistentHashRing(List<String> nodes, int replicas) {
        this.replicas = replicas;
        for (String node : nodes) {
            addNode(node);
        }
    }

    private BigInteger hash(String key) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(key.getBytes());
            return new BigInteger(1, md.digest());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void addNode(String node) {
        for (int i = 0; i < replicas; i++) {
            ring.put(hash(node + ":" + i), node);
        }
    }

    public void removeNode(String node) {
        for (int i = 0; i < replicas; i++) {
            ring.remove(hash(node + ":" + i));
        }
    }

    public String getNode(String key) {
        if (ring.isEmpty()) return null;
        BigInteger hash = hash(key);
        SortedMap<BigInteger, String> tailMap = ring.tailMap(hash);
        return ring.get(tailMap.isEmpty() ? ring.firstKey() : tailMap.firstKey());
    }

    public static void main(String[] args) {
        ConsistentHashRing ring = new ConsistentHashRing(Arrays.asList("A", "B", "C"), 3);
        System.out.println(ring.getNode("user123"));  // e.g., B
    }
}`;

const CH_EXAMPLE_JS = `const crypto = require('crypto');

class ConsistentHashRing {
    constructor(nodes = [], replicas = 3) {
        this.replicas = replicas;
        this.ring = new Map();
        this.sortedKeys = [];
        nodes.forEach(node => this.addNode(node));
    }

    _hash(key) {
        return parseInt(crypto.createHash('md5').update(key).digest('hex').slice(0, 8), 16);
    }

    addNode(node) {
        for (let i = 0; i < this.replicas; i++) {
            const key = this._hash(\`\${node}:\${i}\`);
            this.ring.set(key, node);
            this.sortedKeys.push(key);
        }
        this.sortedKeys.sort((a, b) => a - b);
    }

    removeNode(node) {
        for (let i = 0; i < this.replicas; i++) {
            const key = this._hash(\`\${node}:\${i}\`);
            this.ring.delete(key);
            this.sortedKeys = this.sortedKeys.filter(k => k !== key);
        }
    }

    getNode(key) {
        const hash = this._hash(key);
        for (let i = 0; i < this.sortedKeys.length; i++) {
            if (hash <= this.sortedKeys[i]) {
                return this.ring.get(this.sortedKeys[i]);
            }
        }
        return this.ring.get(this.sortedKeys[0]);
    }
}

// Usage
const ring = new ConsistentHashRing(["A", "B", "C"]);
console.log(ring.getNode("user123")); // e.g., B`;

const CH_EXAMPLE_PYTHON = `import hashlib
import bisect

class ConsistentHashRing:
    def __init__(self, nodes=None, replicas=3):
        self.replicas = replicas
        self.ring = dict()
        self.sorted_keys = []
        if nodes:
            for node in nodes:
                self.add_node(node)

    def _hash(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16)

    def add_node(self, node):
        for i in range(self.replicas):
            key = self._hash(f"{node}:{i}")
            self.ring[key] = node
            bisect.insort(self.sorted_keys, key)

    def remove_node(self, node):
        for i in range(self.replicas):
            key = self._hash(f"{node}:{i}")
            del self.ring[key]
            self.sorted_keys.remove(key)

    def get_node(self, key):
        hash_key = self._hash(key)
        idx = bisect.bisect(self.sorted_keys, hash_key) % len(self.sorted_keys)
        return self.ring[self.sorted_keys[idx]]

# Usage
ring = ConsistentHashRing(nodes=["A", "B", "C"])
print(ring.get_node("user123"))  # Might return B`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={CH_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={CH_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={CH_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Overview</b></h2></div>
    <div className="mtop15p">Let’s break it down with code in <b>Python</b>, <b>Java</b>, and <b>JavaScript</b>:</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
			
    </div>
 </div>);
};

export default Example;