import React from "react";
import { Tab, Highlight } from "e-ui-react";

const CLS_EXAMPLE_JAVA = `import java.util.*;

class Process {
    String id;
    boolean recorded = false;

    Process(String id) {
        this.id = id;
    }

    void receiveMarker(String from) {
        if (!recorded) {
            System.out.println("Process " + id + " records state.");
            recorded = true;
            sendMarkers();
        } else {
            System.out.println("Process " + id + " records channel from " + from + " as empty.");
        }
    }

    void sendMarkers() {
        System.out.println("Process " + id + " sends markers to all neighbors.");
    }
}

public class SnapshotDemo {
    public static void main(String[] args) {
        Process a = new Process("A");
        Process b = new Process("B");
        Process c = new Process("C");

        a.receiveMarker(null);
        b.receiveMarker("A");
        c.receiveMarker("A");
    }
}`;

const CLS_EXAMPLE_JS = `class Process {
    constructor(id) {
        this.id = id;
        this.recorded = false;
    }

    receiveMarker(from) {
        if (!this.recorded) {
            console.log(\`Process \${this.id} records state.\`);
            this.recorded = true;
            this.sendMarkers();
        } else {
            console.log(\`Process \${this.id} records channel from \${from} as empty.\`);
        }
    }

    sendMarkers() {
        console.log(\`Process \${this.id} sends markers to all neighbors.\`);
    }
}

// Simulate
const a = new Process('A');
const b = new Process('B');
const c = new Process('C');

a.receiveMarker(null);
b.receiveMarker('A');
c.receiveMarker('A');`;

const CLS_EXAMPLE_PYTHON = `class Process:
    def __init__(self, id):
        self.id = id
        self.state = "active"
        self.channel_state = {}
        self.recorded = False

    def receive_marker(self, from_process):
        if not self.recorded:
            print(f"Process {self.id} records state.")
            self.recorded = True
            self.send_markers()
        else:
            print(f"Process {self.id} records channel from {from_process} as empty.")

    def send_markers(self):
        print(f"Process {self.id} sends markers to all neighbors.")

# Simulate
a = Process("A")
b = Process("B")
c = Process("C")

# A initiates snapshot
a.receive_marker(None)
b.receive_marker("A")
c.receive_marker("A")`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={CLS_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={CLS_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={CLS_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Example Scenario</b></h2></div>
   <div className="mtop15p">Assume we have three services A, B, and C communicating asynchronously. Service A initiates the 
   snapshot. Eventually, all services log their own memory, thread count, task queue, and the messages in transit, giving a 
   picture of system-wide load — which can be used to rebalance workloads.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Code Examples</b></h4></div>
   <div className="mtop15p">Let’s implement a basic form of the algorithm in <b>Python</b>, <b>Java</b>, and <b>JavaScript</b>. 
   We'll simulate processes and marker handling.</div>
   <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
   </div>
 </div>);
};

export default Example;