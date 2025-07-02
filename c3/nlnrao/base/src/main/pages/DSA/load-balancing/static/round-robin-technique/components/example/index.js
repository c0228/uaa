import React from "react";
import { Tab, Highlight } from "e-ui-react";

const RRT_EXAMPLE_JAVA = `import java.util.List;

public class RoundRobinBalancer {
    private List<String> servers;
    private int index = 0;

    public RoundRobinBalancer(List<String> servers) {
        this.servers = servers;
    }

    public String getServer() {
        String server = servers.get(index);
        index = (index + 1) % servers.size();
        return server;
    }

    public static void main(String[] args) {
        List<String> serverList = List.of("Server-1", "Server-2", "Server-3");
        RoundRobinBalancer balancer = new RoundRobinBalancer(serverList);

        for (int i = 0; i < 6; i++) {
            System.out.println("Request sent to: " + balancer.getServer());
        }
    }
}`;

const RRT_EXAMPLE_JS = `class RoundRobinBalancer {
  constructor(servers) {
    this.servers = servers;
    this.index = 0;
  }

  getServer() {
    const server = this.servers[this.index];
    this.index = (this.index + 1) % this.servers.length;
    return server;
  }
}

// Usage
const balancer = new RoundRobinBalancer(["Server-1", "Server-2", "Server-3"]);

for (let i = 0; i < 6; i++) {
  console.log("Request sent to:", balancer.getServer());
}`;

const RRT_EXAMPLE_PYTHON = `class RoundRobinBalancer:
    def __init__(self, servers):
        self.servers = servers
        self.index = 0

    def get_server(self):
        server = self.servers[self.index]
        self.index = (self.index + 1) % len(self.servers)
        return server

# Usage
servers = ['Server-1', 'Server-2', 'Server-3']
balancer = RoundRobinBalancer(servers)

for _ in range(6):
    print("Request sent to:", balancer.get_server())`;

const RRT_EXAMPLE_PYTHON_OUTPUT = `Request sent to: Server-1
Request sent to: Server-2
Request sent to: Server-3
Request sent to: Server-1
Request sent to: Server-2
Request sent to: Server-3`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={RRT_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={RRT_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={RRT_EXAMPLE_PYTHON} lang="python" />
      <div className="mtop5p"><b>Output:</b></div>
      <div className="mtop5p"><Highlight content={RRT_EXAMPLE_PYTHON_OUTPUT} lang="python" /></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Code Examples</b></h2></div>
   <div className="mtop15p">Let’s explore how Round Robin works with practical code in <b>Python</b>, <b>Java</b> and <b>JavaScript</b>.</div>
   <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Limitations of Round Robin</b></h2></div>
   <div className="mtop15p">While it's simple and fast, Round Robin has <b>some limitations</b>:</div>
   <div>
      <ul>
         <li className="mtop5p">Doesn't account for server load or processing time.</li>
         <li className="mtop5p">Can overload a slower server if all are not equally performant.</li>
         <li className="mtop5p">Not ideal for stateful services unless combined with session stickiness.</li>
      </ul>
   </div>
 </div>);
};

export default Example;