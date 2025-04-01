import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";
import OrderList from "@MainComponents/order-list/index.js";

const UNNAMED_VARIABLES_PATTERNS = `record Point(int x, int y) {}

  static void printXCoordinate(Point point) {
      if (point instanceof Point(int x, _)) {
          System.out.println("X coordinate: " + x);
      }
  }`;

const FOREIGN_FUNCTION_MEMORY = `try (Arena arena = Arena.ofConfined()) {
      MemorySegment segment = arena.allocate(100);
      // Use the memory segment
  }`;

const STATEMENTS_BEFORE_SUPER = ` class Parent {
      Parent(int value) {
          // Constructor logic
      }
  }

  class Child extends Parent {
      Child(int value) {
          System.out.println("Initializing...");
          super(value);
      }
  }`;

const STREAM_GATHERS_JAVA = ` Stream<String> stream = Stream.of("apple", "banana", "cherry");
  Stream<String> result = stream.collect(Gatherers.window(2));
  result.forEach(System.out::println);`;

const CLASS_API_FILE = `ClassFile cf = ClassFile.readFrom(path); 
// Analyze or modify the class file`;

const STRUCTURED_CONCURRENCY_JAVA = `  try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
      Future<String> task1 = scope.fork(() -> fetchData());
      Future<Integer> task2 = scope.fork(() -> computeData());
      scope.join();
      System.out.println(task1.resultNow() + " " + task2.resultNow());
  }`;

const SCOPED_VALUES_PREVIEW = `static final ScopedValue<String> USER_ID = ScopedValue.newInstance();

  void process() {
      ScopedValue.where(USER_ID, "12345").run(() -> {
          System.out.println("User: " + USER_ID.get());
      });
  }`;

const STRING_TEMPLATES_PREVIEW = `String name = "Alice";
  String message = STR."Hello, \{name}!";
  System.out.println(message); // Output: Hello, Alice!`;

const IMPLICIT_DECLARED_CLASSES = `void main() {
      System.out.println("Hello, World!");
  }`;

const Java22 = () =>{
 const Features = () =>{
  return (<div>

    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Unnamed Variables & Patterns" />
        <OrderList data={[(<div className="mtop5p">
                <div>Simplifies code by allowing unnamed variables and patterns when their values are unused.</div>
                <div className="mtop5p padleft5p"><b>Example:</b></div>
                <Highlight content={UNNAMED_VARIABLES_PATTERNS} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Enhances code readability by indicating intentionally unused variables.</li>
                        <li>Reduces compiler warnings about unused variables.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Launch Multi-File Source-Code Programs" />
        <OrderList data={[(<div className="mtop5p">
                <div>Enables the execution of multi-file Java programs without prior compilation.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b> Assuming <code><b>Main.java</b></code> and 
                    <code><b>Helper.java</b></code> are in the same directory:</div>
                <Highlight content={`java Main.java Helper.java`} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Streamlines the development process by eliminating the explicit compilation step.</li>
                        <li>Facilitates scripting and quick prototyping in Java.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Foreign Function & Memory API" />
        <OrderList data={[(<div className="mtop5p">
                <div>Provides a pure Java API for interacting with native code and memory.</div>
                <div><b>Example:</b></div>
                <Highlight content={FOREIGN_FUNCTION_MEMORY} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Eliminates the need for JNI, offering a safer and more efficient way to interface 
                            with native libraries.</li>
                        <li>Improves performance and security when accessing foreign memory.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Statements Before super() (Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Allows certain statements to be executed before the <code><b>super()</b></code> or 
                    <code><b>this()</b></code> calls in constructors.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={STATEMENTS_BEFORE_SUPER} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Provides flexibility in constructor initialization, such as input validation before 
                            calling the superclass constructor.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Stream Gatherers (Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Introduces a new API to define custom intermediate stream operations.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={STREAM_GATHERS_JAVA} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Enables more complex data processing within the Stream API.</li>
                        <li>Enhances code expressiveness and maintainability.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Class-File API (Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Provides an API for parsing, generating, and transforming Java class files.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={CLASS_API_FILE} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Facilitates tools and frameworks that need to interact with Java bytecode.</li>
                        <li>Simplifies bytecode manipulation tasks.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="Structured Concurrency (Second Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Simplifies multithreaded programming by treating related tasks running in separate threads 
                    as a single unit of work.</div>
                <div className="padLeft5p mtop5p"><b>Example:</b></div>
                <Highlight content={STRUCTURED_CONCURRENCY_JAVA} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Improves error handling and cancellation in concurrent programming.</li>
                        <li>Enhances code clarity and maintainability.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Scoped Values (Second Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Introduces a mechanism for sharing immutable data within and across threads.</div>
                <div className="padLeft5p mtop5p"><b>Example:</b></div>
                <Highlight content={SCOPED_VALUES_PREVIEW} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Offers a safer and more efficient alternative to thread-local variables.</li>
                        <li>Simplifies context propagation in concurrent applications.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="9" title="String Templates (Second Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Enhances string literals with embedded expressions for dynamic content.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={STRING_TEMPLATES_PREVIEW} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Improves readability and safety over traditional string concatenation.</li>
                        <li>Reduces the risk of injection attacks by handling expressions securely.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="10" title="Implicitly Declared Classes and Instance Main Methods (Third Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Simplifies the creation of Java programs by allowing instance <code><b>main</b></code> methods and 
                implicitly declared classes.</div>
                <div className="padLeft5p mtop5p"><b>Example:</b></div>
                <Highlight content={IMPLICIT_DECLARED_CLASSES} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Lowers the entry barrier for newcomers to Java.</li>
                        <li>Facilitates scripting and quick prototyping.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="11" title="Module Import Declarations (Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Introduces a concise syntax for importing modules in Java source files.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={`import module com.example.myapp;`} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Simplifies module usage and enhances code clarity.</li>
                        <li>Reduces boilerplate associated with module declarations.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="12" title="Flexible Constructor Bodies (Second Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Allows more flexibility in writing constructor bodies, including the ability to use 
                    return statements.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={`::contentReference[oaicite:15]{index=15}`} lang="java" />
            </div>)]} />
    </div>

  </div>);
 };
 return (<div className="mtop15p">
     <div className="mtop15p"><h4><b>Java SE 22 (March, 2024):</b></h4></div>
     <div className="mtop15p"><b>Java 22</b> introduces 12 significant features, including seven preview features and 
     one incubator feature, aimed at enhancing developer productivity and program efficiency.</div>
     <div className="mtop15p">
         <Accordian id="Java22" data={[{
                 id:"java22-features", 
                 title: (<div><b>FEATURES:</b></div>),
                 component:(<Features />)
             }]} />
     </div>
  </div>);
};

export default Java22;