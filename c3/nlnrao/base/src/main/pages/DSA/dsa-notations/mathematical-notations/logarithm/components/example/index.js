import React from "react";
import { Tab, Highlight }from "e-ui-react";

const LOG_EXAMPLE_JAVA = `public class LogarithmDemo {
    public static void main(String[] args) {
        System.out.println("Log base 10 of 100: " + Math.log10(100));       // 2.0
        System.out.println("Natural log of e: " + Math.log(Math.E));        // 1.0
        System.out.println("Log base 2 of 8: " + logBase(8, 2));            // 3.0
        System.out.println("Log base 5 of 125: " + logBase(125, 5));        // 3.0
    }

    public static double logBase(double x, double base) {
        return Math.log(x) / Math.log(base);
    }
}`;

const LOG_EXAMPLE_JS = `console.log("Log base 10 of 100:", Math.log10(100));     // 2
console.log("Natural log of e:", Math.log(Math.E));      // 1
console.log("Log base 2 of 8:", Math.log2(8));           // 3

// Custom base function
function logBase(x, base) {
    return Math.log(x) / Math.log(base);
}

console.log("Log base 5 of 125:", logBase(125, 5));      // 3`;

const LOG_EXAMPLE_PYTHON = `import math

print("Log base 10 of 100:", math.log10(100))       # Output: 2.0
print("Natural log of 2.718:", math.log(math.e))     # Output: 1.0
print("Log base 2 of 8:", math.log2(8))              # Output: 3.0

# Custom base using change of base
def log_base(x, base):
    return math.log(x) / math.log(base)

print("Log base 5 of 125:", log_base(125, 5))        # Output: 3.0`;

const Example = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={LOG_EXAMPLE_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={LOG_EXAMPLE_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={LOG_EXAMPLE_PYTHON} lang="python" />
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example</b></h2></div>
    <div className="mtop5p">Let’s now implement logarithmic operations using <b>Python</b>, <b>Java</b>, and <b>JavaScript</b>.</div>
    <div className="mtop5p">We'll compute:</div>
    <div>
        <ol>
            <li><code><b>log<sub>10</sub></b></code></li>
            <li>Natural <code><b>log<sub>e</sub></b></code></li>
            <li><code><b>log<sub>2</sub></b></code></li>
            <li>Change of base</li>
        </ol>
    </div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Real-World Applications of Logarithms</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Algorithm Complexity:</b> Binary search runs in <code><b>O(log n)</b></code> time</li>
            <li><b>Data Compression:</b> Logarithmic scale used in Huffman encoding.</li>
            <li><b>Machine Learning:</b> Log loss, entropy calculations.</li>
            <li><b>Finance:</b> Compound interest and growth models.</li>
            <li><b>Physics & Chemistry:</b> pH values and decibel levels.</li>
            <li><b>Astronomy:</b> Measuring light intensity (magnitude scale).</li>
        </ul>
    </div>
 </div>);
};

export default Example;