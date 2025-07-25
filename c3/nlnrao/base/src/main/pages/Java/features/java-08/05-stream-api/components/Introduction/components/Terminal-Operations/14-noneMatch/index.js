import React from "react";
import { Highlight } from "e-ui-react";

const NONEMATCH_EXAMPLE_BASIC = `import java.util.Arrays;
import java.util.List;

public class NoneMatchExample {
    public static void main(String[] args) {
        List<String> fruits = Arrays.asList("Apple", "Banana", "Mango");

        // Check if none of the fruits start with "Z"
        boolean noneStartWithZ = fruits.stream()
                                       .noneMatch(fruit -> fruit.startsWith("Z"));

        System.out.println("Do none of the fruits start with Z? " + noneStartWithZ);
    }
}`;

const NoneMatch = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>noneMatch(Predicate&lt;T&gt; predicate)</code>?</b></h5></div>
    <div className="mtop5p"><code><b>noneMatch(Predicate&lt;T&gt; predicate)</b></code> checks whether <b>no elements</b> of 
    the stream match the given predicate. It <b>short-circuits</b> as soon as one element matches the condition (returns false).</div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>noneMatch(Predicate&lt;T&gt; predicate)</code>?</b></h5></div>
    <div className="mtop5p">Use <code><b>noneMatch()</b></code> when you want to ensure that <b>none of the elements</b> in 
    the stream satisfy a given condition.</div>

    <div className="mtop15p"><h5 className="blog-head"><b>Example:</b></h5></div>
    <div className="mtop5p"><Highlight content={NONEMATCH_EXAMPLE_BASIC} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={`Do none of the fruits start with Z? true`} lang="java" /></div>
    <div className="mtop5p">If even <b>one</b> fruit had started with <code><b>"Z"</b></code>, the result would have been <code><b>false</b></code>.</div>
 </div>);
};

export default NoneMatch;