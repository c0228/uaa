import React from "react";
import { Highlight, Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const MIN_EXAMPLE_SMALLEST = `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alexander", "Tom", "Zoe");

        Optional<String> shortest = names.stream()
                .min(Comparator.comparingInt(String::length));

        shortest.ifPresent(name -> System.out.println("Shortest: " + name));
    }
}`;

const MIN_OUTPUT_SMALLEST = `Shortest: Tom`;

const MIN_EXAMPLE_EMPLOYEE = `import java.util.*;
import java.util.stream.*;

class Employee {
    String name;
    int salary;

    Employee(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }

    public String toString() {
        return name + " - ₹" + salary;
    }
}

public class Main {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", 50000),
            new Employee("Bob", 40000),
            new Employee("Charlie", 60000)
        );

        Optional<Employee> lowestPaid = employees.stream()
            .min(Comparator.comparingInt(e -> e.salary));

        lowestPaid.ifPresent(System.out::println);
    }
}`;

const MIN_EXAMPLE_OUTPUT = `Bob - ₹40000`;

const Min = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>min(Comparator)</code>?</b></h5></div>
    <div className="mtop5p">The <code><b>min(Comparator)</b></code> method is a <b>terminal operation</b> in Java Stream API. It is 
    used to find the <b>minimum element</b> of a stream <b>based on a custom comparison logic</b> provided by a Comparator.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Method Signature:</b></h5></div>
    <div className="mtop5p"><Highlight content={`Optional<T> min(Comparator<? super T> comparator)`} lang="java" /></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Returns:</b> <code><b>Optional&lt;T&gt;</b></code> (empty if stream is empty)</li>
            <li className="mtop5p"><b>Type:</b> Terminal Operation</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>min(Comparator)</code>?</b></h5></div>
    <div className="mtop5p">Use <code><b>min(Comparator)</b></code> when:</div>
    <div>
        <ul>
            <li className="mtop5p">You want to find the <i>smallest</i> element based on <b>custom sorting logic</b>.</li>
            <li className="mtop5p">You are working with <b>objects</b>, not primitives (for primitives, use <code><b>IntStream.min()</b></code> etc.)</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Smallest String by Length</b></h5></div>
    <div className="mtop5p"><Highlight content={MIN_EXAMPLE_SMALLEST} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={MIN_OUTPUT_SMALLEST} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Find Employee with Minimum Salary</b></h5></div>
    <div className="mtop5p"><Highlight content={MIN_EXAMPLE_EMPLOYEE} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={MIN_EXAMPLE_OUTPUT} lang="java" /></div>

    <div className="mtop15p">
        <Card padding={15}>
            <div><h5 className="blog-head"><b>Note:</b></h5></div>
            <div>
                <ul>
                    <li className="mtop5p">Returns an <code><b>Optional</b></code> — always 
                    check <code><b>.isPresent()</b></code> or use <code><b>.ifPresent()</b></code>.</li>
                    <li className="mtop5p">For reverse logic, use <code><b>max(Comparator)</b></code> or <b>reverse comparator</b>.</li>
                    <li className="mtop5p"><b>For primitives:</b> <code><b>IntStream.min()</b></code>, <code><b>LongStream.min()</b></code>, <code><b>DoubleStream.min()</b></code>.</li>
                </ul>
            </div>
            <div className="mtop5p">
                <SimpleTable header={["Method", "Description"]} 
                        columns={[
                            [(<div><code><b>min()</b></code></div>), "Returns the minimum element"],
                            [(<div><code><b>max()</b></code></div>), "Returns the maximum element"],
                            [(<div><code><b>count()</b></code></div>), "Returns number of elements"],
                            [(<div><code><b>summaryStatistics()</b></code></div>), "All stats (count, min, max...)"],
                        ]} />
            </div>
        </Card>
    </div>
 </div>);
};

export default Min;