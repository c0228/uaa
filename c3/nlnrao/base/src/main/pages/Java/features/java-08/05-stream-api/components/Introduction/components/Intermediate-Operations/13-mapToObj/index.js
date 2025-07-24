import React from "react";
import { Highlight, Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const MAPTOOBJ_SYNTAX_JAVA = `IntStream intStream = IntStream.range(1, 5);

Stream<String> stringStream = intStream.mapToObj(i -> "Value: " + i);`;

const CONVERT_EXAMPLE_INTSTREAM = `import java.util.stream.IntStream;

public class MapToObjExample {
    public static void main(String[] args) {
        IntStream.range(1, 4) // 1, 2, 3
                 .mapToObj(i -> "Number: " + i)
                 .forEach(System.out::println);
    }
}`;

const CONVERT_OUTPUT_INTSTREAM = `Number: 1
Number: 2
Number: 3`;

const CUSTOMOBJ_EXAMPLE_INTSTREAM = `class Employee {
    int id;
    Employee(int id) {
        this.id = id;
    }

    public String toString() {
        return "Employee ID: " + id;
    }
}

public class CustomObjectFromInt {
    public static void main(String[] args) {
        IntStream.rangeClosed(101, 103)  // 101 to 103
                 .mapToObj(Employee::new)
                 .forEach(System.out::println);
    }
}`;

const CUSTOMOBJ_OUTPUT_INTSTREAM = `Employee ID: 101
Employee ID: 102
Employee ID: 103`;

const BOXED_EXAMPLE_MAPTOOBJ = `IntStream.of(10, 20, 30)
         .mapToObj(Integer::valueOf)
         .forEach(i -> System.out.println("Boxed: " + i));`;

const BOXED_OUTPUT_MAPTOOBJ = `Boxed: 10
Boxed: 20
Boxed: 30`;

const MapToObj = () =>{

 const DisplayIcon = ({ status }) =><Icon type="FontAwesome" name={status==='Y'?"fa-check-circle":"fa-times-circle"} size={16} color={status==='Y'?"green":"red"} />

 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>mapToObj(IntFunction&lt;R&gt;)</code>?</b></h5></div>
    <div className="mtop15p"><code><b>mapToObj()</b></code> is a <b>specialized intermediate operation</b> used 
    with <b>primitive streams</b> like <code><b>IntStream</b></code>, <code><b>LongStream</b></code>, or <code><b>DoubleStream</b></code>.</div>
    <div className="mtop5p">Specifically:</div>
    <div className="mtop5p"><Highlight content={`<R> Stream<R> mapToObj(IntFunction<? extends R> mapper)`} lang="java" /></div>
    <div>
        <ul>
            <li className="mtop5p">It <b>maps each</b> <code><b>int</b></code> <b>element</b> in the <code><b>IntStream</b></code> to an <b>object of type</b> <code><b>R</b></code>.</li>
            <li className="mtop5p">Returns a <b>Stream&lt;R&gt;</b> (i.e., an object stream from a primitive stream).</li>
        </ul>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={MAPTOOBJ_SYNTAX_JAVA} lang="java" /></div>

    <div><h5 className="blog-head"><b>2. When to Use <code>mapToObj(IntFunction&lt;R&gt;)</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">When you start with an <code><b>IntStream</b></code> and want to convert each int 
            to a <b>String, custom object, or boxed Integer</b>.</li>
            <li className="mtop5p">For converting primitives to <b>rich objects</b> (e.g., map int IDs to employee objects).</li>
            <li className="mtop5p">To go from <b>primitive to object stream</b>.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Convert <code>IntStream</code> to <code>Stream&lt;String&gt;</code></b></h5></div>
    <div className="mtop5p"><Highlight content={CONVERT_EXAMPLE_INTSTREAM} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={CONVERT_OUTPUT_INTSTREAM} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Create custom objects from <code>IntStream</code></b></h5></div>
    <div className="mtop5p"><Highlight content={CUSTOMOBJ_EXAMPLE_INTSTREAM} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={CUSTOMOBJ_OUTPUT_INTSTREAM} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #3: Boxed integers using <code>mapToObj()</code></b></h5></div>
    <div className="mtop5p"><Highlight content={BOXED_EXAMPLE_MAPTOOBJ} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={BOXED_OUTPUT_MAPTOOBJ} lang="java" /></div>
    <div className="mtop5p"><b>Note:</b> You can also use <code><b>.boxed()</b></code> for this use-case.</div>

    <div className="mtop15p"><h5 className="blog-head"><b>Comparison: <code>mapToObj()</code> vs <code>boxed()</code></b></h5></div>
    <div className="mtop5p mbot15p">
        <SimpleTable header={["Feature", "mapToObj(IntFunction<R>)", "boxed()"]} 
                columns={[
                    ["Purpose", (<div>Convert int to <b>any object</b></div>), (<div>Convert <code><b>int</b></code> to <code><b>Integer</b></code></div>)],
                    ["Return Type", (<div><code><b>Stream&lt;R&gt;</b></code></div>), (<div><code><b>Stream&lt;Integer&gt;</b></code></div>)],
                    ["Custom Mapping", (<div><DisplayIcon status="Y" /> Yes</div>), (<div><DisplayIcon /> No (just boxing)</div>)],
                ]} />
    </div>
 </div>);
};

export default MapToObj;