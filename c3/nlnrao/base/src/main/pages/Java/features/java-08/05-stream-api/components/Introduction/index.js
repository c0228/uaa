import React from "react";
import { Card, Accordian, Highlight } from "e-ui-react";
import RightRoundedHeader from "@MainComponents/header-rounded-right/index.js";
import SimpleTable from "@MainComponents/simple-table/index.js";
// Stream Creations
import Collections from './components/Stream-Creation/01-Collections/index.js';
import Arrays from './components/Stream-Creation/02-Arrays/index.js';
import StreamsOf from './components/Stream-Creation/03-StreamsOf/index.js';
import Builder from "./components/Stream-Creation/04-Builder/index.js";
import PrimitiveRanges from "./components/Stream-Creation/05-PrimitiveRanges/index.js";
import StreamIterateGenerate from "./components/Stream-Creation/06-Stream-Iterate-Generate/index.js";
import FilesIO from "./components/Stream-Creation/07-Files-IO/index.js";
// Intermediate operations
import Filter from "./components/Intermediate-Operations/01-filter/index.js";
import Map from "./components/Intermediate-Operations/02-map/index.js";
import FlatMapForStream from "./components/Intermediate-Operations/03-flatMapForStream/index.js";
import Distinct from "./components/Intermediate-Operations/04-distinct/index.js";
import Sorted from "./components/Intermediate-Operations/05-sorted/index.js";
import SortedWithComparator from "./components/Intermediate-Operations/06-sortedWithComparator/index.js";
import Peek from "./components/Intermediate-Operations/07-peek/index.js";
import Limit from "./components/Intermediate-Operations/08-limit/index.js";
import Skip from "./components/Intermediate-Operations/09-skip/index.js";
import TakeWhile from "./components/Intermediate-Operations/10-takeWhile/index.js";
import DropWhile from "./components/Intermediate-Operations/11-dropWhile/index.js";
import MapMulti from "./components/Intermediate-Operations/12-mapMulti/index.js";
import MapToObj from "./components/Intermediate-Operations/13-mapToObj/index.js";
import MapToLong from "./components/Intermediate-Operations/14-mapToLong/index.js";
import MapToDouble from "./components/Intermediate-Operations/15-mapToDouble/index.js";
import FlatMapForPrimitiveStream from "./components/Intermediate-Operations/16-flatMapForPrimitiveStream/index.js";
import Boxed from "./components/Intermediate-Operations/17-boxed/index.js";
import AsLongStream from "./components/Intermediate-Operations/18-asLongStream/index.js";
import AsDoubleStream from "./components/Intermediate-Operations/19-asDoubleStream/index.js";
import Parallel from "./components/Intermediate-Operations/20-parallel/index.js";
import Sequential from "./components/Intermediate-Operations/21-sequential/index.js";
// Terminal Operations
import ForEach from "./components/Terminal-Operations/01-forEach/index.js";
import ForEachOrdered from "./components/Terminal-Operations/02-forEachOrdered/index.js";
import ToArray from "./components/Terminal-Operations/03-toArray/index.js";
import Collect from "./components/Terminal-Operations/04-collect/index.js";
import Reduce from "./components/Terminal-Operations/05-reduce/index.js";
import Sum from "./components/Terminal-Operations/06-sum/index.js";
import Average from "./components/Terminal-Operations/07-average/index.js";
import SummaryStatistics from "./components/Terminal-Operations/08-summaryStatistics/index.js";
import Min from "./components/Terminal-Operations/09-min/index.js";
import Max from "./components/Terminal-Operations/10-max/index.js";
import Count from "./components/Terminal-Operations/11-count/index.js";
import AnyMatch from "./components/Terminal-Operations/12-anyMatch/index.js";
import AllMatch from "./components/Terminal-Operations/13-allMatch/index.js";
import NoneMatch from "./components/Terminal-Operations/14-noneMatch/index.js";
import FindFirst from "./components/Terminal-Operations/15-findFirst/index.js";
import FindAny from "./components/Terminal-Operations/16-findAny/index.js";

const Introduction = () =>{
 
 const StatementTitle = ({ index, title, version, other}) =>{
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
                           title: <StatementTitle index="01" title={<span>filter(Predicate&lt;T&gt;)</span>} version={8} />, 
                           component: <Filter />  
                        },{ id:"IOS-Item#02", 
                           title: <StatementTitle index="02" title={<span>map(Function&lt;T,R&gt;)</span>} version={8} />, 
                           component: <Map />  
                        },{ id:"IOS-Item#03", 
                           title: <StatementTitle index="03" title={<span>flatMap(Function&lt;T, Stream&lt;R&gt;&gt;)</span>} version={8} />, 
                           component: <FlatMapForStream />  
                        },{ id:"IOS-Item#04", 
                           title: <StatementTitle index="04" title={<span>distinct()</span>} version={8} />, 
                           component: <Distinct />  
                        },{ id:"IOS-Item#05", 
                           title: <StatementTitle index="05" title={<span>sorted()</span>} version={8} />, 
                           component: <Sorted />  
                        },{ id:"IOS-Item#06", 
                           title: <StatementTitle index="06" title={<span>sorted(Comparator&lt;T&gt;)</span>} version={8} />, 
                           component: <SortedWithComparator />  
                        },{ id:"IOS-Item#07", 
                           title: <StatementTitle index="07" title={<span>peek(Consumer&lt;T&gt;)</span>} version={8} />, 
                           component: <Peek />  
                        },{ id:"IOS-Item#08", 
                           title: <StatementTitle index="08" title={<span>limit(long)</span>} version={8} />, 
                           component: <Limit />  
                        },{ id:"IOS-Item#09", 
                           title: <StatementTitle index="09" title={<span>skip(long)</span>} version={8} />, 
                           component: <Skip />  
                        },{ id:"IOS-Item#10", 
                           title: <StatementTitle index="10" title={<span>takeWhile(Predicate&lt;T&gt;)</span>} version={9} />, 
                           component: <TakeWhile />  
                        },{ id:"IOS-Item#11", 
                           title: <StatementTitle index="11" title={<span>dropWhile(Predicate&lt;T&gt;)</span>} version={9} />, 
                           component: <DropWhile />  
                        },{ id:"IOS-Item#12", 
                           title: <StatementTitle index="12" title={<span>mapMulti(BiConsumer&lt;T, Consumer&lt;R&gt;&gt;)</span>} version={16} />, 
                           component: <MapMulti />  
                        }]} />
            </div>
            <div className="mtop15p"><h5 className="blog-head"><b>b) Primitive Streams (<code>IntStream</code>, <code>LongStream</code>, <code>DoubleStream</code>)</b></h5></div>
            <div className="mtop5p">
               <Accordian id="IntermediateOperations-PrimitiveStreams" 
                  data={[{ id:"IOPS-Item#01", 
                           title: <StatementTitle index="01" title={<span>mapToObj(IntFunction&lt;R&gt;)</span>} version={8} />, 
                           component: <MapToObj />  
                        },{ id:"IOPS-Item#02", 
                           title: <StatementTitle index="02" title={<span>mapToLong(IntToLongFunction)</span>} version={8} />, 
                           component: <MapToLong />  
                        },{ id:"IOPS-Item#03", 
                           title: <StatementTitle index="03" title={<span>mapToDouble(IntToDoubleFunction)</span>} version={8} />, 
                           component: <MapToDouble />  
                        },{ id:"IOPS-Item#04", 
                           title: <StatementTitle index="04" title={<span>flatMap(Function&lt;T, IntStream&gt;)</span>} version={8} />, 
                           component: <FlatMapForPrimitiveStream />  
                        },{ id:"IOPS-Item#05", 
                           title: <StatementTitle index="05" title={<span>boxed()</span>} version={8} />, 
                           component: <Boxed />  
                        },{ id:"IOPS-Item#06", 
                           title: <StatementTitle index="06" title={<span>asLongStream()</span>} version={8} />, 
                           component: <AsLongStream />  
                        },{ id:"IOPS-Item#07", 
                           title: <StatementTitle index="07" title={<span>asDoubleStream()</span>} version={8} />, 
                           component: <AsDoubleStream />  
                        }]} />
            </div>
            <div className="mtop15p"><h5 className="blog-head"><b>c) Used by Generic Streams and Primitive Streams</b></h5></div>
            <div className="mtop5p">
               <Accordian id="CommonIntermediateOperations" 
                  data={[{ id:"CIO-Item#01", 
                           title: <StatementTitle index="01" title={<span>parallel()</span>} version={8} />, 
                           component: <Parallel />  
                        },{ id:"CIO-Item#02", 
                           title: <StatementTitle index="02" title={<span>sequential()</span>} version={8} />, 
                           component: <Sequential />  
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
                              title: <StatementTitle index="01" title={<span>forEach(Consumer)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <ForEach />  
                           },{ id:"TOSE-Item#02", 
                              title: <StatementTitle index="02" title={<span>forEachOrdered(Consumer)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <ForEachOrdered />  
                           }]} />
               </div>

               <div className="mtop15p"><h5 className="blog-head"><b>b) Conversion Operations</b></h5></div>
               <div className="mtop5p">
                  <Accordian id="TerminalOperations-Coversion" 
                     data={[{ id:"TOC-Item#01", 
                              title: <StatementTitle index="01" title={<span>toArray()</span>} version={8} 
                                  other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <ToArray />  
                           },{ id:"TOC-Item#02", 
                              title: <StatementTitle index="02" title={<span>collect(Collector)</span>} version={8} 
                                  other={<><StreamTypeIcon /></>} />, 
                              component: <Collect />  
                           }]} />
               </div>

               <div className="mtop15p"><h5 className="blog-head"><b>c) Reduction Operations</b></h5></div>
               <div className="mtop5p">
                  <Accordian id="TerminalOperations-Reduction" 
                     data={[{ id:"TOR-Item#01", 
                              title: <StatementTitle index="01" title={<span>reduce(...)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <Reduce />  
                           },{ id:"TOR-Item#02", 
                              title: <StatementTitle index="02" title={<span>sum()</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /></>} />, 
                              component: <Sum />  
                           },{ id:"TOR-Item#03", 
                              title: <StatementTitle index="03" title={<span>average()</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /></>} />, 
                              component: <Average />  
                           },{ id:"TOR-Item#04", 
                              title: <StatementTitle index="04" title={<span>summaryStatistics()</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /></>} />, 
                              component: <SummaryStatistics />  
                           }]} />
               </div>

               <div className="mtop15p"><h5 className="blog-head"><b>d) Search / Match Operations</b></h5></div>
               <div className="mtop5p">
                  <Accordian id="TerminalOperations-SearchMatch" 
                     data={[{ id:"TOSM-Item#01", 
                              title: <StatementTitle index="01" title={<span>min(Comparator)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <Min />  
                           },{ id:"TOSM-Item#02", 
                              title: <StatementTitle index="02" title={<span>max(Comparator)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <Max />  
                           },{ id:"TOSM-Item#03", 
                              title: <StatementTitle index="03" title={<span>count()</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <Count />  
                           },{ id:"TOSM-Item#04", 
                              title: <StatementTitle index="04" title={<span>anyMatch(Predicate)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <AnyMatch />  
                           },{ id:"TOSM-Item#05", 
                              title: <StatementTitle index="05" title={<span>allMatch(Predicate)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <AllMatch />  
                           },{ id:"TOSM-Item#06", 
                              title: <StatementTitle index="06" title={<span>noneMatch(Predicate)</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <NoneMatch />  
                           },{ id:"TOSM-Item#07", 
                              title: <StatementTitle index="07" title={<span>findFirst()</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <FindFirst />  
                           },{ id:"TOSM-Item#08", 
                              title: <StatementTitle index="08" title={<span>findAny()</span>} version={8} 
                                 other={<><StreamTypeIcon isPrimitive="Y" /> <StreamTypeIcon /></>} />, 
                              component: <FindAny />  
                           }]} />
               </div>
               <div className="mtop15p">
                  <div><StreamTypeIcon isPrimitive="Y" /> <b>- Applicable for Primitive Streams</b></div>
                  <div><StreamTypeIcon /> <b>- Applicable for Generic Streams Stream&lt;T&gt;</b></div>
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
   <div>
      <Card padding={15} backgroundColor="#eee">
         <div><h5 className="blog-head"><b>Note:</b></h5></div>
         <div>
            <ul>
               <li className="mtop5p">Streams are not data structures (they don’t store data)</li>
               <li className="mtop5p">Intermediate operations are lazy (won’t execute immediately)</li>
               <li className="mtop5p">Streams can be used <b>only once</b></li>
               <li className="mtop5p">Prefer streams for <b>readable and functional code</b></li>
            </ul>
         </div>
      </Card>
   </div>
 </div>);
};

export default Introduction;