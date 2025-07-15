import React from "react";
import { Highlight } from "e-ui-react";

const SORTING_STYLE_JAVA7 = `public static void main(String args[]) { 
 List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

 Collections.sort(names, new Comparator<String>() {
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
 });
}`;

const SORTING_STYLE_JAVA8 = `public static void main(String args[]) { 
 List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
 names.sort((a, b) -> a.compareTo(b));
}`;

const FILTER_STREAM_JAVA8 = `public static void main(String args[]) { 
 List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
 List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
}`;

const INBUILT_FI_JAVA8 = `public static void main(String args[]) { 
 Predicate<String> isLongWord = word -> word.length() > 5;
 System.out.println(isLongWord.test("Lambda"));  // Output: true
}`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example of Lambda Expressions</b></h2></div>
    <div className="mtop15p">Let’s explore how lambdas make code cleaner and more expressive.</div>
    
    <div className="mtop15p"><h4 className="blog-head"><b>Example #1: Sorting a List</b></h4></div>
    <div className="mtop5p padLeft5p"><h5 className="blog-head"><b>Before (Java 7 style):</b></h5></div>
    <div className="mtop5p"><Highlight content={SORTING_STYLE_JAVA7} lang="java" /></div>
    <div className="mtop5p padLeft5p"><h5 className="blog-head"><b>After (Java 8 with Lambda):</b></h5></div>
    <div className="mtop5p"><Highlight content={SORTING_STYLE_JAVA8} lang="java" /></div>


    <div className="mtop15p"><h4 className="blog-head"><b>Example #2: Filtering with Stream API</b></h4></div>
    <div className="mtop5p"><Highlight content={FILTER_STREAM_JAVA8} lang="java" /></div>

    <div className="mtop15p"><h4 className="blog-head"><b>Example #3: Using Built-in Functional Interfaces</b></h4></div>
    <div className="mtop5p"><Highlight content={INBUILT_FI_JAVA8} lang="java" /></div>

 </div>);
};

export default Example;