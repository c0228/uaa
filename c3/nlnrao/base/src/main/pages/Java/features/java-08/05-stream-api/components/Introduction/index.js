import React from "react";
import { Card, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const STREAM_EXAMPLE_LIST = `List<String> list = Arrays.asList("Java", "Python");
Stream<String> stream = list.stream();`;

const PSTREAM_EXAMPLE_LIST = `List<String> list = Arrays.asList("Java", "Python");
Stream<String> stream = list.parallelStream();`;

const STREAM_EXAMPLE_SET = `Set<Integer> set = new HashSet<>(Arrays.asList(1, 2, 3));
Stream<Integer> stream = set.stream();`;

const PSTREAM_EXAMPLE_SET = `Set<Integer> set = new HashSet<>(Arrays.asList(1, 2, 3));
Stream<Integer> stream = set.parallelStream();`;

const STREAM_EXAMPLE_QUEUE = `Queue<String> queue = new LinkedList<>();
queue.add("A");
queue.add("B");
Stream<String> stream = queue.stream();`;

const PSTREAM_EXAMPLE_QUEUE = `Queue<String> queue = new LinkedList<>();
queue.add("A");
queue.add("B");
Stream<String> stream = queue.parallelStream();`;

const STREAM_EXAMPLE_DEQUE = `Deque<String> deque = new ArrayDeque<>();
deque.add("X");
deque.add("Y");
Stream<String> stream = deque.stream();`;

const PSTREAM_EXAMPLE_DEQUE = `Deque<String> deque = new ArrayDeque<>();
deque.add("X");
deque.add("Y");
Stream<String> stream = deque.parallelStream();`;

const MAP_SAMPLE_OBJECT = `Map<String, Integer> languageVersions = new HashMap<>();
        languageVersions.put("Java", 8);
        languageVersions.put("Python", 3);
        languageVersions.put("C++", 11);
        languageVersions.put("Go", 1);

   //  1. Stream on Keys
        System.out.println(" Keys:");
        languageVersions.keySet().stream()
            .forEach(System.out::println);

   //  2. Stream on Values
        System.out.println(" Values:");
        languageVersions.values().stream()
            .map(version -> "v" + version)
            .forEach(System.out::println);

   //   3. Stream on Entries
        System.out.println(" Entries (Key -> Value):");
        languageVersions.entrySet().stream()
            .filter(entry -> entry.getValue() > 5)
            .forEach(entry -> 
                System.out.println(entry.getKey() + " -> " + entry.getValue()));        
`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before Stream API</b></h4></div>
         <div className="mtop15p">Before Java 8, working with collections meant writing bulky, imperative code with loops, 
            conditional statements, and external iteration. For example, filtering a list of objects, transforming data, or 
            aggregating values often required verbose and error-prone logic 
            using <code><b>for</b></code> or <code><b>while</b></code> loops. As the logic grew complex, 
            readability and maintainability became a challenge. Moreover, leveraging multi-core architectures for parallel operations 
            was not straightforward.</div>
            <div className="mtop5p">This led to a need for a cleaner, more functional way to process collections —
               a way to <b>focus on the what instead of the how</b>.</div>
            <div className="mtop5p"><b>Before Java 8:</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Lots of <code><b>for</b></code> loops to process collections</li>
                  <li className="mtop5p">Difficult to read and maintain</li>
                  <li className="mtop5p">Hard to do things in parallel</li>
               </ul>
            </div>
            <div className="mtop5p"><b>With Stream API:</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Short and readable code</li>
                  <li className="mtop5p">Functional-style operations</li>
                  <li className="mtop5p">Easy to process big data in parallel</li>
               </ul>
            </div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Stream API?</b></h2></div>
   <div className="mtop15p">Java 8 introduced the <b>Stream API</b> under the <code><b>java.util.stream</b></code> package, 
   which allows processing of data in a <b>declarative</b>, <b>functional-style</b> manner. A <b>Stream</b> is a sequence of elements 
   that supports various operations to be performed <b>pipelined</b>, such as filtering, mapping, and reducing.</div>
   <div className="mtop5p">The Stream API enables:</div>
   <div>
      <ul>
         <li className="mtop5p">Clean, readable code for collection processing</li>
         <li className="mtop5p">Lazy evaluation</li>
         <li className="mtop5p">Efficient data processing</li>
         <li className="mtop5p">Easy parallelization using <code><b>.parallelStream()</b></code></li>
      </ul>
   </div>
   <div className="mtop5p">Think of <b>Stream</b> like a <b>conveyor belt</b> where data enters at one end, goes through some processing 
      steps (like filtering, transforming, collecting), and finally gives you the result — without modifying the original source.</div>
   <div className="mtop5p">It is not a <b>data structure</b>, but a <b>pipeline for processing data</b>.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>Key Concepts of Stream API</b></h2></div>
   <div>
      <ol>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Creating Streams</b></h4></div>
            <div className="mtop5p">You can create a stream from 7 major sources:</div>
            <div className="mtop5p">
               <div className="list-group">
                  <div className="list-group-item">
                     <div><h5 className="blog-head"><b>1. From Collections</b></h5></div>
                     <div className="mtop5p"><code><b>java.util.Collection</b></code> is the root interface of the Collection Framework. Any class 
                     that implements <code><b>Collection</b></code> Interface will inherit these two 
                     methods - <code><b>stream()</b></code> and <code><b>parallelStream()</b></code>. They are:</div>
                     <div className="mtop5p padLeft5p">
                        <SimpleTable header={["Collection", "Description"]} 
                              columns={[
                                    [(<div>
                                          <div><b>List</b></div>
                                          <div>[ Ordered collection; allows duplicates ]</div>
                                       </div>),(<div>
                                          <div className="padLeft5p"><b>Implementation with <code><b>.stream()</b></code></b></div>
                                          <div><Highlight content={STREAM_EXAMPLE_LIST} lang="java" /></div>
                                          <div className="mtop5p padLeft5p"><b>Implementation with <code><b>.parallelStream()</b></code></b></div>
                                          <div><Highlight content={PSTREAM_EXAMPLE_LIST} lang="java" /></div>
                                       </div>)],
                                    [(<div>
                                          <div><b>Set</b></div>
                                          <div>[ Unordered collection; no duplicates ]</div>
                                       </div>),(<div>
                                          <div className="padLeft5p"><b>Implementation with <code><b>.stream()</b></code></b></div>
                                          <div><Highlight content={STREAM_EXAMPLE_SET} lang="java" /></div>
                                          <div className="mtop5p padLeft5p"><b>Implementation with <code><b>.parallelStream()</b></code></b></div>
                                          <div><Highlight content={PSTREAM_EXAMPLE_SET} lang="java" /></div>
                                       </div>)],
                                    [(<div>
                                          <div><b>Queue</b></div>
                                          <div>[ Collection for holding elements prior to processing (FIFO) ]</div>
                                       </div>),(<div>
                                          <div className="padLeft5p"><b>Implementation with <code><b>.stream()</b></code></b></div>
                                          <div><Highlight content={STREAM_EXAMPLE_QUEUE} lang="java" /></div>
                                          <div className="mtop5p padLeft5p"><b>Implementation with <code><b>.parallelStream()</b></code></b></div>
                                          <div><Highlight content={PSTREAM_EXAMPLE_QUEUE} lang="java" /></div>
                                       </div>)],
                                    [(<div>
                                          <div><b>Deque</b></div>
                                          <div>[ Double-ended queue (can add/remove from both ends) ]</div>
                                       </div>),(<div>
                                          <div className="padLeft5p"><b>Implementation with <code><b>.stream()</b></code></b></div>
                                          <div><Highlight content={STREAM_EXAMPLE_DEQUE} lang="java" /></div>
                                          <div className="mtop5p padLeft5p"><b>Implementation with <code><b>.parallelStream()</b></code></b></div>
                                          <div><Highlight content={PSTREAM_EXAMPLE_DEQUE} lang="java" /></div>
                                       </div>)]
                                 ]} />
                     </div>
                     <div className="mtop15p"><h5 className="blog-head"><b>In case of <code>Map&lt;K, V&gt;</code>:</b></h5></div>
                     <div className="mtop5p">When working with a <code><b>Map&lt;K, V&gt;</b></code>, you cannot 
                        call <code><b>.stream()</b></code> or <code><b>.parallelStream()</b></code> directly on the <code><b>Map</b></code> itself 
                        because <code><b>Map</b></code> <b>does not implement</b> <code><b>Collection</b></code>.
                     </div>
                     <div className="mtop5p">But you can stream through it in <b>exactly three standard ways</b> by using its <b>collection-like views</b>:</div>
                     <div className="mtop15p">
                        <SimpleTable header={["Map Method", "Returns", "Call Streams", "Stream Returns"]} 
                              columns={[
                                    [(<div><code><b>keySet()</b></code></div>), 
                                       (<div><code><b>Set&lt;K&gt;</b></code></div>), 
                                       (<div>
                                          <div><code><b>map.keySet().stream()</b></code></div>
                                          <div><code><b>map.keySet().parallelStream()</b></code></div>
                                       </div>),
                                       (<div><code><b>Stream&lt;K&gt;</b></code></div>)
                                    ],
                                    [(<div><code><b>values()</b></code></div>), 
                                       (<div><code><b>Collection&lt;V&gt;</b></code></div>),
                                       (<div>
                                          <div><code><b>map.values().stream()</b></code></div>
                                          <div><code><b>map.values().parallelStream()</b></code></div>
                                       </div>), 
                                       (<div><code><b>Stream&lt;V&gt;</b></code></div>)   
                                    ],
                                    [(<div><code><b>entrySet()</b></code></div>), 
                                       (<div><code><b>Set&lt;Map.Entry&lt;K, V&gt;&gt;</b></code></div>),
                                       (<div>
                                          <div><code><b>map.entrySet().stream()</b></code></div>
                                          <div><code><b>map.entrySet().parallelStream()</b></code></div>
                                       </div>), 
                                       (<div><code><b>Stream&lt;Map.Entry&lt;K, V&gt;&gt;</b></code></div>)
                                    ]
                                 ]} />
                     </div>
                     <div className="mtop5p"><h5 className="blog-head"><b>Example:</b></h5></div>
                     <div className="mtop5p"><Highlight content={MAP_SAMPLE_OBJECT} lang="java" /></div>
                  </div>
                  <div className="list-group-item">
                     <div><h5 className="blog-head"><b>2. From Arrays</b></h5></div>
                  </div>
                  <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                     <div><h5 className="blog-head"><b>3. Using <code>Stream.of()</code></b></h5></div>
                  </div>
                  <div className="list-group-item">
                     <div><h5 className="blog-head"><b>4. From Builder</b></h5></div>
                  </div>
                  <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                     <div><h5 className="blog-head"><b>5. From Primitive Ranges</b></h5></div>
                  </div>
                  <div className="list-group-item">
                     <div><h5 className="blog-head"><b>6. Using <code><b>Stream.iterate()</b></code> or <code><b>Stream.generate()</b></code></b></h5></div>
                  </div>
                  <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                     <div><h5 className="blog-head"><b>7. From Files (I/O using <code><b>Files.lines</b></code>)</b></h5></div>
                  </div>
               </div>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b></b></h4></div>
            <div></div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b></b></h4></div>
            <div></div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b></b></h4></div>
            <div></div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b></b></h4></div>
            <div></div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b></b></h4></div>
            <div></div>
         </li>
      </ol>
   </div>
 </div>);
};

export default Introduction;