import React from "react";
import { Highlight, Icon, Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const ARRAY_STREAM_PRIMITIVE = `int[] numbers = {10, 20, 30, 40};
IntStream stream01 = Arrays.stream(numbers);`;

const ARRAY_STREAM_INDIVIDUAL = `String[] languages = {"Java", "Python", "Go"};
Stream<String> stream02 = Arrays.stream(languages);`;

const ARRAY_STREAM_INDEXING = `// Create a stream from index 1 to 4 (exclusive of 4)
String[] languages = {"Java", "Python", "Go", "Rust", "Kotlin"};
Stream<String> stream03 = Arrays.stream(languages, 1, 4);`;

const STREAMOF_ARRAY_INDIVIDUAL = `Stream<String> language = Stream.of("Java", "Python", "Go");`;

const Arrays = () =>{ 
 const DisplayIcon = ({ name, color }) =>{
  return (<Icon type="FontAwesome" name={name} color={color} />);
 };
 return (<div>
    <div className="mtop5p padLeft5p">To <b>convert an array to a Stream</b> in Java 8, and there are two ways to do this:</div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>Arrays.stream(arr)</b></code></li>
            <li className="mtop5p"><code><b>Stream.of(arr)</b></code></li>
        </ul>
    </div>
    <ol>
        <li className="mtop15p">
            <div><h5 className="blog-head"><b>Arrays.stream(arr)</b></h5></div>
            <div className="padLeft5p">
                <div className="mtop5p">Use it when:</div>
                <div>
                    <ul>
                        <li className="mtop5p">
                            <div>You have an array (especially a primitive array 
                            like <code><b>int[]</b></code>, <code><b>double[]</b></code>, etc.).</div>
                            <div className="mtop5p"><Highlight content={ARRAY_STREAM_PRIMITIVE} lang="java" /></div>
                            <div className="mtop5p">
                                <SimpleTable header={["Array Type", "Recommended Method", "Stream Type"]} 
                                        columns={[
                                            [(<div><code><b>int[]</b></code></div>), (<div><code><b>Arrays.stream(int[])</b></code></div>), (<div><code><b>IntStream</b></code></div>)],
                                            [(<div><code><b>double[]</b></code></div>), (<div><code><b>Arrays.stream(double[])</b></code></div>), (<div><code><b>DoubleStream</b></code></div>)],
                                            [(<div><code><b>long[]</b></code></div>), (<div><code><b>Arrays.stream(long[])</b></code></div>), (<div><code><b>LongStream</b></code></div>)],
                                            [(<div><code><b>char[]</b></code>, <code><b>byte[]</b></code></div>), (<div>Not Directly Supported</div>), (<div>Convert to <code><b>int[]</b></code> manually</div>)],
                                        ]} />
                            </div>
                        </li>
                        <li className="mtop5p">
                            <div>You want a <b>stream of the individual elements</b> inside the array.</div>
                            <div className="mtop5p"><Highlight content={ARRAY_STREAM_INDIVIDUAL} lang="java" /></div>
                            <div className="mtop5p">
                                <SimpleTable header={["Array Type", "Recommended Method", "Stream Type"]} 
                                        columns={[
                                            [(<div><div><code><b>String[]</b></code>,</div> <div><code><b>Integer[]</b></code>, etc.</div></div>), (<div><code><b>Stream.of(...)</b></code> or <code><b>Arrays.stream(...)</b></code></div>), (<div><code><b>Stream&lt;T&gt;</b></code></div>)],
                                        ]} />
                            </div>
                        </li>
                        <li className="mtop5p">
                            <div>You want to work with a <b>subarray</b> using <code><b>Arrays.stream(arr, from, to)</b></code>.</div>
                            <div>(<i><u>Note</u></i>: This Works with Reference Arrays (like <code><b>String[]</b></code>, <code><b>Integer[]</b></code>), not for 
                            primitive arrays)</div>
                            <div className="mtop5p"><Highlight content={ARRAY_STREAM_INDEXING} lang="java" /></div>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li className="mtop15p">
            <div><h5 className="blog-head"><b>Stream.of(arr)</b></h5></div>
            <div className="padLeft5p">
                <div className="mtop5p">It is a <b>static factory method</b> in Java 8’s <code><b>java.util.stream.Stream</b></code> class</div>
                <div className="mtop5p">Use it when:</div>
                <div>
                    <ul>
                        <li className="mtop5p">
                            <div>You have <b>individual elements</b>, not necessarily an array.</div>
                        </li>
                        <li className="mtop5p">
                            <div>You want to create a stream from <b>varargs</b>.</div>
                        </li>
                        <li className="mtop5p">
                            <div>You want a quick way to create a stream of <b>fixed values</b>.</div>
                        </li>
                    </ul>
                </div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <div className="mtop5p"><Highlight content={STREAMOF_ARRAY_INDIVIDUAL} lang="java" /></div>
                <div className="mtop15p">
                    <SimpleTable header={["Use Case", "Example"]} 
                            columns={[
                                ["You have individual fixed values", (<div><code><b>Stream.of("Java", "Python", "Go")</b></code> // Returns Stream&lt;String&gt;</div>)],
                                ["You want to quickly create a stream", (<div><code><b>Stream.of(1, 2, 3)</b></code> // Returns Stream&lt;Integer&gt;</div>)],
                                [(<div><DisplayIcon name="fa-check-circle" color="green" /> You have an object array</div>), 
                                (<div><code><b>Stream.of(new String[]&#123;"A", "B"&#125;)</b></code> // Returns Stream&lt;String[]&gt;</div>)],
                                [(<div><DisplayIcon name="fa-warning" color="orange" /> Be careful with primitive arrays</div>), 
                                (<div>
                                    <div><code><b>Stream.of(new int[]&#123;1,2,3&#125;)</b></code> // Returns Stream&lt;int[]&gt;</div>
                                    <div className="padLeft5p mtop5p"><b> Output:</b> [I@15db9742</div>
                                </div>)]
                            ]} />
                </div>
                <div className="mtop15p mbot15p">
                    <Card padding={15} backgroundColor="#eee">
                        <b><i><u>Note</u></i>:</b> Stream&lt;PrimitiveDataType[]&gt; provides a Reference value not Actual Value.
                    </Card>
                </div>
            </div>
        </li>
    </ol>
    
 </div>);
};

export default Arrays;