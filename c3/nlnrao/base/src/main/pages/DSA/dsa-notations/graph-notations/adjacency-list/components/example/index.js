import React from "react";
import { Tab, Highlight } from "e-ui-react";

const AL_EXAMPLE_LUA = `     0
    / \\
   1---2
    \\ /
     3
`;

const AL_REPRESENT_LUA = `0 -> [1, 2]  
1 -> [0, 2, 3]  
2 -> [0, 1, 3]  
3 -> [1, 2]
`;

const AL_EXAMPLE_JAVA = `import java.util.*;

class Graph {
    private int V;
    private LinkedList<Integer>[] adjList;

    public Graph(int V) {
        this.V = V;
        adjList = new LinkedList[V];
        for (int i = 0; i < V; i++)
            adjList[i] = new LinkedList<>();
    }

    public void addEdge(int u, int v) {
        adjList[u].add(v);
        adjList[v].add(u); // For undirected graph
    }

    public void display() {
        for (int i = 0; i < V; i++) {
            System.out.print(i + " → ");
            for (Integer node : adjList[i]) {
                System.out.print(node + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Graph g = new Graph(4);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 3);
        g.display();
    }
}`;

const AL_EXAMPLE_JS = `class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.adjList = new Map();

        for (let i = 0; i < vertices; i++) {
            this.adjList.set(i, []);
        }
    }

    addEdge(u, v) {
        this.adjList.get(u).push(v);
        this.adjList.get(v).push(u); // For undirected graph
    }

    display() {
        for (let [key, value] of this.adjList) {
            console.log(\`\${key} -> \${value.join(", ")}\`);
        }
    }
}

// Example
const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.display();`;

const AL_EXAMPLE_PYTHON = `class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.adj_list = [[] for _ in range(vertices)]

    def add_edge(self, u, v):
        self.adj_list[u].append(v)
        self.adj_list[v].append(u)  # For undirected graph

    def display(self):
        for i in range(self.V):
            print(f"{i} → {self.adj_list[i]}")

# Example
g = Graph(4)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(1, 3)
g.add_edge(2, 3)
g.display()`;

const Example = () =>{

    const JavaCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={AL_EXAMPLE_JAVA} lang="java" />
    </div>);
    };

    const JSCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={AL_EXAMPLE_JS} lang="javascript" />
    </div>);
    };

    const PythonCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={AL_EXAMPLE_PYTHON} lang="python" />
    </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Graph:</b></h2></div>
    <div className="mtop5p">Let's use the same undirected graph for comparison:</div>
    <div className="mtop5p">
        <Highlight content={AL_EXAMPLE_LUA} lang="lua" />
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Adjacency List Representation::</b></h5></div>
    <div className="mtop5p">
        <Highlight content={AL_REPRESENT_LUA} lang="lua" />
    </div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;