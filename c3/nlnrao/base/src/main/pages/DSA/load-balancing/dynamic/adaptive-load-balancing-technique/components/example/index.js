import React from "react";
import { Tab, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const ALB_EXAMPLE_JAVA = `import java.util.*;

public class AdaptiveLoadBalancer {

    static class Server {
        String name;
        int cpuLoad;
        int connections;

        Server(String name, int cpu, int connections) {
            this.name = name;
            this.cpuLoad = cpu;
            this.connections = connections;
        }

        double getScore() {
            return (cpuLoad * 0.6) + (connections * 0.4);
        }
    }

    public static void main(String[] args) {
        List<Server> servers = Arrays.asList(
            new Server("Server-1", 20, 10),
            new Server("Server-2", 85, 40),
            new Server("Server-3", 30, 15)
        );

        Server bestServer = servers.stream()
            .min(Comparator.comparingDouble(Server::getScore))
            .orElse(null);

        if (bestServer != null) {
            System.out.println("Routing to: " + bestServer.name);
        }
    }
}`;

const ALB_EXAMPLE_JS = `const servers = {
    server1: { cpu: 20, connections: 10 },
    server2: { cpu: 85, connections: 40 },
    server3: { cpu: 30, connections: 15 },
};

function adaptiveScore(server) {
    return server.cpu * 0.6 + server.connections * 0.4;
}

function selectBestServer() {
    let bestServer = null;
    let lowestScore = Infinity;

    for (const [name, metrics] of Object.entries(servers)) {
        const score = adaptiveScore(metrics);
        if (score < lowestScore) {
            lowestScore = score;
            bestServer = name;
        }
    }

    return bestServer;
}

// Simulate routing
for (let i = 0; i < 5; i++) {
    console.log(\`Routing request to: \${selectBestServer()}\`);
}`;

const ALB_EXAMPLE_PYTHON = `import random

# Simulated server metrics
servers = {
    "server_1": {"cpu": 20, "connections": 10},
    "server_2": {"cpu": 85, "connections": 40},
    "server_3": {"cpu": 30, "connections": 15},
}

def adaptive_score(server):
    # Weighted score: Lower is better
    return server["cpu"] * 0.6 + server["connections"] * 0.4

def select_best_server():
    best = min(servers.items(), key=lambda x: adaptive_score(x[1]))
    return best[0]

# Simulate request routing
for _ in range(5):
    best_server = select_best_server()
    print(f"Routing request to: {best_server}")`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={ALB_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={ALB_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div className="mtop15p"><b># Using Mock Metrics</b></div>
      <div className="mtop15p"><Highlight content={ALB_EXAMPLE_PYTHON} lang="python" /></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Code Examples</b></h2></div>
    <div className="mtop15p">Let’s explore how you can implement a basic <b>adaptive load balancer</b> using different programming languages.</div>
    <div className="mtop15p">
         <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Real-World Use Cases</b></h4></div>
    <div className="mtop15p">
         <SimpleTable header={["Use Case","How Adaptive Load Balancing Helps"]} 
            columns={[
                  ["Cloud-based APIs","Auto-routes requests based on VM CPU load"],
                  ["Video streaming","Reduces buffering by considering network latency"],
                  ["E-commerce","Handles traffic spikes during sales by reacting to backend stress"],
                  ["Microservices","Routes requests to responsive pods based on pod health"],
               ]} />
    </div>
 </div>);
};

export default Example;