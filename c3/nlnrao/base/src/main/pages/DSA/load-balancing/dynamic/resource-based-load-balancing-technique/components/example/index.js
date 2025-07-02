import React from "react";
import {Tab, Highlight } from "e-ui-react";

const RBLT_EXAMPLE_JAVA = `class Server {
    String name;
    double cpuUsage;
    double memoryUsage;

    public Server(String name, double cpuUsage, double memoryUsage) {
        this.name = name;
        this.cpuUsage = cpuUsage;
        this.memoryUsage = memoryUsage;
    }

    public double getScore() {
        return cpuUsage * 0.6 + memoryUsage * 0.4;
    }
}

public class LoadBalancer {
    public static void main(String[] args) {
        Server[] servers = {
            new Server("Server-A", 20, 40),
            new Server("Server-B", 10, 30),
            new Server("Server-C", 70, 90),
        };

        Server bestServer = servers[0];
        for (Server s : servers) {
            if (s.getScore() < bestServer.getScore()) {
                bestServer = s;
            }
        }

        System.out.println("Request routed to: " + bestServer.name);
    }
}`;

const RBLT_EXAMPLE_JS = `class Server {
  constructor(name, cpuUsage, memoryUsage) {
    this.name = name;
    this.cpuUsage = cpuUsage;
    this.memoryUsage = memoryUsage;
  }

  getScore() {
    return this.cpuUsage * 0.6 + this.memoryUsage * 0.4;
  }
}

const servers = [
  new Server("Server-A", 20, 40),
  new Server("Server-B", 10, 30),
  new Server("Server-C", 70, 90),
];

const bestServer = servers.reduce((prev, curr) =>
  curr.getScore() < prev.getScore() ? curr : prev
);

console.log(\`Request routed to: \${bestServer.name}\`);`;

const RBLT_EXAMPLE_PYTHON = `import random

class Server:
    def __init__(self, name, cpu_usage, memory_usage):
        self.name = name
        self.cpu_usage = cpu_usage  # in percentage
        self.memory_usage = memory_usage  # in percentage

    def score(self):
        return self.cpu_usage * 0.6 + self.memory_usage * 0.4

servers = [
    Server("Server-A", cpu_usage=20, memory_usage=40),
    Server("Server-B", cpu_usage=10, memory_usage=30),
    Server("Server-C", cpu_usage=70, memory_usage=90),
]

# Select server with lowest resource score
best_server = min(servers, key=lambda s: s.score())
print(f"Request routed to: {best_server.name}")`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={RBLT_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={RBLT_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={RBLT_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
   <div className="mtop15p">Let's demonstrate how Resource-Based Load Balancing can be implemented 
      in <b>Python</b>, <b>Java</b>, and <b>JavaScript</b>.</div>
   <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
   </div>
 </div>);
};

export default Example;