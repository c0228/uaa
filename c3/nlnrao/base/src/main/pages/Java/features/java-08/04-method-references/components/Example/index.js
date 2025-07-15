import React from "react";
import { Highlight } from "e-ui-react";

const STATIC_METHOD_REFERENCES = `public class Utils {
    public static void greet(String name) {
        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) {
        Consumer<String> greeter = Utils::greet; // METHOD REFERENCE
        greeter.accept("Alice");
    }
}`;

const INSTANCE_METHOD_PARTOBJ_REFERENCES = `public class Printer {
    public void print(String msg) {
        System.out.println(msg);
    }

    public static void main(String[] args) {
        Printer printer = new Printer();
        Consumer<String> printerRef = printer::print; // METHOD REFERENCE
        printerRef.accept("Printed via method reference");
    }
}`;

const INSTANCE_METHOD_ARBOBJ_REFERENCES = `public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Tom", "Jerry", "Spike");
        names.forEach(System.out::println); // METHOD REFERENCE
    }
}`;

const CONSTRUCTOR_METHOD_REFERENCES = `import java.util.function.Supplier;

class Book {
    Book() {
        System.out.println("Book Created");
    }

    public static void main(String[] args) {
        Supplier<Book> bookSupplier = Book::new; // METHOD REFERENCE
        Book b = bookSupplier.get();
    }
}`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Types of Method References (with Examples)</b></h2></div>
    <div className="mtop15p padLeft5p">Java 8 provides <b>four types</b> of method references:</div>
    <div className="mtop15p">
         <ol>
            <li>
               <div><h4 className="blog-head"><b>Reference to a Static Method</b></h4></div>
               <div className="mtop15p"><Highlight content={STATIC_METHOD_REFERENCES} lang="java" /></div>
               <div className="mtop15p padLeft5p"><b>Equivalent Lambda:</b> <code><b>(name) &#8594; Utils.greet(name)</b></code></div>
            </li>
            <li className="mtop15p">
               <div><h4 className="blog-head"><b>Reference to an Instance Method of a Particular Object</b></h4></div>
               <div className="mtop15p"><Highlight content={INSTANCE_METHOD_PARTOBJ_REFERENCES} lang="java" /></div>
               <div className="mtop15p padLeft5p"><b>Equivalent Lambda:</b> <code><b>(msg) &#8594; printer.print(msg)</b></code></div>
            </li>
            <li className="mtop15p">
               <div><h4 className="blog-head"><b>Reference to an Instance Method of an Arbitrary Object of a Particular Type</b></h4></div>
               <div className="mtop15p"><Highlight content={INSTANCE_METHOD_ARBOBJ_REFERENCES} lang="java" /></div>
               <div className="mtop15p padLeft5p"><b>Equivalent Lambda:</b> <code><b>(name) &#8594; System.out.println(name)</b></code></div>
            </li>
            <li className="mtop15p">
               <div><h4 className="blog-head"><b>Reference to a Constructor</b></h4></div>
               <div className="mtop15p"><Highlight content={CONSTRUCTOR_METHOD_REFERENCES} lang="java" /></div>
               <div className="mtop15p padLeft5p"><b>Equivalent Lambda:</b> <code><b>() &#8594; new Book()</b></code></div>
            </li>
         </ol>
    </div>
 </div>);
};

export default Example;