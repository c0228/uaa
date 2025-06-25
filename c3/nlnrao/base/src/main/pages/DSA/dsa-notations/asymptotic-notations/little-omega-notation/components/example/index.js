import React from "react";
import { Tab, Highlight } from "e-ui-react";

const LITTLE_OMEGA_JAVA = `public class LittleOmegaExample {
    public static void main(String[] args) {
        System.out.println("Example 1: f(n) = n^2, g(n) = n");
        demo((n) -> n * n, (n) -> n);

        System.out.println("\nExample 2: f(n) = n, g(n) = n");
        demo((n) -> n, (n) -> n);
    }

    interface Func {
        double apply(int n);
    }

    public static void demo(Func f, Func g) {
        System.out.printf("%-10s%-15s%-15s%-15s\n", "n", "f(n)", "g(n)", "f(n)/g(n)");
        for (int n = 1; n <= 20; n++) {
            double fn = f.apply(n);
            double gn = g.apply(n);
            double ratio = gn != 0 ? fn / gn : Double.POSITIVE_INFINITY;
            System.out.printf("%-10d%-15.2f%-15.2f%-15.2f\n", n, fn, gn, ratio);
        }
    }
}`;

const LITTLE_OMEGA_JS = `function littleOmegaDemo(f, g, nValues) {
    console.log(\`n\tf(n)\tg(n)\tf(n)/g(n)\`);
    for (let n of nValues) {
        const fn = f(n);
        const gn = g(n);
        const ratio = gn !== 0 ? (fn / gn).toFixed(2) : "Infinity";
        console.log(\`\${n}\t\${fn}\t\${gn}\t\${ratio}\`);
    }
}

console.log("Example 1: f(n) = n^2, g(n) = n");
littleOmegaDemo(n => n * n, n => n, Array.from({length: 20}, (_, i) => i + 1));

console.log("\nExample 2: f(n) = n, g(n) = n");
littleOmegaDemo(n => n, n => n, Array.from({length: 20}, (_, i) => i + 1));`;

const LITTLE_OMEGA_PYTHON = `def little_omega_demo(f, g, n_values):
    print(f"{'n':<10}{'f(n)':<15}{'g(n)':<15}{'f(n)/g(n)':<15}")
    for n in n_values:
        fn = f(n)
        gn = g(n)
        ratio = fn / gn if gn != 0 else float('inf')
        print(f"{n:<10}{fn:<15}{gn:<15}{ratio:<15}")

print("Example 1: f(n) = n^2, g(n) = n")
little_omega_demo(lambda n: n**2, lambda n: n, range(1, 21))

print("\nExample 2: f(n) = n, g(n) = n")
little_omega_demo(lambda n: n, lambda n: n, range(1, 21))`;

const Example = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={LITTLE_OMEGA_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={LITTLE_OMEGA_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={LITTLE_OMEGA_PYTHON} lang="python" />
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example: Understanding with a Comparison</b></h2></div>
    <div className="mtop15p">Let’s take two functions:</div>
    <div>
        <ul>
            <li>f(n) = n<sup>2</sup></li>
            <li>g(n) = n</li>
        </ul>
    </div>
    <div className="mtop15p">Now, let’s check if <code><b>f(n) = &omega;(g(n))</b></code></div>
    <div>Try any constant <code><b>c &gt; 0</b></code>, say <code><b>c = 1000</b></code>.</div>
    <div>Eventually:</div>
    <div>
        <ul>
            <li><code><b>n<sup>2</sup> &gt; 1000·n</b></code> for all <code><b>n &gt; 1000</b></code></li>
        </ul>
    </div>
    <div>So for all <code><b>n</b></code> greater than some value <code><b>n<sub>0</sub></b></code>, this inequality holds:</div>
    <div>
        <ul>
            <li><code><b>n<sup>2</sup> &gt; c·n</b></code></li>
        </ul>
    </div>
    <div>This implies: <code><b>n<sup>2</sup> = &omega;(n)</b></code></div>
    <div className="mtop15p">Let’s try a <b>non-example</b>:</div>
    <div>
        <ul>
            <li>f(n) = n</li>
            <li>g(n) = n</li>
        </ul>
    </div>
    <div>Now, <code><b>f(n)/g(n) = 1</b></code> — it doesn't increase to infinity, it remains constant.</div>
    <div>So: <code><b>n &ne; &omega;(n)</b></code></div>
    <div className="mtop15p">This shows <b>Little-Omega only applies when the growth is strictly faster</b>.</div>

    <div className="mtop15p">Let's <b>demonstrate the Little-Omega (&omega;) example in code using Python, Java, and 
        JavaScript.</b> The idea is to show that <code><b>f(n)/g(n)</b></code> grows without bound 
        for <code><b>f(n) = n<sup>2</sup></b></code> and <code><b>g(n) = n</b></code>, and stays constant 
        (i.e., not &omega;) for <code><b>f(n) = n</b></code> and <code><b>g(n) = n</b></code>.</div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Output Interpretation:</b></h5></div>
    <div>
        <ul>
            <li>
                <div><b>First Example</b> (<code><b>n<sup>2</sup> = &omega;(n)</b></code>):</div>
                <div>The ratio <code><b>f(n)/g(n)</b></code> keeps increasing 
                as <code><b>n</b></code> increases -&gt; confirms <code><b>f(n)</b></code> grows faster.</div>
            </li>
            <li>
                <div><b>Second Example</b> (<code><b>n &ne; &omega;(n)</b></code>):</div>
                <div>The ratio <code><b>f(n)/g(n)</b></code> remains <code><b>constant (1)</b></code> -&gt; <b>not little-omega</b>.</div>
            </li>
        </ul>
    </div>

 </div>);
};

export default Example;