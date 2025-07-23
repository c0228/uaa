import React from "react";
import { Highlight } from "e-ui-react";

const STREAMS_EXAMPLE_FILTER = `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class FilterExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ravi", "Raj", "Kiran", "Ramu", "John");

        // Filter names that start with "R"
        List<String> filteredNames = names.stream()
                                          .filter(name -> name.startsWith("R"))
                                          .collect(Collectors.toList());

        System.out.println(filteredNames);  // Output: [Ravi, Raj, Ramu]
    }
}`;

const Filter = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>filter(Predicate&lt;T&gt;)</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>filter()</b></code> takes a <b>Predicate</b> (a functional interface with 
            method <code><b>boolean test(T t))</b></code>.</li>
            <li className="mtop5p">It is used to <b>exclude elements</b> from the stream that <b>do not match</b> the condition.</li>
            <li className="mtop5p">It is <b>lazy</b>, meaning it doesn’t process until a <b>terminal operation</b> (like <code><b>forEach</b></code>, <code><b>collect</b></code>, etc.) is called.</li>
        </ul>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p">
        <Highlight content={`Stream<T> filter(Predicate<? super T> predicate)`} lang="java" />
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>filter()</code>?</b></h5></div>
    <div className="mtop15p">
        <div>Use <code><b>filter()</b></code>:</div>
        <div>
            <ul>
                <li className="mtop5p">When you need to <b>process only a subset</b> of elements in a stream.</li>
                <li className="mtop5p">When you want to <b>exclude nulls</b>, filter out <b>even/odd numbers</b>, strings 
                that <b>start with a letter</b>, etc.</li>
                <li className="mtop5p">Whenever <b>conditional selection</b> is needed <b>before</b> mapping, reducing, collecting, etc.</li>
            </ul>
        </div>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>3. Why Use <code>filter()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">It simplifies logic that otherwise needs <code><b>for</b></code> loops or <code><b>if</b></code> conditions.</li>
            <li className="mtop5p">It improves readability and makes code more <b>declarative</b>.</li>
            <li className="mtop5p">Easily chains <b>with other stream operations</b> (like <code><b>map()</b></code>, <code><b>sorted()</b></code>, etc.).</li>
        </ul>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>4. Example:</b></h5></div>
    <div className="mtop15p">
        <Highlight content={STREAMS_EXAMPLE_FILTER} lang="java" />
    </div>
 </div>);
};

export default Filter;