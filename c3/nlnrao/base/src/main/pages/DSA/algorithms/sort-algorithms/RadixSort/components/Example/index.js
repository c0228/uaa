import React from "react";
import { Tab, Highlight, Card } from "e-ui-react";

const RADIX_EXAMPLE_JAVA = `public class RadixSort {
    public static void radixSort(int[] arr) {
        int max = getMax(arr);
        for (int exp = 1; max / exp > 0; exp *= 10)
            countingSort(arr, exp);
    }

    private static int getMax(int[] arr) {
        int max = arr[0];
        for (int i : arr)
            if (i > max) max = i;
        return max;
    }

    private static void countingSort(int[] arr, int exp) {
        int n = arr.length;
        int[] output = new int[n];
        int[] count = new int[10];

        for (int i = 0; i < n; i++)
            count[(arr[i] / exp) % 10]++;

        for (int i = 1; i < 10; i++)
            count[i] += count[i - 1];

        for (int i = n - 1; i >= 0; i--) {
            int idx = (arr[i] / exp) % 10;
            output[count[idx] - 1] = arr[i];
            count[idx]--;
        }

        for (int i = 0; i < n; i++)
            arr[i] = output[i];
    }
}`;

const RADIX_EXAMPLE_JS = `function getMax(arr) {
  return Math.max(...arr);
}

function countingSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    const index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  const max = getMax(arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }
}`;

const RADIX_EXAMPLE_PYTHON = `def counting_sort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        index = (arr[i] // exp) % 10
        count[index] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    i = n - 1
    while i >= 0:
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1
        i -= 1

    for i in range(n):
        arr[i] = output[i]

def radix_sort(arr):
    max_num = max(arr)
    exp = 1
    while max_num // exp > 0:
        counting_sort(arr, exp)
        exp *= 10`;

const Example = () =>{

    const JavaCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={RADIX_EXAMPLE_JAVA} lang="java" />
    </div>);
    };

    const JSCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={RADIX_EXAMPLE_JS} lang="javascript" />
    </div>);
    };

    const PythonCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={RADIX_EXAMPLE_PYTHON} lang="python" />
    </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Implementations</b></h2></div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Asymptotic Notations</b></h2></div>
    <div className="mtop15p">
        <div>Let <b>n</b> be the number of elements and <b>k</b> be the maximum number of digits.</div>
        <div>
            <ul>
                <li className="mtop5p"><b>Best Case (&Omega;):</b> <code><b>&Omega;(nk)</b></code></li>
                <li className="mtop5p"><b>Average Case (&Theta;):</b> <code><b>&Theta;(nk)</b></code></li>
                <li className="mtop5p"><b>Worst Case (O):</b> <code><b>O(nk)</b></code></li>
                <li className="mtop5p"><b>Little-o (o):</b> <code><b>o(n log n)</b></code>, only for 
                    small <code><b>k</b></code> values (e.g., fixed digit integers)</li>
                <li className="mtop5p"><b>Little-omega (&omega;):</b> <code><b>ω(n)</b></code> when <code><b>k</b></code> is 
                    significant</li>
            </ul>
        </div>
    </div>
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            Radix Sort can outperform comparison-based algorithms (<code><b>O(n log n)</b></code>) when <code><b>k</b></code> is 
            small and fixed.
        </Card>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Space Complexity</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Auxiliary Space:</b> <code><b>O(n + k)</b></code></li>
            <li>Requires:
                <ul>
                    <li><b>Temporary output array:</b> <code><b>O(n)</b></code></li>
                    <li><b>count array of size 10 (for decimal):</b> <code><b>O(1)</b></code></li>
                </ul>
            </li>
            <li><b>Not in-place</b></li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Stability</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Stable:</b> Yes, if the internal sub-sort (Counting Sort) is stable.</li>
            <li>Important when sorting objects with keys (e.g., sorting by salary then by name).</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Adaptability</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Not Adaptive:</b> Radix Sort does not benefit from partially sorted input.</li>
            <li>Fixed number of passes regardless of input ordering.</li>
        </ul>
    </div>
 </div>);
};

export default Example;