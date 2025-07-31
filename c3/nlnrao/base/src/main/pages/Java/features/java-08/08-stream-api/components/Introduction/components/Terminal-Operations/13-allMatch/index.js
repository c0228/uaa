import React from "react";
import { Highlight } from "e-ui-react";

const ALLMATCH_EXAMPLE_BASIC = `import java.util.Arrays;
import java.util.List;

public class AllMatchExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Angela", "Andrew", "Amy");

        // Check if all names start with "A"
        boolean allStartWithA = names.stream()
                                     .allMatch(name -> name.startsWith("A"));

        System.out.println("Do all names start with A? " + allStartWithA);
    }
}`;

const AllMatch = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>allMatch(Predicate&lt;T&gt; predicate)</code>?</b></h5></div>
    <div className="mtop5p">
        <code><b>allMatch(Predicate&lt;T&gt; predicate)</b></code> checks whether <b>all elements</b> of the stream match the given 
        predicate. It <b>short-circuits</b> (stops processing) as soon as one element fails the condition.
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>allMatch(Predicate&lt;T&gt; predicate)</code>?</b></h5></div>
    <div className="mtop5p">Use <code><b>allMatch()</b></code> when you want to ensure <b>every element</b> in a stream satisfies a condition.</div>
 
    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><Highlight content={ALLMATCH_EXAMPLE_BASIC} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={`Do all names start with A? true`} lang="java" /></div>
    <div className="mtop5p">If even one name didn’t start with “A”, the result would be <code><b>false</b></code>.</div>
 </div>);
 
};

export default AllMatch;