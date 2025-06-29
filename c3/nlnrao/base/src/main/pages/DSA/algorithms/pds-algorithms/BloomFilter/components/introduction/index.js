import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h4 className="blog-head"><b>Why Do We Need Space-Efficient Membership Testing?</b></h4></div>
            <div className="mtop15p">In many applications, we need to <b>test whether an element is present or not</b>. For example, 
            checking if a user has visited a website before, or if a password is in a known leak database. 
            Using a <b>hash set</b> or a <b>list</b> is common, but <b>memory usage</b> becomes a concern when the dataset is 
            huge.</div>
            <div align="center" className="mtop15p"> What if we could <b>sacrifice a little accuracy to save a lot of space</b>?</div>
            <div className="mtop15p">Imagine you're building a spell checker, a URL blocker, or a database cache. You want to 
                quickly check whether an element (like a word or URL) is part of a known set. But what if that set is <b>huge</b> — 
                millions of entries? Holding all that data in memory is expensive. Even with hashing, perfect accuracy can be 
                overkill for some applications.
            </div>
            <div align="center" className="mtop15p">What if you could trade <b>a tiny chance of error</b> for <b>massive savings in space and speed</b>?</div>
            <div align="center" className="mtop15p">This is where <b>Bloom Filters</b> shine.</div>
        </Card>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Bloom Filters</b></h2></div>
    <div className="mtop15p">A <b>Bloom Filter</b> is a <b>probabilistic data structure</b> used to test whether an element is a member of a set. 
    It can <b>definitely say "no"</b>, but <b>may say "yes"</b> even if the element is not present (false positive). This makes it super efficient 
    when false positives are acceptable, but false negatives are not.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Key Properties:</b></h4></div>
    <div className="mtop5p">
        <ul>
            <li><b>Space-efficient:</b> Uses a bit array and multiple hash functions.</li>
            <li><b>Probabilistic:</b> May return false positives.</li>
            <li><b>No deletions</b> (in basic Bloom Filter)</li>
            <li><b>Fast:</b> Constant time insertions and lookups.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>How Bloom Filters Work (In Simple Terms)</b></h2></div>
    <div>
        <ol>
            <li className="mtop5p">Create a <b>bit array</b> of size <code><b>m</b></code>, all initialized to <code><b>0</b></code>.</li>
            <li className="mtop5p">Choose <code><b>k</b></code> <b>independent hash functions</b>.</li>
            <li className="mtop5p">
                <div>To <b>add</b> an item:</div>
                <div>
                    <ul>
                        <li>Hash it with all <code><b>k</b></code> functions.</li>
                        <li>Set each resulting index in the bit array to <code><b>1</b></code>.</li>
                    </ul>
                </div>
            </li>
            <li className="mtop5p">
                <div>To <b>check</b> an item:</div>
                <div>
                    <ul>
                        <li>Hash it with all <code><b>k</b></code> functions.</li>
                        <li>If <b>any</b> of the bits at the resulting positions is <code><b>0</b></code> -&gt; item is 
                        definitely not in the set.</li>
                        <li>If <b>all</b> are <code><b>1</b></code> -&gt; item <b>might be</b> in the set (possible false positive).</li>
                    </ul>
                </div>
            </li>
        </ol>
    </div>
 </div>);
};

export default Introduction;