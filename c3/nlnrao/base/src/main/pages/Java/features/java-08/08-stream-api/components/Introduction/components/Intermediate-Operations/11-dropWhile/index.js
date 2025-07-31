import React from "react";
import { Highlight, Card, Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const DROPWHILE_SYNTAX_JAVA = `Stream<T> dropWhile(Predicate<? super T> predicate)`;

const DROP_EXAMPLE1_ELEMENTS = `import java.util.stream.Stream;

public class DropWhileExample {
    public static void main(String[] args) {
        Stream.of(1, 2, 3, 6, 4, 2)
              .dropWhile(n -> n < 5)
              .forEach(System.out::println);
    }
}`;

const DROP_OUTPUT1_ELEMENTS = `6
4
2`;

const DROP_EXAMPLE2_ELEMENTS = `Stream.of("Anil", "Amit", "Arun", "Ravi", "Ajay")
      .dropWhile(name -> name.startsWith("A"))
      .forEach(System.out::println);`;

const DROP_OUTPUT2_ELEMENTS = `Ravi
Ajay`;

const DROPWHILE_EXAMPLE_LIMIT = `Stream.of("A", "B", "C", "D", "E")
      .dropWhile(s -> !s.equals("C")) // drops until "C"
      .limit(2)                       // takes "C", "D"
      .forEach(System.out::println);`;

const DROPWHILE_OUTPUT_LIMIT = `C
D`;

const DropWhile = () =>{

 const DisplayIcon = ({ status }) =><Icon type="FontAwesome" name={status==='Y'?"fa-check-circle":"fa-times-circle"} size={16} color={status==='Y'?"green":"red"} />

 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>dropWhile(Predicate&lt;T&gt;)</code>?</b></h5></div>
    <div className="mtop5p"><code><b>dropWhile(Predicate&lt;T&gt; predicate)</b></code> is an <b>intermediate operation</b> in the 
    Java Stream API that <b>skips elements</b> as long as the predicate returns <code><b>true</b></code>, 
    and <b>starts including elements after</b> the first failure (i.e., when the predicate returns <code><b>false</b></code> for 
    the first time).</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={DROPWHILE_SYNTAX_JAVA} lang="java" /></div>
    
    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>dropWhile(Predicate&lt;T&gt;)</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">When you want to <b>ignore leading elements</b> that match a condition.</li>
            <li className="mtop5p">When you're working with <b>sorted or ordered data</b>.</li>
            <li className="mtop5p">To implement <b>lazy skipping</b> based on a condition.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples</b></h5></div>
    
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Drop elements less than 5</b></h5></div>
    <div className="mtop5p"><Highlight content={DROP_EXAMPLE1_ELEMENTS} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={DROP_OUTPUT1_ELEMENTS} lang="java" /></div>
    <div className="mtop5p"><b>It skips <code><b>1, 2, 3</b></code> because they are <code><b>&lt; 5</b></code>.</b></div>
    <div className="mtop5p">It <b>starts from</b> <code><b>6</b></code>, even though <code><b>4, 2</b></code> are 
        also <code><b>&lt; 5</b></code>, because dropWhile only checks <b>until the first failure</b>.</div>

    <div className="mtop15p"><h5 className="blog-head"><b>Example 2: Drop names starting with "A"</b></h5></div>
    <div className="mtop5p"><Highlight content={DROP_EXAMPLE2_ELEMENTS} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={DROP_OUTPUT2_ELEMENTS} lang="java" /></div>
    <div className="mtop5p">Skips all names <b>starting with "A"</b>, but once <code><b>"Ravi"</b></code> breaks 
    the condition, it includes the rest—even if <code><b>"Ajay"</b></code> starts with "A".</div>

    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h5 className="blog-head"><b>Notes:</b></h5></div>
            <div>
                <ul>
                    <li className="mtop5p"><code><b>dropWhile()</b></code> is <b>stateful</b> and <b>short-circuiting</b>.</li>
                    <li className="mtop5p">Works properly only on <b>ordered streams</b>.</li>
                    <li className="mtop5p">Once the predicate fails, <b>all remaining elements are included</b>.</li>
                </ul>
            </div>
        </Card>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Comparison: <code>dropWhile()</code> vs <code>filter()</code></b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Feature", "dropWhile()", "filter()"]} 
                columns={[
                    ["Stops checking?", (<div><DisplayIcon status="Y" /> Yes (after first false)</div>), (<div><DisplayIcon /> No (checks all elements)</div>)],
                    ["Skips leading?", (<div><DisplayIcon status="Y" /> Yes</div>), (<div><DisplayIcon /> No (filters all matching)</div>)],
                    ["Ordered stream?", (<div><DisplayIcon status="Y" /> Yes</div>), (<div><DisplayIcon /> No</div>)],
                    ["Use case", "Skip elements until predicate fails", "Keep only matching elements"],
                ]} />
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Bonus: Use <code>dropWhile()</code> + <code>limit()</code> for slicing</b></h5></div>
    <div className="mtop5p"><Highlight content={DROPWHILE_EXAMPLE_LIMIT} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={DROPWHILE_OUTPUT_LIMIT} lang="java" /></div>
 </div>);
};

export default DropWhile;