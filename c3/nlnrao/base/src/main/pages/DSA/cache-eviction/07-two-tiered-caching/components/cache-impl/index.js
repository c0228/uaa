import React from "react";
import { Tab, Highlight } from "e-ui-react";

const TTC_CACHE_JAVA = `import java.util.*;

class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private int capacity;

    public LRUCache(int capacity) {
        // accessOrder = true for LRU
        super(capacity, 0.75f, true);
        this.capacity = capacity;
    }

    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }
}

class TwoTieredCache<K, V> {
    private LRUCache<K, V> l1;
    private LRUCache<K, V> l2;

    public TwoTieredCache(int l1Capacity, int l2Capacity) {
        l1 = new LRUCache<>(l1Capacity);
        l2 = new LRUCache<>(l2Capacity);
    }

    public V get(K key) {
        if (l1.containsKey(key)) {
            System.out.println("L1 HIT: " + key);
            return l1.get(key);
        } else if (l2.containsKey(key)) {
            System.out.println("L2 HIT: " + key);
            V value = l2.get(key);
            l1.put(key, value);  // Promote to L1
            return value;
        } else {
            System.out.println("MISS: " + key);
            return null;
        }
    }

    public void put(K key, V value) {
        System.out.println("PUT: " + key + " -> " + value);
        l1.put(key, value);
        l2.put(key, value);
    }

    public static void main(String[] args) {
        TwoTieredCache<String, Integer> cache = new TwoTieredCache<>(2, 4);
        cache.put("a", 1);
        cache.put("b", 2);
        System.out.println(cache.get("a")); // L1 hit
        cache.put("c", 3);                  // Evicts "b" from L1
        System.out.println(cache.get("b")); // L2 hit
        System.out.println(cache.get("d")); // Miss
    }
}`;

const TTC_CACHE_JS = `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Maintains insertion order
  }

  get(key) {
    if (!this.cache.has(key)) return null;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // Move to end (most recently used)
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}

class TwoTieredCache {
  constructor(l1Capacity, l2Capacity) {
    this.l1 = new LRUCache(l1Capacity);
    this.l2 = new LRUCache(l2Capacity);
  }

  get(key) {
    let value = this.l1.get(key);
    if (value !== null) {
      console.log(\`L1 HIT: \${key}\`);
      return value;
    }

    value = this.l2.get(key);
    if (value !== null) {
      console.log(\`L2 HIT: \${key}\`);
      this.l1.put(key, value); // Promote to L1
      return value;
    }

    console.log(\`MISS: \${key}\`);
    return null;
  }

  put(key, value) {
    console.log(\`PUT: \${key} -> \${value}\`);
    this.l1.put(key, value);
    this.l2.put(key, value);
  }
}

// Example usage
const cache = new TwoTieredCache(2, 4);
cache.put("a", 1);
cache.put("b", 2);
console.log(cache.get("a")); // L1 hit
cache.put("c", 3);           // Evict one from L1
console.log(cache.get("b")); // L2 hit and promote
console.log(cache.get("d")); // Miss`;

const TTC_CACHE_PYTHON = `import time
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()  # Maintains access order

    def get(self, key):
        if key in self.cache:
            self.cache.move_to_end(key)  # Mark as recently used
            return self.cache[key]
        return None

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        elif len(self.cache) == self.capacity:
            self.cache.popitem(last=False)  # Remove least recently used
        self.cache[key] = value

    def __contains__(self, key):
        return key in self.cache


class TwoTieredCache:
    def __init__(self, l1_capacity, l2_capacity):
        self.l1 = LRUCache(l1_capacity)          # Fast access (e.g., in-memory)
        self.l2 = LRUCache(l2_capacity)          # Slower access (e.g., disk or large memory)

    def get(self, key):
        value = self.l1.get(key)
        if value is not None:
            print(f"L1 HIT: {key}")
            return value

        value = self.l2.get(key)
        if value is not None:
            print(f"L2 HIT: {key}")
            # Promote to L1
            self.l1.put(key, value)
            return value

        print(f"MISS: {key}")
        return None

    def put(self, key, value):
        print(f"PUT: {key} -> {value}")
        self.l1.put(key, value)
        self.l2.put(key, value)  # Also store in L2

# Example usage:
if __name__ == "__main__":
    cache = TwoTieredCache(l1_capacity=2, l2_capacity=4)

    cache.put("a", 1)
    cache.put("b", 2)
    print(cache.get("a"))  # L1 hit
    cache.put("c", 3)      # "b" may be evicted from L1
    print(cache.get("b"))  # L2 hit and promoted to L1
    print(cache.get("d"))  # Miss`;

const CacheImpl = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={TTC_CACHE_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={TTC_CACHE_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={TTC_CACHE_PYTHON} lang="python" />
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="blog-head"><h2 className="blog-head"><b>Two-Tiered Cache (L1: In-Memory LRU, 
        L2: Disk-Based Dictionary Simulation)</b></h2></div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>How It Works?</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li><b>L1 Cache (fast):</b> Keeps the most recently accessed items.</li>
            <li><b>L2 Cache (slower):</b> Retains items evicted from L1 but still useful.</li>
            <li>On <code><b>get</b></code>: Check L1 -&gt; then L2 -&gt; then miss.</li>
            <li>On <code><b>put</b></code>: Insert into both L1 and L2 (optionally can only insert to L2 if optimizing for write).</li>
        </ul>
    </div>
 </div>);
};

export default CacheImpl;