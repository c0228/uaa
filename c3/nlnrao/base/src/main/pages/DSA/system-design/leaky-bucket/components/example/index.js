import React from "react";
import { Tab, Highlight } from "e-ui-react";

const LEAKYBUCKET_EXAMPLE_JAVA = `import java.util.*;

public class LeakyBucket {
    private final int capacity;
    private final double leakRatePerSec;
    private final Queue<Long> bucket = new LinkedList<>();
    private long lastChecked = System.currentTimeMillis();

    public LeakyBucket(int capacity, double leakRatePerSec) {
        this.capacity = capacity;
        this.leakRatePerSec = leakRatePerSec;
    }

    private void leak() {
        long now = System.currentTimeMillis();
        long elapsed = now - lastChecked;
        int leaks = (int)(elapsed / 1000.0 * leakRatePerSec);

        for (int i = 0; i < leaks && !bucket.isEmpty(); i++) {
            bucket.poll();
        }
        lastChecked = now;
    }

    public boolean allowRequest() {
        leak();
        if (bucket.size() < capacity) {
            bucket.add(System.currentTimeMillis());
            return true;
        }
        return false;
    }

    public static void main(String[] args) throws InterruptedException {
        LeakyBucket bucket = new LeakyBucket(5, 1);

        for (int i = 0; i < 10; i++) {
            if (bucket.allowRequest()) {
                System.out.println("Accepted Request-" + i);
            } else {
                System.out.println("Rejected Request-" + i);
            }
            Thread.sleep(300);
        }
    }
}`;

const LEAKYBUCKET_EXAMPLE_JS = `class LeakyBucket {
    constructor(capacity, leakRatePerSec) {
        this.capacity = capacity;
        this.leakRate = leakRatePerSec;
        this.bucket = [];
        this.lastChecked = Date.now();
    }

    _leak() {
        const now = Date.now();
        const elapsed = (now - this.lastChecked) / 1000;
        const leaks = Math.floor(elapsed * this.leakRate);

        this.bucket.splice(0, leaks);
        this.lastChecked = now;
    }

    allowRequest(request) {
        this._leak();
        if (this.bucket.length < this.capacity) {
            this.bucket.push(request);
            return true;
        }
        return false;
    }
}

// Usage
const bucket = new LeakyBucket(5, 1);

let i = 0;
const interval = setInterval(() => {
    const request = \`Request-\${i}\`;
    if (bucket.allowRequest(request)) {
        console.log(\`Accepted \${request}\`);
    } else {
        console.log(\`Rejected \${request}\`);
    }
    i++;
    if (i >= 10) clearInterval(interval);
}, 300);`;

const LEAKYBUCKET_EXAMPLE_PYTHON = `import time
from collections import deque

class LeakyBucket:
    def __init__(self, capacity, leak_rate_per_sec):
        self.capacity = capacity
        self.leak_rate = leak_rate_per_sec
        self.bucket = deque()
        self.last_checked = time.time()

    def _leak(self):
        now = time.time()
        elapsed = now - self.last_checked
        leaked = int(elapsed * self.leak_rate)
        for _ in range(min(leaked, len(self.bucket))):
            self.bucket.popleft()
        self.last_checked = now

    def allow_request(self, request):
        self._leak()
        if len(self.bucket) < self.capacity:
            self.bucket.append(request)
            return True
        return False

# Usage
bucket = LeakyBucket(capacity=5, leak_rate_per_sec=1)

for i in range(10):
    if bucket.allow_request(f"Request-{i}"):
        print(f"Accepted Request-{i}")
    else:
        print(f"Rejected Request-{i}")
    time.sleep(0.3)`;

const Example = () =>{

			
   const JavaCode = ()=>{
   return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
   <Highlight content={LEAKYBUCKET_EXAMPLE_JAVA} lang="java" />
   </div>);
   };

   const JSCode = ()=>{
   return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
   <Highlight content={LEAKYBUCKET_EXAMPLE_JS} lang="javascript" />
   </div>);
   };

   const PythonCode = ()=>{
   return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
   <Highlight content={LEAKYBUCKET_EXAMPLE_PYTHON} lang="python" />
   </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples of Leaky Bucket Algorithm</b></h2></div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;