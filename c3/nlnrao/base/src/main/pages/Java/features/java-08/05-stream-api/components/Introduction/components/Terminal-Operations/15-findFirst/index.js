import React from "react";
import { Card, Highlight } from "e-ui-react";

const FINDFIRST_EXAMPLE_BASIC = `import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class FindFirstExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

        Optional<String> firstName = names.stream()
                                          .filter(name -> name.startsWith("J"))
                                          .findFirst();

        firstName.ifPresent(name -> System.out.println("First J name: " + name));
    }
}`;

const FindFirst = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div className="mtop5p"><h5 className="blog-head"><b>1. What is <code>findFirst()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>findFirst()</b></code> returns an <code><b>Optional&lt;T&gt;</b></code> describing 
            the <b>first element</b> of the stream (in encounter order).</li>
            <li className="mtop5p">It’s a <b>short-circuiting operation</b> — stops processing as soon as the first match is found.</li>
            <li className="mtop5p">Works best with <b>ordered</b> streams like <code><b>List</b></code></li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>findFirst()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">When you want to <b>retrieve the first element</b> from a stream.</li>
            <li className="mtop5p">Especially useful after filtering.</li>
        </ul>
    </div>
    
    <div className="mtop15p"><h5 className="blog-head"><b>Example:</b></h5></div>
    <div className="mtop5p"><Highlight content={FINDFIRST_EXAMPLE_BASIC} lang="java" /></div>
    <div className="mtop15p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={`First J name: John`} lang="java" /></div>

    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h5 className="blog-head"><b>Note:</b></h5></div>
            <div>
                <ul>
                    <li className="mtop5p">On <b>Unordered streams</b> (like <code><b>Set</b></code> or parallel streams), the result 
                    is not guaranteed to be consistent. Use <code><b>findAny()</b></code> instead in those cases if order is not important.</li>
                </ul>
            </div>
        </Card>
    </div>
 </div>);
};

export default FindFirst;