import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const SORT_EXAMPLE_LENGTH = `import java.util.*;
import java.util.stream.*;

public class SortByLength {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ravi", "Anil", "Suresh", "Bo");

        names.stream()
             .sorted(Comparator.comparingInt(String::length))  // ascending by length
             .forEach(System.out::println);
    }
}`;

const SORT_OUTPUT_LENGTH = `Bo
Ravi
Anil
Suresh`;

const SORT_EXAMPLE_CUSTOMOBJ = `import java.util.*;
import java.util.stream.*;

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String toString() {
        return name + " - " + age;
    }
}

public class SortPersonByAge {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("Ravi", 25),
            new Person("Anil", 30),
            new Person("Suresh", 22)
        );

        people.stream()
              .sorted(Comparator.comparingInt(p -> p.age))  // ascending by age
              .forEach(System.out::println);
    }
}`;

const SORT_OUTPUT_CUSTOMOBJ = `Suresh - 22
Ravi - 25
Anil - 30`;

const SORT_EXAMPLE1_DESCEND = `// Sort by name in reverse (Z to A)
names.stream()
     .sorted(Comparator.reverseOrder())
     .forEach(System.out::println);`;

const SORT_EXAMPLE2_DESCEND = `people.stream()
      .sorted(Comparator.comparingInt(p -> p.age).reversed())
      .forEach(System.out::println);`;

const SORT_EXAMPLE3_BONUS = `people.stream()
      .sorted(
         Comparator.comparingInt((Person p) -> p.age)
                   .thenComparing(p -> p.name)
      )
      .forEach(System.out::println);`;

const SortedWithComparator = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>sorted(Comparator&lt;T&gt;)</code>?</b></h5></div>
    <div className="mtop5p">
        <code><b>sorted(Comparator&lt;T&gt; comparator)</b></code> is an <b>intermediate operation</b> that sorts elements 
        of the stream based on a <b>custom Comparator</b> you provide, instead of natural ordering.
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`Stream<T> sorted(Comparator<? super T> comparator)`} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>sorted(Comparator&lt;T&gt;)</code>?</b></h5></div>
    <div className="mtop15p">
        <div>Use <code><b>sorted(Comparator&lt;T&gt;)</b></code> when:</div>
        <ul>
            <li className="mtop5p">You want to <b>sort objects by a specific field</b> (e.g., by age, salary, date).</li>
            <li className="mtop5p">You want <b>descending order</b> or a <b>custom logic</b> (e.g., sort names by length).</li>
            <li className="mtop5p">Natural ordering (<code><b>sorted()</b></code>) is <b>not suitable or not defined</b>.</li>
        </ul>
    </div>

    <div className="mtop5p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Sort Strings by Length</b></h5></div>
    <div className="mtop5p"><Highlight content={SORT_EXAMPLE_LENGTH} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={SORT_OUTPUT_LENGTH} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Sort Custom Objects by Field (e.g., Age)</b></h5></div>
    <div className="mtop5p"><Highlight content={SORT_EXAMPLE_CUSTOMOBJ} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={SORT_OUTPUT_CUSTOMOBJ} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #3: Descending Order using Comparator</b></h5></div>
    <div className="mtop5p"><Highlight content={SORT_EXAMPLE1_DESCEND} lang="java" /></div>
    <div className="mtop5p">Or for custom objects:</div>
    <div className="mtop5p"><Highlight content={SORT_EXAMPLE2_DESCEND} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Bonus: Sort by multiple fields (e.g., age then name)</b></h5></div>
    <div className="mtop5p"><Highlight content={SORT_EXAMPLE3_BONUS} lang="java" /></div>
    
    <div className="mtop5p mbot15p">
        <SimpleTable header={["Use Case", "Comparator"]} 
            columns={[
                ["Sort by int field (age)", (<div><code><b>Comparator.comparingInt(p &#8594; p.age)</b></code></div>)],
                ["Sort by string field (name)", (<div><code><b>Comparator.comparing(p &#8594; p.name)</b></code></div>)],
                ["Reverse/descending sort", (<div><code><b>Comparator.reverseOrder()</b></code> or <code><b>.reversed()</b></code></div>)],
                ["Sort by multiple fields", (<div><code><b>Comparator.comparing(...).thenComparing(...)</b></code></div>)]
            ]} />
    </div>
 </div>);
};

export default SortedWithComparator;