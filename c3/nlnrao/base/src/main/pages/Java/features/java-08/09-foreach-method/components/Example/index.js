import React from "react";
import { Highlight } from "e-ui-react";

const SIMPLELISTITERATION_EXAMPLE_JAVA = `import java.util.*;

public class ForEachExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alice", "Bob");

        // Using Lambda Expression
        names.forEach(name -> System.out.println(name));

        // Using Method Reference
        names.forEach(System.out::println);
    }
}`;

const SIMPLELISTITERATION_OUTPUT_JAVA = `John
Alice
Bob`;

const MAPITERATION_EXAMPLE_JAVA = `import java.util.*;

public class MapForEachExample {
    public static void main(String[] args) {
        Map<Integer, String> students = new HashMap<>();
        students.put(1, "John");
        students.put(2, "Alice");
        students.put(3, "Bob");

        // Using Lambda Expression
        students.forEach((id, name) -> System.out.println(id + " : " + name));
    }
}`;

const MAPITERATION_OUTPUT_JAVA = `1 : John
2 : Alice
3 : Bob`;

const FOREACHSTREAMS_EXAMPLE_JAVA = `import java.util.*;

public class StreamForEachExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        // Print even numbers using Streams and forEach
        numbers.stream()
               .filter(n -> n % 2 == 0)
               .forEach(System.out::println);
    }
}`;

const FOREACHSTREAMS_OUTPUT_JAVA = `2
4`;

const PARALLELSTREAM_EXAMPLE_JAVA = `import java.util.*;

public class ParallelStreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alice", "Bob", "Charlie");

        // Parallel iteration
        names.parallelStream().forEach(System.out::println);
    }
}`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples of forEach()</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>1. Simple List Iteration</b></h4></div>
    <div className="mtop5p"><Highlight content={SIMPLELISTITERATION_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={SIMPLELISTITERATION_OUTPUT_JAVA} lang="java" /></div>

    <div className="mtop15p"><h4 className="blog-head"><b>2. Iterating Over a Map</b></h4></div>
    <div className="mtop5p"><Highlight content={MAPITERATION_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={MAPITERATION_OUTPUT_JAVA} lang="java" /></div>
    
    <div className="mtop15p"><h4 className="blog-head"><b>3. Using forEach() with Streams</b></h4></div>
    <div className="mtop5p"><Highlight content={FOREACHSTREAMS_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={FOREACHSTREAMS_OUTPUT_JAVA} lang="java" /></div>

    <div className="mtop15p"><h4 className="blog-head"><b>4. Parallel Stream Example</b></h4></div>
    <div className="mtop5p"><Highlight content={PARALLELSTREAM_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Note:</b> Output order is <b>not guaranteed</b> in parallel streams.</div>
    
 </div>);
};

export default Example;