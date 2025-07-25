import React from "react";
import { Highlight } from "e-ui-react";

const MAPTOINT_EXAMPLE_SUM = `import java.util.stream.*;
import java.util.*;

public class MapToIntExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ravi", "Anil", "Sita");

        int totalLength = names.stream()
                               .mapToInt(String::length)  // returns IntStream
                               .sum();                    // terminal operation

        System.out.println("Total length of all names: " + totalLength);
    }
}`;

const MAPTOINT_OUTPUT_SUM = `Total length of all names: 12`;

const MAPTOINT_EXAMPLE_OBJECT = `class Employee {
    String name;
    int age;

    Employee(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class MapToIntObjectExample {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("Ravi", 30),
            new Employee("Sita", 25),
            new Employee("Anil", 28)
        );

        int totalAge = employees.stream()
                                .mapToInt(e -> e.age)  // extract int
                                .sum();

        System.out.println("Total Age: " + totalAge);
    }
}`;

const MAPTOINT_OUTPUT_OBJECT = `Total Age: 83`;

const MapToInt = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>mapToInt(ToIntFunction&lt;T&gt;)</code>?</b></h5></div>
    <div className="mtop15p">
        <code><b>mapToInt(ToIntFunction&lt;T&gt;)</b></code> is an intermediate operation that:
        <ul>
            <li className="mtop5p">Converts a <code><b>Stream&lt;T&gt;</b></code> (object stream) to an <code><b>IntStream</b></code>.</li>
            <li className="mtop5p">Extracts an <code><b>int</b></code> value from each object using a <code><b>ToIntFunction</b></code>.</li>
        </ul>
    </div>

    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`IntStream mapToInt(ToIntFunction<? super T> mapper)`} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. Why and When to Use It?</b></h5></div>
    <div>
        <div className="mtop15p">Use <code><b>mapToInt()</b></code> when:</div>
        <ul>
            <li className="mtop5p">You want to 
            perform <b>numeric operations</b> like <code><b>sum()</b></code>, <code><b>average()</b></code>, <code><b>min()</b></code>, etc.</li>
            <li className="mtop5p">Your stream contains <b>objects</b>, and you want to extract <code><b>int</b></code> fields.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #1: Sum of name lengths</b></h5></div>
    <div className="mtop5p"><Highlight content={MAPTOINT_EXAMPLE_SUM} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Output:</b></h5></div>
    <div className="mtop5p"><Highlight content={MAPTOINT_OUTPUT_SUM} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #2: Extract <code>int</code> field from Object</b></h5></div>
    <div className="mtop5p"><Highlight content={MAPTOINT_EXAMPLE_OBJECT} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Output:</b></h5></div>
    <div className="mtop5p"><Highlight content={MAPTOINT_OUTPUT_OBJECT} lang="java" /></div>
 </div>);
};

export default MapToInt;