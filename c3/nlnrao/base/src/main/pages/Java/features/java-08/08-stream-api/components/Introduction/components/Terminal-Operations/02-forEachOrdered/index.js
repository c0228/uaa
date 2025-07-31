import React from "react";
import { Highlight, Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const STREAM_EXAMPLE_SEQUENCIAL = `import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("Zara", "Yash", "Amit");

        names.stream()
             .forEachOrdered(name -> System.out.println(name));
    }
}`;

const STREAM_OUTPUT_SEQUENCIAL = `Zara
Yash
Amit`;

const STREAM_EXAMPLE_PARALLEL = `List<String> names = List.of("Zara", "Yash", "Amit");

names.parallelStream()
     .forEachOrdered(name -> System.out.println(name));`;

const STREAM_OUTPUT_PARALLEL = `Zara
Yash
Amit`;

const ForEachOrdered = () =>{
 const DisplayIcon = ({ status }) =><Icon type="FontAwesome" name={(status==='Y')?"fa-check-circle":"fa-check-times"} size={16} color={(status==='Y')?"green":"red"} />
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>forEachOrdered(Consumer&lt;T&gt;)</code>?</b></h5></div>
    <div className="mtop5p"><code><b>forEachOrdered()</b></code> is a <b>terminal operation</b> in Java Stream API that processes 
    each element <b>in the order of the stream</b>, even if the stream is parallel.</div>
    <div className="mtop5p">It ensures <b>encounter order</b> is respected (i.e., the order in which elements appear in the source).</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`void forEachOrdered(Consumer<? super T> action)`} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>forEachOrdered(Consumer&lt;T&gt;)</code>?</b></h5></div>
    <div className="mtop5p">Use <code><b>forEachOrdered()</b></code> when:</div>
    <div>
        <ul>
            <li className="mtop5p">You need to <b>perform an action</b> on every element.</li>
            <li className="mtop5p">You are using a <b>parallel stream</b> and want to maintain order.</li>
            <li className="mtop5p">You care about the <b>sequence</b> of element processing</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #1: Using with Sequential Stream</b></h5></div>
    <div className="mtop5p"><Highlight content={STREAM_EXAMPLE_SEQUENCIAL} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Output:</b></h5></div>
    <div className="mtop5p"><Highlight content={STREAM_OUTPUT_SEQUENCIAL} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #1: Using with Parallel Stream</b></h5></div>
    <div className="mtop5p"><Highlight content={STREAM_EXAMPLE_PARALLEL} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Output:</b></h5></div>
    <div className="mtop5p">Even though it's a parallel stream, <code><b>forEachOrdered()</b></code> will print in order:</div>
    <div className="mtop5p"><Highlight content={STREAM_OUTPUT_PARALLEL} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>4. Differences: <code>forEach()</code> vs <code>forEachOrdered()</code></b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Feature", "forEach()", "forEachOrdered()"]} 
            columns={[
                ["Operation Type", "Terminal", "Terminal"],
                ["Maintains Order?", (<div><DisplayIcon /> (not in parallel)</div>), (<div><DisplayIcon status="Y" /> Yes</div>)],
                ["Suitable for Side Effects", (<div><DisplayIcon status="Y" /> Yes</div>), (<div><DisplayIcon status="Y" /> Yes</div>)],
                ["Parallel Friendly?", (<div><DisplayIcon status="Y" /> Fast but unordered</div>), (<div><DisplayIcon status="Y" /> Ordered but slightly slower</div>)],
            ]} />
    </div>
 </div>);
};

export default ForEachOrdered;