import React from "react";
import { Highlight } from "e-ui-react";

const JSONArray = `[
  { "id": 3, "name": "Alice", "age": 25 },
  { "id": 1, "name": "Bob", "age": 30 },
  { "id": 2, "name": "Charlie", "age": 22 }
]`;

const JSONArray_Sort_Asc =  `const data = [
  { id: 3, name: "Alice", age: 25 },
  { id: 1, name: "Bob", age: 30 },
  { id: 2, name: "Charlie", age: 22 }
];

data.sort((a, b) => a.id - b.id);
console.log(data);`;

const JSONArray_Sort_Desc = `data.sort((a, b) => b.id - a.id);
console.log(data);`;

const JSONArray_PropSort_Asc = `data.sort((a, b) => a.name.localeCompare(b.name));
console.log(data);`;

const JSONArray_PropSort_Desc = `data.sort((a, b) => b.name.localeCompare(a.name));
console.log(data);`;

const JSONArray_toSorted = `const sortedData = data.toSorted((a, b) => a.age - b.age);
console.log(sortedData);`;

const JSONArray_SortMultipleCriteria = `data.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name));
console.log(data);`;

const Introduction = () =>{
 return (<div className="lh28p fs16p">
  <div className="mtop15p"><i>Sorting JSON arrays efficiently is crucial for handling and organizing data 
    dynamically in web applications. This blog explores various techniques for sorting JSON array elements 
    in both ascending and descending orders using JavaScript, covering different sorting methods for optimal 
    performance.</i></div>

  <div className="mtop15p"><h2 className="blog-head"><b>Understanding JSON Arrays</b></h2></div>
  <div className="padLeft15p">
    <div className="mtop15p">
        <div>A JSON (JavaScript Object Notation) array consists of multiple objects, often containing key-value 
            pairs. Sorting is generally performed based on specific key values within these objects.</div>
        <div className="mtop15p">
            <div><b>Example JSON Array</b></div>
            <div className="mtop15p"><Highlight content={JSONArray} lang="javascript" /></div>
        </div>
    </div>
  </div>

  <div className="mtop15p"><h2 className="blog-head"><b>Sorting JSON Array Using <code>sort()</code></b></h2></div>
  <div className="padLeft15p">
    <div className="mtop15p">
    JavaScript provides the <code><b>sort()</b></code> method, which sorts elements in an array. By default, 
    it sorts as strings, but for numeric sorting, a compare function is needed.
    </div>
    <div className="mtop15p"><b>Sorting in Ascending Order</b></div>
    <div className="mtop15p">To sort based on <b>id</b> in ascending order:</div>
    <div className="mtop15p"><Highlight content={JSONArray_Sort_Asc} lang="javascript" /></div>
    <div className="mtop15p"><b>Sorting in Descending Order</b></div>
    <div className="mtop15p">To sort based on <b>id</b> in descending order:</div>
    <div className="mtop15p"><Highlight content={JSONArray_Sort_Desc} lang="javascript" /></div>
  </div>

  <div className="mtop15p"><h2 className="blog-head"><b>Sorting Based on String Properties</b></h2></div>
  <div className="padLeft15p">
    <div className="mtop15p">Sorting based on the <code><b>name</b></code> field alphabetically:  <br/>For Ascending Order:</div>
    <div className="mtop15p"><Highlight content={JSONArray_PropSort_Asc} lang="javascript" /></div>
    <div className="mtop15p">For descending Order:</div>
    <div className="mtop15p"><Highlight content={JSONArray_PropSort_Desc} lang="javascript" /></div>
  </div>

  <div className="mtop15p"><h2 className="blog-head"><b>Sorting Using <code>toSorted()</code> (ES2023)</b></h2></div>
  <div className="padLeft15p">
    <div className="mtop15p">ES2023 introduced <code><b>toSorted()</b></code>, which returns a new sorted array without 
    modifying the original:</div>
    <div className="mtop15p"><Highlight content={JSONArray_toSorted} lang="javascript" /></div>
  </div>

  <div className="mtop15p"><h2 className="blog-head"><b>Sorting Multiple Criteria</b></h2></div>
  <div className="padLeft15p">
    <div className="mtop15p">Sorting by <code><b>age</b></code>, and if ages are equal, by <code><b>name</b></code>:</div>
    <div className="mtop15p"><Highlight content={JSONArray_SortMultipleCriteria} lang="javascript" /></div>
  </div>

  <div className="mtop15p"><h2 className="blog-head"><b>Performance Considerations</b></h2></div>
  <div className="padLeft15p">
    <div className="mtop15p">Sorting has a time complexity of <code><b>O(n log n)</b></code>. For large datasets, ensure 
    efficient sorting by using optimized comparison functions and avoiding unnecessary computations.</div>
  </div>

  <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
  <div className="padLeft15p mbot15p">
    <div className="mtop15p">Sorting JSON arrays is essential for structured data representation. JavaScript provides 
        multiple ways to sort objects based on different criteria efficiently. Leveraging <code><b>sort()</b></code>, 
        <code><b>localeCompare()</b></code>, and <code><b>toSorted()</b></code>, developers can dynamically arrange 
        JSON data for optimal presentation.<br/><br/>
        By mastering these techniques, you can improve the efficiency and usability of your applications handling 
        JSON data.</div>
  </div>

  </div>);
};

export default Introduction;