import React from "react";
import { Card, Tab, Highlight } from "e-ui-react";

const PYTHON_LINEARITHMIC_ACCESS = `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
`;

const JAVA_LINEARITHMIC_ACCESS = `public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left, j = mid + 1, k = 0;

        while (i <= mid && j <= right) {
            if (arr[i] < arr[j])
                temp[k++] = arr[i++];
            else
                temp[k++] = arr[j++];
        }

        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];

        for (i = left, k = 0; i <= right; i++, k++) arr[i] = temp[k];
    }
}
`;

const JS_LINEARITHMIC_ACCESS = `function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
`;

const LinearithmicTime = () =>{
  
  const PythonCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PYTHON_LINEARITHMIC_ACCESS} lang="python" />
      <div><h5 className="blog-head"><b>Explanation:</b></h5></div>
      <div>
        <ul>
          <li>Each split divides the array (<code><b>log n</b></code> levels).</li>
          <li>Each level merges n elements.</li>
          <li>So <code><b>total work = n * log n = O(n log n)</b></code></li>
        </ul>
      </div>
    </div>);
  };
  
  const JavaCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JAVA_LINEARITHMIC_ACCESS} lang="java" />
      <div><h5 className="blog-head"><b>Explanation:</b></h5></div>
      <div>
        <ul>
          <li>Each split divides the array (<code><b>log n</b></code> levels).</li>
          <li>Each level merges n elements.</li>
          <li>So <code><b>total work = n * log n = O(n log n)</b></code></li>
        </ul>
      </div>
    </div>);
  };

  const JSCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JS_LINEARITHMIC_ACCESS} lang="javascript" />
      <div><h5 className="blog-head"><b>Explanation:</b></h5></div>
      <div>
        <ul>
          <li>Each split divides the array (<code><b>log n</b></code> levels).</li>
          <li>Each level merges n elements.</li>
          <li>So <code><b>total work = n * log n = O(n log n)</b></code></li>
        </ul>
      </div>
    </div>);
  };
  
  return (<div>
    <div className="blog-head blog-hgl-title"><b>O(n log n) - Linearithmic Time</b></div>
    <div className="mtop5p">
    An algorithm runs in <b>O(n log n)</b> time when it performs a logarithmic operation <b>log n</b> for 
    each of the n elements.
    </div>
    <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">It’s <b>slower than O(n)</b> 
      but <b>faster than O(n<sup>2</sup>)</b> — a sweet 
      spot for efficient sorting.</Card>
    </div>
    <div className="mtop15p">
      <div><h5><b><u>Best Example:</u> Merge Sort</b></h5></div>
      <div className="mtop5p">Merge Sort is a <b>divide and conquer algorithm</b> that:
        <ol>
          <li>Divides the array into halves recursively (log n divisions).</li>
          <li>Merges the sorted halves (each element visited once → n operations).</li>
        </ol>
      </div>
      <div>Hence, <b>Total Time = O(n log n)</b></div>
    </div>
    <div className="mtop5p">
      <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<PythonCode />) },
          { id:"java", label:"Java", url:"#",  component:(<JavaCode />) },
          { id:"javascript", label:"Javascript", url:"#",  component:(<JSCode />) }]} />
    </div>
    <div className="mtop15p"><h5><b>Other O(n log n) Algorithms:</b></h5></div>
    <div className="mtop5p">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr style={{ backgroundColor:'#eee' }}>
              <td><b>Algorithm</b></td>
              <td><b>Use Case</b></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Merge Sort</b></td>
              <td>Stable and consistent sorting</td>
            </tr>
             <tr>
              <td><b>Heap Sort</b></td>
              <td>Priority queue sorting</td>
            </tr>
             <tr>
              <td><b>Quick Sort (average)</b></td>
              <td>Fast in practice (unstable)</td>
            </tr>
             <tr>
              <td><b>Counting Inversions</b></td>
              <td>Number of swaps needed in sorting</td>
            </tr>
             <tr>
              <td><b>External Sorting</b></td>
              <td>Sorting data that doesn’t fit in memory</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
          <div><b>Note:</b></div>
          <div>
            <ul>
              <li><b>O(n log n)</b> strikes a balance between speed and scalability.</li>
              <li>It appears in efficient <b>sorting and divide-and-conquer</b> problems.</li>
              <li>Merge Sort is a <b>classic example</b> with guaranteed <code><b>O(n log n)</b></code> performance.</li>
            </ul>
          </div>
      </Card>
    </div>
  </div>);
};

export default LinearithmicTime;