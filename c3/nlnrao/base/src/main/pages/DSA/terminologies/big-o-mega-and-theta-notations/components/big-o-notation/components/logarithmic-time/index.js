import React from "react";
import { Card, Tab, Highlight } from "e-ui-react";

const PYTHON_LOGARITHMIC_ACCESS = `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
`;

const JAVA_LOGARITHMIC_ACCESS = `public class LogarithmicTime {
    public static int binarySearch(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}
`;

const JS_LOGARITHMIC_ACCESS = `function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
`;

const LogarithmicTime = () =>{
  const PythonCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PYTHON_LOGARITHMIC_ACCESS} lang="python" />
      <div><h5 className="blog-head"><b>Explaination:</b></h5></div>
      <div>
        <ul>
          <li>At each iteration, the search space is cut in <b>half</b>.</li>
          <li>If the array has 1,000,000 elements, binary search will check at 
            most <b>log<sub>2</sub>(1,000,000) ≈ 20 times</b>.</li>
          <li>Time complexity: <b>O(log n)</b>.</li>
        </ul>
      </div>
    </div>);
  };
  const JavaCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JAVA_LOGARITHMIC_ACCESS} lang="python" />
      <div><h5 className="blog-head"><b>Explaination:</b></h5></div>
      <div>
        <ul>
          <li><code><b>while</b></code> loop performs <code><b>log<sub>2</sub>(n)</b></code> steps.</li>
          <li>Each comparison discards half the array.</li>
          <li>Very fast for large inputs.</li>
        </ul>
      </div>
    </div>);
  };
  const JSCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JS_LOGARITHMIC_ACCESS} lang="python" />
      <div><h5 className="blog-head"><b>Explaination:</b></h5></div>
      <div>
        <ul>
          <li>Very few operations even for huge arrays.</li>
          <li>Great for searching in sorted datasets like logs, leaderboards, etc.</li>
        </ul>
      </div>
    </div>);
  };
  return (<div>
    <div className="blog-head blog-hgl-title"><b>O(log n) - Logarithmic Time</b></div>
    <div className="mtop5p">
    An algorithm runs in <b>O(log n)</b> time when it <b>reduces the problem size by a constant factor</b> (usually 
    half) at each step.
    </div>
    <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
        Very efficient — works well for <b>large datasets</b>.
      </Card>
    </div>
    <div className="mtop15p"><b><u>Best Example:</u> Binary Search</b></div>
    <div className="mtop5p"><b>Binary Search</b> works by repeatedly dividing a <b>sorted</b> array in half to find a target value.</div>
    <div align="center"><h5 className="blog-head"><b>Other Examples of O(log n)</b></h5></div>
    <div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr style={{ backgroundColor:'#eee' }}>
              <td><b>Operation</b></td>
              <td><b>Description</b></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Binary Search Tree lookup</td>
              <td>Navigates left/right at each level</td>
            </tr>
            <tr>
              <td>Heap insert/delete</td>
              <td>Adjusts along tree height (logarithmic levels)</td>
            </tr>
            <tr>
              <td>Bitwise operations (<code><b>shift &gt;&gt; n</b></code>)</td>
              <td>Each shift halves the number</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="mtop5p">
            <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<PythonCode />) },
                { id:"java", label:"Java", url:"#",  component:(<JavaCode />) },
                { id:"javascript", label:"Javascript", url:"#",  component:(<JSCode />) }]} />
    </div>
    <div align="center" className="mtop15p"><h5 className="blog-head"><b>Visual Representation</b></h5></div>
    <div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr style={{ backgroundColor:'#eee' }}>
              <td><b>Array Size (n)</b></td>
              <td><b>Max Steps (log<sub>2</sub> n)</b></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1,024</td>
              <td>10</td>
            </tr>
            <tr>
              <td>1,000,000</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>);
};

export default LogarithmicTime;