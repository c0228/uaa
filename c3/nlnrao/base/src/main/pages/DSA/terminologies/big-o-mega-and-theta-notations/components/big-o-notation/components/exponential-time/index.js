import React from "react";
import { Card, Tab, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const PYTHON_EXPONENTIAL_ACCESS = `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)`;

const JAVA_EXPONENTIAL_ACCESS = `public class Fibonacci {
    public static int fib(int n) {
        if (n <= 1) return n;
        return fib(n - 1) + fib(n - 2);
    }
}`;

const JS_EXPONENTIAL_ACCESS = `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}`;

const PYTHON_MEMO_EXPONENTIAL_ACCESS = `from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)`;

const O_2_N_EXAMPLE = `f(5) -> f(4) + f(3)
     -> f(3) + f(2) + f(2) + f(1)
     -> ...`;

const ExponentialTime = () =>{

  const PythonCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PYTHON_EXPONENTIAL_ACCESS} lang="python" />
    </div>);
  };

  const JavaCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JAVA_EXPONENTIAL_ACCESS} lang="java" />
    </div>);
  };

  const JSCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JS_EXPONENTIAL_ACCESS} lang="javascript" />
    </div>);
  };

  const PythonMemoizedCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PYTHON_MEMO_EXPONENTIAL_ACCESS} lang="python" />
    </div>);
  };

  const JavaMemoizedCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}></div>);
  };
    
  const JSMemoizedCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}></div>);
  };

  return (<div>
    <div className="blog-head blog-hgl-title"><b>O(2<sup>n</sup>) - Exponential Time</b></div>
    <div className="mtop5p">
    An algorithm runs in <b>O(2<sup>n</sup>)</b> time when the growth of operations doubles with each 
    additional input element.
    </div>
    <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
        <div>For <code><b>n = 5</b></code>, operations ≈ 32</div>
        <div>For <code><b>n = 50</b></code>, operations ≈ 1.12 * 10<sup>15</sup> </div>
      </Card>
    </div>
    <div className="mtop5p">
      Typically seen in:
      <ul>
        <li>Brute-force solutions for <b>combinatorics</b></li>
        <li><b>Recursive</b> algorithms without memoization</li>
        <li><b>Backtracking</b> and <b>decision tree</b> problems</li>
      </ul>
    </div>

    <div className="mtop15p">
      <b><u>Best Example:</u> Fibonacci Sequence (Naive Recursive)</b>
    </div>

    <div className="mtop5p">
          <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<PythonCode />) },
              { id:"java", label:"Java", url:"#",  component:(<JavaCode />) },
              { id:"javascript", label:"Javascript", url:"#",  component:(<JSCode />) }]} />
    </div>

    <div><h5 className="blog-head"><b>Why is this O(2<sup>n</sup>)?</b></h5></div>
    <div>
        <ul>
          <li>Each call branches into <b>two more calls</b>.</li>
          <li>The recursive tree has <b>2<sup>n</sup> nodes</b>.</li>
        </ul>
    </div>
    <div><b>For example:</b></div>
    <div><Highlight content={O_2_N_EXAMPLE} lang="javascript" /></div>

    <div><h5 className="blog-head"><b>Time Complexity Breakdown:</b></h5></div>
    <div>
      <SimpleTable header={["n","Calls (approx)"]} columns={[
        ["5","15"],
        ["10","177"],
        ["20","21,891"],
        ["30","2,692,537"]
      ]} />
    </div>

    <div><h5 className="blog-head"><b>Drawbacks of Exponential Time:</b></h5></div>
    <div>
      <SimpleTable header={["Problem","Why It’s Bad"]} columns={[
        [(<div>Slow even for small inputs (<code><b>n &gt; 30</b></code>)</div>),"Becomes unusable"],
        ["Massive branching","Recomputes same subproblems"],
        ["CPU spikes and crashes","Especially in brute-force trees"]
      ]} />
    </div>

    <div><h5 className="blog-head"><b>Real-World O(2<sup>n</sup>) Examples:</b></h5></div>
    <div>
      <SimpleTable header={["Problem","Description"]} columns={[
        ["Subset Sum Problem", "Try all subsets of items"],
        ["Traveling Salesman Problem","Try all permutations of cities"],
        ["Knapsack Problem (recursive)","Choose take/skip for every item"],
        ["Boolean Expression Evaluation",(<div>All combinations of true/false for <code><b>n</b></code> variables</div>)]
      ]} />
    </div>

    <div><h5 className="blog-head"><b>Optimization: Use Memoization -</b></h5></div>
    <div className="mtop5p">Reduce time from <code><b>O(2<sup>n</sup>) -&gt; O(n)</b></code> using Dynamic Programming.</div>
    <div className="mtop15p"><b>Memoized Fibonacci:</b></div>
    <div className="mtop5p">
          <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<PythonMemoizedCode />) },
              { id:"java", label:"Java", url:"#",  component:(<JavaMemoizedCode />) },
              { id:"javascript", label:"Javascript", url:"#",  component:(<JSMemoizedCode />) }]} />
    </div>
    <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
        <b>Note:</b>
        <div>
          <ul>
            <li>O(2<sup>n</sup>) grows <b>explosively</b>.</li>
            <li>Typically seen in <b>naive recursive</b> or <b>brute-force algorithms</b>.</li>
            <li>Avoid unless:
              <ul>
                <li>Input size is very small (<code><b>n ≤ 20</b></code>)</li>
                <li>It’s a <b>sub-step</b> of a larger optimized algorithm</li>
              </ul>
            </li>
            <li>Always look for <code><b>DP</b></code>, <code><b>greedy</b></code>, or <code><b>heuristic</b></code> alternatives</li>
          </ul>
        </div>
      </Card>
    </div>
  </div>);
};

export default ExponentialTime;