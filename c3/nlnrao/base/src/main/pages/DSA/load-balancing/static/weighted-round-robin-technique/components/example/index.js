import React from "react";
import { Tab, Highlight } from "e-ui-react";

const WRR_EXAMPLE_JAVA = `import java.util.*;

class Server {
    String name;
    int weight;
    Server(String name, int weight) {
        this.name = name;
        this.weight = weight;
    }
}

public class WeightedRoundRobin {
    private List<Server> servers;
    private int currentIndex = -1;
    private int currentWeight = 0;
    private int maxWeight;
    private int gcdWeight;

    public WeightedRoundRobin(List<Server> servers) {
        this.servers = servers;
        this.maxWeight = servers.stream().mapToInt(s -> s.weight).max().getAsInt();
        this.gcdWeight = gcdOfWeights(servers);
    }

    private int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }

    private int gcdOfWeights(List<Server> servers) {
        int result = servers.get(0).weight;
        for (int i = 1; i < servers.size(); i++) {
            result = gcd(result, servers.get(i).weight);
        }
        return result;
    }

    public Server getNextServer() {
        while (true) {
            currentIndex = (currentIndex + 1) % servers.size();
            if (currentIndex == 0) {
                currentWeight -= gcdWeight;
                if (currentWeight <= 0) {
                    currentWeight = maxWeight;
                }
            }

            if (servers.get(currentIndex).weight >= currentWeight) {
                return servers.get(currentIndex);
            }
        }
    }

    public static void main(String[] args) {
        List<Server> servers = Arrays.asList(
            new Server("A", 5),
            new Server("B", 3),
            new Server("C", 2)
        );
        WeightedRoundRobin wrr = new WeightedRoundRobin(servers);
        for (int i = 0; i < 10; i++) {
            System.out.println(wrr.getNextServer().name);
        }
    }
}`;

const WRR_EXAMPLE_JS = `class WeightedRoundRobin {
    constructor(servers) {
        this.servers = servers;
        this.index = -1;
        this.currentWeight = 0;
        this.maxWeight = Math.max(...servers.map(s => s.weight));
        this.gcdWeight = this.gcdArray(servers.map(s => s.weight));
    }

    gcd(a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
    }

    gcdArray(arr) {
        return arr.reduce((a, b) => this.gcd(a, b));
    }

    getNextServer() {
        while (true) {
            this.index = (this.index + 1) % this.servers.length;
            if (this.index === 0) {
                this.currentWeight -= this.gcdWeight;
                if (this.currentWeight <= 0) {
                    this.currentWeight = this.maxWeight;
                    if (this.currentWeight === 0) return null;
                }
            }

            if (this.servers[this.index].weight >= this.currentWeight) {
                return this.servers[this.index].name;
            }
        }
    }
}

// Example usage
const servers = [
    { name: 'A', weight: 5 },
    { name: 'B', weight: 3 },
    { name: 'C', weight: 2 }
];

const wrr = new WeightedRoundRobin(servers);
for (let i = 0; i < 10; i++) {
    console.log(wrr.getNextServer());
}`;

const WRR_EXAMPLE_PYTHON = `class WeightedRoundRobin:
    def __init__(self, servers):
        self.servers = servers
        self.index = 0
        self.weights = [s['weight'] for s in servers]
        self.max_weight = max(self.weights)
        self.gcd_weight = self._gcd_list(self.weights)
        self.current_weight = 0

    def _gcd(self, a, b):
        while b:
            a, b = b, a % b
        return a

    def _gcd_list(self, weights):
        result = weights[0]
        for w in weights[1:]:
            result = self._gcd(result, w)
        return result

    def get_server(self):
        while True:
            self.index = (self.index + 1) % len(self.servers)
            if self.index == 0:
                self.current_weight -= self.gcd_weight
                if self.current_weight <= 0:
                    self.current_weight = self.max_weight
                if self.current_weight == 0:
                    return None
            if self.weights[self.index] >= self.current_weight:
                return self.servers[self.index]['name']

# Example usage
servers = [
    {'name': 'A', 'weight': 5},
    {'name': 'B', 'weight': 3},
    {'name': 'C', 'weight': 2}
]

wrr = WeightedRoundRobin(servers)
for _ in range(10):
    print(wrr.get_server())`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={WRR_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={WRR_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={WRR_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Use Case</b></h2></div>
    <div className="mtop15p">
      <div>Consider 3 servers:</div>
      <div>
         <ul>
            <li className="mtop5p">Server A (weight 5)</li>
            <li className="mtop5p">Server B (weight 3)</li>
            <li className="mtop5p">Server C (weight 2)</li>
         </ul>
      </div>
    </div>
    <div className="mtop15p">
      <div>For every 10 requests, the expected distribution would be:</div>
      <div>
         <ul>
            <li className="mtop5p"><i><u>Server A</u></i>: 5 requests</li>
            <li className="mtop5p"><i><u>Server B</u></i>: 3 requests</li>
            <li className="mtop5p"><i><u>Server C</u></i>: 2 requests</li>
         </ul>
      </div>
    </div>
    <div className="mtop15p">Let’s explore how to implement <b>Weighted Round Robin</b> in three languages.</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;