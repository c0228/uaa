import React from "react";
import { Card, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const PRE_EXAMPLE_JAVA8 = `Collections.sort(employeeList, new Comparator<Employee>() {
    public int compare(Employee e1, Employee e2) {
        return e1.getName().compareTo(e2.getName());
    }
});`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>Sorting is one of the most common operations performed on collections or arrays in Java. 
    While Java has provided utility methods like <code><b>Arrays.sort()</b></code> and <code><b>Collections.sort()</b></code> for 
    many versions, Java 8 brought a significant evolution in how we handle sorting—introducing 
    the <b>Lambda Expressions</b> and <b>Comparator improvements</b> that made sorting more concise, readable 
    and flexible.</i></div>
    <div className="mtop15p"><i>In this blog, we’ll look at 
    the <b>problems with pre-Java 8 sorting</b>, the <b>new improvements</b>, and a side-by-side comparison 
    of <code><b>Arrays.sort()</b></code> and <code><b>Collections.sort()</b></code> in the Java 8 era — with 
    practical code examples.</i></div>
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h4 className="blog-head"><b>Pre-Java 8: What Were the Limitations?</b></h4></div>
            <div>Before Java 8, sorting custom objects required verbose and often cluttered code. For example:</div>
            <div>
                <ul>
                    <li className="mtop5p">You had to create separate <code><b>Comparator</b></code> classes or anonymous inner classes.</li>
                    <li className="mtop5p">The syntax was not clean or concise.</li>
                    <li className="mtop5p">Reusability and readability were often sacrificed in favor of boilerplate code.</li>
                </ul>
            </div>
            <div className="padLeft5p"><h5 className="blog-head"><b>Example in Pre-Java 8:</b></h5></div>
            <div className="mtop5p"><Highlight content={PRE_EXAMPLE_JAVA8} lang="java" /></div>
            <div className="mtop5p padLeft5p">This is a lot of code just to sort by name. Repeating this for multiple fields made things worse.</div>
        </Card>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Java 8 Improvements</b></h2></div>
    <div className="mtop15p">Java 8 introduced <b>Lambda Expressions</b> and <b>Comparator.comparing()</b>, which 
    made sorting much easier and more expressive. Now, instead of writing an entire anonymous class, you can write:</div>
    <div className="mtop15p">
        <Highlight content={`Collections.sort(employeeList, (e1, e2) -> e1.getName().compareTo(e2.getName()));`} lang="java" />
    </div>
    <div className="mtop15p">Or even cleaner:</div>
    <div className="mtop15p">
        <Highlight content={`employeeList.sort(Comparator.comparing(Employee::getName));`} lang="java" />
    </div>
    <div className="mtop15p">Let’s now explore how <code><b>Arrays.sort()</b></code> and <code><b>Collections.sort()</b></code> behave, 
    especially in the context of Java 8.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Arrays.sort() vs Collections.sort(): Core Differences</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Feature", "Arrays.sort()", "Collections.sort()"]} 
                columns={[
                    [(<div><b>Input Type</b></div>), 
                    (<div>Array (e.g., <code><b>String[]</b></code>, <code><b>int[]</b></code>)</div>), 
                    (<div>List (e.g., <code><b>ArrayList</b></code>, <code><b>LinkedList</b></code>)</div>)],
                    [(<div><b>Method Location</b></div>), 
                    (<div><code><b>java.util.Arrays</b></code></div>), 
                    (<div><code><b>java.util.Collections</b></code></div>)],
                    [(<div><b>Overloaded for Primitives</b></div>), 
                    (<div>Yes</div>), 
                    (<div>No</div>)],
                    [(<div><b>Supports Comparator</b></div>), 
                    (<div>Yes (for Object arrays)</div>), 
                    (<div>Yes</div>)],
                    [(<div><b>In-place Sort</b></div>), 
                    (<div>Yes</div>), 
                    (<div>Yes</div>)],
                    [(<div><b>Default Algorithm</b></div>), 
                    (<div>Dual-Pivot Quicksort for primitives;<br/> TimSort for objects</div>), 
                    (<div>TimSort</div>)]
                ]} />
    </div>
 </div>);
};

export default Introduction;