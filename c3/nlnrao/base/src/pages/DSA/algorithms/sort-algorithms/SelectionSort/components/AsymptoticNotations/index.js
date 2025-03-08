import React from "react";
import { Highlight } from "e-ui-react";

const BigOExample = `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
    }
  }
  return arr;
}
console.log(selectionSort([5, 3, 8, 4, 2]));`;

const AsymptoticNotations = () =>{
 return (<div className="lh28p fs16p">
  <div align="center"><h2 className="blog-head mtop15p"><b>Asymptotic Notations in Selection Sort</b></h2></div>
  <div className="mtop15p">
  Understanding the performance of an algorithm requires analyzing its complexity using asymptotic notations. 
  Let's break down how Big-O (O), Omega (&Omega;), and Theta (&Theta;) notations apply to Selection Sort.
  </div>

  <div className="mtop15p"><h4><b>Big-O Notation (Worst Case: O(n<sup>2</sup>))</b></h4></div>
  <div className="padLeft15p">
    <div className="mtop15p">
        In the worst case, Selection Sort has to scan the entire array for the minimum element in each pass, leading to:<br/>
        <code><b>(n-1) + (n-2) + ... + 1 ≈ O(n²)</b></code> comparisons and swaps.
    </div>
    <div className="mtop15p"><Highlight content={BigOExample} lang="javascript" /></div>
    <div className="mtop15p">
        <b>Time Complexity:</b> O(n²) (Due to nested loops scanning the array)
    </div>
  </div>

  <div className="mtop15p"><h4><b>Omega Notation (Worst Case: &Omega;(n<sup>2</sup>))</b></h4></div>
  <div className="padLeft15p">
    <div className="mtop15p">
        Unlike Bubble Sort, Selection Sort does not adapt to a pre-sorted array. Even if the array is 
        already sorted, it still performs all comparisons to find the minimum element.
    </div>
    <div className="mtop15p">
        <b>Best Case Complexity:</b> &Omega;(n²) (No Early Termination Possible)
    </div>
  </div>

  <div className="mtop15p"><h4><b>Theta Notation (Average Case: &Theta;(n<sup>2</sup>))</b></h4></div>
  <div className="padLeft15p">
    <div className="mtop15p">
        For a random dataset, the complexity remains &Theta;(n<sup>2</sup>) as the number of comparisons and swaps 
        remains the same irrespective of input order.
    </div>
  </div>

 </div>);
};

export default AsymptoticNotations;