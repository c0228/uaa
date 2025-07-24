import React from "react";
import { Highlight } from "e-ui-react";

const SORTED_SYNTAX_JAVA = `Stream<T> sorted();                          // Natural ordering
Stream<T> sorted(Comparator<? super T> c);   // Custom order`;

const SORTED_EXAMPLE1_JAVA = `import java.util.Arrays;
import java.util.List;

public class SortedExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ravi", "Anil", "Suresh", "Bala");

        names.stream()
             .sorted() // Natural order (A-Z)
             .forEach(System.out::println);
    }
}`;

const SORTED_OUTPUT1_JAVA = `Anil
Bala
Ravi
Suresh`;

const COMPARATOR_EXAMPLE1_JAVA = `import java.util.Arrays;
import java.util.List;
import java.util.Comparator;

public class SortedDescending {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(5, 1, 9, 3, 7);

        numbers.stream()
               .sorted(Comparator.reverseOrder())
               .forEach(System.out::println);
    }
}`;

const COMPARATOR_OUTPUT1_JAVA = `9
7
5
3
1`;

const PROPERTY_EXAMPLE1_JAVA = `import java.util.*;
import java.util.stream.*;

class Person {
    String name;
    int age;

    Person(String n, int a) {
        name = n;
        age = a;
    }

    public String toString() {
        return name + " - " + age;
    }
}

public class ObjectSortExample {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("Ravi", 25),
            new Person("Anil", 30),
            new Person("Suresh", 22)
        );

        people.stream()
              .sorted(Comparator.comparingInt(p -> p.age))
              .forEach(System.out::println);
    }
}`;

const PROPERTY_OUTPUT1_JAVA = `Suresh - 22
Ravi - 25
Anil - 30`;

const Sorted = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>sorted()</code>?</b></h5></div>
    <div className="mtop5p"><code><b>sorted()</b></code> is an <b>intermediate operation</b> in Java Stream API 
    that <b>returns a stream with the elements sorted</b> in <b>natural order</b> (ascending for numbers, alphabetical for 
    strings), or based on a provided <b>custom comparator</b>.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={SORTED_SYNTAX_JAVA} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>sorted()</code>?</b></h5></div>
    <div className="mtop5p">
        <div>Use it when:</div>
        <ol>
            <li className="mtop5p">You need the elements in <b>sorted order</b> before further processing.</li>
            <li className="mtop5p">You want to <b>limit, filter or map sorted data</b>.</li>
            <li className="mtop5p">You want to <b>display results in order</b> (like leaderboard, alphabetical listing, etc.)</li>
        </ol>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Why use <code>sorted()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">To<b>maintain order</b> before terminal operations like <code><b>collect()</b></code>, <code><b>forEach()</b></code>.</li>
            <li className="mtop5p">To apply <b>business logic</b> on <b>prioritized or ordered data</b>.</li>
            <li className="mtop5p">For <b>user-friendly outputs</b> (sorted names, IDs, values).</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>4. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Sort a list of strings (Natural Order)</b></h5></div>
    <div className="mtop5p"><Highlight content={SORTED_EXAMPLE1_JAVA} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={SORTED_OUTPUT1_JAVA} lang="java" /></div>

 </div>);
};

export default Sorted;