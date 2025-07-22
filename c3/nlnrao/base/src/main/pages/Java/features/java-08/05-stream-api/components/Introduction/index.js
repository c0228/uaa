import React from "react";
import { Card, Accordian, Highlight } from "e-ui-react";
import RightRoundedHeader from "@MainComponents/header-rounded-right/index.js";
import SimpleTable from "@MainComponents/simple-table/index.js";
import Collections from './components/01-Collections/index.js';
import Arrays from './components/02-Arrays/index.js';
import StreamsOf from './components/03-StreamsOf/index.js';
import Builder from "./components/04-Builder/index.js";
import PrimitiveRanges from "./components/05-PrimitiveRanges/index.js";
import StreamIterateGenerate from "./components/06-Stream-Iterate-Generate/index.js";
import FilesIO from "./components/07-Files-IO/index.js";

const Introduction = () =>{
 
 const IntermediateTitle = ({ index, title, version, other}) =>{
   return (<div className="blog-head">
      <b>{index}.</b> <code><b>{title}</b></code> <span className="pull-right">{other} (Java {version})</span>
   </div>);
 };

 const StreamTypeIcon = ({ isPrimitive }) =>{
   return (<span style={{  fontSize:'13px', backgroundColor:isPrimitive?'green':'dodgerBlue', 
      borderRadius:'15px', padding:'6px', color:'#fff' }}><b>{isPrimitive?'P':'S'}</b></span>);
 };


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

   <div className="mtop15p"><h2 className="blog-head"><b>Stream API Pipeline</b></h2></div>
   <div className="mtop5p">
      <Highlight content={`Stream Creation -> Intermediate Operations -> Terminal Operations`} lang="python" />
   </div>
   <div>
      <ul>
         <li className="mtop5p"><b>Stream pipeline</b> only <i>requires</i> a terminal operation to execute.</li>
         <li className="mtop5p"><b>Intermediate operations</b> are <i>optional</i> — they just help you transform, filter, or inspect data before the terminal operation.</li>
         <li className="mtop5p">If you <i>don’t need transformation or filtering</i>, you can <b>go straight to the terminal operation</b>.</li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Key Concepts of Stream API</b></h2></div>
   <div>
      <ol>
         <li className="mtop15p">
            <RightRoundedHeader label="Creating Streams" />
            <div className="mtop15p">You can create a stream from 7 major sources:</div>
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
         <li className="mtop15p">
            <RightRoundedHeader label="Intermediate Operations" />
            <div className="mtop15p">In Java 8's Stream API, <b>intermediate operations</b> are the operations that transform a 
            stream into another stream. These operations are <b>lazy</b>, meaning they are not executed until a terminal 
            operation is invoked.</div>

            <div className="mtop15p"><h5 className="blog-head"><b>a) For All Streams (Generic Stream&lt;T&gt;)</b></h5></div>
            <div className="mtop5p">
               <Accordian id="IntermediateOperations-Streams" 
                  data={[{ id:"IOS-Item#01", 
                           title: <IntermediateTitle index="01" title={<span>filter(Predicate&lt;T&gt;)</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOS-Item#02", 
                           title: <IntermediateTitle index="02" title={<span>map(Function&lt;T,R&gt;)</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOS-Item#03", 
                           title: <IntermediateTitle index="03" title={<span>flatMap(Function&lt;T, Stream&lt;R&gt;&gt;)</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOS-Item#04", 
                           title: <IntermediateTitle index="04" title={<span>distinct()</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOS-Item#05", 
                           title: <IntermediateTitle index="05" title={<span>sorted()</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOS-Item#06", 
                           title: <IntermediateTitle index="06" title={<span>sorted(Comparator&lt;T&gt;)</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOS-Item#07", 
                           title: <IntermediateTitle index="07" title={<span>peek(Consumer&lt;T&gt;)</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOS-Item#08", 
                           title: <IntermediateTitle index="08" title={<span>limit(long)</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOS-Item#09", 
                           title: <IntermediateTitle index="09" title={<span>skip(long)</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOS-Item#10", 
                           title: <IntermediateTitle index="10" title={<span>takeWhile(Predicate&lt;T&gt;)</span>} version={9} />, 
                           component: <div></div>  
                        },{ id:"IOS-Item#11", 
                           title: <IntermediateTitle index="11" title={<span>dropWhile(Predicate&lt;T&gt;)</span>} version={9} />, 
                           component: <div></div>  
                        },{ id:"IOS-Item#12", 
                           title: <IntermediateTitle index="12" title={<span>mapMulti(BiConsumer&lt;T, Consumer&lt;R&gt;&gt;)</span>} version={16} />, 
                           component: <div></div>  
                        }]} />
            </div>
            <div className="mtop15p"><h5 className="blog-head"><b>b) Primitive Streams (<code>IntStream</code>, <code>LongStream</code>, <code>DoubleStream</code>)</b></h5></div>
            <div className="mtop5p">
               <Accordian id="IntermediateOperations-PrimitiveStreams" 
                  data={[{ id:"IOPS-Item#01", 
                           title: <IntermediateTitle index="01" title={<span>mapToObj(IntFunction&lt;R&gt;)</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOPS-Item#02", 
                           title: <IntermediateTitle index="02" title={<span>mapToLong(IntToLongFunction)</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOPS-Item#03", 
                           title: <IntermediateTitle index="03" title={<span>mapToDouble(IntToDoubleFunction)</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOPS-Item#04", 
                           title: <IntermediateTitle index="04" title={<span>flatMap(Function&lt;T, IntStream&gt;)</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOPS-Item#05", 
                           title: <IntermediateTitle index="05" title={<span>boxed()</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOPS-Item#06", 
                           title: <IntermediateTitle index="06" title={<span>asLongStream()</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"IOPS-Item#07", 
                           title: <IntermediateTitle index="07" title={<span>asDoubleStream()</span>} version={8} />, 
                           component: <div></div>  
                        }]} />
            </div>
            <div className="mtop15p"><h5 className="blog-head"><b>c) Used by Generic Streams and Primitive Streams</b></h5></div>
            <div className="mtop5p">
               <Accordian id="CommonIntermediateOperations" 
                  data={[{ id:"CIO-Item#01", 
                           title: <IntermediateTitle index="01" title={<span>parallel()</span>} version={8} />, 
                           component: <div></div>  
                        },{ id:"CIO-Item#02", 
                           title: <IntermediateTitle index="02" title={<span>sequential()</span>} version={8} />, 
                           component: <div></div>  
                        }]} />
            </div>
         </li>
         <li className="mtop15p">
            <RightRoundedHeader label="Terminal Operations" />
            <div className="mtop15p">
               <div><b>Terminal operations</b> are the final operations in a stream pipeline. They <b>trigger the processing</b> of 
               the stream and produce either:</div>
               <div>
                  <ul>
                     <li className="mtop5p">a <b>result</b> (e.g., <code><b>collect</b></code>, <code><b>count</b></code>, <code><b>findFirst</b></code>),</li>
                     <li className="mtop5p">or a <b>side effect</b> (e.g., <code><b>forEach</b></code>).</li>
                  </ul>
               </div>
               <div className="mtop5p">Once a terminal operation is invoked, the stream <b>cannot be reused</b>.</div>
               
               <div className="mtop15p"><h5 className="blog-head"><b>a) For Consumption / Side-effect Operations</b></h5></div>
               <div className="mtop5p">
                  <Accordian id="TerminalOperations-Consumption" 
                     data={[{ id:"TOSE-Item#01", 
                              title: <IntermediateTitle index="01" title={<span>forEach(Consumer)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           },{ id:"TOSE-Item#02", 
                              title: <IntermediateTitle index="02" title={<span>forEachOrdered(Consumer)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           }]} />
               </div>

               <div className="mtop15p"><h5 className="blog-head"><b>b) Conversion Operations</b></h5></div>
               <div className="mtop5p">
                  <Accordian id="TerminalOperations-Coversion" 
                     data={[{ id:"TOC-Item#01", 
                              title: <IntermediateTitle index="01" title={<span>toArray()</span>} version={8} 
                                  other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           },{ id:"TOC-Item#02", 
                              title: <IntermediateTitle index="02" title={<span>collect(Collector)</span>} version={8} 
                                  other={<><StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           }]} />
               </div>

               <div className="mtop15p"><h5 className="blog-head"><b>c) Reduction Operations</b></h5></div>
               <div className="mtop5p">
                  <Accordian id="TerminalOperations-Reduction" 
                     data={[{ id:"TOR-Item#01", 
                              title: <IntermediateTitle index="01" title={<span>reduce(...)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           },{ id:"TOR-Item#02", 
                              title: <IntermediateTitle index="02" title={<span>sum()</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /></>} />, 
                              component: <div></div>  
                           },{ id:"TOR-Item#03", 
                              title: <IntermediateTitle index="03" title={<span>average()</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /></>} />, 
                              component: <div></div>  
                           },{ id:"TOR-Item#04", 
                              title: <IntermediateTitle index="04" title={<span>summaryStatistics()</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /></>} />, 
                              component: <div></div>  
                           }]} />
               </div>

               <div className="mtop15p"><h5 className="blog-head"><b>d) Search / Match Operations</b></h5></div>
               <div className="mtop5p">
                  <Accordian id="TerminalOperations-SearchMatch" 
                     data={[{ id:"TOSM-Item#01", 
                              title: <IntermediateTitle index="01" title={<span>min(Comparator)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           },{ id:"TOSM-Item#02", 
                              title: <IntermediateTitle index="02" title={<span>max(Comparator)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           },{ id:"TOSM-Item#03", 
                              title: <IntermediateTitle index="03" title={<span>count()</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           },{ id:"TOSM-Item#04", 
                              title: <IntermediateTitle index="04" title={<span>anyMatch(Predicate)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           },{ id:"TOSM-Item#05", 
                              title: <IntermediateTitle index="05" title={<span>allMatch(Predicate)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           },{ id:"TOSM-Item#06", 
                              title: <IntermediateTitle index="06" title={<span>noneMatch(Predicate)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           },{ id:"TOSM-Item#07", 
                              title: <IntermediateTitle index="07" title={<span>findFirst()</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           },{ id:"TOSM-Item#08", 
                              title: <IntermediateTitle index="08" title={<span>findAny()</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <div></div>  
                           }]} />
               </div>
               <div className="mtop15p">
                  <div><StreamTypeIcon isPrimitive="Y" /> <b>- Primitive Streams</b></div>
                  <div><StreamTypeIcon /> <b>- Generic Streams Stream&lt;T&gt;</b></div>
               </div>
               <div className="mtop15p">
                  <Card padding={15} backgroundColor="#eee">
                     <div><b>Note:</b></div>
                     <div>
                        <ul>
                           <li className="mtop5p"><code><b>collect()</b></code> is <b>not available</b> for primitive streams 
                           (e.g., <code><b>IntStream</b></code>). You must use <code><b>.boxed()</b></code> first.</li>
                           <li className="mtop5p">No other hidden/undocumented terminal ops exist 
                              in <code><b>Stream</b></code>, <code><b>IntStream</b></code>, <code><b>LongStream</b></code>, or <code><b>DoubleStream</b></code> as 
                              per official Java SDK.</li>
                        </ul>
                     </div>
                  </Card>
               </div>
            </div>
         </li>
      </ol>
   </div>
 </div>);
};

export default Introduction;