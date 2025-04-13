import React from "react";
import { Highlight } from "e-ui-react";

const DataTypes = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>3. Python Variable Data Types</b></h2></div>
    <div className="mtop15p">Python comes with several built-in data types, and they can be grouped into categories:</div>

    <div className="mtop15p"><h4><b>Numeric Types</b></h4><hr/></div>
    <div className="mtop15p">
        <ul>
            <li className="mtop5p">
                <div><b>Integer values</b> (<code><b>int</b></code>) :</div>
                <div className="mtop5p">
                    <Highlight content={`x = 100`} lang="python" />
                </div>
            </li>
            <li className="mtop5p">
                <div><b>Decimal numbers</b> (<code><b>float</b></code>) :</div>
                <div className="mtop5p">
                    <Highlight content={`pi = 3.14`} lang="python" />
                </div>
            </li>
            <li className="mtop5p">
                <div><b>Complex numbers</b> (<code><b>complex</b></code>) :</div>
                <div className="mtop5p">
                    <Highlight content={`z = 2 + 3j`} lang="python" />
                </div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h4><b>Text Type</b></h4><hr/></div>
    <div className="mtop15p">
        <ul>
            <li className="mtop5p">
                <div><b>String values</b> (<code><b>str</b></code>) :</div>
                <div className="mtop5p">
                    <Highlight content={`message = "Hello, Python!"`} lang="python" />
                </div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h4><b>Boolean Type</b></h4><hr/></div>
    <div className="mtop15p">
        <ul>
            <li className="mtop5p">
                <div><b>Boolean values</b> (<code><b>bool</b></code>) : (True/False)</div>
                <div className="mtop5p">
                    <Highlight content={`is_active = True"`} lang="python" />
                </div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h4><b>Sequence Type</b></h4><hr/></div>
    <div className="mtop15p">
        <ul>
            <li className="mtop5p">
                <div><b>List values</b> (<code><b>list</b></code>) :</div>
                <div className="mtop5p">
                    <Highlight content={`[1, 2, 3]`} lang="python" />
                </div>
            </li>
            <li className="mtop5p">
                <div><b>Tuple values</b> (<code><b>tuple</b></code>) :</div>
                <div className="mtop5p">
                    <Highlight content={`(1, 2, 3)`} lang="python" />
                </div>
            </li>
            <li className="mtop5p">
                <div><b>Range values</b> (<code><b>range</b></code>) :</div>
                <div className="mtop5p">
                    <Highlight content={`range(10)`} lang="python" />
                </div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h4><b>Mapping Type</b></h4><hr/></div>
    <div className="mtop15p">
        <ul>
            <li className="mtop5p">
                <div><b>Dictionary values</b> (<code><b>dict</b></code>) :</div>
                <div className="mtop5p">
                    <Highlight content={`{'name': 'Alice', 'age': 30}`} lang="python" />
                </div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h4><b>Set Type</b></h4><hr/></div>
    <div className="mtop15p">
        <ul>
            <li className="mtop5p">
                <div><b>Set values</b> (<code><b>set</b></code>) :</div>
                <div className="mtop5p">
                    <Highlight content={`{1, 2, 3}`} lang="python" />
                </div>
            </li>
            <li className="mtop5p">
                <div><b>FrozenSet values</b> (<code><b>frozenset</b></code>) : (Immutable Set)</div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h4><b>Binary Type</b></h4><hr/></div>
    <div className="mtop15p">
        <ul>
            <li className="mtop5p"><code><b>bytes</b></code>, <code><b>bytearray</b></code>, <code><b>memoryview</b></code></li>
        </ul>
    </div>

    <div className="mtop15p"><h4><b>None Type</b></h4><hr/></div>
    <div className="mtop15p">
        <ul>
            <li className="mtop5p"><code><b>None</b></code> - Represents the absence of a value</li>
        </ul>
    </div>

 </div>);
};

export default DataTypes;