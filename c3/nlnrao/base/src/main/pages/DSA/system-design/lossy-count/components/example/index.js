import React from "react";
import { Tab, Highlight } from "e-ui-react";

const LC_EXAMPLE_JAVA = `import java.util.*;

public class LossyCount {
    private final double epsilon;
    private final int bucketWidth;
    private int currentTerm = 1;
    private int totalCount = 0;

    private static class Entry {
        int count, delta;
        Entry(int count, int delta) {
            this.count = count;
            this.delta = delta;
        }
    }

    private final Map<String, Entry> data = new HashMap<>();

    public LossyCount(double epsilon) {
        this.epsilon = epsilon;
        this.bucketWidth = (int)Math.ceil(1.0 / epsilon);
    }

    public void add(String item) {
        totalCount++;
        Entry entry = data.get(item);
        if (entry != null) {
            entry.count++;
        } else {
            data.put(item, new Entry(1, currentTerm - 1));
        }

        if (totalCount % bucketWidth == 0) {
            cleanup();
            currentTerm++;
        }
    }

    private void cleanup() {
        data.entrySet().removeIf(e -> e.getValue().count + e.getValue().delta <= currentTerm);
    }

    public Map<String, Integer> getFrequentItems(int threshold) {
        Map<String, Integer> result = new HashMap<>();
        for (Map.Entry<String, Entry> e : data.entrySet()) {
            if (e.getValue().count >= threshold) {
                result.put(e.getKey(), e.getValue().count);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        LossyCount lc = new LossyCount(0.1);
        List<String> stream = Arrays.asList("apple", "banana", "apple", "apple", "banana", "orange", "apple", "banana", "banana");

        for (String word : stream) {
            lc.add(word);
        }

        System.out.println("Frequent Items: " + lc.getFrequentItems(2));
    }
}`;

const LC_EXAMPLE_JS = `class LossyCount {
    constructor(epsilon) {
        this.epsilon = epsilon;
        this.bucketWidth = Math.ceil(1 / epsilon);
        this.data = new Map();
        this.n = 0;
        this.currentTerm = 1;
    }

    add(item) {
        this.n++;
        if (this.data.has(item)) {
            this.data.get(item).count++;
        } else {
            this.data.set(item, { count: 1, delta: this.currentTerm - 1 });
        }

        if (this.n % this.bucketWidth === 0) {
            this.cleanup();
            this.currentTerm++;
        }
    }

    cleanup() {
        for (let [key, { count, delta }] of this.data) {
            if (count + delta <= this.currentTerm) {
                this.data.delete(key);
            }
        }
    }

    getFrequentItems(threshold) {
        const result = {};
        for (let [key, { count }] of this.data) {
            if (count >= threshold) {
                result[key] = count;
            }
        }
        return result;
    }
}

// Usage
const lc = new LossyCount(0.1);
["apple", "banana", "apple", "apple", "banana", "orange", "apple", "banana", "banana"]
    .forEach(word => lc.add(word));

console.log("Frequent Items:", lc.getFrequentItems(2));`;

const LC_EXAMPLE_PYTHON = `import math

class LossyCount:
    def __init__(self, epsilon):
        self.epsilon = epsilon
        self.bucket_width = math.ceil(1 / epsilon)
        self.current_term = 1
        self.data = {}
        self.n = 0

    def add(self, item):
        self.n += 1
        if item in self.data:
            self.data[item][0] += 1
        else:
            self.data[item] = [1, self.current_term - 1]
        if self.n % self.bucket_width == 0:
            self._cleanup()
            self.current_term += 1

    def _cleanup(self):
        to_delete = [k for k, (count, delta) in self.data.items() if count + delta <= self.current_term]
        for k in to_delete:
            del self.data[k]

    def get_frequent_items(self, support_threshold):
        return {k: v[0] for k, v in self.data.items() if v[0] >= support_threshold}

# Usage
lc = LossyCount(0.1)
for word in ["apple", "banana", "apple", "apple", "banana", "orange", "apple", "banana", "banana"]:
    lc.add(word)

print("Frequent Items:", lc.get_frequent_items(support_threshold=2))`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={LC_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={LC_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={LC_EXAMPLE_PYTHON} lang="python" />
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