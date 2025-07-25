import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const MAX_EXAMPLE_LONGEST = `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alexander", "Tom", "Zoe");

        Optional<String> longest = names.stream()
            .max(Comparator.comparingInt(String::length));

        longest.ifPresent(name -> System.out.println("Longest: " + name));
    }
}`;

const MAX_OUTPUT_LONGEST = `Longest: Alexander`;

const MAX_EXAMPLE_HIGHEST = `import java.util.*;
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

        Optional<Employee> highestPaid = employees.stream()
            .max(Comparator.comparingInt(e -> e.salary));

        highestPaid.ifPresent(System.out::println);
    }
}`;

const MAX_OUTPUT_HIGHEST = `Charlie - ₹60000`;

const Max = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>max(Comparator)</code>?</b></h5></div>
    <div className="mtop5p">The <code><b>max(Comparator)</b></code> method in Java Stream API is used 
    to <b>find the maximum element</b> of the stream based on <b>custom comparison logic</b> provided via a Comparator.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Method Signature</b></h5></div>
    <div className="mtop5p"><Highlight content={`Optional<T> max(Comparator<? super T> comparator)`} lang="java" /></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Returns:</b> <code><b>Optional&lt;T&gt;</b></code> – may be empty if the stream is empty.</li>
            <li className="mtop5p"><b>Operation Type:</b> Terminal</li>
            <li className="mtop5p"><b>Input:</b> A custom <code><b>Comparator</b></code> that defines the comparison logic.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When Use <code>max(Comparator)</code>?</b></h5></div>
    <div className="mtop5p">Use <code><b>max(Comparator)</b></code> when:</div>
    <div>
        <ul>
            <li className="mtop5p">You need to find the <b>largest element</b> based on <b>a custom field</b> or rule (e.g., salary, name length).</li>
            <li className="mtop5p">You are working with <b>objects</b> in streams (not primitives 
            like <code><b>int</b></code>, <code><b>long</b></code>, etc.).</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Find Longest String</b></h5></div>
    <div className="mtop5p"><Highlight content={MAX_EXAMPLE_LONGEST} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={MAX_OUTPUT_LONGEST} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Find Employee with Highest Salary</b></h5></div>
    <div className="mtop5p"><Highlight content={MAX_EXAMPLE_HIGHEST} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={MAX_OUTPUT_HIGHEST} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>Comparision:</b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Method", "Description"]} 
                columns={[
                    [(<div><code><b>min(Comparator)</b></code></div>), "Smallest element using comparator"],
                    [(<div><code><b>max(Comparator)</b></code></div>), "Largest element using comparator"],
                    [(<div><code><b>count()</b></code></div>), "Total elements in stream"],
                    [(<div><code><b>summaryStatistics()</b></code></div>), "All aggregate metrics"],
                ]} />
    </div>
 </div>);
};

export default Max;