import React from "react";
import { Highlight } from "e-ui-react";

const FLATMAP_EXAMPLE_SPLITNUM = `import java.util.stream.*;
import java.util.*;

public class FlatMapToIntExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(12, 34);

        numbers.stream()
               .flatMapToInt(num -> String.valueOf(num)           // "12", "34"
                     .chars()                                     // IntStream of '1', '2' (ASCII)
                     .map(c -> c - '0'))                          // Convert ASCII to int
               .forEach(System.out::println);
    }
}`;

const FLATMAP_OUTPUT_SPLITNUM = `1
2
3
4`;

const FLATMAP_EXAMPLE_STUDENTSCORES = `import java.util.stream.*;
import java.util.*;

class Student {
    String name;
    int[] scores;

    Student(String name, int[] scores) {
        this.name = name;
        this.scores = scores;
    }
}

public class StudentScores {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new Student("Ravi", new int[]{80, 90}),
            new Student("Priya", new int[]{70, 85})
        );

        // Flatten all scores into a single IntStream
        students.stream()
                .flatMapToInt(student -> IntStream.of(student.scores))
                .forEach(System.out::println);
    }
}`;

const FLATMAP_OUTPUT_STUDENTSCORES = `80
90
70
85`;

const FlatMapForPrimitiveStream = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>flatMap(Function&lt;T, IntStream&gt;)</code>?</b></h5></div>
    <div className="mtop15p">In Java Stream API, <code><b>flatMap(Function&lt;T, IntStream&gt;)</b></code> is used when each element 
    in the stream <b>can be transformed into multiple primitive</b> <code><b>int</b></code> <b>values</b>, and you want to flatten 
    those results into a <b>single continuous</b> <code><b>IntStream</b></code>.</div>

    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`IntStream flatMap(Function<T, IntStream> mapper)`} lang="java" /></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Function&lt;T, IntStream&gt;</b>: A function that returns an <code><b>IntStream</b></code> for each element.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. Why and When to Use <code>flatMap(Function&lt;T, IntStream&gt;)</code>?</b></h5></div>
    <div className="mtop5p">Use this when:</div>
    <div>
        <ul>
            <li className="mtop5p">Each input element maps to <b>zero or more</b> <code><b>int</b></code> <b>values</b></li>
            <li className="mtop5p">You want to <b>flatten</b> a stream of <code><b>IntStream</b></code> into a <b>single</b> <code><b>IntStream</b></code></li>
            <li className="mtop5p">Typically used in <b>data transformation</b> where one item represents a list/array of ints</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #1: Split numbers into digits</b></h5></div>
    <div className="mtop15p">Suppose you have a stream of integers: <code><b>[12, 34]</b></code>, and you want to get all digits in one 
    stream: <code><b>[1, 2, 3, 4]</b></code></div>
    <div className="mtop5p"><Highlight content={FLATMAP_EXAMPLE_SPLITNUM} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Output:</b></h5></div>
    <div className="mtop5p"><Highlight content={FLATMAP_OUTPUT_SPLITNUM} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #2: Student's scores across subjects</b></h5></div>
    <div className="mtop5p"><Highlight content={FLATMAP_EXAMPLE_STUDENTSCORES} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Output:</b></h5></div>
    <div className="mtop5p"><Highlight content={FLATMAP_OUTPUT_STUDENTSCORES} lang="java" /></div>
 </div>);
};

export default FlatMapForPrimitiveStream;