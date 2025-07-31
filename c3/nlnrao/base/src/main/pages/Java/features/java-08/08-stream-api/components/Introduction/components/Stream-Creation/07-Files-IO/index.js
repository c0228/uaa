import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const FILES_EXAMPLE_BASIC = `import java.io.IOException;
import java.nio.file.*;
import java.util.stream.Stream;

public class FileStreamExample {
    public static void main(String[] args) {
        Path path = Paths.get("data.txt");

        try (Stream<String> lines = Files.lines(path)) {
            lines.forEach(System.out::println);  // Print each line in file
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`;

const FILES_OUTPUT_BASIC = `Apple
Banana
Cherry`;

const FILES_FILTER_LINES = `try (Stream<String> lines = Files.lines(Paths.get("data.txt"))) {
    lines.filter(line -> line.contains("error"))
         .forEach(System.out::println);
} catch (IOException e) {
    e.printStackTrace();
}`;

const FILES_WITH_CHARSET = `import java.nio.charset.StandardCharsets;

try (Stream<String> lines = Files.lines(Paths.get("data.txt"), StandardCharsets.UTF_8)) {
    lines.forEach(System.out::println);
}`;

const FILES_COUNT_LINES = `long lineCount = 0;
try (Stream<String> lines = Files.lines(Paths.get("data.txt"))) {
    lineCount = lines.count();
}
System.out.println("Total lines: " + lineCount);`;

const FilesIO = () =>{
 return (<div className="mtop5p">
    <div className="mtop5p">Java 8 introduced the powerful <b>Stream API</b>, and one useful method to create a Stream is 
    using <code><b>Files.lines(Path)</b></code> — especially when working with files (I/O). This method creates 
    a <b>lazy-loaded Stream of lines</b> from a file.</div>
    <div className="mtop15p"><h5 className="blog-head"><b>Method Signature</b></h5></div>
    <div className="mtop5p"><Highlight content={`static Stream<String> lines(Path path) throws IOException`} lang="java" /></div>
    <div className="mtop5p">Also:</div>
    <div className="mtop5p"><Highlight content={`static Stream<String> lines(Path path, Charset cs) throws IOException`} lang="java" /></div>
    <div className="mtop5p">These methods are available in the <code><b>java.nio.file.Files</b></code> class.</div>
    <div className="mtop15p">
        <SimpleTable header={["Feature", "Detail"]} 
                columns={[  
                    ["Input", (<div><code><b>Path</b></code> object representing the file</div>)],
                    ["Output", (<div>A <code><b>Stream&lt;String&gt;</b></code> where each element is a <b>line from the file</b></div>)],
                    ["Nature", (<div><b>Lazy-loaded</b>, meaning lines are read as the Stream is consumed</div>)],
                    ["Resource Handling", (<div>The stream must be <b>closed</b> explicitly or used with <b>try-with-resources</b></div>)],
                    ["Exception", (<div>Can throw <b>IOException</b></div>)],
                ]} />
    </div>
    <hr/>
    <div className="mtop15p"><h4 className="blog-head"><b>Examples:</b></h4></div>

    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Basic Example</b></h5></div>
    <div className="mtop5p"><Highlight content={FILES_EXAMPLE_BASIC} lang="java" /></div>
    <div className="mtop5p padLeft5p">If <code><b>data.txt</b></code> contains:</div>
    <div className="mtop5p"><Highlight content={FILES_OUTPUT_BASIC} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={FILES_OUTPUT_BASIC} lang="java" /></div>

    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Filtering File Lines Example</b></h5></div>
    <div className="mtop5p"><Highlight content={FILES_FILTER_LINES} lang="java" /></div>
    <div className="mtop5p">This will print only lines that contain the word <code><b>"error"</b></code>.</div>

    <div className="mtop5p"><h5 className="blog-head"><b>Example #3: Reading File with Custom Charset</b></h5></div>
    <div className="mtop5p"><Highlight content={FILES_WITH_CHARSET} lang="java" /></div>

    <div className="mtop5p"><h5 className="blog-head"><b>Example #4: Count lines in a file</b></h5></div>
    <div className="mtop5p"><Highlight content={FILES_COUNT_LINES} lang="java" /></div>
    
    <div className="mtop15p">
        <ul>
            <li>Internally, <code><b>Files.lines()</b></code> uses a <code><b>BufferedReader</b></code> and lazily reads line-by-line.</li>
            <li className="mtop5p">It supports very large files without loading the entire content into memory.</li>
        </ul>
    </div>
    <hr/>
    <div className="mtop15p"><h5 className="blog-head"><b>Notes:</b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Point", "Description"]} 
                columns={[
                    ["Closing the Stream", (<div>Always close the Stream using <code><b>try-with-resources</b></code> to avoid file leaks</div>)],
                    ["Large Files", (<div>Efficient for very large files due to lazy reading</div>)],
                    ["Charset Support", (<div>Can specify a character encoding (default is <code><b>UTF-8</b></code>)</div>)],
                    ["Exception", (<div>Be prepared to handle <code><b>IOException</b></code></div>)],
                ]} />
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Summary:</b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Feature", "Description"]} 
            columns={[
                ["Source Type", (<div><code><b>Path</b></code> (from <code><b>java.nio.file</b></code>)</div>)],
                ["Output", (<div><code><b>Stream&lt;String&gt;</b></code></div>)],
                ["Usage", (<div><code><b>Files.lines(Path)</b></code></div>)],
                ["Laziness", (<div>Lazy read (good for large files)</div>)],
                ["Must Close Stream", (<div>Yes – use try-with-resources</div>)],
                ["Exception", (<div><code><b>IOException</b></code></div>)],
            ]} />
    </div>
 </div>);
};

export default FilesIO;