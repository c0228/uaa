import React from "react";
import { Tab, Highlight } from "e-ui-react";

const LCT_EXAMPLE_JAVA = `import java.util.*;

class Server {
    String name;
    int activeConnections;

    Server(String name) {
        this.name = name;
        this.activeConnections = 0;
    }

    void handleRequest() {
        activeConnections++;
        System.out.println(name + " is handling request...");
    }

    void completeRequest() {
        activeConnections--;
    }
}

class LoadBalancer {
    List<Server> servers;

    LoadBalancer(List<Server> servers) {
        this.servers = servers;
    }

    Server getLeastLoadedServer() {
        return Collections.min(servers, Comparator.comparingInt(s -> s.activeConnections));
    }

    Server routeRequest() {
        Server server = getLeastLoadedServer();
        server.handleRequest();
        return server;
    }
}

public class LeastConnectionDemo {
    public static void main(String[] args) {
        List<Server> servers = Arrays.asList(new Server("A"), new Server("B"), new Server("C"));
        LoadBalancer lb = new LoadBalancer(servers);

        Server server = lb.routeRequest();
        server.completeRequest();
    }
}`;

const LCT_EXAMPLE_JS = `class Server {
    constructor(name) {
        this.name = name;
        this.activeConnections = 0;
    }

    handleRequest() {
        this.activeConnections++;
        console.log(\`\${this.name} is handling the request...\`);
    }

    completeRequest() {
        this.activeConnections--;
    }
}

class LoadBalancer {
    constructor(servers) {
        this.servers = servers;
    }

    getLeastLoadedServer() {
        return this.servers.reduce((prev, curr) =>
            prev.activeConnections < curr.activeConnections ? prev : curr
        );
    }

    routeRequest() {
        const server = this.getLeastLoadedServer();
        server.handleRequest();
        return server;
    }
}

// Example usage
const servers = [new Server("A"), new Server("B"), new Server("C")];
const lb = new LoadBalancer(servers);

const server = lb.routeRequest();
server.completeRequest();`;

const LCT_EXAMPLE_PYTHON = `class Server:
    def __init__(self, name):
        self.name = name
        self.active_connections = 0

    def handle_request(self):
        self.active_connections += 1
        print(f"{self.name} is handling the request...")

    def complete_request(self):
        self.active_connections -= 1

class LoadBalancer:
    def __init__(self, servers):
        self.servers = servers

    def get_least_loaded_server(self):
        return min(self.servers, key=lambda s: s.active_connections)

    def route_request(self):
        server = self.get_least_loaded_server()
        server.handle_request()
        return server

# Example usage
servers = [Server("A"), Server("B"), Server("C")]
lb = LoadBalancer(servers)

server = lb.route_request()  # Routes to least connected
server.complete_request()`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={LCT_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={LCT_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={LCT_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
    <div className="mtop15p">		  
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
                  { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
                  { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Advantages</b></h2></div>
    <div>
      <ul>
         <li className="mtop5p">Adapts to varying request loads</li>
         <li className="mtop5p">Avoids overloading any single server</li>
         <li className="mtop5p">Ideal for long-lived or resource-intensive connections</li>
      </ul>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Limitations</b></h2></div>
    <div>
      <ul>
         <li className="mtop5p">Assumes equal server capacity</li>
         <li className="mtop5p">Does not consider CPU or memory usage (unless extended)</li>
         <li className="mtop5p">Overhead of maintaining real-time connection counts</li>
      </ul>
    </div>
 </div>);
};

export default Example;