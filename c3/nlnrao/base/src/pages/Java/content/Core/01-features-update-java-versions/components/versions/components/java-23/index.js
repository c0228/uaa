import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const ENHANCED_PRIMITIVE_PATTERN = `Object obj = 42;
  if (obj instanceof Integer i) {
      System.out.println("Integer value: " + i);
  }`;

const FLEXIBLE_CONSTRUCTOR_BODIES = `  class Parent {
      Parent(int value) {
          // Constructor logic
      }
  }

  class Child extends Parent {
      Child(int value) {
          System.out.println("Preparing to initialize...");
          super(value);
      }
  }
`;

const STRUCTURED_CONCURRENCY_PREVIEW = `try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
      Future<String> task1 = scope.fork(() -> fetchData());
      Future<Integer> task2 = scope.fork(() -> computeData());
      scope.join();
      System.out.println(task1.resultNow() + " " + task2.resultNow());
  }`;

const UPDATED_CLASSFILE_API = `ClassFile cf = ClassFile.readFrom(path);
  // Analyze or modify the class file`;

const STREAM_GATHER_PREVIEW = `Stream<String> stream = Stream.of("apple", "banana", "cherry");
  Stream<List<String>> result = stream.collect(Gatherers.window(2));
  result.forEach(System.out::println);`;

const VECTOR_API_JAVA = ` VectorSpecies<Float> species = FloatVector.SPECIES_PREFERRED;
  FloatVector a = FloatVector.fromArray(species, floatArray, 0);
  FloatVector b = FloatVector.fromArray(species, floatArray, SPECIES.length());
  FloatVector c = a.add(b);
  c.intoArray(resultArray, 0);`;

const MARKDOWN_DOC_COMMENTS = `  /**
   * # Method Overview
   *
   * This method performs the following operations:
   * - Validates input parameters.
   * - Processes the data.
   * - Returns the result.
   *
   * **Note:** Ensure that all inputs are non-null.
   */
  public void processData() {
      // method implementation
  }
`;

const Java23 = () =>{
 const Features = () =>{
  return (<div>

    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Enhanced Primitive Type Patterns" />
        <OrderList data={[(<div className="mtop5p">
                <div><b>Extends pattern matching to include primitive types</b>, allowing for more 
                concise and readable code when working with primitives.</div>
                <div className="padLeft5p"><b>Example:</b></div>
                <Highlight content={ENHANCED_PRIMITIVE_PATTERN} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Simplifies code involving type checks and casts for primitive types.</li>
                        <li>Enhances code readability and maintainability.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Flexible Constructor Bodies" />
        <OrderList data={[(<div className="mtop5p">
            <div><b>Allows certain statements to be executed before</b> the <code><b>super()</b></code> or 
            <code><b>this()</b></code> calls in constructors, providing greater flexibility in object initialization.</div>
            <div className="padLeft5p"><b>Example:</b></div>
            <Highlight content={FLEXIBLE_CONSTRUCTOR_BODIES} lang="java" />
        </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Enables pre-processing or validation before invoking superclass constructors.</li>
                        <li>Offers more control over the initialization sequence.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Simplified Module Imports" />
        <OrderList data={[(<div className="mtop5p">
            <div><b>Introduces a concise syntax for importing modules</b> directly in Java source files, streamlining 
            the module usage process.</div>
            <div className="padLeft5p"><b>Example:</b></div>
            <Highlight content={`import module com.example.mymodule;`} lang="java" />
        </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Reduces boilerplate code associated with module declarations.</li>
                        <li>Enhances code clarity and maintainability.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Structured Concurrency (Third Preview)" />
        <OrderList data={[(<div className="mtop5p">
            <div><b>Simplifies multithreaded programming</b> by treating related tasks running in separate threads 
            as a single unit of work, improving error handling and cancellation.</div>
            <div className="padLeft5p"><b>Example:</b></div>
            <Highlight content={STRUCTURED_CONCURRENCY_PREVIEW} lang="java" />
        </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Enhances reliability and maintainability of concurrent code.</li>
                        <li>Provides a structured approach to handle multiple tasks concurrently.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Updated Class-File API (Second Preview)" />
        <OrderList data={[(<div className="mtop5p">
            <div><b>Offers a standard API for parsing, generating, and transforming Java class files</b>, facilitating 
            tools and frameworks that interact with Java bytecode.</div>
            <div className="padLeft5p"><b>Example:</b></div>
            <Highlight content={UPDATED_CLASSFILE_API} lang="java"/>
        </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Simplifies bytecode manipulation tasks.</li>
                        <li>Provides a standardized approach to interact with class files.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Stream Gatherers (Second Preview)" />
        <OrderList data={[(<div className="mtop5p">
            <div><b>Introduces a new API to define custom intermediate stream operations</b>, enabling 
            more complex data processing within the Stream API.</div>
            <div className="padLeft5p"><b>Example:</b></div>
            <Highlight content={STREAM_GATHER_PREVIEW} lang="java"/>
        </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Enhances the expressiveness and flexibility of stream pipelines.</li>
                        <li>Allows for custom data aggregation and transformation operations.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="Vector API (Eighth Incubator)" />
        <OrderList data={[(<div className="mtop5p">
            <div><b>Continues the development of the Vector API</b>, which provides a mechanism to express vector 
            computations that compile to optimal vector hardware instructions on supported CPU architectures.</div>
            <div className="padLeft5p"><b>Example:</b></div>
            <Highlight content={VECTOR_API_JAVA} lang="java" />
        </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Enables developers to write performance-critical code that leverages hardware acceleration.</li>
                        <li>Improves the performance of mathematical and data processing operations.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Generational ZGC" />
        <OrderList data={[(<div className="mtop5p"><b>Enhances the Z Garbage Collector</b> by introducing generational 
        capabilities, improving performance and efficiency in memory management.</div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Reduces garbage collection pause times.</li>
                        <li>Enhances application responsiveness and throughput.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="9" title="Markdown Documentation Comments" />
        <OrderList data={[(<div className="mtop5p">
            <div><b>Introduces support for Markdown syntax in JavaDoc comments</b>, allowing developers to write rich-text 
            documentation using a familiar and widely-used markup language.</div>
            <div className="padLeft5p"><b>Example:</b></div>
            <Highlight content={MARKDOWN_DOC_COMMENTS} lang="java" />
        </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Enhances the readability and expressiveness of code documentation.</li>
                        <li>Facilitates the creation of well-structured and visually appealing API documentation.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="10" title="Deprecations and Removals" />
        <OrderList data={[(<div className="mtop5p"><b>Removal of Deprecated Thread Methods:</b> Methods such as 
            <code><b>Thread.suspend()</b></code>, <code><b>Thread.resume()</b></code> and <code><b>ThreadGroup.stop()</b></code> 
            have been removed due to their inherent deadlock-prone nature and the availability of safer alternatives.​</div>),
            (<div className="mtop5p"><b>Deprecation of <code>sun.misc.Unsafe</code> Memory Access Methods:</b> Certain memory 
            access methods in <code><b>sun.misc.Unsafe</b></code> have been deprecated for removal in future releases, 
            encouraging developers to transition to safer and more secure APIs.</div>)]} />
    </div>

  </div>);
 };
 return (<div className="mtop15p">
     <div className="mtop15p"><h4><b>Java SE 23 (September, 2024):</b></h4></div>
     <div className="mtop15p">Java 23 brings a host of new features and improvements aimed at enhancing developer 
        productivity, code clarity, and application performance. From advanced pattern matching with primitive types to 
        flexible constructor bodies and improved concurrency models, this release continues to evolve the Java language 
        to meet modern development needs. Developers are encouraged to explore these features and consider adopting them to 
        leverage the full potential of Java 23.
     </div>
     <div className="mtop15p">
         <Accordian id="Java23" data={[{
                 id:"java23-features", 
                 title: (<div><b>FEATURES:</b></div>),
                 component:(<Features />)
             }]} />
     </div>
  </div>);
};

export default Java23;