import React from "react";
import { Tab, Highlight } from "e-ui-react";

const DEGREE_EXAMPLE_LESS = `A --- B
|     |
C     D
`;

const DEGREE_EXAMPLE_JAVA = `import java.util.*;

public class DegreeCalculator {
    public static void main(String[] args) {
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("A", Arrays.asList("B", "C"));
        graph.put("B", Arrays.asList("A", "D"));
        graph.put("C", Arrays.asList("A"));
        graph.put("D", Arrays.asList("B"));

        for (String vertex : graph.keySet()) {
            System.out.println("Deg(" + vertex + ") = " + graph.get(vertex).size());
        }
    }
}`;

const DEGREE_OUTPUT_JAVA = `Deg(A) = 2  
Deg(B) = 2  
Deg(C) = 1  
Deg(D) = 1`;

const DEGREE_EXAMPLE_JS = `function calculateDegrees(graph) {
    for (let vertex in graph) {
        console.log(\`Deg(\${vertex}) = \${graph[vertex].length}\`);
    }
}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A'],
    D: ['B']
};

calculateDegrees(graph);`;

const DEGREE_OUTPUT_JS = `Deg(A) = 2  
Deg(B) = 2  
Deg(C) = 1  
Deg(D) = 1`;

const DEGREE_EXAMPLE_PYTHON = `def calculate_degrees(graph):
    degrees = {}
    for vertex in graph:
        degrees[vertex] = len(graph[vertex])
    return degrees

# Undirected graph represented as adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A'],
    'D': ['B']
}

print("Degrees:", calculate_degrees(graph))`;

const DEGREE_OUTPUT_PYTHON = `Degrees: {'A': 2, 'B': 2, 'C': 1, 'D': 1}`;

const Example = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={DEGREE_EXAMPLE_JAVA} lang="java" />
        <div className="mtop5p"><b>Output:</b></div>
        <Highlight content={DEGREE_OUTPUT_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={DEGREE_EXAMPLE_JS} lang="javascript" />
        <div className="mtop5p"><b>Output:</b></div>
        <Highlight content={DEGREE_OUTPUT_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={DEGREE_EXAMPLE_PYTHON} lang="python" />
        <div className="mtop5p"><b>Output:</b></div>
        <Highlight content={DEGREE_OUTPUT_PYTHON} lang="python" />
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
    <div className="mtop15p">Let’s consider an undirected graph represented as:</div>
    <div className="mtop5p"><Highlight content={DEGREE_EXAMPLE_LESS} lang="css" /></div>
    <div className="mtop5p">
        <ul>
            <li>Vertex A is connected to B and C -&gt; <code><b>Deg(A) = 2</b></code></li>
            <li>Vertex B is connected to A and D -&gt; <code><b>Deg(B) = 2</b></code></li>
            <li>Vertex C is connected to A -&gt; <code><b>Deg(C) = 1</b></code></li>
            <li>Vertex D is connected to B -&gt; <code><b>Deg(D) = 1</b></code></li>
        </ul>
    </div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;