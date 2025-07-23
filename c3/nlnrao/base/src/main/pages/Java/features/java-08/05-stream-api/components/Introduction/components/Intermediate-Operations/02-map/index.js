import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const STREAMS_MAP_NAMESLIST = `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class MapExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ravi", "Raj", "Kiran");

        List<String> upperNames = names.stream()
                                       .map(String::toUpperCase)   // transform each name
                                       .collect(Collectors.toList());

        System.out.println(upperNames); // [RAVI, RAJ, KIRAN]
    }
}`;

const STREAMS_MAP_CUSTOMEREMAILS = `import java.util.List;
import java.util.stream.Collectors;

class Customer {
    private final String name;
    private final String email;
    public Customer(String name, String email) {
        this.name = name;
        this.email = email;
    }
    public String getEmail() { return email; }
}

public class CustomerEmailExample {
    public static void main(String[] args) {
        List<Customer> customers = List.of(
                new Customer("Ravi", "ravi@example.com"),
                new Customer("Anita", "anita@example.com"),
                new Customer("John", "john@example.com")
        );

        List<String> emails = customers.stream()
                                       .map(Customer::getEmail)    // extract email field
                                       .collect(Collectors.toList());

        System.out.println(emails);
    }
}`;

const STREAMS_FILTER_MAP_COMMON = `import java.util.List;
public class CustomerEmailExample {
    public static void main(String[] args) {
        List<Customer> customers = List.of(
                new Customer("Ravi", "ravi@example.com"),
                new Customer("Anita", "anita@example.com"),
                new Customer("John", "john@example.com")
        );
        List<String> emailsFromExampleDotCom = customers.stream()
            .map(Customer::getEmail)                  // extract email
            .filter(e -> e.endsWith("@example.com"))  // keep only certain domain
            .collect(Collectors.toList());
    }
}`;

const STREAMS_PRIMITIVE_USAGE = `import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class MapToObjExample {
    public static void main(String[] args) {
        // MapToObj Example
            Stream<String> stringStream = IntStream.range(1, 4)  // [1, 2, 3]
                    .mapToObj(i -> "Number: " + i);             // Int → String

            stringStream.forEach(System.out::println);
            // Output:
            // Number: 1
            // Number: 2
            // Number: 3

        // MapToInt Example
            List<String> names = Arrays.asList("Ravi", "Kiran", "Raj");

            int totalLength = names.stream()
                .mapToInt(String::length)   // String → int
                .sum();

            System.out.println("Total length: " + totalLength);  // Output: 13
        
        // MapToLong Example
            List<String> words = Arrays.asList("apple", "banana", "cherry");

            long totalLength = words.stream()
                .mapToLong(word -> (long) word.length())  // String → long
                .sum();

            System.out.println("Total length as long: " + totalLength);  // Output: 18

        // MapToDouble
            List<String> prices = Arrays.asList("100.5", "200.25", "50.0");

            double totalPrice = prices.stream()
                .mapToDouble(price -> Double.parseDouble(price))  // String → double
                .sum();

            System.out.println("Total price: " + totalPrice);  // Output: 350.75

    }
}`;

const Map = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code> map(Function&lt;T,R&gt;)</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Purpose:</b> Transform elements — e.g., 
            from <code><b>String</b></code> to <code><b>Integer</b></code>, 
            from <code><b>Employee</b></code> to <code><b>String name</b></code>, 
            from <code><b>Order</b></code> to <code><b>OrderTotal</b></code>, etc.</li>
            <li className="mtop5p"><b>Laziness:</b> Like all intermediate operations, nothing runs 
            until a <b>terminal operation</b> (e.g., <code><b>collect</b></code>, <code><b>forEach</b></code>, <code><b>count</b></code>) is invoked.</li>
            <li className="mtop5p"><b>One-to-one:</b> Each input element produces <b>exactly one</b> output value 
            (unlike <code><b>flatMap</b></code>, which can produce many or none).</li>
        </ul>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Signature:</b></h5></div>
    <div className="mtop5p">
        <Highlight content={`<R> Stream<R> map(Function<? super T, ? extends R> mapper)`} lang="java" />
    </div>
    
    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>map()</code>?</b></h5></div>
    <div className="mtop5p">Use <code><b>map()</b></code> whenever you want to <b>convert</b> or <b>derive</b> something from each element:</div>
    <div className="mtop5p">
        <SimpleTable header={["Situation", (<div>Use <code>map()</code> to...</div>), (<div>Example input &#8594; output</div>)]} 
                    columns={[
                        ["Extract a field", "Get employee names", (<div><code><b>Employee</b></code> &#8594; <code><b>String</b></code></div>)],
                        ["Convert type", "Parse numbers", (<div><code><b>"42"</b></code> &#8594; <code><b>Integer</b></code></div>)],
                        ["Transform values", "Uppercase strings", (<div><code><b>"java"</b></code> &#8594; <code><b>"JAVA"</b></code></div>)],
                        ["Compute derived data", "Calculate lengths", (<div><code><b>"Ravi"</b></code> &#8594; <code><b>4</b></code></div>)],
                        ["Adapt to DTOs", (<div>Entity &#8594; DTO class</div>), (<div><code><b>UserEntity</b></code> &#8594; <code><b>UserDTO</b></code></div>)],
                    ]} />
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Why Use <code><b>map()</b></code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Declarative & readable:</b> Express what you want, not how to loop.</li>
            <li className="mtop5p"><b>Chainable:</b> Combine with <code><b>filter()</b></code>, <code><b>sorted()</b></code>, <code><b>distinct()</b></code>, etc.</li>
            <li className="mtop5p"><b>Type-safe transformations:</b> Use lambdas/method references.</li>
            <li className="mtop5p"><b>Supports parallelism:</b> Works cleanly in parallel streams without shared mutation.</li>
            <li className="mtop5p"><b>No in-place mutation required:</b> Encourages functional-style immutability.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>4. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Uppercasing a List of Names</b></h5></div>
    <div className="mtop5p"><Highlight content={STREAMS_MAP_NAMESLIST} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #2: Extracting Customer Emails</b></h5></div>
    <div className="mtop5p"><Highlight content={STREAMS_MAP_CUSTOMEREMAILS} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #3: Combining <code>filter()</code> + <code>map()</code> (Common Pattern)</b></h5></div>
    <div className="mtop5p">Filter first, then transform:</div>
    <div className="mtop5p"><Highlight content={STREAMS_FILTER_MAP_COMMON} lang="java" /></div>
    
    <div className="mtop15p"><h5 className="blog-head"><b>5. Mapping to Primitive Streams</b></h5></div>
    <div className="mtop5p">
        <div>We do it using variants:</div>
        <div>
            <ul>
                <li className="mtop5p"><code><b>mapToObj(IntFunction)</b></code> : Converts an <code><b>IntStream</b></code> to an <code><b>Object Stream</b></code> (<code><b>Stream&lt;R&gt;</b></code>)</li>
                <li className="mtop5p"><code><b>mapToInt(ToIntFunction)</b></code>:  Converts a generic stream to an <code><b>IntStream</b></code></li>
                <li className="mtop5p"><code><b>mapToLong(ToLongFunction)</b></code>: Converts a stream to a <code><b>LongStream</b></code></li>
                <li className="mtop5p"><code><b>mapToDouble(ToDoubleFunction)</b></code>: Converts a stream to a <code><b>DoubleStream</b></code></li>
            </ul>
        </div>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example:</b></h5></div>
    <div className="mtop5p">If you want to perform numeric operations efficiently (sums, averages), map to a <b>primitive stream</b>:</div>
    <div className="mtop5p"><Highlight content={STREAMS_PRIMITIVE_USAGE} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>6. Difference - <code>map()</code> vs <code>flatMap()</code></b>:</h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Use This", "When...", "Result Type"]} 
                    columns={[
                        [(<div><code><b>map()</b></code></div>), (<div>Each element becomes <b>one</b> value.</div>), (<div><code><b>Stream&lt;R&gt;</b></code></div>)],
                        [(<div><code><b>flatMap()</b></code></div>), (<div>Each element becomes <b>zero or more</b> values (like flattening lists).</div>), (<div><code><b>Flattened Stream&lt;R&gt;</b></code></div>)]
                    ]} />
    </div>
    <div className="mtop5p">Example need for <code><b>flatMap()</b></code>: list of lists &#8594; single stream of elements.</div>
    
    <div className="mtop15p"><h5 className="blog-head"><b>Common Mistakes</b>:</h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Mistake", "Better Approach"]} 
                    columns={[
                        [(<div>Doing mutation inside <code><b>map()</b></code> (e.g., modifying objects)</div>), (<div>Prefer returning transformed values; keep functions pure when possible.</div>)],
                        [(<div>Using <code><b>map()</b></code> when you need to filter out elements</div>), (<div>Use <code><b>filter()</b></code> first (or instead).</div>)],
                        [(<div>Forgetting the terminal operation</div>), (<div>Without <code><b>collect()</b></code>, <code><b>forEach()</b></code>, etc., nothing runs.</div>)]
                    ]} />
    </div>
 </div>);
};

export default Map;