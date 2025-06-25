import React from "react";
import { Card, Tab, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const TETHA_EXAMPLE_JAVA = `public class SumArray {
    public static int sumArray(int[] arr) {
        int total = 0;
        for (int num : arr) {
            total += num;
        }
        return total;
    }
}`;

const TETHA_EXAMPLE_JS = `function sumArray(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}`;

const TETHA_EXAMPLE_PYTHON = `def sum_array(arr):
    total = 0
    for num in arr:
        total += num
    return total`;

const Introduction = () =>{
    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={TETHA_EXAMPLE_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={TETHA_EXAMPLE_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={TETHA_EXAMPLE_PYTHON} lang="python" />
        </div>);
    };
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>Have you ever wondered how computer scientists measure the efficiency of an algorithm? When 
        you're solving problems or writing code, it's not just about getting the right answer — it's about how fast and how 
        efficiently you get it. That’s where asymptotic notations come in — tools that help you compare the performance of 
        algorithms regardless of the device or hardware they run on. You might have heard of Big-O notation, which talks about 
        the worst-case scenario. But there’s another equally important notation that gives us a tighter, more accurate measure 
        of performance: <b>Theta (&Theta;) Notation</b>.</i></div>
    <div className="mtop15p">Let’s dive in and understand what Theta notation is, how it's different from other notations, and 
        why it's essential in algorithm analysis.</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Theta (&Theta;) Notation</b></h2></div>
    <div className="mtop15p">In algorithm analysis, Theta (&Theta;) Notation provides a <b>tight bound</b> on the running time 
        of an algorithm. That means it defines both the upper and lower bounds of an algorithm’s performance — in other 
        words, <b>how fast it will run in the best and worst typical scenarios</b>.
    <div className="mtop15p"><h4 className="blog-head"><b>Formal Definition:</b></h4></div>
    <div className="mtop5p">
        <div>For a given function <code><b>f(n)</b></code>, we write:</div>
        <div>
            <Card padding={15} backgroundColor="#eee">
                &Theta;(f(n)) = &#123; g(n) | &exist; c<sub>1</sub>, c<sub>2</sub> &gt; 0 and n<sub>0</sub> such that 
                for all n &ge; n<sub>0</sub>, c<sub>1</sub> * f(n) &le; g(n) &le; c<sub>2</sub> * f(n) &#125;
            </Card>
        </div>
        <div className="mtop5p">This means that for large enough <code><b>n</b></code>, the function 
        <code><b>g(n)</b></code> grows <b>exactly at the same rate</b> as <code><b>f(n)</b></code>, up 
        to constant factors.</div>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>An Example:</b></h2></div>
    <div className="mtop15p">Let’s say you have a function:</div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
    <div className="mtop5p">
        This loop runs <code><b>n</b></code> times where <code><b>n</b></code> is the size of the array. The time complexity is:
        <div>
            <ul>
                <li><b>Best Case:</b> O(n)</li>
                <li><b>Worst Case:</b> O(n)</li>
                <li><b>Tight Bound:</b> &Theta;(n)</li>
            </ul>
        </div>
        <div className="mtop15p">Because no matter what the input is, the loop runs exactly <code><b>n</b></code> times — so the 
        runtime is <b>always</b> linear. That’s a perfect use case for &Theta;(n).</div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Theta vs Big-O vs Omega</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Notation","Describes","Bound Type"]} 
            columns={[
                [(<b>O(f(n))</b>),"Worst-case upper","Loose Upper Bound"],
                [(<b>&Omega;(f(n))</b>),"Best-case lower","Loose Lower Bound"],
                [(<b>&Theta;(f(n))</b>),"Average/balanced","Tight Bound (both upper & lower)"],
            ]} />
    </div>
    <div className="mtop15p"><i>So if Big-O tells you the algorithm won’t be worse than something, and Omega tells you won’t 
        be better than something, <b>Theta tells you exactly how it behaves</b>.</i></div>

</div>
 </div>);
};

export default Introduction;