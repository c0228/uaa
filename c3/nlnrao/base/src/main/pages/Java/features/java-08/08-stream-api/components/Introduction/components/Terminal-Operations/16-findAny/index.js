import React from "react";
import { Card, Highlight } from "e-ui-react";

const FINDANY_EXAMPLE_SEQUENCE = `import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class FindAnyExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

        Optional<String> anyName = names.stream()
                                        .filter(name -> name.startsWith("J"))
                                        .findAny();

        anyName.ifPresent(name -> System.out.println("Any J name: " + name));
    }
}`;

const FINDANY_EXAMPLE_PARALLEL = `Optional<String> anyName = names.parallelStream()
                                .filter(name -> name.startsWith("J"))
                                .findAny();`;

const FindAny = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>findAny()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>findAny()</b></code> returns an <code><b>Optional&lt;T&gt;</b></code> describing some 
            element of the stream.</li>
            <li className="mtop5p">It is also a <b>short-circuiting</b> terminal operation.</li>
            <li className="mtop5p">May return <b>any</b> element, especially useful with <b>parallel streams</b> for performance.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>findAny()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">When you <b>don’t care which element</b> is returned.</li>
            <li className="mtop5p">When you're working with <b>parallel streams</b> and want better performance than <code><b>findFirst()</b></code></li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Example (with sequential stream):</b></h5></div>
    <div className="mtop5p"><Highlight content={FINDANY_EXAMPLE_SEQUENCE} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example (with parallel stream):</b></h5></div>
    <div className="mtop5p"><Highlight content={FINDANY_EXAMPLE_PARALLEL} lang="java" /></div>
    <div className="mtop5p">You might get a different result each time due to parallelism.</div>

    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h5 className="blog-head"><b>Tip:</b></h5></div>
            <div>
                <ul>
                    <li className="mtop5p">Use <code><b>findFirst()</b></code> when order matters.</li>
                    <li className="mtop5p">Use <code><b>findAny()</b></code> for performance, especially in parallel processing 
                    where order is irrelevant.</li>
                </ul>
            </div>
        </Card>
    </div>
 </div>);
};

export default FindAny;