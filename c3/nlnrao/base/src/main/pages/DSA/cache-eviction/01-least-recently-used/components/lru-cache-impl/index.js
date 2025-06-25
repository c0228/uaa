import React from "react";
import { Tab, Highlight } from "e-ui-react";

const LRU_CACHE_JAVA = `import java.util.*;

class LRUCache extends LinkedHashMap<Integer, Integer> {
    private int capacity;

    public LRUCache(int capacity) {
        super(capacity, 0.75F, true);
        this.capacity = capacity;
    }

    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
        return size() > capacity;
    }
}`;

const LRU_CACHE_JS = `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    // Move key to end to mark it as recently used
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Remove old
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    // Check capacity
    if (this.cache.size > this.capacity) {
      // Remove least recently used (first inserted item)
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}

const lru = new LRUCache(3);
lru.put(1, 'A');
lru.put(2, 'B');
lru.put(3, 'C');
console.log(lru.get(1)); // 'A' (recently used)
lru.put(4, 'D');         // Evicts key 2 (least recently used)
console.log(lru.get(2)); // -1 (not found)`;

const LRU_CACHE_PYTHON = `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)`;


const LRUCacheImpl = () =>{

 const JavaCode = () =>{
   return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={LRU_CACHE_JAVA} lang="java" />
   </div>);
 };

 const JavascriptCode = () =>{
   return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={LRU_CACHE_JS} lang="javascript" />
   </div>);
 };

 const PythonCode = () =>{
   return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={LRU_CACHE_PYTHON} lang="python" />
   </div>);
 };

 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Least Recently Used (LRU) Cache Implementation</b></h2></div>
   <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
               { id:"javascript", label:"Javascript", url:"#", component:(<JavascriptCode />) },
               { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Real-World Use Cases</b></h2></div>
   <div className="mtop5p">
      <ul>
         <li><b>Web Browsers –</b> Caching visited pages</li>
         <li><b>Operating Systems –</b> Page Replacement in Memory</li>
         <li><b>Databases –</b> Query result caching</li>
         <li><b>Content Delivery Networks (CDNs) –</b> Cache popular content closer to the user</li>
      </ul>
   </div>

 </div>);
};

export default LRUCacheImpl;