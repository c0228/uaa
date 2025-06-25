import React from "react";
import { Tab, Highlight } from "e-ui-react";

const RR_CACHE_JAVA = `import java.util.*;

class RRCache {
    private int capacity;
    private Map<Integer, String> cache;
    private Random rand;

    public RRCache(int capacity) {
        this.capacity = capacity;
        this.cache = new HashMap<>();
        this.rand = new Random();
    }

    public String get(int key) {
        return cache.getOrDefault(key, "-1");
    }

    public void put(int key, String value) {
        if (!cache.containsKey(key) && cache.size() == capacity) {
            List<Integer> keys = new ArrayList<>(cache.keySet());
            int randomKey = keys.get(rand.nextInt(keys.size()));
            cache.remove(randomKey);
        }
        cache.put(key, value);
    }

    public void display() {
        System.out.println("Cache: " + cache);
    }

    public static void main(String[] args) {
        RRCache rr = new RRCache(3);
        rr.put(1, "A");
        rr.put(2, "B");
        rr.put(3, "C");
        rr.display();
        rr.put(4, "D"); // Randomly evicts one
        rr.display();
    }
}`;

const RR_CACHE_JS = `class RRCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    return this.cache.has(key) ? this.cache.get(key) : -1;
  }

  put(key, value) {
    if (!this.cache.has(key) && this.cache.size === this.capacity) {
      const keys = Array.from(this.cache.keys());
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      this.cache.delete(randomKey);
    }
    this.cache.set(key, value);
  }

  display() {
    console.log("Cache:", Object.fromEntries(this.cache));
  }
}

// Example
const rr = new RRCache(3);
rr.put(1, 'A');
rr.put(2, 'B');
rr.put(3, 'C');
rr.display();
rr.put(4, 'D'); // Randomly evicts one
rr.display();`;

const RR_CACHE_PYTHON = `import random

class RRCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}

    def get(self, key):
        return self.cache.get(key, -1)

    def put(self, key, value):
        if key not in self.cache and len(self.cache) == self.capacity:
            random_key = random.choice(list(self.cache.keys()))
            del self.cache[random_key]
        self.cache[key] = value

    def display(self):
        print("Cache:", self.cache)

# Example
rr = RRCache(3)
rr.put(1, 'A')
rr.put(2, 'B')
rr.put(3, 'C')
rr.display()
rr.put(4, 'D')  # This will randomly evict one of 1, 2, or 3
rr.display()`;

const CacheImpl = () =>{

 const JavaCode = () =>{
  return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={RR_CACHE_JAVA} lang="java" />
  </div>);
 };

 const JSCode = () =>{
  return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={RR_CACHE_JS} lang="javascript" />
  </div>);
 };

 const PythonCode = () =>{
  return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={RR_CACHE_PYTHON} lang="python" />
  </div>);
 };

 return (<div className="mtop15p lh28p fs16p">
    <div><h2 className="blog-head"><b>Cache Implementation</b></h2></div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode/>) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default CacheImpl;