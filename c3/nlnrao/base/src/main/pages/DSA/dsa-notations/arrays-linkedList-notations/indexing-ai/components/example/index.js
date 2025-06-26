import React from "react";
import { Tab, Highlight } from "e-ui-react";

const INDEXING_EXAMPLE_JAVA = `public class IndexingExample {
    public static void main(String[] args) {
        int[] A = {10, 20, 30, 40, 50};

        System.out.println("A(0): " + A[0]);
        System.out.println("A(3): " + A[3]);

        for (int i = 0; i < A.length; i++) {
            System.out.println("A(" + i + ") = " + A[i]);
        }
    }
}`;

const INDEXING_EXAMPLE_JS = `let A = [10, 20, 30, 40, 50];

console.log("A(0):", A[0]);
console.log("A(3):", A[3]);

for (let i = 0; i < A.length; i++) {
    console.log(\`A(\${i}) = \${A[i]}\`);
}`;

const INDEXING_EXAMPLE_PYTHON = `A = [10, 20, 30, 40, 50]

# Accessing elements
print("A(0):", A[0])  # 10
print("A(3):", A[3])  # 40

# Looping through array
for i in range(len(A)):
    print(f"A({i}) = {A[i]}")`;

const IERROR_EXAMPLE_JAVA = `public class IndexErrorExample {
    public static void main(String[] args) {
        int[] A = {1, 2, 3};
        System.out.println(A[5]);  // Throws ArrayIndexOutOfBoundsException
    }
}`;

const IERROR_EXAMPLE_JS = `let A = [1, 2, 3];
console.log(A[5]);  // Outputs: undefined (no error)`;

const IERROR_EXAMPLE_PYTHON = `A = [1, 2, 3]
print(A[5])  # IndexError: list index out of range`;

const Example = () =>{

    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={INDEXING_EXAMPLE_JAVA} lang="java" />
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={INDEXING_EXAMPLE_JS} lang="javascript" />
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={INDEXING_EXAMPLE_PYTHON} lang="python" />
        </div>);
    };

    const JavaErrorCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={IERROR_EXAMPLE_JAVA} lang="java" />
        </div>);
    };

    const JSErrorCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={IERROR_EXAMPLE_JS} lang="javascript" />
        </div>);
    };

    const PythonErrorCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <Highlight content={IERROR_EXAMPLE_PYTHON} lang="python" />
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example:</b></h2></div>
    <div className="mtop15p">Let's say:</div>
    <div className="mtop5p"><Highlight content={`A = [10, 20, 30, 40, 50]`} lang="python" /></div>
    <div className="mtop5p">
        <ul>
            <li><code><b>A(0)</b></code> or <code><b>A[0]</b></code> = <b>10</b></li>
            <li><code><b>A(3)</b></code> or <code><b>A[3]</b></code> = <b>40</b></li>
            <li><code><b>A(4)</b></code> or <code><b>A[4]</b></code> = <b>50</b></li>
        </ul>
    </div>
    <div className="mtop5p">Trying to access <code><b>A(5)</b></code> results in an <b>IndexOutOfBounds</b> error 
    because the array ends at index 4.</div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Indexing Errors</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Common Pitfalls:</b></h4></div>
    <div className="mtop5p">
        <ul>
            <li><b>Out of Bounds:</b> Accessing an index outside the array length</li>
            <li><b>Negative Indices:</b> Some languages support it (Python), others don’t (Java)</li>
            <li><b>Empty Arrays:</b> Accessing <code><b>A[0]</b></code> in an empty array = <b>error</b></li>
        </ul>
    </div>

    <div className="mtop15p">
        <Tab menulinks={[{ id:"javaError", label:"Java", url:"#", component:(<JavaErrorCode />) },
            { id:"javascriptError", label:"Javascript", url:"#", component:(<JSErrorCode />) },
            { id:"pythonError", label:"Python", url:"#", component:(<PythonErrorCode />) }]} />
    </div>

 </div>);
};

export default Example;