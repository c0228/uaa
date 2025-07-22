import React from "react";
import { Highlight, Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const BASIC_USAGE_EXAMPLE = `import java.util.stream.Stream;

public class StreamBuilderExample {
    public static void main(String[] args) {
        Stream<String> stream = Stream.<String>builder()
            .add("Java")
            .add("Python")
            .add("Go")
            .add("Rust")
            .build();

        stream.forEach(System.out::println);
    }
}`;

const Builder = () =>{
 return (<div className="mtop5p">
    <div><code><b>Stream.Builder</b></code> — an advanced way to create Streams <b>dynamically</b>, element-by-element, which 
    is ideal when you don't have all values upfront or when building Streams conditionally.</div>
    
    <div className="mtop5p"><h5 className="blog-head"><b>What is <code>Stream.Builder</code>?</b></h5></div>
    <div className="mtop5p"><code>Stream.Builder&lt;T&gt;</code> is a <b>mutable builder</b> used to <b>incrementally construct a Stream</b>.<br/> This is especially useful when:</div>
    <div>
        <ul>
            <li className="mtop5p">You want to build a Stream step-by-step.</li>
            <li className="mtop5p">You don't have all elements at once.</li>
            <li className="mtop5p">You want better control than using <code><b>Stream.of()</b></code>.</li>
        </ul>
    </div>

    <div className="mtop5p"><h5 className="blog-head"><b>Method Signature</b></h5></div>
    <div className="mtop5p">
        <Highlight content={`static <T> Stream.Builder<T> builder()`} lang="java" />
    </div>
    <div className="mtop5p">From the <code><b>Stream&lt;T&gt;</b></code> <b>interface</b>, it returns an <b>empty builder</b> to 
    which elements can be added using <code><b>.add()</b></code> method.</div>

    <div className="mtop15p"><h5 className="blog-head"><b>Common Methods of <code>Stream.Builder</code></b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Method", "Description"]} 
        columns={[
            [(<div><code><b>add(T t)</b></code></div>), "Adds an element to the builder. Can be chained."],
             [(<div><code><b>build()</b></code></div>), (<div>Builds the Stream and <b>closes</b> the builder.</div>)]
          ]} />
    </div>
    <div className="mtop5p">
        <Icon type="FontAwesome" name="fa-warning" size={12} color="orange" /> Once <code><b>build()</b></code> is called, 
        the builder is no longer usable, you can't add new things.
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Example: Basic Usage</b></h5></div>
    <div className="mtop5p">
        <Highlight content={BASIC_USAGE_EXAMPLE} lang="java" />
    </div>


    <div className="mtop15p"><h5 className="blog-head"><b>When to Use <code>Stream.Builder</code></b></h5></div>
    <div className="mtop5p">
        <div>Use it when:</div>
        <div>
            <ul>
                <li className="mtop5p">You want to construct a Stream <b>dynamically or conditionally</b>.</li>
                <li className="mtop5p">You don’t want to collect elements in a list first, then stream it.</li>
                <li className="mtop5p">You want to <b>chain</b> <code><b>add()</b></code> operations fluently.</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Difference between <code>Stream.of()</code> vs <code>Stream.builder()</code></b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Feature", "Stream.of()", "Stream.builder()"]} 
                columns={[
                    ["Input Feature", "All elements at once", "Can add dynamically"],
                    ["Readability", "Short, concise", "Verbose, flexible"],
                    ["Mutability", "Immutable", "Mutable while building"],
                    ["Best For", "Fixed Values", "Conditional, dynamic building"]
                ]} />
    </div>
    <div className="mtop5p">
        <div><code><b>Stream.Builder</b></code> is ideal for:</div>
        <div>
            <ul>
                <li className="mtop5p"><b>Dynamic stream creation</b></li>
                <li className="mtop5p"><b>Conditional element addition</b></li>
                <li className="mtop5p"><b>Fluent style building</b></li>
            </ul>
        </div>
    </div>
    <div className="mtop5p">While <code><b>Stream.of()</b></code> is perfect for fixed values, <code><b>Stream.Builder</b></code> gives 
    you <b>full control and flexibility</b>.</div>
 </div>);
};

export default Builder;