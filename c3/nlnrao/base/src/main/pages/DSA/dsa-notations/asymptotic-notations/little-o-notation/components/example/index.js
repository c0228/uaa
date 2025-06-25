import React from "react";
import { Tab, Card, Highlight } from "e-ui-react";

const LITTLE_O_JAVA = `import java.util.function.Function;

public class LittleONotationCheck {
    public static void main(String[] args) {
        Function<Integer, Double> f = n -> Math.log(n);
        Function<Integer, Double> g = n -> (double) n;

        int[] nValues = {10, 100, 1000, 10000, 100000, 1000000};

        System.out.printf("%-10s%-15s%-15s%-15s%n", "n", "f(n)", "g(n)", "f(n)/g(n)");

        for (int n : nValues) {
            double fn = f.apply(n);
            double gn = g.apply(n);
            double ratio = gn != 0 ? fn / gn : Double.POSITIVE_INFINITY;
            System.out.printf("%-10d%-15.5f%-15.5f%-15.5f%n", n, fn, gn, ratio);
        }

        double finalFn = f.apply(nValues[nValues.length - 1]);
        double finalGn = g.apply(nValues[nValues.length - 1]);
        double finalRatio = finalFn / finalGn;

        System.out.println("\nFinal ratio f(n)/g(n) → " + finalRatio);
        if (finalRatio < 1e-3) {
            System.out.println("f(n) is in o(g(n)) — ratio → 0 as n increases");
        } else {
            System.out.println("f(n) is NOT in o(g(n)) — ratio does not approach 0");
        }
    }
}`;

const LITTLE_O_JS = `const f = n => Math.log(n);
const g = n => n;

const nValues = [10, 100, 1000, 10000, 100000, 1000000];

console.log("n         f(n)          g(n)          f(n)/g(n)");
nValues.forEach(n => {
    const fn = f(n);
    const gn = g(n);
    const ratio = gn !== 0 ? fn / gn : Infinity;
    console.log(\`\${n.toString().padEnd(10)}\${fn.toFixed(5).padEnd(14)}\${gn.toFixed(5).padEnd(14)}\${ratio.toFixed(5)}\`);
});

const lastN = nValues[nValues.length - 1];
const finalRatio = f(lastN) / g(lastN);

console.log(\`\nFinal ratio f(n)/g(n) -> \${finalRatio}\`);
if (finalRatio < 1e-3) {
    console.log("f(n) is in o(g(n)) — ratio → 0 as n increases");
} else {
    console.log("f(n) is NOT in o(g(n)) — ratio does not approach 0");
}`;

const LITTLE_O_PYTHON = `import math

def is_little_o(f, g, n_values):
    print(f"{'n':<10}{'f(n)':<15}{'g(n)':<15}{'f(n)/g(n)':<15}")
    for n in n_values:
        fn = f(n)
        gn = g(n)
        ratio = fn / gn if gn != 0 else float('inf')
        print(f"{n:<10}{fn:<15.5f}{gn:<15.5f}{ratio:<15.5f}")
    final_ratio = f(n_values[-1]) / g(n_values[-1])
    print("\nFinal ratio f(n)/g(n) →", final_ratio)
    if final_ratio < 1e-3:
        print(" f(n) is in o(g(n)) — ratio → 0 as n increases")
    else:
        print(" f(n) is NOT in o(g(n)) — ratio does not approach 0")

# Define functions
f = lambda n: math.log(n)
g = lambda n: n

# Test for increasing n values
n_values = [10, 100, 1000, 10000, 100000, 1000000]
is_little_o(f, g, n_values)`;

const LITTLE_O_OUTPUT = `n         f(n)           g(n)           f(n)/g(n)
10        2.30259        10.00000       0.23026
100       4.60517        100.00000      0.04605
1000      6.90776        1000.00000     0.00691
10000     9.21034        10000.00000    0.00092
100000    11.51293       100000.00000   0.00012
1000000   13.81551       1000000.00000  0.00001

Final ratio f(n)/g(n) → 1.3815501179323887e-05  
f(n) is in o(g(n)) — ratio → 0 as n increases`;

const LITTLE_O_JAVA2 = `import java.util.function.Function;

public class LittleOExample {
    public static void main(String[] args) {
        Function<Integer, Double> f = n -> (double) n;
        Function<Integer, Double> g = n -> n * Math.log(n);

        int[] nValues = {10, 100, 1000, 10000, 100000, 1000000};

        System.out.printf("%-10s%-15s%-15s%-15s%n", "n", "f(n)", "g(n)", "f(n)/g(n)");
        for (int n : nValues) {
            double fn = f.apply(n);
            double gn = g.apply(n);
            double ratio = gn != 0 ? fn / gn : Double.POSITIVE_INFINITY;
            System.out.printf("%-10d%-15.5f%-15.5f%-15.5f%n", n, fn, gn, ratio);
        }
    }
}`;

const LITTLE_O_JS2 = `const f = n => n;
const g = n => n * Math.log(n);

const nValues = [10, 100, 1000, 10000, 100000, 1000000];

console.log("n         f(n)          g(n)          f(n)/g(n)");
nValues.forEach(n => {
    const fn = f(n);
    const gn = g(n);
    const ratio = gn !== 0 ? fn / gn : Infinity;
    console.log(\`\${n.toString().padEnd(10)}\${fn.toFixed(5).padEnd(14)}\${gn.toFixed(5).padEnd(14)}\${ratio.toFixed(5)}\`);
});`;

const LITTLE_O_PYTHON2 = `f = lambda n: n
g = lambda n: n * math.log(n)`;

const Example = () =>{

 const JavaCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={LITTLE_O_JAVA} lang="java" />
    </div>);
 };

 const JSCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={LITTLE_O_JS} lang="java" />
    </div>);
 };

 const PythonCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={LITTLE_O_PYTHON} lang="java" />
    </div>);
 };

 const Java2Code = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={LITTLE_O_JAVA2} lang="java" />
    </div>);
 };

 const JS2Code = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={LITTLE_O_JS2} lang="java" />
    </div>);
 };

 const Python2Code = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={LITTLE_O_PYTHON2} lang="java" />
    </div>);
 };

 return (<div className="mtop15p lh28p fs16p">
    <div><h2 className="blog-head"><b>Example:</b></h2></div>
    <div className="mtop5p">Let’s write some Python code to experimentally observe how <code><b>f(n)</b></code> behaves 
    compared to <code><b>g(n)</b></code> and determine if <code><b>f(n) &isin; o(g(n))</b></code>.</div>
    <div className="mtop15p">Check if <code><b>f(n) = log(n)</b></code> is in <code><b>o(g(n)) = n</b></code></div>

    <div className="mtop15p">
    <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />    
    </div>  
    <div className="mtop15p"><h4 className="blog-head"><b>Output:</b></h4></div>
    <div className="mtop5p">
        <Highlight content={LITTLE_O_OUTPUT} lang="python" />
    </div>
    <div className="mtop10p">
        This confirms that <code><b>log(n)</b></code> is <b>strictly dominated</b> by <code><b>n</b></code>, and 
        thus <code><b>log(n) &isin; o(n)</b></code>.
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Another Example: f(n) = n, g(n) = n log n</b></h2></div>
    <div className="mtop5p">
        <div>Try modifying the functions in the code:</div>
        <div>
            <Tab menulinks={[{ id:"java2", label:"Java", url:"#", component:(<Java2Code />) },
            { id:"javascript2", label:"Javascript", url:"#", component:(<JS2Code />) },
            { id:"python2", label:"Python", url:"#", component:(<Python2Code />) }]} />
        </div>
        <div className="mtop10p">You’ll see that <code><b>f(n)/g(n)</b></code> converges to <code><b>0</b></code>, 
        confirming <code><b>n &isin; o(n log n)</b></code>.</div>
    </div>
 </div>);
};

export default Example;