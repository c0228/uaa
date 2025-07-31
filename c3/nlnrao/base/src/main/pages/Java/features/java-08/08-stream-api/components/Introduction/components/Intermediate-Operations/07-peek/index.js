import React from "react";
import { Card, Highlight } from "e-ui-react";

const PEEK_EXAMPLE_DEBUGGING = `import java.util.Arrays;
import java.util.List;

public class PeekExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ravi", "Anil", "Suresh");

        names.stream()
             .filter(name -> name.startsWith("S"))
             .peek(name -> System.out.println("Filtered name: " + name))
             .map(String::toUpperCase)
             .peek(upper -> System.out.println("Mapped to uppercase: " + upper))
             .forEach(System.out::println);
    }
}`;

const PEEK_OUTPUT_DEBUGGING = `Filtered name: Suresh
Mapped to uppercase: SURESH
SURESH`;

const PEEK_EXAMPLE_COUNTNAME = `long count = names.stream()
                  .peek(name -> System.out.println("Looking at: " + name))
                  .filter(name -> name.startsWith("A"))
                  .peek(name -> System.out.println("Starts with A: " + name))
                  .count();
System.out.println("Count: " + count);`;

const PEEK_EXAMPLE_BADPRACTICE = `List<Integer> result = new ArrayList<>();
list.stream()
    .peek(result::add)   // BAD PRACTICE!
    .forEach(System.out::println);`;

const Peek = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>peek(Consumer&lt;T&gt;)</code>?</b></h5></div>
    <div className="mtop15p"><code><b>peek()</b></code> is an <b>intermediate operation</b> in the Java Stream API that 
    allows you to <b>perform an action on each element as it flows through the stream, without modifying</b> the elements.</div>
    <div className="mtop15p">It is <b>mainly used for debugging</b> or logging purposes.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`Stream<T> peek(Consumer<? super T> action)`} lang="java" /></div>
    <div>
        <ul>
            <li className="mtop5p">Takes a <code><b>Consumer</b></code> that performs side-effects 
            (like <code><b>System.out.println</b></code>, <code><b>logging</b></code>, etc.).</li>
            <li className="mtop5p">Returns a stream with the same elements as the original, <b>unchanged</b>.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>peek()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Debugging:</b> Check values flowing through stream stages.</li>
            <li className="mtop5p"><b>Logging:</b> Log values before or after transformations.</li>
            <li className="mtop5p"><b>Auditing side-effects:</b> But <b>not recommended for main logic</b>, use <code><b>map()</b></code> instead for transformation.</li>
        </ul>
    </div>
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h5 className="blog-head"><b>Important Notes:</b></h5></div>
            <ul>
                <li className="mtop5p"><code><b>peek()</b></code> is lazy: it will not execute unless followed 
                by a <b>terminal operation</b> like <code><b>collect()</b></code>, <code><b>forEach()</b></code>, <code><b>count()</b></code>.</li>
                <li className="mtop5p">Should <b>not</b> be used for modifying state or data. That’s considered a side-effect and goes against functional principles.</li>
            </ul>
        </Card>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example 1: Debugging with <code>peek()</code></b></h5></div>
    <div className="mtop5p"><Highlight content={PEEK_EXAMPLE_DEBUGGING} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={PEEK_OUTPUT_DEBUGGING} lang="java" /></div>

    <div className="mtop5p"><h5 className="blog-head"><b>Example 2: Count names starting with "A" and log them</b></h5></div>
    <div className="mtop5p"><Highlight content={PEEK_EXAMPLE_COUNTNAME} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>4. What NOT to do with <code>peek()</code>?</b></h5></div>
    <div className="mtop5p">Avoid using it to change external state:</div>
    <div className="mtop5p"><Highlight content={PEEK_EXAMPLE_BADPRACTICE} lang="java" /></div>
    <div className="mtop5p">This breaks functional purity and makes code error-prone. Use <code><b>collect()</b></code> instead.</div>

 </div>);
};

export default Peek;