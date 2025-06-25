import React from "react";
import { Tab, Card, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const OMEGA_LINEAR_JAVA = `public class LinearSearch {
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i; // Found target at index i
            }
        }
        return -1; // Target not found
    }
}`;

const OMEGA_LINEAR_JS = `function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Found target at index i
        }
    }
    return -1; // Target not found
}`;

const OMEGA_LINEAR_PYTHON = `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`;

const OMEGA_BUBBLE_JAVA = `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}`;

const OMEGA_BUBBLE_JS = `function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`;

const OMEGA_BUBBLE_PYTHON = `def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr)-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]`;

const OMEGA_BINARY_JAVA = `public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (arr[mid] == target) {
                return mid; // Found target
            } else if (arr[mid] < target) {
                low = mid + 1; // Search right half
            } else {
                high = mid - 1; // Search left half
            }
        }

        return -1; // Target not found
    }
}`;

const OMEGA_BINARY_JS = `function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Found target
        } else if (arr[mid] < target) {
            low = mid + 1; // Search right half
        } else {
            high = mid - 1; // Search left half
        }
    }

    return -1; // Target not found
}`;

const OMEGA_BINARY_PYTHON = `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`;

const Introduction = () =>{

    const JavaLinearCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={OMEGA_LINEAR_JAVA} lang="java" />
    </div>);
    };

    const JSLinearCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={OMEGA_LINEAR_JS} lang="javascript" />
    </div>);
    };

    const PythonLinearCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={OMEGA_LINEAR_PYTHON} lang="python" />
    </div>);
    };

    const JavaBubbleCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={OMEGA_BUBBLE_JAVA} lang="java" />
    </div>);
    };

    const JSBubbleCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={OMEGA_BUBBLE_JS} lang="javascript" />
    </div>);
    };

    const PythonBubbleCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={OMEGA_BUBBLE_PYTHON} lang="python" />
    </div>);
    };

    const JavaBinaryCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={OMEGA_BINARY_JAVA} lang="java" />
    </div>);
    };

    const JSBinaryCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={OMEGA_BINARY_JS} lang="javascript" />
    </div>);
    };

    const PythonBinaryCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={OMEGA_BINARY_PYTHON} lang="python" />
    </div>);
    };


 return (<div className="mtop15p lh28p fs16p">
    <div><i>In the world of computer science, especially in <b>Data Structures and Algorithms (DSA)</b>, efficiency is king. 
    Whether you're designing a search engine, a game, or a mobile app, the way your code performs directly affects user experience, 
    scalability, and resource usage. This is where <b>time and space complexity</b> come into play.</i></div>
    <div className="mtop15p">
        To compare the performance of algorithms, computer scientists use mathematical 
        notations — <b>Big-O (O)</b>, <b>Theta (&Theta;)</b> and <b>Omega (&Omega;)</b> — to 
        describe how an algorithm's performance scales with input size. Most developers are familiar with <b>Big-O Notation</b>, which 
        describes the <b>worst-case</b> performance. But there's another important tool that often goes 
        overlooked: <b>&Omega; (Omega) Notation</b>, which describes the <b>best-case</b> performance of an algorithm.
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Omega (&Omega;) Notation?</b></h2></div>
    <div className="mtop15p">
       <b>Omega Notation (&Omega;)</b> provides a <b>lower bound</b> for an algorithm. It tells us the minimum amount of time 
       (or space) an algorithm will take <b>under the most favorable conditions</b>.<br/> While Big-O focuses on 
       the <b>worst-case</b>, Omega focuses on the <b>best-case</b>.
    </div>
    <div className="mtop5p">
        <Card padding={15} backgroundColor="#eee">
            <div><b>Definition:</b></div>
            <div>An algorithm is said to be <b>&Omega;(f(n))</b> if there exist 
            constants <b>c &gt; 0</b> and <b>n<sub>0</sub> &ge; 0</b> such that 
            for all <b>n &ge; n<sub>0</sub></b>, the algorithm takes at least <b>c * f(n)</b> time.</div>
        </Card>
    </div>
    <div className="mtop5p">
        <div>This means:</div>
        <div>“No matter how lucky you get with input, you can’t beat <b>&Omega;(f(n))</b> time.”</div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Mathematical Expression of &Omega; Notation</b></h2></div>
    <div className="mtop15p">
        <div>If T(n) is the actual time taken for an input of size n, then:</div>
        <div><code><b>T(n) &isin; &Omega;(f(n))</b></code> &#8660; <b>&exist; c &lt; 0</b> and <b>n<sub>0</sub> &ge; 0</b> such that</div>
        <div><code><b>T(n) &ge; c.f(n)</b></code> for all <b>n &ge; n<sub>0</sub></b></div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Why Use Omega Notation?</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Best-case scenario insight:</b> It helps understand what the fastest execution time looks like.</li>
            <li><b>Benchmark for algorithm performance:</b> It helps set a minimum limit that no optimization can surpass.</li>
            <li><b>Complement to Big-O:</b> Using both Big-O and &Omega; gives a <b>range</b> for performance — worst to best.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Examples of Omega Notation</b></h2></div>
    <div className="mtop15p">
        <div><h4 className="blog-head"><b>Example 1: Linear Search</b></h4></div>
        <div className="mtop15p">
            <Tab menulinks={[{ id:"javaLinear", label:"Java", url:"#", component:(<JavaLinearCode />) },
                    { id:"javascriptLinear", label:"Javascript", url:"#", component:(<JSLinearCode />) },
                    { id:"pythonLinear", label:"Python", url:"#", component:(<PythonLinearCode />) }]} />
        </div>
        <div className="mtop15p">
            <ul>
                <li><b>Best Case (&Omega;(1)):</b> The target is at the first position.</li>
                <li><b>Worst Case (O(n)):</b> The target is at the last position or not present.</li>
            </ul>
        </div>
        <div>Hence, linear search is <b>&Omega;(1)</b>.</div>

        <div className="mtop15p"><h4 className="blog-head"><b>Example 2: Bubble Sort</b></h4></div>
        <div className="mtop15p">
            <Tab menulinks={[{ id:"javaBubble", label:"Java", url:"#", component:(<JavaBubbleCode />) },
                    { id:"javascriptBubble", label:"Javascript", url:"#", component:(<JSBubbleCode />) },
                    { id:"pythonBubble", label:"Python", url:"#", component:(<PythonBubbleCode />) }]} />
        </div>
        <div className="mtop15p">
            <ul>
                <li><b>Best Case (&Omega;(n)):</b> If the array is already sorted (with an optimized version that breaks early).</li>
                <li><b>Worst Case (O(n<sup>2</sup>)):</b> When the array is sorted in reverse order.</li>
            </ul>
        </div>
        <div>So, optimized bubble sort is <b>&Omega;(n)</b>.</div>

        
        <div className="mtop15p"><h4 className="blog-head"><b>Example 3: Binary Search</b></h4></div>
        <div className="mtop15p">
            <Tab menulinks={[{ id:"javaBinary", label:"Java", url:"#", component:(<JavaBinaryCode />) },
                    { id:"javascriptBinary", label:"Javascript", url:"#", component:(<JSBinaryCode />) },
                    { id:"pythonBinary", label:"Python", url:"#", component:(<PythonBinaryCode />) }]} />
        </div>
        <div className="mtop15p">
            <ul>
                <li><b>Best Case (&Omega;(1)):</b> If the target is in the middle on the first try.</li>
                <li><b>Worst Case (O(log n)):</b> Based on binary splitting.</li>
            </ul>
        </div>
        <div>So, binary search is <b>&Omega;(1)</b>.</div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Summary of Notations</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Notation","Description","Case"]} 
            columns={[
                [(<b>O(f(n))</b>),"Upper Bound","Worst-case"],
                [(<b>&Theta;(f(n))</b>),"Tight Bound","Average-case"],
                [(<b>&Omega;(f(n))</b>),"Lower Bound","Best-case"],
            ]} />
    </div>
 </div>);
};

export default Introduction;