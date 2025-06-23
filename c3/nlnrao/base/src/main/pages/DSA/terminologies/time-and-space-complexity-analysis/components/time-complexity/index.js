import React from "react";

const TimeComplexity = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Time Complexity Basics</b></h2></div>
    <div className="mtop15p">
        <div><b>Time complexity</b> shows the number of basic operations executed as input increases.</div>
        <div><i>[ We ignore constants and lower-order terms for simplicity in Big-O notation.<br/> 
                For example, <code><b>O(n^2 + n + 1)</b></code> simplifies to <code><b>O(n^2)</b></code> ]</i></div>
        <div className="mtop15p">Let’s explore common types of time complexities.</div>

        <div className="padLeft5p">

            <div className="mtop15p">
                <div><h4 className="blog-head"><b>Constant Time: O(1)</b></h4></div>
                <div>
                    <ul>
                        <li>The algorithm takes the same amount of time regardless of input size.</li>
                        <li>Accessing an array element by index is O(1).</li>
                        <li>It’s the most efficient time complexity.
                            <div><b>Example:</b> <code><b>int x = arr[5];</b></code> is <code><b>O(1)</b></code></div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mtop15p">
                <div><h4 className="blog-head"><b>Logarithmic Time: O(log n)</b></h4></div>
                <div>
                    <ul>
                        <li>The number of operations increases logarithmically.</li>
                        <li>Common in divide-and-conquer algorithms.</li>
                        <li>Binary Search is a classic <code><b>O(log n)</b></code> algorithm.
                        <div><b>Example:</b> searching a sorted array of 1 million elements takes ~20 comparisons.</div></li>
                    </ul>
                </div>
            </div>

            <div className="mtop15p">
                <div><h4 className="blog-head"><b>Linear Time: O(n)</b></h4></div>
                <div>
                    <ul>
                        <li>Time increases linearly with input size.</li>
                        <li>Scanning through an array is <code><b>O(n)</b></code>.</li>
                        <li><b>Example:</b> Finding the maximum value in an unsorted array.
                            <div><code><b>for (int i = 0; i &lt; n; i++) &#123; ... &#125;</b></code> is <code><b>O(n)</b></code>.</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mtop15p">
                <div><h4 className="blog-head"><b>Linearithmic Time: O(n log n)</b></h4></div>
                <div>
                    <ul>
                        <li>A mix of linear and logarithmic growth.</li>
                        <li>Seen in efficient sorting algorithms like Merge Sort and Heap Sort.
                            <div><b>Example:</b> Merge Sort divides the array and then merges.</div>
                        </li>
                        <li>It’s better than quadratic time for large inputs.</li>
                    </ul>
                </div>
            </div>

            <div className="mtop15p">
                <div><h4 className="blog-head"><b>Quadratic Time: O(n^2)</b></h4></div>
                <div>
                    <ul>
                        <li>Time increases proportionally to the square of the input size.</li>
                        <li>Common in naive sorting algorithms like Bubble Sort.</li>
                        <li>Nested loops over the input result in <code><b>O(n^2)</b></code>.
                            <div>Example: <code><b>for (i = 0; i &lt; n; i++) for (j = 0; j &lt; n; j++)</b></code>.</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mtop15p">
                <div><h4 className="blog-head"><b>Cubic Time: O(n^3)</b></h4></div>
                <div>
                    <ul>
                       <li>Time increases cubically with input.</li> 
                       <li>Occurs in algorithms with triple nested loops.</li> 
                       <li>Common in dynamic programming matrix problems.</li> 
                       <li>Inefficient for large inputs.</li> 
                    </ul>
                </div>
            </div>

            <div className="mtop15p">
                <div><h4 className="blog-head"><b>Exponential Time: O(2^n)</b></h4></div>
                <div>
                    <ul>
                      <li>The time doubles with each increase in input size.</li>
                      <li>Seen in brute-force solutions to NP problems.
                        <div><b>Example:</b> Recursive Fibonacci without <code><b>memoization</b></code>.</div>
                      </li>
                      <li>Intractable for large inputs.</li>
                    </ul>
                </div>
            </div>

            <div className="mtop15p">
                <div><h4 className="blog-head"><b>Factorial Time: O(n!)</b></h4></div>
                <div>
                    <ul>
                        <li>Extremely inefficient.</li>
                        <li>Common in permutations and combinatorics.
                            <div><b>Example:</b> Solving the Traveling Salesman Problem with brute force.</div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
 </div>);
};

export default TimeComplexity;