import React from "react";
import { Tab, Highlight } from "e-ui-react";

const BIGO_LINEAR_JAVA = `public class LinearSearch {
    public static boolean linearSearch(int[] arr, int target) {
        for (int num : arr) {
            if (num == target) {
                return true;
            }
        }
        return false;
    }
}`;

const BIGO_LINEAR_JS = `function linearSearch(arr, target) {
    for (let num of arr) {
        if (num === target) {
            return true;
        }
    }
    return false;
}`;

const BIGO_LINEAR_PYTHON = `# Linear Search - O(n)
def linear_search(arr, target):
    for num in arr:
        if num == target:
            return True
    return False`;

const BIGO_BINARY_JAVA = `public class BinarySearch {
    public static boolean binarySearch(int[] arr, int target) {
        int low = 0, high = arr.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2; // avoid overflow
            if (arr[mid] == target) {
                return true;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return false;
    }
}`;

const BIGO_BINARY_JS = `function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
}`;

const BIGO_BINARY_PYTHON = `# Binary Search - O(log n), only for sorted lists
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return True
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return False`;

const Example = () =>{
    const JavaLinearCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={BIGO_LINEAR_JAVA} lang="java" />
    </div>);
    };

    const JSLinearCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={BIGO_LINEAR_JS} lang="javascript" />
    </div>);
    };

    const PythonLinearCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={BIGO_LINEAR_PYTHON} lang="python" />
    </div>);
    };

    const JavaBinaryCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={BIGO_BINARY_JAVA} lang="java" />
    </div>);
    };

    const JSBinaryCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={BIGO_BINARY_JS} lang="javascript" />
    </div>);
    };

    const PythonBinaryCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={BIGO_BINARY_PYTHON} lang="python" />
    </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Real-Life Example</b></h2></div>
    <div className="mtop15p">
        <div>Let’s take a simple problem: searching for a number in a list.</div>
        <div className="mtop15p">
            <Tab menulinks={[{ id:"javaLinear", label:"Java", url:"#", component:(<JavaLinearCode />) },
            { id:"javascriptLinear", label:"Javascript", url:"#", component:(<JSLinearCode />) },
            { id:"pythonLinear", label:"Python", url:"#", component:(<PythonLinearCode />) }]} />
        </div>
        <div className="mtop15p">In the worst case, you might have to look at every number — so it's <b>O(n)</b>.</div>
        <div className="mtop15p">Now compare it with:</div>
        <div className="mtop15p">
            <Tab menulinks={[{ id:"javaBinary", label:"Java", url:"#", component:(<JavaBinaryCode />) },
            { id:"javascriptBinary", label:"Javascript", url:"#", component:(<JSBinaryCode />) },
            { id:"pythonBinary", label:"Python", url:"#", component:(<PythonBinaryCode />) }]} />
        </div>
        <div className="mtop15p">This algorithm eliminates half of the remaining items each time — so 
        it's <b>O(log n)</b>.<br/> Huge difference in performance for large <code><b>n</b></code>.</div>
    </div>
 </div>);
};

export default Example;