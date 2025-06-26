import React from "react";
import { Tab, Highlight } from "e-ui-react";

const FACTORIAL_EXAMPLE_JAVA = `public class Factorial {

    // Iterative Method
    public static long factorialIterative(int n) {
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    // Recursive Method
    public static long factorialRecursive(int n) {
        if (n == 0 || n == 1)
            return 1;
        return n * factorialRecursive(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(factorialIterative(5));  // Output: 120
        System.out.println(factorialRecursive(6));  // Output: 720
    }
}`;

const FACTORIAL_EXAMPLE_JS = `// Iterative Method
function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Recursive Method
function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

// Examples
console.log(factorialIterative(5));   // Output: 120
console.log(factorialRecursive(6));   // Output: 720`;

const FACTORIAL_EXAMPLE_PYTHON = `# Iterative Approach
def factorial_iterative(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

# Recursive Approach
def factorial_recursive(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial_recursive(n - 1)

# Examples
print(factorial_iterative(5))   # Output: 120
print(factorial_recursive(6))   # Output: 720`;

const Example = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={FACTORIAL_EXAMPLE_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={FACTORIAL_EXAMPLE_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={FACTORIAL_EXAMPLE_PYTHON} lang="python" />
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example</b></h2></div>
    <div className="mtop5p">
        <div>Let’s implement the <b>factorial function</b> in three popular languages:</div>
        <div>
            <ul>
                <li><b>Iterative Approach</b> (using loops)</li>
                <li><b>Recursive Approach</b></li>
            </ul>
        </div>
    </div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Use Cases in Real Life and Tech</b></h2></div>
    <div className="mtop5p">
        <ul>
            <li><b>Algorithm Design:</b> Recursive backtracking problems (like N-Queens)</li>
            <li><b>Cryptography:</b> Key arrangements</li>
            <li><b>Machine Learning:</b> Probability and combinations</li>
            <li><b>Gaming:</b> Scenario permutations or decision trees</li>
            <li><b>Data Analysis:</b> Combinatorics in datasets</li>
        </ul>
    </div>
 </div>);
};

export default Example;