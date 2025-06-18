import React from "react";
import { Card, Tab, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const PYTHON_QUADRATIC_ACCESS = `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):  # Reduce comparisons per pass
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
`;

const JAVA_QUADRATIC_ACCESS =  `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}
`;

const JS_QUADRATIC_ACCESS = `function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
`;

const QuadraticTime = () =>{

  const PythonCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PYTHON_QUADRATIC_ACCESS} lang="python" />
      <div>
        <div><h5><b>Explanation:</b></h5></div>
        <div>
          <ul>
            <li>Outer loop runs <code><b>n times</b></code>.</li>
            <li>Inner loop runs up to <code><b>n times</b></code> for each outer loop.</li>
            <li>Total comparisons ≈ <code><b>n * n = O(n<sup>2</sup>)</b></code>.</li>
          </ul>
        </div>
      </div>
    </div>);
  };

  const JavaCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JAVA_QUADRATIC_ACCESS} lang="java" />
      <div>
        <div><h5><b>Explanation:</b></h5></div>
        <div>
          <ul>
            <li>Outer loop runs <code><b>n times</b></code>.</li>
            <li>Inner loop runs up to <code><b>n times</b></code> for each outer loop.</li>
            <li>Total comparisons ≈ <code><b>n * n = O(n<sup>2</sup>)</b></code>.</li>
          </ul>
        </div>
      </div>
    </div>);
  };

  const JSCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JS_QUADRATIC_ACCESS} lang="javascript" />
      <div>
        <div><h5><b>Explanation:</b></h5></div>
        <div>
          <ul>
            <li>Outer loop runs <code><b>n times</b></code>.</li>
            <li>Inner loop runs up to <code><b>n times</b></code> for each outer loop.</li>
            <li>Total comparisons ≈ <code><b>n * n = O(n<sup>2</sup>)</b></code>.</li>
          </ul>
        </div>
      </div>
    </div>);
  };

  return (<div>
    <div className="blog-head blog-hgl-title"><b>O(n<sup>2</sup>) - Quadratic Time</b></div>
    <div className="mtop15p">
    An algorithm runs in <b>O(n<sup>2</sup>)</b> time when it performs a number of operations proportional 
    to the <b>square of the input size</b>.
    </div>
    <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
        If input size doubles, execution time increases <b>fourfold</b> (2² = 4).
      </Card>
    </div>
    <div className="mtop5p">
      This usually happens when:
      <ul>
        <li>There are <b>nested loops</b> over the same dataset.</li>
        <li>Every element needs to be compared with <b>every other element</b>.</li>
      </ul>
    </div>
    <div className="mtop15p">
      <div><b><u>Best Example:</u> Bubble Sort</b></div>
      <div>Bubble Sort repeatedly steps through the list, compares adjacent elements, and 
        swaps them if they are in the wrong order.</div>
    </div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<PythonCode />) },
          { id:"java", label:"Java", url:"#",  component:(<JavaCode />) },
          { id:"javascript", label:"Javascript", url:"#",  component:(<JSCode />) }]} />
    </div>
    <div className="mtop15p">
      <div><h5><b>Time Complexity Breakdown:</b></h5></div>
      <div className="mtop5p">
        <SimpleTable header={["Input Size (n)", (<div>Comparisons (n<sup>2</sup>)</div>) ]} 
          columns={[["10","100"],["100","10,000"],["1,000","1,000,000"]]} />
      </div>

      <div><h5><b>Other Examples of O(n<sup>2</sup>):</b></h5></div>
      <div className="mtop5p">
        <SimpleTable header={["Algorithm", "Description"]} 
          columns={[
            ["Selection Sort","Finds the minimum in the unsorted part n times"],
            ["Insertion Sort (worst case)","Shifts elements for every insertion"],
            ["Naive String Matching","Checks every position for pattern match"],
            ["All-Pairs Comparison","i.e. finding duplicate pairs"]  
          ]} />
      </div>

      <div><h5><b>Real-World Use Cases (when n is small):</b></h5></div>
      <div className="mtop5p">
        <SimpleTable header={["Use Case", "Why It’s Okay"]} 
          columns={[
            ["Educational tools","Easy to understand"],
            ["Datasets < 1000 elements","Performance impact negligible"],
            ["Brute-force pattern matching","When smarter solutions are too complex"],  
          ]} />
      </div>

      <div><h5><b>Drawbacks of O(n<sup>2</sup>):</b></h5></div>
      <div>
        <ul>
          <li>Not scalable for large data.</li>
          <li>Significant performance drop even with moderate increase in input size.</li>
          <li>Often replaced with <b>O(n log n)</b> algorithms in production.</li>
        </ul>
      </div>

      <div className="mtop15p">
          <Card padding={15} backgroundColor="#eee">
            <div><h5><b>Note:</b></h5></div>
            <div>
              <ul>
                <li><code><b>O(n<sup>2</sup>)</b></code> involves <b>nested iterations</b> over input.</li>
                <li>It is acceptable for <b>small datasets</b> or for <b>learning purposes</b>.</li>
                <li>Sorting algorithms like <b>Bubble Sort</b>, <b>Selection Sort</b>, and <b>Insertion Sort</b> (in 
                worst case) fall into this category.</li>
              </ul>
            </div>
          </Card>
      </div>

    </div>
  </div>);
};

export default QuadraticTime;