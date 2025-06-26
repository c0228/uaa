import React from "react";
import { Tab, Highlight } from "e-ui-react";
import ImgSrc from "./../../assets/summing-squares.png";

const SUM_EXAMPLE_JAVA = `public class Summation {
    public static int summation(int start, int end, java.util.function.IntUnaryOperator func) {
        int sum = 0;
        for (int i = start; i <= end; i++) {
            sum += func.applyAsInt(i);
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(summation(1, 5, i -> i));           // Output: 15
        System.out.println(summation(1, 5, i -> i * i));       // Output: 55
        System.out.println(summation(1, 5, i -> 2 * i + 1));   // Output: 35
    }
}`;

const SUM_EXAMPLE_JS = `function summation(start, end, func) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += func(i);
    }
    return sum;
}

// Example 1: Sum 1 to 5
console.log(summation(1, 5, x => x));        // Output: 15

// Example 2: Sum of squares
console.log(summation(1, 5, x => x * x));    // Output: 55

// Example 3: Sum of 2*i + 1
console.log(summation(1, 5, x => 2 * x + 1));// Output: 35`;

const SUM_EXAMPLE_PYTHON = `def summation(start, end, func):
    return sum(func(i) for i in range(start, end + 1))

# Example 1: Sum 1 to 5
print(summation(1, 5, lambda x: x))  # Output: 15

# Example 2: Sum of squares
print(summation(1, 5, lambda x: x**2))  # Output: 55

# Example 3: Sum of 2*i + 1
print(summation(1, 5, lambda x: 2*x + 1))  # Output: 35`;

const Example = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={SUM_EXAMPLE_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={SUM_EXAMPLE_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={SUM_EXAMPLE_PYTHON} lang="python" />
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example</b></h2></div>
    <div className="mtop15p">
        <div>Let’s implement the summation concept in <b>Python</b>, <b>Java</b>, and <b>JavaScript</b> for:</div>
        <div>
            <ol>
                <li>Summing numbers from <code><b>1</b></code> to <code><b>n</b></code></li>
                <li>Summing squares: <img src={ImgSrc} style={{ width:'60px' }} /></li>
                <li>Summing a custom function: <b>f(i)</b></li>
            </ol>
        </div>
    </div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;