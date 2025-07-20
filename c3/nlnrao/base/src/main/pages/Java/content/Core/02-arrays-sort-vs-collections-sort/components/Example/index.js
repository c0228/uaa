import React from "react";
import { Highlight } from "e-ui-react";

const SORTING_PRIMITIVE_ARRAYS = `int[] numbers = {5, 1, 3, 7, 2};
Arrays.sort(numbers);
System.out.println(Arrays.toString(numbers));
// Output: [1, 2, 3, 5, 7]`;

const SORTING_OBJECTS_COMPARATOR = `String[] names = {"John", "Alice", "Bob"};
Arrays.sort(names, Comparator.naturalOrder());
System.out.println(Arrays.toString(names));
// Output: [Alice, Bob, John]`;

const SORTING_LIST_COLLECTIONS = `List<String> cities = Arrays.asList("London", "Delhi", "Paris");
Collections.sort(cities);
System.out.println(cities);
// Output: [Delhi, London, Paris]`;

const JAVA8_STYLE_LAMBDA = `List<Employee> employees = Arrays.asList(
    new Employee("Alice", 30),
    new Employee("Bob", 25),
    new Employee("Charlie", 35)
);

// Java 8: Sort by age
employees.sort((e1, e2) -> Integer.compare(e1.getAge(), e2.getAge()));

// Or use Comparator.comparing()
employees.sort(Comparator.comparing(Employee::getAge));`;

const JAVA8_STREAM_EXAMPLE = `employees.stream()
         .sorted(Comparator.comparing(Employee::getName))
         .forEach(System.out::println);`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example</b></h2></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><h4 className="blog-head"><b>Sorting Primitive Arrays</b></h4></div>
                <div className="mtop5p"><Highlight content={SORTING_PRIMITIVE_ARRAYS} lang="java" /></div>
            </li>
            <li className="mtop15p">
                <div><h4 className="blog-head"><b>Sorting Object Arrays Using Comparator</b></h4></div>
                <div className="mtop5p"><Highlight content={SORTING_OBJECTS_COMPARATOR} lang="java" /></div>
            </li>
            <li className="mtop15p">
                <div><h4 className="blog-head"><b>Sorting Lists with Collections.sort()</b></h4></div>
                <div className="mtop5p"><Highlight content={SORTING_LIST_COLLECTIONS} lang="java" /></div>
            </li>
            <li className="mtop15p">
                <div><h4 className="blog-head"><b>Java 8 Style with Lambda</b></h4></div>
                <div className="mtop5p"><Highlight content={JAVA8_STYLE_LAMBDA} lang="java" /></div>
            </li>
        </ol>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Which One Should You Use?</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>Use <code><b>Arrays.sort()</b></code> when working with arrays, especially primitives for performance</li>
            <li className="mtop5p">Use <code><b>Collections.sort()</b></code> or <code><b>List.sort()</b></code> for <code><b>List&lt;T&gt;</b></code> types, 
            where the list is mutable.</li>
            <li className="mtop5p">Prefer <code><b>List.sort()</b></code> with <b>Comparator.comparing()` in Java 8+</b> for 
            better readability and power.</li>
            <li className="mtop5p">When working with streams, you can use <code><b>.sorted()</b></code>:</li>
        </ul>
    </div>
    <div className="mtop5p"><Highlight content={JAVA8_STREAM_EXAMPLE} lang="java" /></div>
 </div>);
};

export default Example;