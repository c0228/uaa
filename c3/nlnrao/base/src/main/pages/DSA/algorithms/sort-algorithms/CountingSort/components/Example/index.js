import React from "react";
import { Tab, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const COUNTING_EXAMPLE_JAVA = `public class CountingSort {
    public static int[] countingSort(int[] arr) {
        int max = Arrays.stream(arr).max().getAsInt();
        int[] count = new int[max + 1];
        int[] output = new int[arr.length];

        for (int num : arr)
            count[num]++;

        for (int i = 1; i <= max; i++)
            count[i] += count[i - 1];

        for (int i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i]] - 1] = arr[i];
            count[arr[i]]--;
        }

        return output;
    }
}`;

const COUNTING_EXAMPLE_JS = `function countingSort(arr) {
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  const output = new Array(arr.length);

  // Count occurrences
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Cumulative count
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Build output array (stable sort)
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return output;
}`;

const COUNTING_EXAMPLE_PYTHON = `def counting_sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)
    output = [0] * len(arr)

    for num in arr:
        count[num] += 1

    for i in range(1, len(count)):
        count[i] += count[i - 1]

    for num in reversed(arr):
        output[count[num] - 1] = num
        count[num] -= 1

    return output`;

const Example = () =>{

    const JavaCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={COUNTING_EXAMPLE_JAVA} lang="java" />
    </div>);
    };

    const JSCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={COUNTING_EXAMPLE_JS} lang="javascript" />
    </div>);
    };

    const PythonCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={COUNTING_EXAMPLE_PYTHON} lang="python" />
    </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Implementations</b></h2></div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Asymptotic Notations Analysis</b></h2></div>
    <div className="mtop15p">
        <div>Let <code><b>n</b></code> = number of elements</div>
        <div>Let <code><b>k</b></code> = range of input (i.e., max element in array)</div>
    </div>
    <div className="mtop15p">
        <SimpleTable header={["Notation","Value","Meaning"]} 
            columns={[ 
                [(<div><b>Big-O (O)</b></div>),(<div><code><b>O(n + k)</b></code></div>),"Worst-case and average-case performance"],
                [(<div><b>Omega (&Omega;)</b></div>),(<div><code><b>&Omega;(n + k)</b></code></div>),"Best-case when all elements are same"],
                [(<div><b>Theta (&Theta;)</b></div>),(<div><code><b>&Theta;(n + k)</b></code></div>),"Tight bound"],
                [(<div><b>Little-o (o)</b></div>),(<div><code><b>o(n<sup>2</sup>)</b></code></div>),"Much faster than quadratic algorithms"],
                [(<div><b>Little-omega (&omega;)</b></div>),(<div>&omega;(n)</div>),(<div>Slightly more than linear due to <code><b>k</b></code></div>)]
            ]} />
    </div>
    <div className="mtop15p">
        It performs better than comparison sorts (like Merge Sort) when <code><b>k</b></code> is not much 
        greater than <code><b>n</b></code>.
    </div>
 </div>);
};

export default Example;