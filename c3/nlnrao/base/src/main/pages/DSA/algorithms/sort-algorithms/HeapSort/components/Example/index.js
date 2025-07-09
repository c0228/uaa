import React from "react";
import { Tab, Highlight } from "e-ui-react";

const HEAP_EXAMPLE_JAVA = `public class HeapSort {
    public void sort(int arr[]) {
        int n = arr.length;

        for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);
        for (int i = n - 1; i > 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            heapify(arr, i, 0);
        }
    }

    void heapify(int arr[], int n, int i) {
        int largest = i;
        int l = 2 * i + 1;
        int r = 2 * i + 2;

        if (l < n && arr[l] > arr[largest]) largest = l;
        if (r < n && arr[r] > arr[largest]) largest = r;

        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            heapify(arr, n, largest);
        }
    }
}`;

const HEAP_EXAMPLE_JS = `function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

    // Extract elements from heap
    for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // swap
        heapify(arr, i, 0);
    }

    return arr;
}`;

const HEAP_EXAMPLE_PYTHON = `def heapify(arr, n, i):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2

    if l < n and arr[l] > arr[largest]: largest = l
    if r < n and arr[r] > arr[largest]: largest = r

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    for i in range(n//2 - 1, -1, -1): heapify(arr, n, i)
    for i in range(n-1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
    return arr`;

const Example = () =>{

    const JavaCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={HEAP_EXAMPLE_JAVA} lang="java" />
    </div>);
    };

    const JSCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={HEAP_EXAMPLE_JS} lang="javascript" />
    </div>);
    };

    const PythonCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={HEAP_EXAMPLE_PYTHON} lang="python" />
    </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;