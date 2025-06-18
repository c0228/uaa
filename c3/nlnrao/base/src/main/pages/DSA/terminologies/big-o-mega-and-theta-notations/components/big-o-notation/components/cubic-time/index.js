import React from "react";
import { Card, Tab, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const PYTHON_CUBIC_ACCESS = `def multiply_matrices(A, B):
    n = len(A)
    result = [[0] * n for _ in range(n)]
    
    for i in range(n):         # Loop 1
        for j in range(n):     # Loop 2
            for k in range(n): # Loop 3
                result[i][j] += A[i][k] * B[k][j]
    
    return result`;

const JAVA_CUBIC_ACCESS = `public class MatrixMultiplication {
    public static int[][] multiply(int[][] A, int[][] B) {
        int n = A.length;
        int[][] result = new int[n][n];

        for (int i = 0; i < n; i++) {          // Loop 1
            for (int j = 0; j < n; j++) {      // Loop 2
                for (int k = 0; k < n; k++) {  // Loop 3
                    result[i][j] += A[i][k] * B[k][j];
                }
            }
        }
        return result;
    }
}`;

const JS_CUBIC_ACCESS = `function multiplyMatrices(A, B) {
    const n = A.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {         // Loop 1
        for (let j = 0; j < n; j++) {     // Loop 2
            for (let k = 0; k < n; k++) { // Loop 3
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}`;

const CubicTime = () =>{

  const PythonCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PYTHON_CUBIC_ACCESS} lang="python" />
    </div>);
  };

  const JavaCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JAVA_CUBIC_ACCESS} lang="java" />
    </div>);
  };

  const JSCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JS_CUBIC_ACCESS} lang="javascript" />
    </div>);
  };




  return (<div>
    <div className="blog-head blog-hgl-title"><b>O(n<sup>3</sup>) - Cubic Time</b></div>
    <div className="mtop15p">
      An algorithm runs in <b>O(n<sup>3</sup>)</b> time when it performs a number of operations proportional to 
      the <b>cube of the input size</b>.
    </div>
    <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
        For input <code><b>n</b></code>, the steps required are proportional to <code><b>n * n * n</b></code>.
      </Card>
    </div>
    <div className="mtop5p">
      This typically happens when:
      <ul>
        <li>There are <b>three nested loops</b>, each depending on the input size.</li>
        <li>You're working with 3D matrices or checking all <b>triplet combinations</b>.</li>
      </ul>
    </div>
    <div className="mtop15p">
      <div><b><u>Best Example:</u> Matrix Multiplication (Naive Implementation)</b></div>
      <div className="mtop5p">We multiply two <code><b>n * n</b></code> matrices using three nested loops.</div>
    </div>

    <div className="mtop5p">
      <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<PythonCode />) },
          { id:"java", label:"Java", url:"#",  component:(<JavaCode />) },
          { id:"javascript", label:"Javascript", url:"#",  component:(<JSCode />) }]} />
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Time Complexity Comparison:</b></h5></div>
    <div className="mtop5p">
      <SimpleTable header={["Matrix Size (n)", (<div>Operations (n<sup>3</sup>)</div>)]} 
        columns={[["10","1,000"],["100","1,000,000"],["1,000","1,000,000,000"]]} />
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Other O(n<sup>3</sup>) Scenarios:</b></h5></div>
    <div className="mtop5p">
      <SimpleTable header={["Problem", "Description"]} 
        columns={[
            ["All triplets in an array","Three nested loops to check all triplets"],
            ["Floyd–Warshall algorithm","Finds shortest paths between all nodes"],
            ["3D Matrix Computations","Processing each element in a 3D grid"],
            ["Dynamic Programming with 3 parameters","Like 3D DP tables in sequence problems"]
          ]} />
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>When to Avoid O(n<sup>3</sup>):</b></h5></div>
    <div>
      <ul>
        <li>Datasets with <code><b>n &gt; 1000</b></code> become impractical.</li>
        <li>Replace with more efficient algorithms when possible.
          <ul>
            <li><b><u>For matrix multiplication:</u></b> <i>Strassen’s algorithm = O(n^2.81)</i></li>
            <li><b><u>For shortest paths:</u></b> <i>Dijkstra with a heap = O(n log n)</i></li>
          </ul>
        </li>
      </ul>
    </div>

    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
          <div><h5><b>Note:</b></h5></div>
          <div>
            <ul>
              <li><b>O(n<sup>3</sup>)</b> usually means three nested loops.</li>
              <li>Great for understanding <b>matrix operations</b> and <b>DP problems</b>.</li>
              <li>Be cautious with large inputs – may lead to performance issues.</li>
            </ul>
          </div>
        </Card>
    </div>
  </div>);
};

export default CubicTime;