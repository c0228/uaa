import React from "react";
import { Highlight, Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const TOARRAY_EXAMPLE_BASIC = `import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
        Stream<String> stream = Stream.of("Java", "Python", "Go");

        Object[] array = stream.toArray();

        for (Object obj : array) {
            System.out.println(obj);
        }
    }
}`;

const TOARRAY_OUTPUT_BASIC = `Java
Python
Go`;

const TOARRAY_EXAMPLE_GENERATORS = `import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
        Stream<String> stream = Stream.of("Java", "Python", "Go");

        String[] array = stream.toArray(String[]::new); // type-safe

        for (String lang : array) {
            System.out.println(lang);
        }
    }
}`;

const TOARRAY_OUTPUT_GENERATORS = `Java
Python
Go`;

const ToArray = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>toArray()</code>?</b></h5></div>
    <div className="mtop5p">The <code><b>toArray()</b></code> method in Java Stream API is a <b>terminal operation</b> used to 
    collect the elements of a stream into an <b>array</b>.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`Object[] toArray()`} lang="java" /></div>
    <div className="mtop5p">Or with generator:</div>
    <div className="mtop5p"><Highlight content={`<T> T[] toArray(IntFunction<T[]> generator)`} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to use <code>toArray()</code>?</b></h5></div>
    <div className="mtop5p">Use <code><b>toArray()</b></code> when:</div>
    <div>
        <ul>
            <li className="mtop5p">You want to <b>convert a Stream into an array</b>.</li>
            <li className="mtop5p">You’re done processing the stream and want a final array result.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Basic <code>toArray()</code></b></h5></div>
    <div className="mtop5p"><Highlight content={TOARRAY_EXAMPLE_BASIC} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={TOARRAY_OUTPUT_BASIC} lang="java" /></div>
    <div className="mtop5p"><Icon type="FontAwesome" name="fa-warning" size={16} color="orange" /> Result 
    is an <code><b>Object[]</b></code>. Need to cast if you want specific types.</div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #2: <code>toArray()</code> with Generator</b></h5></div>
    <div className="mtop5p"><Highlight content={TOARRAY_EXAMPLE_GENERATORS} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={TOARRAY_OUTPUT_GENERATORS} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>4. Differences - <code>toArray()</code> vs <code>collect(Collectors.toList())</code></b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Feature", "toArray()", "collect(Collectors.toList())"]} 
                columns={[
                    ["Output Type", "Array", "List"],
                    ["Flexibility", "Less (fixed-size array)", "More (resizable list)"],
                    ["Performance", "Slightly faster", "May be slower (depends on collector logic)"],
                ]} />
    </div>
 </div>);
};

export default ToArray;