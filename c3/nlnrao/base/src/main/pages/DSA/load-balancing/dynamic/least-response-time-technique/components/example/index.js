import React from "react";
import { Tab, Highlight } from "e-ui-react";

const LRTT_EXAMPLE_JAVA = `class Server {
    String name;
    int responseTime; // in ms
    int activeConnections;

    public Server(String name, int responseTime, int activeConnections) {
        this.name = name;
        this.responseTime = responseTime;
        this.activeConnections = activeConnections;
    }

    public int getScore() {
        return responseTime * activeConnections;
    }
}

public class LeastResponseTimeBalancer {
    public static void main(String[] args) {
        Server[] servers = {
            new Server("Server-A", 100, 5),
            new Server("Server-B", 80, 6),
            new Server("Server-C", 120, 3)
        };

        Server selected = servers[0];
        for (Server s : servers) {
            if (s.getScore() < selected.getScore()) {
                selected = s;
            }
        }

        System.out.println("Redirect to: " + selected.name);
    }
}`;

const LRTT_EXAMPLE_JS = `class Server {
  constructor(name, responseTime, activeConnections) {
    this.name = name;
    this.responseTime = responseTime;
    this.activeConnections = activeConnections;
  }

  getScore() {
    return this.responseTime * this.activeConnections;
  }
}

function leastResponseTime(servers) {
  return servers.reduce((best, server) =>
    server.getScore() < best.getScore() ? server : best
  );
}

// Sample servers
const servers = [
  new Server("Server-A", 100, 5),
  new Server("Server-B", 80, 6),
  new Server("Server-C", 120, 3)
];

const selected = leastResponseTime(servers);
console.log(\`Redirect to: \${selected.name}\`);`;

const LRTT_EXAMPLE_PYTHON = `class Server:
    def __init__(self, name, response_time, active_connections):
        self.name = name
        self.response_time = response_time  # in ms
        self.active_connections = active_connections

    def score(self):
        return self.response_time * self.active_connections

def least_response_time(servers):
    return min(servers, key=lambda s: s.score())

# Sample servers
servers = [
    Server("Server-A", 100, 5),
    Server("Server-B", 80, 6),
    Server("Server-C", 120, 3),
]

selected = least_response_time(servers)
print(f"Redirect to: {selected.name}")`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={LRTT_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={LRTT_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={LRTT_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Examples in Different Languages</b></h2></div>
   <div className="mtop15p">Let’s see how the Least Response Time algorithm can be implemented 
   in <b>Python</b>, <b>Java</b>, and <b>JavaScript</b>.</div>
   <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
   </div>
 </div>);

};

export default Example;