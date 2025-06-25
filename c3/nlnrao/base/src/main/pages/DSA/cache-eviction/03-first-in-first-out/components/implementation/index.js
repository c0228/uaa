import React from "react";
import { Card, Tab, Highlight } from "e-ui-react";

const PYTHON_FIFO_QUEUE_HASHSET_CODE = `from collections import deque

class FIFOCache:
    def __init__(self, capacity):
        self.cache = set()
        self.queue = deque()
        self.capacity = capacity

    def refer(self, item):
        if item not in self.cache:
            if len(self.cache) == self.capacity:
                removed = self.queue.popleft()
                self.cache.remove(removed)
            self.queue.append(item)
            self.cache.add(item)
        print("Cache:", list(self.queue))`;

const PYTHON_FIFO_QUEUE_HASHSET_EXECUTION = `c = FIFOCache(3)
c.refer(1)
c.refer(2)
c.refer(3)
c.refer(4)  # This will evict 1
`;

const JAVA_FIFO_QUEUE_HASHSET_CODE = `import java.util.*;

public class FIFOCache {
    private Set<Integer> cache;
    private Queue<Integer> queue;
    private int capacity;

    public FIFOCache(int capacity) {
        this.cache = new HashSet<>();
        this.queue = new LinkedList<>();
        this.capacity = capacity;
    }

    public void refer(int item) {
        if (!cache.contains(item)) {
            if (cache.size() == capacity) {
                int removed = queue.poll();  // Remove the first item
                cache.remove(removed);
            }
            queue.offer(item);
            cache.add(item);
        }
        System.out.println("Cache: " + queue);
    }

    public static void main(String[] args) {
        FIFOCache fifo = new FIFOCache(3);
        fifo.refer(1);
        fifo.refer(2);
        fifo.refer(3);
        fifo.refer(4);  // Evicts 1
        fifo.refer(2);  // Already in cache
    }
}`;

const JS_FIFO_QUEUE_HASHSET_CODE= `class FIFOCache {
  constructor(capacity) {
    this.cache = new Set();
    this.queue = [];
    this.capacity = capacity;
  }

  refer(item) {
    if (!this.cache.has(item)) {
      if (this.cache.size === this.capacity) {
        const removed = this.queue.shift(); // Remove oldest
        this.cache.delete(removed);
      }
      this.queue.push(item);
      this.cache.add(item);
    }
    console.log("Cache:", this.queue);
  }
}

// Example usage
const fifo = new FIFOCache(3);
fifo.refer(1);
fifo.refer(2);
fifo.refer(3);
fifo.refer(4); // Evicts 1
fifo.refer(2); // Already in cache`;

const Implementation = () =>{

 const JavaCode = () =>{
   return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={JAVA_FIFO_QUEUE_HASHSET_CODE} lang="java" />
   </div>);
 };

 const JSCode = () =>{
  return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={JS_FIFO_QUEUE_HASHSET_CODE} lang="javascript" />
  </div>);
 };

 const PythonCode = () =>{
  return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={PYTHON_FIFO_QUEUE_HASHSET_CODE} lang="python" />
    <div className="mtop5p"><h5 className="blog-head"><b>Sample Execution:</b></h5></div>
    <Highlight content={PYTHON_FIFO_QUEUE_HASHSET_EXECUTION} lang="python" />
  </div>);
 }; 

 return (<div className="mtop15p lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>FIFO Implementation using Data Structures</b></h2></div>
    <div className="mtop10p"><h4 className="blog-head"><b>Using Queue + HashSet</b></h4></div>
    <div className="mtop5p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
                { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
                { id:"python", label:"Python", url:"#", component:(<PythonCode />) },
            ]} />
    </div>

    <div className="mtop10p"><h4 className="blog-head"><b>When to Use FIFO</b></h4></div>
    <div className="mtop5p">
        FIFO is useful when:
        <ul>
            <li>Cache hit rate is not a major concern.</li>
            <li>You want deterministic eviction (e.g., embedded systems).</li>
            <li>You want simplicity over performance.</li>
            <li>You’re using write-through caches and stale data is not an issue.</li>
        </ul>
    </div>

    <div className="mtop10p"><h4 className="blog-head"><b>FIFO vs Other Eviction Strategies</b></h4></div>

    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr style={{ backgroundColor:'#eee' }}>
                    <td><b>Strategy</b></td>
                    <td><b>Basis of Eviction</b></td>
                    <td><b>Pros</b></td>
                    <td><b>Cons</b></td>			
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>FIFO</b></td>
                    <td>Oldest inserted</td>
                    <td>Simple, predictable</td>
                    <td>Doesn’t account for usage</td>
                </tr>
                <tr>
                    <td><b>LRU</b></td>
                    <td>Least recently used</td>
                    <td>Good for temporal locality</td>
                    <td>Slightly complex to implement</td>
                </tr>
                <tr>
                    <td><b>LFU</b></td>
                    <td>Least frequently used</td>
                    <td>Optimal for access frequency</td>
                    <td>High implementation overhead</td>
                </tr>
                <tr>
                    <td><b>Random</b></td>
                    <td>Randomly evict an entry</td>
                    <td>Simple</td>
                    <td>Unpredictable performance</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="mtop10p"><h4 className="blog-head"><b>FIFO in Real-World Systems</b></h4></div>
    <div>
        <ul>
            <li><b>Hardware caches</b> may use FIFO in simpler designs.</li>
            <li><b>Web proxies</b> or <b>CDN</b> edge caches might use FIFO for fast cleanup.</li>
            <li><b>IoT Devices</b> or <b>embedded systems</b> prefer FIFO for its low complexity.</li>
        </ul>
    </div>

 </div>);
};

export default Implementation;