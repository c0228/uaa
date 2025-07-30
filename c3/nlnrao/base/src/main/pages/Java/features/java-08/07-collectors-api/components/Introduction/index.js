import React from "react";
import { Card, Highlight } from "e-ui-react";

const VERBOSE_EXAMPLE_AGGREGATIONS = `List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");
List<String> upperNames = new ArrayList<>();
for (String name : names) {
    upperNames.add(name.toUpperCase());
}
System.out.println(upperNames);`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">Java 8 brought revolutionary changes to the Java ecosystem with features 
      like <b>Streams API</b>, <b>Lambda Expressions</b>, <b>Functional Interfaces</b>, <b>Optional Class</b> and 
      the <b>Collectors API</b>. One of the most powerful and widely used features for data aggregation and transformation is 
      the <b>Collectors API</b>, which comes under the <code><b>java.util.stream</b></code> package.</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div align="center"><h4 className="blog-head"><b>The Problems Before Collectors API</b></h4></div>
         <div className="mtop15p">Before Java 8, working with <b>collections</b> in Java 
         required <b>manual iteration</b> and <b>aggregation</b>. Let’s look at the common problems:</div>
         <div>
            <ol>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>Manual Iteration:</b></h5></div>
                  <div className="mtop5p">Developers had to use <b>loops</b> like <code><b>for</b></code> or <code><b>for-each</b></code> to 
                  traverse collections and process elements.</div>
               </li>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>Verbose Code for Aggregations:</b></h5></div>
                  <div className="mtop5p">Collecting elements into new lists or maps, summing numbers, grouping data, or performing statistics 
                     was <b>boilerplate-heavy</b>.</div>
                  <div className="mtop15p"><b>Example (Before Java 8):</b></div>
                  <div className="mtop5p"><Highlight content={VERBOSE_EXAMPLE_AGGREGATIONS} lang="java" /></div>
                  <div className="mtop5p">
                     <div>This approach:</div>
                     <div>
                        <ul>
                           <li className="mtop5p">Required <b>mutable variables</b> (<code><b>upperNames</b></code>)</li>
                           <li className="mtop5p">Produced <b>verbose and less readable code</b></li>
                           <li className="mtop5p">Was <b>error-prone</b> in multi-threaded environments</li>
                        </ul>
                     </div>
                  </div>
                  <div className="mtop5p">We needed a <b>declarative, concise, and functional style</b> to handle such operations 
                  efficiently, which led to <b>Collectors API</b>.</div>
               </li>
            </ol>
         </div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Java 8 Collectors API</b></h2></div>
   <div className="mtop15p">
      <div>The <b>Collectors API</b> is part of the <b>Stream API</b> introduced in Java 8. It 
         provides <b>reusable collector implementations</b> to 
         <b>reduce, summarize or group stream elements</b> into various forms such as:</div>
      <div>
         <ul>
            <li className="mtop5p">List</li>
            <li className="mtop5p">Set</li>
            <li className="mtop5p">Map</li>
            <li className="mtop5p">String (joining)</li>
            <li className="mtop5p">Aggregates (sum, average, count, etc.)</li>
         </ul>
      </div>
   </div>
   <div className="mtop5p">The API is found in:</div>
   <div className="mtop5p"><Highlight content={`import java.util.stream.Collectors;`} lang="java" /></div>
   <div className="mtop5p">A <b>Collector</b> is used with the <code><b>Stream.collect()</b></code> method:</div>
   <div className="mtop5p"><Highlight content={`<R, A> R collect(Collector<? super T, A, R> collector)`} lang="java" /></div>
   <div className="mtop5p">Some <b>commonly used static methods</b> in <code><b>Collectors</b></code> are:</div>
   <div>
      <ul>
         <li className="mtop5p"><code><b>toList()</b></code></li>
         <li className="mtop5p"><code><b>toSet()</b></code></li>
         <li className="mtop5p"><code><b>toMap()</b></code></li>
         <li className="mtop5p"><code><b>joining()</b></code></li>
         <li className="mtop5p"><code><b>counting()</b></code></li>
         <li className="mtop5p"><code><b>summingInt()</b></code>, <code><b>summingLong()</b></code></li>
         <li className="mtop5p"><code><b>averagingInt()</b></code></li>
         <li className="mtop5p"><code><b>groupingBy()</b></code></li>
         <li className="mtop5p"><code><b>partitioningBy()</b></code></li>
      </ul>
   </div>
 </div>);
};

export default Introduction;