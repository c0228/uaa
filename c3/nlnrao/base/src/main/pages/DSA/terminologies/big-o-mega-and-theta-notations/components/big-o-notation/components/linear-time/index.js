import React from "react";
import { Tab, Card, Highlight } from 'e-ui-react';

const PYTHON_LINEAR_ACCESS= `def sum_of_elements(arr):
    total = 0
    for num in arr:
        total += num
    return total`;

const JAVA_LINEAR_ACCESS= `public class LinearTime {
    public static int sumOfElements(int[] arr) {
        int total = 0;
        for (int num : arr) {
            total += num;
        }
        return total;
    }
}`;

const JS_LINEAR_ACCESS= `function sumOfElements(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}`;

const LinearTime = () =>{
 const PythonCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
     <Highlight content={PYTHON_LINEAR_ACCESS} lang="python" />
     <div className="mtop5p"><h5 className="blog-head"><b>Explanation:</b></h5></div>
     <div>
        <ul>
            <li>This loop runs once for each element in the list.</li>
            <li>If the list has <code><b>n</b></code> elements, the loop runs <code><b>n</b></code> times.</li>
            <li>Each iteration performs a constant time operation (<code><b>+=</b></code>), so the total time 
            is proportional to <code><b>n</b></code>.</li>
        </ul>
     </div>
    </div>);
 };

 const JavaCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
     <Highlight content={JAVA_LINEAR_ACCESS} lang="java" />
     <div className="mtop5p"><h5 className="blog-head"><b>Explanation:</b></h5></div>
     <div>
        <ul>
            <li>Uses an enhanced for-loop (for-each).</li>
            <li>Iterates through the array exactly once.</li>
            <li>Time complexity is directly proportional to the number of elements.</li>
        </ul>
     </div>
    </div>);
 };

 const JSCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JS_LINEAR_ACCESS} lang="javascript" />
      <div className="mtop5p"><h5 className="blog-head"><b>Explanation:</b></h5></div>
      <div>
        <ul>
            <li>Uses <code><b>for...of</b></code> loop to iterate.</li>
            <li>Each addition is constant time.</li>
            <li>Total operations = number of elements in the array = <b>O(n)</b>.</li>
        </ul>
      </div>
    </div>);
 };

 return (<div>
    <div className="blog-head blog-hgl-title"><b>O(n) - Linear Time</b></div>
    <div className="mtop5p">An algorithm is said to run in <b>O(n)</b> time if its execution time <b>grows 
    linearly with the size of the input</b>.</div>
    <div className="mtop5p">
        <Card padding={15} backgroundColor="#eee">If the input size doubles, the time to execute the 
        algorithm roughly doubles.</Card>
    </div>
    <div className="mtop5p">
        <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<PythonCode />) },
                    { id:"java", label:"Java", url:"#",  component:(<JavaCode />) },
                    { id:"javascript", label:"Javascript", url:"#",  component:(<JSCode />) }]} />
    </div>
    <div className="mtop5p">
        <div align="center"><h5 className="blog-head"><b>Visual Representation of Linear Time : O(n)</b></h5></div>
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr style={{ backgroundColor:'#eee' }}>
                        <td><b>Array Length</b></td>
                        <td><b>Time (in steps)</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>3</td>
                        <td>3 Steps</td>
                    </tr>
                    <tr>
                        <td>1000</td>
                        <td>1000 steps</td>
                    </tr>
                    <tr>
                        <td>1,000,000</td>
                        <td>1,000,000 steps</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="mtop5p">
        <div align="center"><h5 className="blog-head"><b>Real-World Scenarios of O(n)</b></h5></div>
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr style={{ backgroundColor:'#eee' }}>
                        <td><b>Task</b></td>
                        <td><b>Complexity</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Counting elements</td>
                        <td>O(n)</td>
                    </tr>
                    <tr>
                        <td>Finding max/min in an unsorted list</td>
                        <td>O(n)</td>
                    </tr>
                    <tr>
                        <td>Removing all occurrences of a value</td>
                        <td>O(n)</td>
                    </tr>
                    <tr>
                        <td>Validating all inputs in a form</td>
                        <td>O(n)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
 </div>);
};

export default LinearTime;