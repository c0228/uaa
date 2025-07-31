import React from "react";
import { Card, Highlight, Icon } from "e-ui-react";

const STREAMS_EXAMPLE_LIST = `import java.util.Arrays;
import java.util.List;

public class DistinctExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "John", "Alice", "Jane");

        names.stream()
             .distinct()
             .forEach(System.out::println);
    }
}`;

const STREAMS_OUTPUT_LIST = `John
Jane
Alice`;

const STREAMS_EXAMPLE_CUSTOMOBJ = `import java.util.*;
import java.util.stream.*;

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Override equals and hashCode
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Person)) return false;
        Person p = (Person) o;
        return name.equals(p.name) && age == p.age;
    }

    public int hashCode() {
        return Objects.hash(name, age);
    }

    public String toString() {
        return name + " (" + age + ")";
    }
}

public class Main {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("John", 30),
            new Person("Jane", 25),
            new Person("John", 30), // duplicate
            new Person("Alice", 28)
        );

        people.stream()
              .distinct()
              .forEach(System.out::println);
    }
}`;

const STREAMS_OUTPUT_CUSTOMOBJ = `John (30)
Jane (25)
Alice (28)`;

const Distinct = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>distinct()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>distinct()</b></code> is an <b>intermediate operation</b> in the Java Stream API 
            that returns a stream with <b>duplicate elements removed</b>, using <code><b>equals()</b></code> and <code><b>hashCode()</b></code> methods 
            to determine uniqueness.</li>
            <li className="mtop5p">It <b>preserves the order</b> of elements (first occurrence is retained).</li>
        </ul>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`Stream<T> distinct()`} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>distinct()</code>?</b></h5></div>
    <div className="mtop5p">You use <code><b>distinct()</b></code> when:</div>
    <div>
        <ul>
            <li className="mtop5p">You want to <b>remove duplicate elements</b> from a stream.</li>
            <li className="mtop5p">You want to perform further operations <b>only on unique data</b>.</li>
            <li className="mtop5p">You need a <b>Set-like behavior</b>, but still want to use Stream for further processing 
            like <code><b>map()</b></code>, <code><b>filter()</b></code>, <code><b>collect()</b></code>, etc.</li>
        </ul>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: On a List of Strings</b></h5></div>
    <div className="mtop5p"><Highlight content={STREAMS_EXAMPLE_LIST} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={STREAMS_OUTPUT_LIST} lang="java" /></div>

    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h5 className="blog-head"><b>Why It Works:</b></h5></div>
            <div className="mtop5p">The <code><b>distinct()</b></code> method 
            uses <code><b>equals()</b></code> and <code><b>hashCode()</b></code> to determine uniqueness. 
            Since <code><b>"John"</b></code> and <code><b>"Jane"</b></code> are repeated, only the first 
            occurrence is kept.</div>
        </Card>
    </div>
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h5 className="blog-head"><b><Icon type="FontAwesome" name="fa-warning" size={16} color="orange" style={{ marginRight:'5px' }} /> 
                Note (for Custom Objects):</b></h5></div>
            <div className="mtop5p">For custom objects, make sure 
            to <b>override</b> <code><b>equals()</b></code> and <code><b>hashCode()</b></code> for <code><b>distinct()</b></code> to 
            work correctly.</div>
        </Card>
    </div>

    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: With Custom Object</b></h5></div>
    <div className="mtop5p"><Highlight content={STREAMS_EXAMPLE_CUSTOMOBJ} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={STREAMS_OUTPUT_CUSTOMOBJ} lang="java" /></div>

 </div>);
};

export default Distinct;