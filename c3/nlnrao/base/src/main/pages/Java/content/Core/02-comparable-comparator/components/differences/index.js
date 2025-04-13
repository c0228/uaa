import React from "react";

const Differences = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>When to Use Each</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li className="mtop5p">Use <code><b>Comparable</b></code>: When your class has a natural order, 
            and you want to define it within the class itself.​</li>
            <li className="mtop5p">Use <code><b>Comparator</b></code>: When you need to sort objects in different 
            ways or when you cannot modify the class to implement <code><b>Comparable</b></code>.</li>
        </ul>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Key Differences</b></h2></div>
    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr style={{ backgroundColor:'#ddd' }}>
                    <td><b>Feature</b></td>
                    <td><b>Comparable</b></td>
                    <td><b>Comparator</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Package</b></td>
                    <td><code><b>java.lang</b></code></td>
                    <td><code><b>java.util</b></code></td>
                </tr>
                <tr>
                    <td><b>Method Name</b></td>
                    <td><code><b>compareTo(T o)</b></code></td>
                    <td><code><b>compare(T o1, T o2)</b></code></td>
                </tr>
                <tr>
                    <td><b>Implemented By</b></td>
                    <td>The class itself</td>
                    <td>Separate class or anonymous class/lambda</td>
                </tr>
                <tr>
                    <td><b>Sorting Order</b></td>
                    <td>Defines the <b>natural ordering</b></td>
                    <td>Defines <b>custom</b> or <b>multiple orderings</b></td>
                </tr>
                <tr>
                    <td><b>Modification of Class</b></td>
                    <td>Requires modifying the class to implement it</td>
                    <td>Does not require modifying the class</td>
                </tr>
                <tr>
                    <td><b>Number of Sorting Sequences</b></td>
                    <td>Only <b>one</b> (natural ordering)</td>
                    <td>Can define <b>multiple</b> sort logics</td>
                </tr>
                <tr>
                    <td><b>Usage Example</b></td>
                    <td><code><b>Collections.sort(list)</b></code></td>
                    <td><code><b>Collections.sort(list, comparator)</b></code></td>
                </tr>
                <tr>
                    <td><b>Flexibility</b></td>
                    <td>Less flexible, tied to the object’s class</td>
                    <td>More flexible, can be reused in multiple contexts</td>
                </tr>
                <tr>
                    <td><b>Use Case</b></td>
                    <td>When a single default sort order is needed</td>
                    <td>When various sorting options are needed</td>
                </tr>
                <tr>
                    <td><b>Java 8+ Support</b></td>
                    <td>No specific enhancements</td>
                    <td>Supports lambdas and method references</td>
                </tr>
            </tbody>
        </table>
    </div>
 </div>);
};

export default Differences;