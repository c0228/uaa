import React from "react";
import { Tab, Badge, Highlight } from 'e-ui-react';

const GR_EXAMPLE_JAVA = `import java.util.*;

public class GraphRepresentation {
    public static void main(String[] args) {
        // Edge List
        List<String[]> edgeList = Arrays.asList(
            new String[]{"A", "B"},
            new String[]{"A", "C"},
            new String[]{"B", "D"}
        );

        // Adjacency List
        Map<String, List<String>> adjList = new HashMap<>();
        adjList.put("A", Arrays.asList("B", "C"));
        adjList.put("B", Arrays.asList("A", "D"));
        adjList.put("C", Arrays.asList("A"));
        adjList.put("D", Arrays.asList("B"));

        // Print graph
        for (String v : adjList.keySet()) {
            System.out.println(v + " → " + adjList.get(v));
        }
    }
}`;

const GR_EXAMPLE_JS = `// Edge List
const edgeList = [['A', 'B'], ['A', 'C'], ['B', 'D']];

// Adjacency List
const adjList = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A'],
  D: ['B']
};

// Display adjacency list
for (let vertex in adjList) {
  console.log(\`\${vertex} -> \${adjList[vertex].join(', ')}\`);
}`;

const GR_EXAMPLE_PYTHON = `# Edge List
edge_list = [('A', 'B'), ('A', 'C'), ('B', 'D')]

# Adjacency Matrix
vertices = ['A', 'B', 'C', 'D']
adj_matrix = [[0]*4 for _ in range(4)]
vertex_map = {v: i for i, v in enumerate(vertices)}

for u, v in edge_list:
    i, j = vertex_map[u], vertex_map[v]
    adj_matrix[i][j] = 1
    adj_matrix[j][i] = 1  # For undirected graph

# Adjacency List
adj_list = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A'],
    'D': ['B']
}`;

const Example = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={GR_EXAMPLE_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={GR_EXAMPLE_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={GR_EXAMPLE_PYTHON} lang="python" />
        </div>);
    };

    const Tag = ({ name }) =>{
        return (<Badge type="warning" label={<b>{name}</b>} size="12" style={{ marginLeft:'5px' }} />);
    };
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Common Graph Representations</b></h2></div>
    <div className="mtop5p">There are three main ways to represent a graph in programming:</div>
    <div>
        <ol>
            <li>
                <div><h4 className="blog-head"><b><b>Edge List</b></b></h4></div>
                <div>List of all edges - <Tag name="Good for sparse graphs" /></div>
            </li>
            <li>
                <div><h4 className="blog-head"><b><b>Adjacency Matrix</b></b></h4></div>
                <div>2D matrix storing edge existence - <Tag name="Good for dense graphs" /></div>
            </li>
            <li>
                <div><h4 className="blog-head"><b><b>Adjacency List</b></b></h4></div>
                <div>A dictionary or map of vertices to neighbors - <Tag name="Most memory-efficient and widely used" /></div>
            </li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Example:</b></h2></div>
    <div className="mtop5p">
        <div>Let’s define:</div>
        <div>
            <ul>
                <li><b>V = &#123;A, B, C, D&#125;</b></li>
                <li><b>E = &#123;(A, B), (A, C), (B, D)&#125;</b></li>
            </ul>
        </div>
        <div>This represents a graph with:</div>
        <div>
            <ul>
                <li><b>4 nodes:</b> A, B, C, D</li>
                <li><b>3 edges:</b> A–B, A–C, B–D</li>
            </ul>
        </div>
        <div>This can be either <b>undirected</b> or <b>directed</b>, based on the nature of the edges.</div>
    </div>

    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

 </div>);
};

export default Example;