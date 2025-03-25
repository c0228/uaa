import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const SWITCH_JAVA13_EXPRESSIONS = `int number = 2;
String result = switch (number) {
    case 1 -> "One";
    case 2 -> {
        yield "Two";
    }
    default -> "Unknown";
};
System.out.println(result);`;

const TEXTBLOCK_JAVA13_BEFORE = `String json = "{\n" +
              "  \"name\": \"John\",\n" +
              "  \"age\": 25\n" +
              "}";`;

const TEXTBLOCK_JAVA13_AFTER = `String json = """
    {
      "name": "John",
      "age": 25
    }
    """;`;

const Java13 = () =>{
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 13 (September, 2019):</b></h4></div>
    
    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Switch Expressions (Second Preview)" />
        <OrderList data={[(<div className="mtop5p">Refinement of the switch expression introduced in Java 12.</div>),
            (<div className="mtop5p">
                <div>Now, <code><b>yield</b></code> is used to return values instead of <code><b>break</b></code>.</div>
                <Highlight content={SWITCH_JAVA13_EXPRESSIONS} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">More readable and maintainable.</li>
                        <li className="mtop5p">Eliminates fall-through bugs.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Text Blocks (Preview)" />
        <OrderList data={[(<div className="mtop5p">Allows multi-line strings without using escape sequences.</div>),
            (<div className="mtop5p">
                <div>Makes code involving JSON, HTML, and SQL more readable.</div>
                <div className="padLeft5p"><b>Example (Before Java 13):</b></div>
                <Highlight content={TEXTBLOCK_JAVA13_BEFORE} lang="java" />
                <div className="padLeft5p"><b>Example (From Java 13 – Using Text Blocks):</b></div>
                <Highlight content={TEXTBLOCK_JAVA13_AFTER} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">No need for <code><b>+</b></code> for concatenation.</li>
                        <li className="mtop5p">Preserves formatting.</li>
                        <li className="mtop5p">Improves readability.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Dynamic App Class-Data Sharing (CDS)" />
        <OrderList data={[(<div className="mtop5p">Enhances Class Data Sharing (CDS) by dynamically archiving 
            classes at runtime.</div>),
            (<div className="mtop5p">Reduces startup time and memory usage.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="ZGC Improvements (Memory Reclamation)" />
        <OrderList data={[(<div className="mtop5p">Z Garbage Collector (ZGC) can now return unused memory 
            back to the OS.</div>),
            (<div className="mtop5p">Reduces memory footprint for applications running on cloud environments.</div>)]} />
    </div>


    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Reimplemented Legacy Socket API" />
        <OrderList data={[(<div className="mtop5p">The old socket implementation has been replaced with a modern, 
            maintainable version.</div>),
            (<div className="mtop5p">Results in better performance and maintainability.</div>)]} />
    </div>
 </div>);
};

export default Java13;