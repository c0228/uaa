import React from "react";
import { Tab, Highlight } from "e-ui-react";

const HLL_EXAMPLE_MAVEN = `<dependency>
  <groupId>com.clearspring.analytics</groupId>
  <artifactId>stream</artifactId>
  <version>2.9.6</version>
</dependency>
`;

const HLL_EXAMPLE_JAVA = `import com.clearspring.analytics.stream.cardinality.HyperLogLog;

public class HyperLogLogExample {
    public static void main(String[] args) throws Exception {
        HyperLogLog hll = new HyperLogLog(0.01);  // 1% standard error

        hll.offer("apple");
        hll.offer("banana");
        hll.offer("apple");  // duplicate

        System.out.println("Estimated unique count: " + hll.cardinality());  // Output: 2
    }
}`;

const HLL_EXAMPLE_JS = `const HyperLogLog = require('hyperloglog');

const hll = HyperLogLog(0.01); // 1% error

hll.add("apple");
hll.add("banana");
hll.add("apple"); // duplicate

console.log("Estimated unique count:", hll.count()); // Output: 2`;

const HLL_EXAMPLE_PYTHON = `import hyperloglog

hll = hyperloglog.HyperLogLog(0.01)  # 1% standard error

hll.add("apple")
hll.add("banana")
hll.add("apple")  # duplicate

print(f"Estimated unique count: {len(hll)}")  # Output: 2`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div><b>Add Maven Dependency:</b></div>
      <div className="mtop5p"><Highlight content={HLL_EXAMPLE_MAVEN} lang="html" /></div>
      <div className="mtop5p"><b>Code:</b></div>
      <div className="mtop5p"><Highlight content={HLL_EXAMPLE_JAVA} lang="java" /></div>
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div><b>Install using npm:</b></div>
      <div className="mtop5p"><Highlight content={`npm install hyperloglog`} lang="javascript" /></div>
      <div className="mtop5p"><b>Code:</b></div>
      <Highlight content={HLL_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div><b>Install using pip:</b></div>
      <div className="mtop5p"><Highlight content={`pip install HyperLogLog`} lang="html" /></div>
      <div className="mtop5p"><b>Code:</b></div>
      <Highlight content={HLL_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Implementations</b></h2></div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;