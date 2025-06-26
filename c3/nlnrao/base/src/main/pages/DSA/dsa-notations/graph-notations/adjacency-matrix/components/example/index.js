import React from "react";
import { Tab, Highlight } from "e-ui-react";

const AM_EXAMPLE_LUA = `
      0
    /   \\
   1 _ _ 2
    \\   /
      3
`;

const AM_EXAMPLE_CSS = `   0 1 2 3
0 [0 1 1 0]
1 [1 0 1 1]
2 [1 1 0 1]
3 [0 1 1 0]
`;

const AM_EXAMPLE_JAVA = `class Graph {
    private int[][] adjMatrix;
    private int V;

    public Graph(int V) {
        this.V = V;
        adjMatrix = new int[V][V];
    }

    public void addEdge(int u, int v) {
        adjMatrix[u][v] = 1;
        adjMatrix[v][u] = 1; // Undirected
    }

    public void display() {
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                System.out.print(adjMatrix[i][j] + " ");
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

const AM_EXAMPLE_JS = `class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.adjMatrix = Array.from({ length: vertices }, () => Array(vertices).fill(0));
    }

    addEdge(u, v) {
        this.adjMatrix[u][v] = 1;
        this.adjMatrix[v][u] = 1; // Undirected
    }

    display() {
        this.adjMatrix.forEach(row => console.log(row.join(" ")));
    }
}

// Example usage
const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.display();`;

const AM_EXAMPLE_PYTHON = `# Undirected Graph using Adjacency Matrix
class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.adj_matrix = [[0] * vertices for _ in range(vertices)]

    def add_edge(self, u, v):
        self.adj_matrix[u][v] = 1
        self.adj_matrix[v][u] = 1  # Undirected

    def display(self):
        for row in self.adj_matrix:
            print(row)

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
        <Highlight content={AM_EXAMPLE_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={AM_EXAMPLE_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={AM_EXAMPLE_PYTHON} lang="python" />
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Graph</b></h2></div>
    <div className="mtop15p">Consider this undirected graph with 4 nodes (0 to 3):</div>
    <div className="mtop5p">
        <Highlight content={AM_EXAMPLE_LUA} lang="lua" />
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Adjacency Matrix:</b></h4></div>
    <div className="mtop5p">
        <Highlight content={AM_EXAMPLE_CSS} lang="css" />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Example</b></h2></div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;