import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const COLLECT_EXAMPLE_LIST = `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<String> list = Stream.of("Java", "Python", "Go")
                                  .collect(Collectors.toList());

        System.out.println(list);
    }
}`;

const COLLECT_OUTPUT_LIST = `[Java, Python, Go]`;

const COLLECT_EXAMPLE_SET = `Set<String> set = Stream.of("Java", "Python", "Java")
                        .collect(Collectors.toSet());
System.out.println(set); // No duplicates`;

const COLLECT_EXAMPLE_MAP = `import java.util.stream.Collectors;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> map = Stream.of("Java", "Go", "Python")
            .collect(Collectors.toMap(
                s -> s,              // key
                s -> s.length()      // value
            ));

        System.out.println(map);
    }
}`;

const COLLECT_OUTPUT_MAP = `{Java=4, Go=2, Python=6}`;

const COLLECT_EXAMPLE_JOINSTRINGS = `String result = Stream.of("Java", "Go", "Python")
                      .collect(Collectors.joining(", "));

System.out.println(result); // Java, Go, Python`;

const COLLECT_EXAMPLE_GROUPING = `Map<Integer, List<String>> grouped = Stream.of("Java", "Go", "Rust", "SQL")
    .collect(Collectors.groupingBy(String::length));

System.out.println(grouped);`;

const COLLECT_OUTPUT_GROUPING = `{2=[Go], 3=[SQL], 4=[Java, Rust]}`;

const Collect = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>collect(Collector)</code>?</b></h5></div>
    <div className="mtop5p">The <code><b>collect()</b></code> method is one of the most <b>powerful and versatile</b> terminal 
    operations in the Java Stream API. It <b>accumulates elements</b> of a stream into a <b>summary result</b>, like 
    a <code><b>List</b></code>, <code><b>Set</b></code>, <code><b>Map</b></code>, <code><b>String</b></code>, etc.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`<R, A> R collect(Collector<? super T, A, R> collector)`} lang="java" /></div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>T</b></code> - Type of Stream Elements</li>
            <li className="mtop5p"><code><b>A</b></code> - Accumulator Type (intermediate result)</li>
            <li className="mtop5p"><code><b>R</b></code> - Result Type (final result)</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>collect(Collector)</code>?</b></h5></div>
    <div className="mtop15p">
        <div>Use <code><b>collect()</b></code> when you want to:</div>
        <div>
            <ul>
                <li className="mtop5p">Convert a stream to a <b>collection</b> (<code><b>List</b></code>, <code><b>Set</b></code>, <code><b>Map</b></code>, etc.)</li>
                <li className="mtop5p">Perform <b>grouping, partitioning, joining</b></li>
                <li className="mtop5p">Apply <b>mutable reductions</b> (combining values using a mutable container)</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Collect to List</b></h5></div>
    <div className="mtop5p"><Highlight content={COLLECT_EXAMPLE_LIST} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={COLLECT_OUTPUT_LIST} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Collect to Set</b></h5></div>
    <div className="mtop5p"><Highlight content={COLLECT_EXAMPLE_SET} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={COLLECT_OUTPUT_SET} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #3: Collect to Map</b></h5></div>
    <div className="mtop5p"><Highlight content={COLLECT_EXAMPLE_MAP} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={COLLECT_OUTPUT_MAP} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #4: Joining Strings</b></h5></div>
    <div className="mtop5p"><Highlight content={COLLECT_EXAMPLE_JOINSTRINGS} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #5: Grouping by Length</b></h5></div>
    <div className="mtop5p"><Highlight content={COLLECT_EXAMPLE_GROUPING} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={COLLECT_OUTPUT_GROUPING} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>Common Collectors</b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Collector", "Purpose"]} 
                columns={[
                    [(<div><code><b>toList()</b></code></div>), (<div>Collect to <code><b>List&lt;T&gt;</b></code></div>)],
                    [(<div><code><b>toSet()</b></code></div>), (<div>Collect to <code><b>Set&lt;T&gt;</b></code></div>)],
                    [(<div><code><b>toMap(keyMapper, valueMapper)</b></code></div>), (<div>Collect to <code><b>Map&lt;K, V&gt;</b></code></div>)],
                    [(<div><code><b>joining()</b></code></div>), (<div>Concatenate Strings</div>)],
                    [(<div><code><b>groupingBy(Function)</b></code></div>), (<div>Group elements by a key</div>)],
                    [(<div><code><b>partitioningBy(Predicate)</b></code></div>), (<div>Partition elements into two groups</div>)],
                    [(<div><code><b>counting()</b></code></div>), (<div>Count number of elements</div>)],
                    [(<div><code><b>summarizingInt(ToIntFunction)</b></code></div>), (<div>Summary stats (count, sum, avg, min, max)</div>)],
                    [(<div><code><b>reducing()</b></code></div>), (<div>Generalized reduction</div>)],
                ]} />
    </div>
 </div>);
};

export default Collect;