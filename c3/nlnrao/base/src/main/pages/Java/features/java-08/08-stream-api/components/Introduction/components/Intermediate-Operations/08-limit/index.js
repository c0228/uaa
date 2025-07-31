import React from "react";
import { Highlight, Card } from "e-ui-react";

const ELEMENTS_EXAMPLE_LIST = `import java.util.Arrays;
import java.util.List;

public class LimitExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ravi", "Anil", "Suresh", "Bala", "Mohan");

        names.stream()
             .limit(3)
             .forEach(System.out::println);
    }
}`;

const ELEMENTS_OUTPUT_LIST = `Ravi
Anil
Suresh`;

const SORTED_EXAMPLE_LIST = `import java.util.Arrays;
import java.util.List;
import java.util.Comparator;

public class TopScores {
    public static void main(String[] args) {
        List<Integer> scores = Arrays.asList(78, 95, 88, 67, 90, 85);

        scores.stream()
              .sorted(Comparator.reverseOrder()) // Descending order
              .limit(3)
              .forEach(System.out::println);
    }
}`;

const SORTED_OUTPUT_LIST = `95
90
88`;

const FILTER_EXAMPLE_LIMIT = `List<String> names = Arrays.asList("Ravi", "Ram", "Rajesh", "Anil", "Ramesh");

names.stream()
     .filter(n -> n.startsWith("R"))
     .limit(2)
     .forEach(System.out::println);`;

const FILTER_OUTPUT_LIMIT = `Ravi
Ram`;

const Limit = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>limit()</code>?</b></h5></div>
    <div className="mtop5p"><code><b>limit()</b></code> is an <b>intermediate operation</b> in Java Stream API 
    that <b>truncates the stream to a specified number of elements</b> from the beginning.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`Stream<T> limit(long maxSize)`} lang="java" /></div>
    <div>
        <ul>
            <li className="mtop5p"><b>maxSize:</b> Number of elements to keep.</li>
            <li className="mtop5p">If the stream has more elements than <code><b>maxSize</b></code>, the rest are ignored.</li>
            <li className="mtop5p">If <code><b>maxSize</b></code> is greater than the number of elements, the whole stream is returned.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>limit()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">To <b>restrict results</b> to a maximum number of elements.</li>
            <li className="mtop5p">When implementing <b>pagination or previews</b>.</li>
            <li className="mtop5p">For <b>performance</b>, when full processing is not required.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples</b></h5></div>
    
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Get Top 3 Elements from a List</b></h5></div>
    <div className="mtop5p"><Highlight content={ELEMENTS_EXAMPLE_LIST} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={ELEMENTS_OUTPUT_LIST} lang="java" /></div>

    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Combine with <code>sorted()</code> to get Top 3 High Scores</b></h5></div>
    <div className="mtop5p"><Highlight content={SORTED_EXAMPLE_LIST} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={SORTED_OUTPUT_LIST} lang="java" /></div>

    <div className="mtop5p"><h5 className="blog-head"><b>Example #3: Use with <code>filter()</code> and <code>limit()</code></b></h5></div>
    <div className="mtop5p"><Highlight content={FILTER_EXAMPLE_LIMIT} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={FILTER_OUTPUT_LIMIT} lang="java" /></div>

    <div className="mtop15p mbot15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h5 className="blog-head"><b>Notes:</b></h5></div>
            <ul>
                <li className="mtop5p"><code><b>limit()</b></code> is <b>stateful</b> and <b>short-circuiting</b>: it processes 
                only enough elements to fulfill the limit.</li>
                <li className="mtop5p">Useful in <b>performance-sensitive</b> operations on large or infinite streams.</li>
            </ul>
        </Card>
    </div>
 </div>);
};

export default Limit;