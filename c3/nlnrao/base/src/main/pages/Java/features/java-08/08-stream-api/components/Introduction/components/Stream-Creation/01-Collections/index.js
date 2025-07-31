import React from "react";
import { Highlight } from "e-ui-react";
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
                System.out.println(entry.getKey() + " -> " + entry.getValue()));`;

const Collections = () =>{
 return (<div>
    <div className="mtop5p"><code><b>java.util.Collection</b></code> is the root interface of the Collection Framework. Any class 
    that implements <code><b>Collection</b></code> Interface will inherit these two 
    methods - <code><b>stream()</b></code> and <code><b>parallelStream()</b></code>. They are:</div>
    <div className="mtop5p padLeft5p">
      <SimpleTable header={["Collection", "Description"]} 
        columns={[
            [(<div>
                <div><b>List</b></div>
                <div>[ Ordered collection; allows duplicates ]</div>
            </div>),
            (<div>
                <div className="padLeft5p"><b>Implementation with <code><b>.stream()</b></code></b></div>
                <div><Highlight content={STREAM_EXAMPLE_LIST} lang="java" /></div>
                <div className="mtop5p padLeft5p"><b>Implementation with <code><b>.parallelStream()</b></code></b></div>
                <div><Highlight content={PSTREAM_EXAMPLE_LIST} lang="java" /></div>
            </div>)],
            [(<div>
                <div><b>Set</b></div>
                <div>[ Unordered collection; no duplicates ]</div>
            </div>),
            (<div>
                <div className="padLeft5p"><b>Implementation with <code><b>.stream()</b></code></b></div>
                <div><Highlight content={STREAM_EXAMPLE_SET} lang="java" /></div>
                <div className="mtop5p padLeft5p"><b>Implementation with <code><b>.parallelStream()</b></code></b></div>
                <div><Highlight content={PSTREAM_EXAMPLE_SET} lang="java" /></div>
            </div>)],
            [(<div>
                <div><b>Queue</b></div>
                <div>[ Collection for holding elements prior to processing (FIFO) ]</div>
            </div>),
            (<div>
                <div className="padLeft5p"><b>Implementation with <code><b>.stream()</b></code></b></div>
                <div><Highlight content={STREAM_EXAMPLE_QUEUE} lang="java" /></div>
                <div className="mtop5p padLeft5p"><b>Implementation with <code><b>.parallelStream()</b></code></b></div>
                <div><Highlight content={PSTREAM_EXAMPLE_QUEUE} lang="java" /></div>
            </div>)],
            [(<div>
                <div><b>Deque</b></div>
                <div>[ Double-ended queue (can add/remove from both ends) ]</div>
            </div>),
            (<div>
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
                (<div><code><b>Stream&lt;K&gt;</b></code></div>)],
                [(<div><code><b>values()</b></code></div>), 
                (<div><code><b>Collection&lt;V&gt;</b></code></div>),
                (<div>
                    <div><code><b>map.values().stream()</b></code></div>
                    <div><code><b>map.values().parallelStream()</b></code></div>
                </div>), 
                (<div><code><b>Stream&lt;V&gt;</b></code></div>)],
                [(<div><code><b>entrySet()</b></code></div>), 
                (<div><code><b>Set&lt;Map.Entry&lt;K, V&gt;&gt;</b></code></div>),
                (<div>
                    <div><code><b>map.entrySet().stream()</b></code></div>
                    <div><code><b>map.entrySet().parallelStream()</b></code></div>
                </div>), 
                (<div><code><b>Stream&lt;Map.Entry&lt;K, V&gt;&gt;</b></code></div>)]
            ]} />
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example:</b></h5></div>
    <div className="mtop5p"><Highlight content={MAP_SAMPLE_OBJECT} lang="java" /></div>
 </div>);
};

export default Collections;