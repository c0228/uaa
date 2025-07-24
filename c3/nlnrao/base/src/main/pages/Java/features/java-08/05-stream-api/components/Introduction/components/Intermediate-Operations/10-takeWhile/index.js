import React from "react";
import { Highlight, Card, Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const TAKE_EXAMPLE1_NUMBER = `import java.util.stream.Stream;

public class TakeWhileExample {
    public static void main(String[] args) {
        Stream.of(1, 2, 3, 6, 4, 2)
              .takeWhile(n -> n < 5)
              .forEach(System.out::println);
    }
}`;

const TAKE_OUTPUT1_NUMBER = `1
2
3`;

const TAKE_EXAMPLE2_NUMBER = `import java.util.stream.Stream;

public class TakeNames {
    public static void main(String[] args) {
        Stream.of("Anil", "Amit", "Arun", "Ravi", "Ajay")
              .takeWhile(name -> name.startsWith("A"))
              .forEach(System.out::println);
    }
}`;

const TAKE_OUTPUT2_NUMBER = `Anil
Amit
Arun`;

const TakeWhile = () =>{

 const DisplayIcon = ({ status }) =><Icon type="FontAwesome" name={status==='Y'?"fa-check-circle":"fa-times-circle"} size={16} color={status==='Y'?"green":"red"} />

 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>takeWhile(Predicate&lt;T&gt; predicate)</code>?</b></h5></div>
    <div className="mtop5p"><code><b>takeWhile(Predicate&lt;T&gt; predicate)</b></code> is 
    an <b>intermediate operation</b> that <b>takes elements from the stream until the predicate returns false</b>.
    Once an element <b>does not match the condition</b>, the stream <b>stops processing any further elements</b> — even 
    if later elements would match.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p">
        <Highlight content={`Stream<T> takeWhile(Predicate<? super T> predicate)`} lang="java" />
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>takeWhile()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">When you need to <b>stop processing</b> the stream <b>as soon as a condition fails</b>.</li>
            <li className="mtop5p">Useful for <b>ordered streams</b>, especially <b>sorted lists or sequences</b>.</li>
            <li className="mtop5p">For <b>performance</b>: avoids processing unnecessary elements.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Take numbers less than 5</b></h5></div>
    <div className="mtop5p"><Highlight content={TAKE_EXAMPLE1_NUMBER} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={TAKE_OUTPUT1_NUMBER} lang="java" /></div>
    <div className="mtop5p">Stops at <code><b>6</b></code> (which is not <code><b>&lt; 5</b></code>) and 
    does <b>not process</b> the remaining <code><b>4</b></code>, <code><b>2</b></code>.</div>

    <div className="mtop15p"><h5 className="blog-head"><b>Example 2: Take strings until one does not start with "A"</b></h5></div>
    <div className="mtop5p"><Highlight content={TAKE_EXAMPLE2_NUMBER} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={TAKE_OUTPUT2_NUMBER} lang="java" /></div>
    <div className="mtop5p">Stops at "Ravi" and <b>does not include "Ajay"</b>, even though it starts with "A".</div>

    <div className="mtop15p">
        <div><h5 className="blog-head"><b>Important:</b></h5></div>
        <div>
            <ul>
                <li className="mtop5p"><code><b>takeWhile()</b></code> only works correctly on <b>ordered streams</b>.</li>
                <li className="mtop5p">It’s <b>short-circuiting</b>: stops early when condition fails.</li>
                <li className="mtop5p"><b>Different from</b> <code><b>filter()</b></code>: <code><b>filter()</b></code> continues to check all elements.</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Comparison: <code>takeWhile()</code> vs <code>filter()</code></b></h5></div>
    <div className="mtop5p mbot15p">
        <SimpleTable header={["Feature", "takeWhile()", "filter()"]} 
                columns={[
                    ["Stops early?", (<div><DisplayIcon status="Y" /> Yes (when condition fails)</div>), (<div><DisplayIcon /> No (checks all elements)</div>)],
                    ["Checks order?", (<div><DisplayIcon status="Y" /> Yes (works on ordered streams)</div>), (<div><DisplayIcon /> No (works on any stream)</div>)],
                    ["Short-circuit?", (<div><DisplayIcon status="Y" /> Yes</div>), (<div><DisplayIcon /> No</div>)],
                    ["Use case", (<div>Take elements <b>until a stop condition</b></div>), (<div>Filter <b>matching</b> elements</div>)]
                ]} />
    </div>
 </div>);
};

export default TakeWhile;