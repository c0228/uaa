import React from "react";
import { Card } from "e-ui-react";

const SpaceComplexity = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Space Complexity Basics</b></h2></div>
    <div className="mtop15p">
        <div><b>Space complexity</b> measures additional memory used. It includes input storage and auxiliary space. 
        Notation is similar to time complexity. An efficient algorithm uses less memory.</div>
        <div className="mtop15p">Let’s explore examples.</div>

        <div className="padLeft5p">

            <div className="mtop15p">
                <div><h4 className="blog-head"><b>Constant Space: O(1)</b></h4></div>
                <div>
                    <ul>
                        <li>Memory usage does not grow with input size.</li>
                        <li>Swapping two numbers uses <code><b>O(1)</b></code> space.
                            <div><b>Example:</b> <code><b>int temp = a; a = b; b = temp;</b></code></div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mtop15p">
                <div><h4 className="blog-head"><b>Linear Space: O(n)</b></h4></div>
                <div>
                    <ul>
                        <li>Memory grows linearly with input size.</li>
                        <li>Storing an array of size n requires <code><b>O(n)</b></code> space.
                            <div><b>Example:</b> copying an array.</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mtop15p">
                <div><h4 className="blog-head"><b>Quadratic Space: O(n^2)</b></h4></div>
                <div>
                    <ul>
                        <li>A matrix of size n x n uses <code><b>O(n^2)</b></code> space.</li>
                        <li>Seen in graph adjacency matrices.</li>
                        <li>Memory-intensive for large graphs.</li>
                    </ul>
                </div>
            </div>

        </div>

    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Time vs Space Tradeoff</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>Sometimes, improving time means using more space.</li>
            <li><code><b>Hashing</b></code> uses more space but reduces search time.</li>
            <li><code><b>Memoization</b></code> stores results to avoid recalculation.</li>
            <li>Understanding tradeoffs is key in optimization.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Analyzing Algorithms</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>Count primitive operations: additions, comparisons, etc.</li>
            <li>Focus on dominant term for large inputs.</li>
            <li>Ignore lower-order terms and constants.</li>
            <li>Use code walkthroughs to estimate complexity.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Real-Life Examples</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>Searching a contact in a phonebook: <code><b>Binary Search (O(log n))</b></code>.</li>
            <li>Checking for duplicates in an 
                array: <code><b>HashSet</b></code> (<code><b>O(n)</b></code> time, <code><b>O(n)</b></code> space).</li>
            <li>Sorting names: <code><b>QuickSort (O(n log n))</b></code>.</li>
            <li>Recursively computing factorial: <code><b>O(n)</b></code> time and space.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Asymptotic Notations</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Big-O:</b> Worst case.</li>
            <li><b>Omega (Ω):</b> Best case.</li>
            <li><b>Theta (Θ):</b> Average case.
                <div>These help set performance expectations.</div>
            </li>
        </ul>
    </div>

    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h5 className="blog-head"><b>Summary:</b></h5></div>
            <div className="mtop5p">
                <ul>
                    <li>Time and space complexity help measure algorithm efficiency.</li>
                    <li><code><b>O(1)</b></code> is ideal but not always possible.</li>
                    <li><code><b>O(n log n)</b></code> is best for general-purpose sorting.</li>
                    <li>Exponential and factorial time are impractical.</li>
                    <li>Optimizing involves balancing speed and memory.</li>
                </ul>
            </div>
        </Card>
    </div>
 </div>);
};

export default SpaceComplexity;