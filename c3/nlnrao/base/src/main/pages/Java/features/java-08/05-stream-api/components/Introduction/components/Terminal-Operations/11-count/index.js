import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const COUNT_EXAMPLE_ELEMENTS = `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

        long total = names.stream().count();
        System.out.println("Total names: " + total);
    }
}`;

const COUNT_EXAMPLE_EVEN = `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

        long evenCount = numbers.stream()
                                .filter(n -> n % 2 == 0)
                                .count();

        System.out.println("Even numbers: " + evenCount);
    }
}`;

const Count = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>count()</code>?</b></h5></div>
    <div className="mtop5p">The <code><b>count()</b></code> method in Java Stream API is used 
    to <b>count the number of elements</b> in the stream.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Method Signature</b></h5></div>
    <div className="mtop5p"><Highlight content={`long count()`} lang="java" /></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Returns:</b> Total number of elements as a <code><b>long</b></code>.</li>
            <li className="mtop5p"><b>Operation Type:</b> Terminal</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>count()</code>?</b></h5></div>
    <div className="mtop5p">Use <code><b>count()</b></code> when:</div>
    <div>
        <ul>
            <li className="mtop5p">You need to <b>know how many elements</b> exist in the stream.</li>
            <li className="mtop5p">You want to <b>count filtered results</b> (e.g., number of even numbers, or people above age 60).</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Count All Elements</b></h5></div>
    <div className="mtop5p"><Highlight content={COUNT_EXAMPLE_ELEMENTS} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={`Total names: 3`} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Count Even Numbers</b></h5></div>
    <div className="mtop5p"><Highlight content={COUNT_EXAMPLE_EVEN} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={`Even numbers: 3`} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>Comparsion:</b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Method", "Purpose"]} 
                columns={[  
                    [(<div><code><b>count()</b></code></div>), "Total elements in stream"],
                    [(<div><code><b>filter()</b></code></div>), (<div>Use with <code><b>count()</b></code> to count matching elements</div>)],
                    [(<div><code><b>collect()</b></code></div>), "To gather elements into a list or set"],
                    [(<div><code><b>reduce()</b></code></div>), "For custom total calculation"],
                ]} />
    </div>
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
                <div><h5 className="blog-head"><b>Note:</b></h5></div>
                <div>
                    <ul>
                        <li className="mtop5p"><code><b>count()</b></code> <b>triggers</b> the terminal operation, consuming the stream</li>
                        <li className="mtop5p">Always apply intermediate operations 
                            (like <code><b>filter</b></code>, <code><b>distinct</b></code>, etc.) before <code><b>count()</b></code> if needed.</li>
                    </ul>
                </div>
        </Card>
    </div>
 </div>);
};

export default Count;