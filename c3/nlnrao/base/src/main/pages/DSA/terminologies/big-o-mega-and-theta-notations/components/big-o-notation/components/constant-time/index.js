import React from "react";
import { Tab, UrlParams, Highlight } from 'e-ui-react';

const url = UrlParams().baseUrl;

const ConstantTime = () =>{

const PythonConstantTime = () =>{
 const PYTHON_CONSTANT_ACCESS = `def get_third_element(arr):
  return arr[2]`;

    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={PYTHON_CONSTANT_ACCESS} lang="python" />
        <div><h5 className="blog-head"><b>Explaination:</b></h5></div>
        <div>
            <ul>
                <li>If the input is <code><b>[10, 20, 30, 40, 50]</b></code>, calling <code><b>get_third_element(arr)</b></code> returns <code><b>30</b></code>.</li>
                <li>Python lists are implemented as dynamic arrays internally.</li>
                <li>Accessing an element using an index (<code><b>arr[2]</b></code>) directly calculates the memory offset — no iteration needed.</li>
            </ul>
        </div>
    </div>);
};

const JavaConstantTime = () =>{
 const JAVA_CONSTANT_ACCESS = `public class ConstantTime {
   public static int getThirdElement(int[] arr) {
    return arr[2];
   }
 }`;

 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={JAVA_CONSTANT_ACCESS} lang="java" />
        <div><h5 className="blog-head"><b>Explaination:</b></h5></div>
        <div>
            <ul>
                <li>Java arrays provide <b>random access</b>.</li>
                <li><code><b>arr[2]</b></code> directly jumps to the memory address of the 3rd element.</li>
                <li>No matter how large <code><b>arr</b></code> is, this takes <b>constant time</b>.</li>
            </ul>
        </div>
        </div>);;
};

const JSConstantTime = () =>{
 const JS_CONSTANT_ACCESS = `function getThirdElement(arr) {
    return arr[2];
 }`;
    
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={JS_CONSTANT_ACCESS} lang="java" />
        <div><h5 className="blog-head"><b>Explaination:</b></h5></div>
        <div>
            <ul>
                <li>JavaScript arrays are objects, but accessing <code><b>arr[2]</b></code> still performs in constant time under typical conditions.</li>
                <li>JavaScript engines like V8 optimize array lookups to be constant time when array structure is simple.</li>
            </ul>
        </div>
 </div>);
};

 return (<div>
    <div className="blog-head"><b>O(1) - Constant Time</b></div>
    <div className="mtop5p">An algorithm is said to run in <code><b>O(1)</b></code> time if its execution time <b><i>does not depend on the size</i></b> of 
    the input. This means it performs a <b>fixed number of steps</b>, no matter how large the input is.</div>
    <div className="mtop5p">
        <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<PythonConstantTime />) },
            { id:"java", label:"Java", url:"#",  component:(<JavaConstantTime />) },
            { id:"javascript", label:"Javascript", url:"#",  component:(<JSConstantTime />) }]} />
    </div>
    <div className="mtop5p">
        In all three languages:
        <ul>
            <li>No loops</li>
            <li>No recursion</li>
            <li>No proportional operations</li>
        </ul>
        Just <b>one direct access</b> operation, which is why this is the <b>canonical example</b> of 
        an <b>O(1)</b> time complexity function.
    </div>                
 </div>);
};

export default ConstantTime;