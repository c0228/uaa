import React from "react";
import { Tab, Card, Highlight } from "e-ui-react";

const JAVA_LFU_CACHE = `import java.util.*;

public class LFUCache {
    private final int capacity;
    private int minFreq;
    private Map<Integer, Integer> keyToVal;
    private Map<Integer, Integer> keyToFreq;
    private Map<Integer, LinkedHashSet<Integer>> freqToKeys;

    public LFUCache(int capacity) {
        this.capacity = capacity;
        this.minFreq = 0;
        this.keyToVal = new HashMap<>();
        this.keyToFreq = new HashMap<>();
        this.freqToKeys = new HashMap<>();
    }

    public int get(int key) {
        if (!keyToVal.containsKey(key)) return -1;
        updateFreq(key);
        return keyToVal.get(key);
    }

    public void put(int key, int value) {
        if (capacity == 0) return;

        if (keyToVal.containsKey(key)) {
            keyToVal.put(key, value);
            updateFreq(key);
        } else {
            if (keyToVal.size() >= capacity) {
                LinkedHashSet<Integer> minFreqKeys = freqToKeys.get(minFreq);
                int evict = minFreqKeys.iterator().next();
                minFreqKeys.remove(evict);
                if (minFreqKeys.isEmpty()) freqToKeys.remove(minFreq);
                keyToVal.remove(evict);
                keyToFreq.remove(evict);
            }

            keyToVal.put(key, value);
            keyToFreq.put(key, 1);
            freqToKeys.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key);
            minFreq = 1;
        }
    }

    private void updateFreq(int key) {
        int freq = keyToFreq.get(key);
        keyToFreq.put(key, freq + 1);
        LinkedHashSet<Integer> set = freqToKeys.get(freq);
        set.remove(key);
        if (set.isEmpty()) {
            freqToKeys.remove(freq);
            if (freq == minFreq) minFreq++;
        }
        freqToKeys.computeIfAbsent(freq + 1, k -> new LinkedHashSet<>()).add(key);
    }
}`;

const JS_LFU_CACHE = `class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.minFreq = 0;
    this.keyToVal = new Map();
    this.keyToFreq = new Map();
    this.freqToKeys = new Map();
  }

  get(key) {
    if (!this.keyToVal.has(key)) return -1;
    this._updateFreq(key);
    return this.keyToVal.get(key);
  }

  put(key, value) {
    if (this.capacity === 0) return;

    if (this.keyToVal.has(key)) {
      this.keyToVal.set(key, value);
      this._updateFreq(key);
    } else {
      if (this.keyToVal.size >= this.capacity) {
        const minFreqKeys = this.freqToKeys.get(this.minFreq);
        const evict = minFreqKeys.keys().next().value;
        minFreqKeys.delete(evict);
        if (minFreqKeys.size === 0) {
          this.freqToKeys.delete(this.minFreq);
        }
        this.keyToVal.delete(evict);
        this.keyToFreq.delete(evict);
      }

      this.keyToVal.set(key, value);
      this.keyToFreq.set(key, 1);
      if (!this.freqToKeys.has(1)) this.freqToKeys.set(1, new Set());
      this.freqToKeys.get(1).add(key);
      this.minFreq = 1;
    }
  }

  _updateFreq(key) {
    const freq = this.keyToFreq.get(key);
    this.keyToFreq.set(key, freq + 1);
    const set = this.freqToKeys.get(freq);
    set.delete(key);
    if (set.size === 0) {
      this.freqToKeys.delete(freq);
      if (freq === this.minFreq) this.minFreq++;
    }

    if (!this.freqToKeys.has(freq + 1)) {
      this.freqToKeys.set(freq + 1, new Set());
    }
    this.freqToKeys.get(freq + 1).add(key);
  }
}`;

const PYTHON_LFU_CACHE = `from collections import defaultdict, OrderedDict

class LFUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.key_to_val = {}
        self.key_to_freq = {}
        self.freq_to_keys = defaultdict(OrderedDict)
        self.min_freq = 0

    def get(self, key):
        if key not in self.key_to_val:
            return -1
        self._update_freq(key)
        return self.key_to_val[key]

    def put(self, key, value):
        if self.capacity == 0:
            return

        if key in self.key_to_val:
            self.key_to_val[key] = value
            self._update_freq(key)
        else:
            if len(self.key_to_val) >= self.capacity:
                old_key, _ = self.freq_to_keys[self.min_freq].popitem(last=False)
                del self.key_to_val[old_key]
                del self.key_to_freq[old_key]

            self.key_to_val[key] = value
            self.key_to_freq[key] = 1
            self.freq_to_keys[1][key] = None
            self.min_freq = 1

    def _update_freq(self, key):
        freq = self.key_to_freq[key]
        del self.freq_to_keys[freq][key]
        if not self.freq_to_keys[freq]:
            del self.freq_to_keys[freq]
            if freq == self.min_freq:
                self.min_freq += 1

        self.key_to_freq[key] = freq + 1
        self.freq_to_keys[freq + 1][key] = None`;

const Introduction = () =>{

 const JavaCode = () =>{
    return (<div style={{ border:'1px solid #000', padding:'15px' }}>
        <Highlight content={JAVA_LFU_CACHE} lang="java" />
    </div>);
 };

 const JSCode = () =>{
    return (<div style={{ border:'1px solid #000', padding:'15px' }}>
         <Highlight content={JS_LFU_CACHE} lang="javascript" />
    </div>);
 };

 const PythonCode = () =>{
    return (<div style={{ border:'1px solid #000', padding:'15px' }}>
         <Highlight content={PYTHON_LFU_CACHE} lang="python" />
    </div>);
 };

 return (<div className="mtop15p lh28p fs16p">
    <div><i>In the world of caching, where fast data access is critical, cache eviction strategies play a crucial role in 
        maintaining performance. Among these, <b>Least Frequently Used (LFU)</b> stands out as an intelligent, frequency-based approach 
        to decide <b>which data to evict</b> when the cache is full.</i></div>
    <div><i>In this blog, we will deep dive into LFU, understand how it works, where it is used, its pros and cons, and how to 
        implement it efficiently in <b>Data Structures and Algorithms (DSA)</b>.</i></div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>What is Least Frequently Used (LFU)?</b></h2></div>
    <div className="mtop15p">
        <b>LFU (Least Frequently Used)</b> is a cache eviction algorithm that removes the least frequently accessed items when 
        the cache exceeds its capacity.
        <div className="mtop5p">
            <Card padding={15} backgroundColor="#eee">
                <div><h5 className="blog-head"><b>Key Principle:</b></h5></div>
                <div className="mtop5p">The item that is used <b>least number of times</b> is evicted first.</div>
            </Card>
        </div>
        <div className="mtop5p">It relies on <b>frequency count</b> of accesses, rather than recency (like in LRU - Least 
        Recently Used).</div>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Real-Life Analogy:</b></h4></div>
    <div className="mtop10p">Imagine a library shelf that can hold only 5 books. Whenever a new book arrives, the librarian 
        checks which book has been read the <b>least number of times</b> and removes it to make space for the new one.</div>
        
    <div className="mtop15p"><h2 className="blog-head"><b>Why use Least Frequently Used (LFU)?</b></h2></div>
    <div className="mtop10p">
        <ul>
            <li>Ideal for workloads with <b>consistent access patterns</b>.</li>
            <li>Retains frequently-used data, improving cache hit ratio.</li>
            <li>Prevents temporary bursts of access (unlike LRU) from dominating the cache.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Data Structures Behind Least Frequently Used (LFU)</b></h2></div>
    <div className="mtop15p">
        <div>Efficient LFU implementation requires a combination of data structures:</div>
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr style={{ backgroundColor:'#eee' }}>
                        <td><b>Structure</b></td>
                        <td><b>Purpose</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>HashMap (Key - Value)</b></td>
                        <td>To store the key-value pairs</td>
                    </tr>
                    <tr>
                        <td><b>HashMap (Key - Frequency)</b></td>
                        <td>To track access frequency</td>
                    </tr>
                    <tr>
                        <td><b>HashMap (Frequency - LinkedHashSet of Keys)</b></td>
                        <td>To store keys grouped by their frequency</td>
                    </tr>
                    <tr>
                        <td><b>Min Frequency Tracker</b></td>
                        <td>To quickly identify LFU</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>This setup allows <b>O(1)</b> operations for get and put.</div>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Operations in Least Frequently Used (LFU)</b></h2></div>
    <div className="mtop15p">
        <ol>
            <li>
                <div><h5><b>Get(key):</b></h5></div>
                <div>
                    <ul>
                        <li>If key exists:
                            <ul>
                                <li>Return value</li>
                                <li>Update frequency (increment frequency, move to new frequency group)</li>
                            </ul>
                        </li>
                        <li>If not: Return -1</li>
                    </ul>
                </div>
            </li>
            <li>
                <div><h5><b>Put(key, value)</b></h5></div>
                <div>
                    <ul>
                        <li>If key exists:
                            <ul>
                                <li>Update value</li>
                                <li>Update frequency</li>
                            </ul>
                        </li>
                        <li>If new key:
                            <ul>
                                <li>If capacity is full: Evict LFU key</li>
                                <li>Add new key with frequency = 1</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Least Frequently Used (LFU) Cache</b></h2></div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
                        { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
                        { id:"python", label:"Python", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Time and Space Complexity</b></h2></div>
    <div className="mtop15p">
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr style={{ backgroundColor:'#eee' }}>
                        <td><b>Operation</b></td>
                        <td><b>Time Complexity</b></td>
                        <td><b>Space Complexity</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Get</b></td>
                        <td>O(1)</td>
                        <td>O(n)</td>
                    </tr>
                    <tr>
                        <td><b>Put</b></td>
                        <td>O(1)</td>
                        <td>O(n)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Least Frequently Used (LFU) vs Other Strategies</b></h2></div>
    <div className="mtop15p table-responsive">
        <table className="table">
            <thead>
                <tr style={{ backgroundColor:'#eee' }}>
                    <td><b>Strategy</b></td>
                    <td><b>Criteria</b></td>
                    <td><b>Common Use Case</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>FIFO</b></td>
                    <td>Oldest added</td>
                    <td>Simple caches</td>
                </tr>
                <tr>
                    <td><b>LRU</b></td>
                    <td>Least recently used</td>
                    <td>Web browsers</td>
                </tr>
                <tr>
                    <td><b>LFU</b></td>
                    <td>Least frequently used</td>
                    <td>Database buffers</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>When to Use Least Frequently Used (LFU)?</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>When <b>frequency</b> of access matters more than <b>recency</b>.</li>
            <li>In <b>data-intensive systems</b> where frequently accessed data must be retained.</li>
            <li>For <b>AI/ML feature stores</b>, <b>CDNs</b> and <b>persistent caches</b>.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Drawbacks</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>Slightly <b>complex to implement</b> compared to LRU or FIFO.</li>
            <li>Needs <b>extra memory</b> to track frequencies.</li>
            <li>May not adapt well to sudden shifts in access patterns ("frequency pollution").</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Applications</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Operating systems:</b> File system caching</li>
            <li><b>Databases:</b> Buffer replacement policies</li>
            <li><b>CDNs:</b> Content caching</li>
            <li>Memory management in embedded systems</li>
        </ul>
    </div>

    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h5 className="blog-head"><b>Summary -</b></h5></div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr style={{ backgroundColor:'#eee' }}>
                            <td><b>Topic</b></td>
                            <td><b>Takeaway</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>What is LFU?</b></td>
                            <td>Evicts least frequently accessed item</td>
                        </tr>
                        <tr>
                            <td><b>How it works</b></td>
                            <td>Tracks frequency of accesses per item</td>
                        </tr>
                        <tr>
                            <td><b>Efficient Implementation</b></td>
                            <td>HashMaps + LinkedHashSet</td>
                        </tr>
                        <tr>
                            <td><b>Time Complexity</b></td>
                            <td>O(1) for get and put</td>
                        </tr>
                        <tr>
                            <td><b>Best Use Case</b></td>
                            <td>Consistent, predictable workloads</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Card>
    </div>

 </div>);
};

export default Introduction;