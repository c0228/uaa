import React from "react";
import { Card, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const SPLIT_EXAMPLE_CHARACTERS = `import java.util.stream.Stream;

public class MapMultiExample {
    public static void main(String[] args) {
        Stream<String> words = Stream.of("Hi", "Bye");

        words.mapMulti((word, consumer) -> {
                for (char c : word.toCharArray()) {
                    consumer.accept(c); // emit each char
                }
            })
            .forEach(System.out::println);
    }
}`;

const SPLIT_OUTPUT_CHARACTERS = `H
i
B
y
e`;

const EMIT_EXAMPLE_EVEN = `import java.util.stream.Stream;

public class MapMultiEven {
    public static void main(String[] args) {
        Stream.of(1, 2, 3, 4)
              .mapMulti((number, consumer) -> {
                  if (number % 2 == 0) {
                      consumer.accept(number);
                      consumer.accept(number * 10);
                  }
              })
              .forEach(System.out::println);
    }
}`;

const EMIT_OUTPUT_EVEN = `2
20
4
40`;

const REPLACE_EXAMPLE1_FLATMAPMULTI = `List<String> words = Arrays.asList("Java", "GPT");

words.stream()
     .mapMulti((word, consumer) -> {
         String[] parts = word.split("");
         for (String letter : parts)
             consumer.accept(letter);
     })
     .forEach(System.out::println);`;

const REPLACE_EXAMPLE2_FLATMAPMULTI = `words.stream()
     .flatMap(word -> Arrays.stream(word.split("")))
     .forEach(System.out::println);
`;

const MapMulti = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>mapMulti(BiConsumer&lt;T, Consumer&lt;R&gt;&gt;)</code>?</b></h5></div>
    <div className="mtop15p">
        <div><code><b>mapMulti()</b></code> is a stream intermediate operation introduced in <b>Java 16</b> that allows you to:</div>
        <div>
            <ul>
                <li className="mtop5p"><b>Map each element</b> to <b>0 or more elements</b>, like <code><b>flatMap()</b></code></li>
                <li className="mtop5p">But does so <b>more efficiently</b> using a <b>BiConsumer</b> instead of returning new streams</li>
            </ul>
        </div>
        <div className="mtop5p">It is essentially a <b>more performant alternative to</b> <code><b>flatMap()</b></code>, especially 
        when creating intermediate collections or streams is expensive.</div>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`<R> Stream<R> mapMulti(BiConsumer<? super T, ? super Consumer<R>> mapper)`} lang="java" /></div>
 
    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>mapMulti()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">When you want to <b>flatten multiple values</b> from one element (like flatMap).</li>
            <li className="mtop5p">When you want to <b>avoid creating temporary lists or streams</b> inside flatMap.</li>
            <li className="mtop5p">When performance and memory usage are critical (e.g., high-volume processing).</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Key Difference from <code>flatMap()</code>?</b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Feature", "flatMap()", "mapMulti()"]} 
                columns={[
                    ["Returns", "Stream of Streams (then flattened)", "Uses callback to directly emit values"],
                    ["Overhead", "Higher (creates many intermediate streams)", "Lower (no streams created per element)"],
                    ["Introduced in", "Java 8", "Java 16"],
                ]} />
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>4. Examples</b></h5></div>
    
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Split Strings into Characters</b></h5></div>
    <div className="mtop5p"><Highlight content={SPLIT_EXAMPLE_CHARACTERS} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={SPLIT_OUTPUT_CHARACTERS} lang="java" /></div>
      
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Emit multiple values for even numbers</b></h5></div>
    <div className="mtop5p"><Highlight content={EMIT_EXAMPLE_EVEN} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={EMIT_OUTPUT_EVEN} lang="java" /></div>
    <div className="mtop5p">For even numbers, it emits 2 values: the number and its 10x.</div>

    <div className="mtop5p"><h5 className="blog-head"><b>Example #3: Replace <code>flatMap()</code> with <code>mapMulti()</code></b></h5></div>
    <div className="mtop5p"><Highlight content={REPLACE_EXAMPLE1_FLATMAPMULTI} lang="java" /></div>
    <div className="mtop5p">Instead of:</div>
    <div className="mtop5p"><Highlight content={REPLACE_EXAMPLE2_FLATMAPMULTI} lang="java" /></div>
 </div>);
};

export default MapMulti;