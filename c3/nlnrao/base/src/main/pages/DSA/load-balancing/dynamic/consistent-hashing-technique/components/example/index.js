import React from "react";
import { Tab, Highlight } from "e-ui-react";

const CHT_EXAMPLE_JAVA = `import java.security.MessageDigest;
import java.util.*;

public class ConsistentHashing {
    private final SortedMap<Integer, String> ring = new TreeMap<>();
    private final int replicas;

    public ConsistentHashing(List<String> nodes, int replicas) {
        this.replicas = replicas;
        for (String node : nodes) {
            addNode(node);
        }
    }

    private int hash(String key) {
        return key.hashCode() & 0x7fffffff; // Simple hash, can use MD5
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
        int hash = hash(key);
        SortedMap<Integer, String> tailMap = ring.tailMap(hash);
        int nodeHash = tailMap.isEmpty() ? ring.firstKey() : tailMap.firstKey();
        return ring.get(nodeHash);
    }

    public static void main(String[] args) {
        ConsistentHashing ch = new ConsistentHashing(Arrays.asList("A", "B", "C"), 3);
        System.out.println(ch.getNode("user123")); // e.g., B
    }
}`;

const CHT_EXAMPLE_JS = `class ConsistentHashing {
  constructor(nodes = [], replicas = 3) {
    this.replicas = replicas;
    this.ring = new Map();
    this.keys = [];
    nodes.forEach(node => this.addNode(node));
  }

  _hash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
    }
    return hash;
  }

  addNode(node) {
    for (let i = 0; i < this.replicas; i++) {
      const key = this._hash(\`\${node}:\${i}\`);
      this.ring.set(key, node);
      this.keys.push(key);
    }
    this.keys.sort((a, b) => a - b);
  }

  removeNode(node) {
    for (let i = 0; i < this.replicas; i++) {
      const key = this._hash(\`\${node}:\${i}\`);
      this.ring.delete(key);
      this.keys = this.keys.filter(k => k !== key);
    }
  }

  getNode(keyStr) {
    if (!this.keys.length) return null;
    const hash = this._hash(keyStr);
    for (let key of this.keys) {
      if (hash <= key) return this.ring.get(key);
    }
    return this.ring.get(this.keys[0]); // Wrap around
  }
}

// Example Usage
const ch = new ConsistentHashing(["A", "B", "C"]);
console.log(ch.getNode("user123")); // Might output "C"`;

const CHT_EXAMPLE_PYTHON = `import hashlib
import bisect

class ConsistentHashing:
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
            self.sorted_keys.remove(key)
            del self.ring[key]

    def get_node(self, key_str):
        if not self.ring:
            return None
        key = self._hash(key_str)
        idx = bisect.bisect(self.sorted_keys, key) % len(self.sorted_keys)
        return self.ring[self.sorted_keys[idx]]

# Example Usage
ch = ConsistentHashing(["A", "B", "C"])
print(ch.get_node("user123"))  # Might return "B"`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={CHT_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={CHT_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={CHT_EXAMPLE_PYTHON} lang="python" />
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