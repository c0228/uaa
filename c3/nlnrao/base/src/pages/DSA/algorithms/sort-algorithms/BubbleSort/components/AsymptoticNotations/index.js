import React from "react";
import { Highlight } from "e-ui-react";

const BigOExample = `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
        }
    }
  }
  return arr;
}
console.log(bubbleSort([5, 3, 8, 4, 2]));`;

const OmegaExample = `function optimizedBubbleSort(arr) {
  let n = arr.length;
  let swapped;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swapped = true;
        }
    }
    if (!swapped) break; // Stop if no swaps
  }
  return arr;
}
console.log(optimizedBubbleSort([1, 2, 3, 4, 5]));`;

const AsymptoticNotations = () =>{
 return (<div>
  <div align="center"><h2 className="blog-head mtop15p"><b>Asymptotic Notations in Bubble Sort</b></h2></div>
  
  <div className="lh28p">Understanding the performance of an algorithm requires analyzing its complexity using asymptotic notations. Let's break down how
     Big-O (O), Omega (&Omega;), and Theta (&Theta;) Notations apply to Bubble Sort.</div>
  
  <div><h4 className="mtop15p"><b>Big-O Notation (Worst Case: O(n<sup>2</sup>))</b></h4></div>
  <div className="padLeft15p">
    <div className="lh28p">
        n the worst case, the array is in reverse order, requiring <code><b>n</b></code> passes and 
        <code><b>(n-1) + (n-2) + ... + 1 &asymp; O(n<sup>2</sup>)</b></code> swaps.</div>
    <div><Highlight content={BigOExample} lang="javascript" /></div>
    <div><b>Time Complexity:</b> O(n<sup>2</sup>) <i>(Nested Loops)</i></div>
  </div>

  <div><h4 className="mtop15p"><b>Omega  Notation (Best Case: &Omega;(n))</b></h4></div>
  <div className="padLeft15p">
    <div className="lh28p">
        If the array is <b>already sorted</b>, only one full pass is required (no swaps).
    </div>
    <div><Highlight content={OmegaExample} lang="javascript" /></div>
    <div><b> Best Case Complexity: </b> &Omega;(n) <i>(Single Pass)</i></div>
  </div>

  <div><h4 className="mtop15p"><b>Theta Notation (Average  Case: &Theta;(n<sup>2</sup>))</b></h4></div>
  <div className="padLeft15p">
    <div className="lh28p">For a random dataset, the complexity is still &Theta;(n<sup>2</sup>) due to unpredictable swaps.</div>
  </div>

  <div align="center"><h2 className="blog-head mtop15p"><b>Space Complexity of Bubble Sort</b></h2></div>
  <div className="lh28p">
  Bubble Sort is in-place, meaning it does not require extra space.
  <ul>
    <li><b>Space Complexity: O(1)</b> (only a few auxiliary variables)</li>
  </ul>
  </div>
 </div>);
};

export default AsymptoticNotations;