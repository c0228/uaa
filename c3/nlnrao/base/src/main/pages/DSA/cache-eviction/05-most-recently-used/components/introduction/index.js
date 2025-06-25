import React from "react";
import { Tab, Card, Highlight } from "e-ui-react";

const MRU_CACHE_JAVA = `import java.util.*;

public class MRUCache {
    private final int capacity;
    private final Map<Integer, Integer> cache;
    private final Deque<Integer> stack;

    public MRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new HashMap<>();
        this.stack = new ArrayDeque<>();
    }

    public int get(int key) {
        if (!cache.containsKey(key)) return -1;

        stack.remove(key);
        stack.addLast(key);
        return cache.get(key);
    }

    public void put(int key, int value) {
        if (cache.containsKey(key)) {
            stack.remove(key);
        } else if (cache.size() == capacity) {
            int mruKey = stack.removeLast();  // Remove most recently used
            cache.remove(mruKey);
        }
        cache.put(key, value);
        stack.addLast(key);
    }

    // For debugging
    public void printCache() {
        System.out.println("Cache: " + cache);
        System.out.println("Stack: " + stack);
    }
}`;

const MRU_CACHE_JS = `class MRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // key -> value
        this.stack = []; // usage order
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        this.stack = this.stack.filter(k => k !== key);
        this.stack.push(key); // most recent at end
        return this.cache.get(key);
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.stack = this.stack.filter(k => k !== key);
        } else if (this.cache.size === this.capacity) {
            const mruKey = this.stack.pop(); // Remove most recently used
            this.cache.delete(mruKey);
        }
        this.cache.set(key, value);
        this.stack.push(key);
    }

    // For debugging
    printCache() {
        console.log("Cache:", this.cache);
        console.log("Stack:", this.stack);
    }
}`;

const MRU_CACHE_PYTHON = `class MRUCache:
    def __init__(self, capacity):
        self.cache = {}
        self.stack = []
        self.capacity = capacity

    def get(self, key):
        if key in self.cache:
            self.stack.remove(key)
            self.stack.append(key)
            return self.cache[key]
        return -1

    def put(self, key, value):
        if key in self.cache:
            self.stack.remove(key)
        elif len(self.cache) == self.capacity:
            mru_key = self.stack.pop()  # Remove the most recently used
            del self.cache[mru_key]
        self.cache[key] = value
        self.stack.append(key)`;

const Introduction = () =>{

 const JavaCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={MRU_CACHE_JAVA} lang="java" />
    </div>);
 };

 const JSCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={MRU_CACHE_JS} lang="javascript" />
    </div>);
 };

 const PythonCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={MRU_CACHE_PYTHON} lang="python" />
    </div>);
 };

 return (<div className="mtop15p lh28p fs16p">
    <div><i>In the modern world of computing—whether it's loading your favorite YouTube video, scrolling through Instagram, or 
        querying a massive database — <b>speed is everything</b>. But fetching data from its original source can be expensive, slow, 
        or both. This is where caching comes in.</i></div>
    <div className="mtop15p">A <b>cache</b> is a smaller, faster memory location that stores copies of frequently accessed data. When a system requests 
    data, it first checks the cache. If the data is found (called a cache hit), the system responds quickly. If not (called a cache 
    miss), the data is fetched from the slower original source, and then possibly stored in the cache for next time.</div>
    <div className="mtop15p">However, there's a catch: <b>cache space is limited</b>. So, when the cache is full and new data needs to be stored, 
    something has to go. This is where <b>cache eviction strategies</b> come in — to decide which data to discard to make room for 
    the new.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is the Most Recently Used (MRU) Strategy?</b></h2></div>
    <div className="mtop15p">
        <div>The Most Recently Used (MRU) cache eviction strategy is a policy where the most recently accessed data is the first to 
            be evicted when space is needed.</div>
        <div>Sounds counterintuitive? It might be. We usually expect systems to preserve recently used items (as in LRU - Least 
            Recently Used), but MRU has its place. The idea behind MRU is:</div>
        <div className="mtop5p">
            <Card padding={15} backgroundColor="#eee">
                <b>If you've just used it, you probably won’t need it again immediately.</b>
            </Card>
        </div>
        <div className="mtop5p">This assumption is valid in specific use cases, particularly when users or processes tend to rarely reuse items soon 
            after accessing them. In these scenarios, the least recently used items are more likely to be used again, 
            so they’re kept.</div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>How Most Recently Used (MRU) Works – Step-by-Step</b></h2></div>
    <div className="mtop15p">
        <div>Let's walk through how MRU operates in a caching system:</div>
        <div>
            <ol>
                <li><b>New data arrives:</b> Cache is full.</li>
                <li><b>Eviction decision:</b> Identify the <b>most recently used item</b> in the cache.</li>
                <li><b>Eviction:</b> Remove that most recently used item.</li>
                <li><b>Insertion:</b> Add the new data into the cache.</li>
            </ol>
        </div>
        <div className="mtop5p">It maintains a <b>stack-like structure</b>, where the most recently accessed items are on top and are 
            the first to be removed.</div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Most Recently Used (MRU) Use Case Example</b></h2></div>
    <div className="mtop15p">
        <div>Imagine a scenario like this:</div>
        <div>
            <ul>
                <li>You're browsing through a photo gallery where each image is loaded and viewed only once.</li>
                <li>You won't likely return to the image you just viewed; instead, you’ll move forward.</li>
            </ul>
        </div>
        <div>In this case, <b>evicting the most recently viewed image</b> (because you’re least likely to see it again soon) is smarter. 
        Most Recently Used (MRU) fits well in:</div>
        <div>
            <ul>
                <li><b>Streaming services</b></li>
                <li><b>Media players</b></li>
                <li><b>Stack-based resource management</b></li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Most Recently Used (MRU) Algorithm in Pseudocode</b></h2></div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:+"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
    <div className="mtop5p">Here, <code><b>stack</b></code> maintains the order of usage, and the item at the end 
      (most recent) is removed when eviction is necessary.</div>
 </div>);
};

export default Introduction;