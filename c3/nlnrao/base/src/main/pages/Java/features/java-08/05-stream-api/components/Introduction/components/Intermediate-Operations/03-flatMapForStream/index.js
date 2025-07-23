import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const STREAMS_EXAMPLE1_FLATMAP = `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class FlatMapExample {
    public static void main(String[] args) {
        List<List<String>> nestedList = Arrays.asList(
            Arrays.asList("A", "B"),
            Arrays.asList("C", "D"),
            Arrays.asList("E")
        );

        List<String> flatList = nestedList.stream()
            .flatMap(List::stream)
            .collect(Collectors.toList());

        System.out.println(flatList);  // Output: [A, B, C, D, E]
    }
}`;

const STREAMS_EXAMPLE2_FLATMAP = `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class SentenceSplitExample {
    public static void main(String[] args) {
        List<String> sentences = Arrays.asList("hello world", "java streams", "flat map");

        List<String> words = sentences.stream()
            .flatMap(sentence -> Arrays.stream(sentence.split(" ")))
            .collect(Collectors.toList());

        System.out.println(words);  // Output: [hello, world, java, streams, flat, map]
    }
}`;

const STREAMS_EXAMPLE3_FLATMAP = `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class Employee {
    private String name;
    private List<String> phoneNumbers;

    public Employee(String name, List<String> phoneNumbers) {
        this.name = name;
        this.phoneNumbers = phoneNumbers;
    }

    public List<String> getPhoneNumbers() {
        return phoneNumbers;
    }
}

public class EmployeeFlatMapExample {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("Ravi", Arrays.asList("111", "222")),
            new Employee("Anita", Arrays.asList("333", "444"))
        );

        List<String> allPhones = employees.stream()
            .flatMap(emp -> emp.getPhoneNumbers().stream())
            .collect(Collectors.toList());

        System.out.println(allPhones);  // Output: [111, 222, 333, 444]
    }
}`;

const FlatMapForStream = () =>{
 return (<div className="mtop5p mbot15p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>flatMap(Function&lt;T, Stream&lt;R&gt;&gt;)</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">It <b>maps</b> each element to a stream and then <b>flattens</b> all those inner streams into a single stream.</li>
            <li className="mtop5p">
                <div>Commonly used when:</div>
                <ul>
                    <li className="mtop5p">You have a <b>list of lists</b>, or</li>
                    <li className="mtop5p">Each element generates multiple values (e.g., splitting strings), or</li>
                    <li className="mtop5p">You want to perform a <b>1-to-many transformation</b>.</li>
                </ul>
            </li>
        </ul>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Signature:</b></h5></div>
    <div className="mtop5p">
        <Highlight content={`<R> Stream<R> flatMap(Function<? super T, ? extends Stream<? extends R>> mapper)`} lang="java" />
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code><b>flatMap()</b></code>?</b></h5></div>
    <div className="mtop15p">Use <code><b>flatMap()</b></code> when:</div>
    <div>
        <ul>
            <li className="mtop5p">Your transformation returns a <b>Stream</b> instead of a single value.</li>
            <li className="mtop5p">You want to <b>flatten nested collections</b>, like List&lt;List&lt;T&gt;&gt; &#8594; List&lt;T&gt;.</li>
            <li className="mtop5p">You are <b>splitting strings</b>, accessing <b>sub-collections</b>, or <b>expanding values</b>.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Flattening a List of Lists</b></h5></div>
    <div className="mtop5p"><Highlight content={STREAMS_EXAMPLE1_FLATMAP} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Splitting Words in Sentences</b></h5></div>
    <div className="mtop5p"><Highlight content={STREAMS_EXAMPLE2_FLATMAP} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #3: With Custom Class – Employee → List of Phone Numbers</b></h5></div>
    <div className="mtop5p"><Highlight content={STREAMS_EXAMPLE3_FLATMAP} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Key Differences - <code>map()</code> vs <code>flatMap()</code></b></h5></div>
    <div className="mtop5p mbot15p">
        <SimpleTable header={["Features", "map()", "flatMap()"]} 
                columns={[
                    ["Transformation", (<div> 1 &#8594; 1 or 1 &#8594; object</div>), (<div> 1 &#8594; stream (0,1 or many)</div>)],
                    ["Result", "Stream of values", "Flattened Stream of values"],
                    ["Example", (<div>String &#8594; Integer</div>), (<div>String &#8594; Stream &lt;String&gt; (e.g. split words)</div>)],
                    ["Output Type", (<div><code><b>Stream&lt;Stream&lt;T&gt;&gt;</b></code> (if mapping to stream)</div>), (<div><code><b>Stream&lt;T&gt;</b></code> after flattening</div>)],
                ]} />
    </div>
 </div>);
};

export default FlatMapForStream;