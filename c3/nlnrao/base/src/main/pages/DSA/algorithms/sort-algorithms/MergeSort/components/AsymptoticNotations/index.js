import React from "react";
import { Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const AsymptoticNotations = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div align="center"><h2 className="blog-head mtop15p"><b>Asymptotic Notations in Merge Sort</b></h2></div>
    <div className="mtop15p">Understanding the performance of an algorithm requires analyzing its complexity 
    using asymptotic notations. Let's break down how Big-O (O), Omega (Ω), and Theta (Θ) notations apply to 
    Merge Sort.</div>
    
    <div className="mtop15p"><h4><b>Big-O Notation (Worst Case: O(n log n))</b></h4></div>
    <div className="padLeft15p">
        <div className="mtop15p">Merge Sort performs consistently even in the worst scenario due to its 
        divide-and-conquer approach.</div>
    </div>

    <div className="mtop15p"><h4><b>Omega Notation (Worst Case: &Omega;(n log n))</b></h4></div>
    <div className="padLeft15p">
        <div className="mtop15p">Even if the array is already sorted, it still has to go through the division 
        and merging steps.</div>
    </div>

    <div className="mtop15p"><h4><b>Theta Notation (Average Case: &Theta;(n log n))</b></h4></div>
    <div className="padLeft15p">
        <div className="mtop15p">Average-case performance is the same as worst and best due to recursion and 
        merging costs.</div>
    </div>

    <div className="mtop15p"><h4><b>Little-o Notation</b></h4></div>
    <div className="padLeft15p">
        <div className="mtop15p">
            <ul>
                <li><b>o(n<sup>2</sup>)</b> — Merge Sort is more efficient than quadratic algorithms like Bubble Sort or 
                Insertion Sort, so we say:</li>
                <li><b>MergeSort &isin; o(n<sup>2</sup>)</b>, i.e., grows strictly slower than n<sup>2</sup>.</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h4><b>Little-omega Notation</b></h4></div>
    <div className="padLeft15p">
        <div className="mtop15p">
            <ul>
                <li><b>&omega;(n) —</b> Merge Sort is slower than linear time algorithms.</li>
                <li>So, <b>MergeSort &isin; &omega;(n)</b>, i.e., it grows strictly faster than linear time.</li>
            </ul>
        </div>
    </div>

    <div><h2 className="blog-head mtop15p"><b>Space Complexity</b></h2></div>
    <div>
        <ul>
            <li><b>O(n)</b> extra space is required.</li>
            <li>Unlike Quick Sort, which sorts in place, Merge Sort requires temporary arrays for merging.</li>
        </ul>
    </div>

    <div><h2 className="blog-head mtop15p"><b>Stability</b></h2></div>
    <div>
        <ul>
            <li><b>Stable Sorting Algorithm</b></li>
            <li>Equal elements retain their relative positions.</li>
            <li>Example: <code><b>[4_A, 3, 4_B]</b></code> -&gt; <code><b>[3, 4_A, 4_B]</b></code></li>
        </ul>
    </div>

    <div><h2 className="blog-head mtop15p"><b>Adaptability</b></h2></div>
    <div>
        <ul>
            <li><b>Not adaptive</b></li>
            <li>Merge Sort does not take advantage of existing order in the input array.</li>
            <li>Even if the array is partially sorted, Merge Sort does the same number of operations.</li>
        </ul>
    </div>

    <div><h2 className="blog-head mtop15p"><b>When to Use Merge Sort?</b></h2></div>
    <div>You should consider using Merge Sort when:</div>
    <div>
        <ul>
            <li><b>Stability matters —</b> e.g., when sorting records with multiple keys.</li>
            <li><b>Predictable performance is needed —</b> e.g., external sorting of large datasets.</li>
            <li><b>Linked lists</b> are involved — Merge Sort can be implemented without extra space for 
            linked lists.</li>
            <li><b>Multithreading is used —</b> Merge Sort can be parallelized due to its divide-and-conquer nature.</li>
        </ul>
    </div>

    <div className="mbot15p">
            <Card padding={15} backgroundColor="#f5f5f5">
                <div className="mbot15p"><h4><b>Summary:</b></h4></div>
                <OrderList data={[(<div>
                    <div><b>Time Complexity</b></div>
                    <div className="padLeft15p">
                        <div><b>Best:</b> &Omega;(n log n)</div>
                        <div><b>Average:</b> &Theta;(n log n)</div>
                        <div><b>Worst:</b> O(n log n)</div>
                    </div>
                </div>),
                (<div><b>Space Complexity</b> O(n)</div>),
                (<div><b>Stable</b> Yes</div>),
                (<div><b>Adaptive</b> No</div>),
                (<div><b>In-Place</b> No (uses extra memory)</div>),
                (<div><b>Divide & Conquer</b> Yes</div>),
                (<div><b>Use Cases</b> Large data, Linked lists, Stable sorting needed</div>)]} />
            </Card>
    </div>

 </div>);
};

export default AsymptoticNotations;