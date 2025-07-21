import React from "react";
import { Card, Accordian } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";
import Collections from './components/01-Collections/index.js';
import Arrays from './components/02-Arrays/index.js';
import StreamsOf from './components/03-StreamsOf/index.js';
import Builder from "./components/04-Builder/index.js";
import PrimitiveRanges from "./components/05-PrimitiveRanges/index.js";
import StreamIterateGenerate from "./components/06-Stream-Iterate-Generate/index.js";
import FilesIO from "./components/07-Files-IO/index.js";

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
               <Accordian id="AccordianExample" 
                  data={[{ id:"Item#1", 
                           title: <div className="blog-head"><b>1. From Collections</b></div>, 
                           component: <Collections />  
                        },
                        {  id:"Item#2", 
                           title: <span className="blog-head"><b>2. From Arrays</b></span>, 
                           component: <Arrays />  
                        },
                        {  id:"Item#3", 
                           title: <span className="blog-head"><b>3. Using <code>Stream.of()</code></b></span>, 
                           component: <StreamsOf />  
                        },
                        {  id:"Item#4", 
                           title: <span className="blog-head"><b>4. From Builder</b></span>, 
                           component: <Builder />  
                        },
                        {  id:"Item#5", 
                           title: <span className="blog-head"><b>5. From Primitive Ranges</b></span>, 
                           component: <PrimitiveRanges />
                        },
                        {  id:"Item#6", 
                           title: <span className="blog-head"><b>6. Using <code>Stream.iterate()</code> or <code>Stream.generate()</code></b></span>, 
                           component: <StreamIterateGenerate /> 
                        },
                        {  id:"Item#7", 
                           title: <span className="blog-head"><b>7. From Files (I/O using <code><b>Files.lines</b></code>)</b></span>, 
                           component: <FilesIO /> 
                        }]} />     
            </div>
            <div className="mtop10p"><h5 className="blog-head"><b>Overall Summary:</b></h5></div>
            <div className="mtop5p">
               <SimpleTable header={["Source", "Method"]} 
                     columns={[ 
                           ["Collection", (<div><code><b>stream()</b></code> <code><b>parallelStream()</b></code></div>)],
                           ["Array", (<div><code><b>Arrays.stream()</b></code> <code><b>Stream.of()</b></code></div>)],
                           ["Fixed values", (<div><code><b>Stream.of()</b></code></div>)],
                           ["Builder", (<div><code><b>Stream.builder()</b></code></div>)],
                           ["Primitive range", (<div><code><b>IntStream.range()</b></code> <code><b>rangeClosed()</b></code></div>)],
                           ["Infinite stream", (<div><code><b>Stream.iterate()</b></code> <code><b>Stream.generate()</b></code></div>)],
                           ["File lines", (<div><code><b>Files.lines(path)</b></code></div>)],
                        ]} />
            </div>
            <div className="mtop5p">So, in <b>7 different ways</b>, you can create a stream in Java using a <b>variety of sources</b>.</div>
         </li>
      </ol>
   </div>
 </div>);
};

export default Introduction;