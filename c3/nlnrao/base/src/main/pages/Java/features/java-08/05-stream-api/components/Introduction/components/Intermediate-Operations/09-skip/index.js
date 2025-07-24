import React from "react";
import { Card, Highlight } from "e-ui-react";

 const SKIP_EXAMPLE_ELEMENTS = `import java.util.Arrays;
import java.util.List;

public class SkipExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ravi", "Anil", "Suresh", "Bala", "Mohan");

        names.stream()
             .skip(3)
             .forEach(System.out::println);
    }
}`;

 const SKIP_OUTPUT_ELEMENTS = `Bala
Mohan`;

 const SKIP_EXAMPLE_LIMIT = `int pageNumber = 2;
int pageSize = 2;

List<String> names = Arrays.asList("Ravi", "Anil", "Suresh", "Bala", "Mohan");

names.stream()
     .skip((pageNumber - 1) * pageSize)  // skip(2)
     .limit(pageSize)                    // limit(2)
     .forEach(System.out::println);`;

 const SKIP_OUTPUT_LIMIT = `Suresh
Bala`;

 const SKIP_EXAMPLE_EVEN = `import java.util.stream.IntStream;

public class SkipEven {
    public static void main(String[] args) {
        IntStream.rangeClosed(1, 10)
                 .filter(n -> n % 2 == 0)
                 .skip(2)
                 .forEach(System.out::println);
    }
}`;

 const SKIP_OUTPUT_EVEN = `6
8
10`;

const Skip = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>skip(long n)</code>?</b></h5></div>
    <div className="mtop15p">
      <code><b>skip(long n)</b></code> is an <b>intermediate operation</b> in the Java Stream API 
      that <b>skips the first n elements</b> of the stream and processes the rest.
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`Stream<T> skip(long n)`} lang="java" /></div>
    <div>
      <ul>
         <li className="mtop5p"><b>n:</b> Number of elements to skip from the start.</li>
         <li className="mtop5p">If <code><b>n</b></code> is greater than the number of elements in the stream, the 
         result is an <b>empty stream</b>.</li>
      </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to use <code>skip(long n)</code>?</b></h5></div>
    <div>
      <ul>
         <li className="mtop5p">To <b>implement pagination</b> (e.g., page 2 = skip 10, limit 10).</li>
         <li className="mtop5p">To <b>ignore the first few elements</b> (e.g., ignore headers or top values).</li>
         <li className="mtop5p">For <b>offset-based processing</b>.</li>
      </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Skip First 3 Elements</b></h5></div>
    <div className="mtop5p"><Highlight content={SKIP_EXAMPLE_ELEMENTS} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={SKIP_OUTPUT_ELEMENTS} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>Example #2: Pagination with <code>skip()</code> and <code>limit()</code></b></h5></div>
    <div className="mtop5p"><Highlight content={SKIP_EXAMPLE_LIMIT} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={SKIP_OUTPUT_LIMIT} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>Example #3: Skip first N even numbers</b></h5></div>
    <div className="mtop5p"><Highlight content={SKIP_EXAMPLE_EVEN} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={SKIP_OUTPUT_EVEN} lang="java" /></div>

    <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h5 className="blog-head"><b>Notes:</b></h5></div>
         <div>
            <ul>
               <li className="mtop5p"><code><b>skip()</b></code> is <b>stateful</b> and <b>lazy</b>.</li>
               <li className="mtop5p">If used on an <b>infinite stream</b>, be cautious—it can still process an infinite number of 
               skipped elements if not properly bounded.</li>
            </ul>
         </div>
      </Card>
    </div>
 </div>);

};

export default Skip;