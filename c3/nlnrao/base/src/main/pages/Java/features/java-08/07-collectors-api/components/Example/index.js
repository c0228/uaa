import React from "react";
import { Highlight } from "e-ui-react";

const COLLECTORS_EXAMPLE_JAVA = `import java.util.*;
import java.util.stream.Collectors;

public class CollectorsExample1 {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill", "John");

        // Convert to List
        List<String> nameList = names.stream()
                                     .collect(Collectors.toList());
        System.out.println("List: " + nameList);

        // Convert to Set (removes duplicates)
        Set<String> nameSet = names.stream()
                                   .collect(Collectors.toSet());
        System.out.println("Set: " + nameSet);
    }
}`;

const COLLECTORS_OUTPUT_JAVA = `List: [John, Jane, Jack, Jill, John]
Set: [Jane, Jack, Jill, John]`;

const JOINING_EXAMPLE_JAVA = `List<String> names = Arrays.asList("John", "Jane", "Jack");
String result = names.stream()
                     .collect(Collectors.joining(", ", "[", "]"));
System.out.println(result);`;

const JOINING_OUTPUT_JAVA = `[John, Jane, Jack]`;

const COUNTING_EXAMPLE_JAVA = `List<Integer> numbers = Arrays.asList(5, 10, 15, 20);

long count = numbers.stream()
                    .collect(Collectors.counting());
int sum = numbers.stream()
                 .collect(Collectors.summingInt(Integer::intValue));

System.out.println("Count: " + count);
System.out.println("Sum: " + sum);`;

const COUNTING_OUTPUT_JAVA = `Count: 4
Sum: 50`;

const GROUPING_EXAMPLE_JAVA = `List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

Map<Integer, List<String>> groupedByLength =
        names.stream()
             .collect(Collectors.groupingBy(String::length));

System.out.println(groupedByLength);`;

const GROUPING_OUTPUT_JAVA = `{3=[Jon], 4=[Jane, Jack], 5=[Jill]}`;

const PARTITION_EXAMPLE_JAVA = `List<Integer> numbers = Arrays.asList(5, 10, 15, 20);

Map<Boolean, List<Integer>> partitioned =
        numbers.stream()
               .collect(Collectors.partitioningBy(n -> n % 2 == 0));

System.out.println(partitioned);`;

const PARTITION_OUTPUT_JAVA = `{false=[5, 15], true=[10, 20]}`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples of Collectors API</b></h2></div>
    <div className="mtop5p">Let’s understand the Collectors API with <b>practical examples</b>.</div>

    <div className="mtop5p"><h5 className="blog-head"><b>1.  Converting Stream to List and Set</b></h5></div>
    <div className="mtop5p"><Highlight content={COLLECTORS_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={COLLECTORS_OUTPUT_JAVA} lang="java" /></div>

    <div className="mtop5p"><h5 className="blog-head"><b>2. Joining Strings</b></h5></div>
    <div className="mtop5p"><Highlight content={JOINING_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={JOINING_OUTPUT_JAVA} lang="java" /></div>
    <div>
      <ul>
         <li className="mtop5p"><code><b>joining(delimiter, prefix, suffix)</b></code> is useful for 
         CSV or formatted outputs.</li>
      </ul>
    </div>

    <div className="mtop5p"><h5 className="blog-head"><b>3. Counting and Summing</b></h5></div>
    <div className="mtop5p"><Highlight content={COUNTING_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={COUNTING_OUTPUT_JAVA} lang="java" /></div>

    <div className="mtop5p"><h5 className="blog-head"><b>4. Grouping Elements</b></h5></div>
    <div className="mtop5p"><code><b>groupingBy</b></code> is one of the most powerful collectors for <b>classifying data</b>.</div>
    <div className="mtop5p"><Highlight content={GROUPING_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={GROUPING_OUTPUT_JAVA} lang="java" /></div>
    <div className="mtop5p"><i>(This is just an example; adjust names accordingly.)</i></div>


    <div className="mtop5p"><h5 className="blog-head"><b>5. Partitioning Elements</b></h5></div>
    <div className="mtop5p">Partitioning divides elements into <b>two groups</b> based on a <b>predicate</b>.</div>
    <div className="mtop5p"><Highlight content={PARTITION_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={PARTITION_OUTPUT_JAVA} lang="java" /></div>
    
 </div>);
};

export default Example;