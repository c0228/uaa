import React from "react";
import { Highlight } from "e-ui-react";

const FI_CUSTOM_JAVA = `@FunctionalInterface
interface GreetService {
    void sayMessage(String message);
}

public class FunctionalInterfaceExample {
    public static void main(String[] args) {
        GreetService greet = message -> System.out.println("Hello, " + message);
        greet.sayMessage("World");
    }
}`;

const FI_FUNCTION_JAVA = `import java.util.function.Function;

public class FunctionExample {
    public static void main(String[] args) {
        Function<String, Integer> stringLength = s -> s.length();
        System.out.println("Length: " + stringLength.apply("Java 8"));
    }
}`;

const FI_CONSUMER_JAVA = `import java.util.function.Consumer;

public class ConsumerExample {
    public static void main(String[] args) {
        Consumer<String> printMessage = msg -> System.out.println("Message: " + msg);
        printMessage.accept("Java is awesome!");
    }
}`;

const FI_SUPPLIER_JAVA = `import java.util.function.Supplier;

public class SupplierExample {
    public static void main(String[] args) {
        Supplier<Double> randomValue = () -> Math.random();
        System.out.println("Random Value: " + randomValue.get());
    }
}`;

const FI_PREDICATE_JAVA = `import java.util.function.Predicate;

public class PredicateExample {
    public static void main(String[] args) {
        Predicate<String> isLongWord = s -> s.length() > 5;
        System.out.println("Is 'Interface' long? " + isLongWord.test("Interface"));
    }
}`;

const FI_UNARYOPERATOR_JAVA = `import java.util.function.UnaryOperator;

public class UnaryOperatorExample {
    public static void main(String[] args) {
        UnaryOperator<String> toUpperCase = s -> s.toUpperCase();
        System.out.println("Uppercase: " + toUpperCase.apply("java 8"));
    }
}`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples of Functional Interfaces</b></h2></div>

    <div className="mtop15p"><h4 className="blog-head"><b>Example #1: Using a Custom Functional Interface</b></h4></div>
    <div className="mtop5p"><Highlight content={FI_CUSTOM_JAVA} lang="java" /></div>

    <div className="mtop15p"><h4 className="blog-head"><b>Example #2: Using <code>Function&lt;T, R&gt;</code></b></h4></div>
    <div className="mtop5p"><Highlight content={FI_FUNCTION_JAVA} lang="java" /></div>
    <div className="mtop5p">In the expression <code><b>Function&lt;String, Integer&gt;</b></code> - <code><b>String</b></code> is 
    the input type <code><b>T</b></code> and <code><b>Integer</b></code> is the return type <code><b>R</b></code>, meaning the 
    function takes a <code><b>String</b></code> and returns its <code><b>length</b></code> as an <code><b>Integer</b></code>.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Example #3: Using <code>Consumer&lt;T&gt;</code></b></h4></div>
    <div className="mtop5p"><Highlight content={FI_CONSUMER_JAVA} lang="java" /></div>
    <div className="mtop5p">In <code><b>Consumer&lt;String&gt;</b></code> - the type <code><b>String</b></code> is the 
    input <code><b>T</b></code>, and it performs an action (<code><b>System.out.println</b></code>) without returning any result.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Example #4: Using <code>Supplier&lt;T&gt;</code></b></h4></div>
    <div className="mtop5p"><Highlight content={FI_SUPPLIER_JAVA} lang="java" /></div>
    <div className="mtop5p">In <code><b>Supplier&lt;Double&gt;</b></code> - the type <code><b>Double</b></code> is the 
    output <code><b>T</b></code>, and the function takes no input but supplies (returns) a value when <code><b>get()</b></code> is 
    called.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Example #5: Using <code>Predicate&lt;T&gt;</code></b></h4></div>
    <div className="mtop5p"><Highlight content={FI_PREDICATE_JAVA} lang="java" /></div>
    <div className="mtop5p">In the expression <code><b>Predicate&lt;String&gt;</b></code> - the type <code><b>String</b></code> is 
    the input <code><b>T</b></code>, and the function returns a <code><b>boolean</b></code> by testing whether the input string's 
    length is greater than <code><b>5</b></code>.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Example #6: Using <code>UnaryOperator&lt;T&gt;</code></b></h4></div>
    <div className="mtop5p"><Highlight content={FI_UNARYOPERATOR_JAVA} lang="java" /></div>
    <div className="mtop5p">In <code><b>UnaryOperator&lt;String&gt;</b></code> - the input and output are both of 
    type <code><b>String</b></code> (<code><b>T</b></code>), meaning it takes a single operand and returns a result of the 
    same type.</div>

        
 </div>);
};

export default Example;