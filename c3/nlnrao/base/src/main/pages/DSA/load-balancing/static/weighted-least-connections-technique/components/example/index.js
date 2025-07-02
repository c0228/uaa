import React from "react";
import { Card, Tab, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const WLC_EXAMPLE_JAVA = `import java.util.*;

class Server {
    String name;
    int weight;
    int activeConnections;

    Server(String name, int weight) {
        this.name = name;
        this.weight = weight;
        this.activeConnections = 0;
    }

    double getEffectiveLoad() {
        return (double) activeConnections / weight;
    }
}

public class LoadBalancer {
    public static Server getBestServer(List<Server> servers) {
        return Collections.min(servers, Comparator.comparingDouble(Server::getEffectiveLoad));
    }

    public static void main(String[] args) {
        List<Server> servers = Arrays.asList(
            new Server("Server-A", 4),
            new Server("Server-B", 2),
            new Server("Server-C", 1)
        );

        for (int i = 0; i < 10; i++) {
            Server best = getBestServer(servers);
            best.activeConnections++;
            System.out.println("Request " + (i+1) + " sent to: " + best.name);
        }
    }
}`;

const WLC_EXAMPLE_JS = `class Server {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
    this.activeConnections = 0;
  }

  getEffectiveLoad() {
    return this.activeConnections / this.weight;
  }
}

const servers = [
  new Server("Server-A", 5),
  new Server("Server-B", 3),
  new Server("Server-C", 1),
];

function weightedLeastConnections(servers) {
  let best = servers.reduce((prev, curr) =>
    prev.getEffectiveLoad() < curr.getEffectiveLoad() ? prev : curr
  );
  best.activeConnections++;
  return best.name;
}

// Simulate 10 requests
for (let i = 0; i < 10; i++) {
  const chosen = weightedLeastConnections(servers);
  console.log(\`Request \${i + 1} sent to: \${chosen}\`);
}`;

const WLC_EXAMPLE_PYTHON = `class Server:
    def __init__(self, name, weight):
        self.name = name
        self.weight = weight
        self.active_connections = 0

    def effective_load(self):
        return self.active_connections / self.weight

servers = [
    Server("Server-A", 5),
    Server("Server-B", 3),
    Server("Server-C", 1),
]

def weighted_least_connections(servers):
    selected = min(servers, key=lambda s: s.effective_load())
    selected.active_connections += 1
    return selected.name

# Simulate 10 requests
for _ in range(10):
    server_chosen = weighted_least_connections(servers)
    print(f"Request sent to: {server_chosen}")`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={WLC_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={WLC_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={WLC_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Step-by-Step Process</b></h2></div>
    <div color="mtop15p">Let’s walk through how a load balancer applies Weighted Least Connections (WLC) Techniques:</div>

   <div className="mtop15p">
      <div><h4 className="blog-head"><b>Step 1: Server Registration</b></h4></div>
      <div className="mtop5p">Each backend server is registered with:</div>
      <div>
         <ol>
            <li className="mtop5p">A weight (assigned manually or dynamically).</li>
            <li className="mtop5p">An initial count of active connections = 0.</li>
         </ol>
      </div>
      <div><b>Example:</b></div>
      <div className="mtop5p">
         <SimpleTable header={["Server","Weight"]} 
        columns={[
            ["A","5"],
            ["B","3"],
            ["C","1"]
          ]} />
      </div>
   </div>
   <div className="mtop15p">
      <div><h4 className="blog-head"><b>Step 2: Incoming Request</b></h4></div>
      <div className="mtop5p">A new request arrives at the load balancer.</div>
   </div>
   <div className="mtop15p">
      <div><h4 className="blog-head"><b>Step 3: Compute Effective Load</b></h4></div>
      <div className="mtop5p">The load balancer calculates <code><b>Effective Load = Active Connections / Weight</b></code> for 
      each server.</div>
      <div className="mtop5p"><b>Example (current connections before the request):</b></div>
      <div className="mtop5p">
         <SimpleTable header={["Server","Weight","Active Connections","Effective Load"]} 
        columns={[
            ["A","5","10","10 / 5 = 2.0"],
            ["B","3","3","3 / 3 = 1.0"],
            ["C","1","0","0 / 1 = 0.0"]
          ]} />
      </div>
   </div>
   <div className="mtop15p">
      <div><h4 className="blog-head"><b>Step 4: Select the Server</b></h4></div>
      <div className="mtop5p">The load balancer chooses the server with the <b>lowest effective load</b> — in 
      this case, <b>Server C</b>.</div>
   </div>
   <div className="mtop15p">
      <div><h4 className="blog-head"><b>Step 5: Forward Request</b></h4></div>
      <div className="mtop5p">The request is forwarded to Server C, and its <code><b>active</b></code> connections count 
      is incremented by <code><b>1</b></code>.</div>
   </div>
   <div className="mtop15p">
      <div><h4 className="blog-head"><b>Step 6: Repeat</b></h4></div>
      <div className="mtop5p">
         <div>For each new request:</div>
         <div>
            <ul>
               <li className="mtop5p">Recalculate effective loads based on <b>updated active connections</b>.</li>
               <li className="mtop5p">Select server with the lowest result.</li>
            </ul>
         </div>
      </div>
   </div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
          <div><h4 className="blog-head"><b>What Happens When a Connection Ends?</b></h4></div>
          <div className="mtop15p">
            <div>When a server finishes processing a request:</div>
            <div>
               <ul>
                  <li className="mtop5p">It <b>decrements</b> its active connection count.</li>
                  <li className="mtop5p">This improves its <i><u>Effective Load</u></i>, making it more likely to be 
                  selected next time.</li>
               </ul>
            </div>
          </div>
      </Card>
   </div>


    <div className="mtop15p"><h2 className="blog-head"><b>Example Use Cases</b></h2></div>
    <div>
      <ul>
         <li className="mtop5p">Real-time gaming or chat applications.</li>
         <li className="mtop5p">Microservices with mixed hardware nodes.</li>
         <li className="mtop5p">API Gateways balancing between Docker containers with different memory sizes.</li>
      </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Code Examples</b></h2></div>
    <div className="mtop15p">Let’s implement this algorithm in <b>Python</b>, <b>Java</b>, and <b>JavaScript</b>.</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;