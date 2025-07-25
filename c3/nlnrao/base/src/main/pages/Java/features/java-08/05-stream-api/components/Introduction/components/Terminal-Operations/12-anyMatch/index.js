import React from "react";
import { Highlight } from "e-ui-react";

const ANYMATCH_EXAMPLE_BASIC = `import java.util.*;
import java.util.stream.*;

public class AnyMatchExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

        // Check if any name starts with "A"
        boolean anyStartsWithA = names.stream()
                                      .anyMatch(name -> name.startsWith("A"));

        System.out.println("Any name starts with A? " + anyStartsWithA);
    }
}`;

const AnyMatch = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>anyMatch(Predicate&lt;T&gt;)</code>?</b></h5></div>
    <div className="mtop5p"><code><b>anyMatch()</b></code> is a <b>terminal operation</b> that 
    returns <code><b>true</b></code> <b>if any element</b> of the stream matches the given predicate. If no elements match or 
    the stream is empty, it returns <code><b>false</b></code>.</div>
    <div className="mtop15p"><h5 className="blog-head"><b>2. When Use it?</b></h5></div>
    <div className="mtop5p">
    Use <code><b>anyMatch()</b></code> when you want to <b>quickly check if at least one element</b> in 
    the stream satisfies a condition, <b>without needing to process the entire stream</b>.
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>3. Why?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">It short-circuits: stops processing as soon as a match is found.</li>
            <li className="mtop5p">Improves performance for large datasets.</li>
            <li className="mtop5p">Makes the code expressive and concise.</li>
        </ul>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>4. Example:</b></h5></div>
    <div className="mtop5p"><Highlight content={ANYMATCH_EXAMPLE_BASIC} lang="java" /></div>
    <div className="mtop5p padLeft5p">In the code above, we check if any name in the list starts with <code><b>"A"</b></code>. The output is</div>
    <div className="mtop5p"><Highlight content={`Any name starts with A? true`} lang="java" /></div>
 </div>);
};

export default AnyMatch;