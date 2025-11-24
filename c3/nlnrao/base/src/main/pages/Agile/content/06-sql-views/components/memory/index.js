import React from "react";
import { Icon, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const AVNT_EXAMPLE_SQL = `SELECT a.x, b.y, c.z, ...
JOIN 5 tables...`;

const Memory = () =>{
 const IconType = ({ type }) =><Icon type="FontAwesome" name={type==='Y'?'fa-check-circle':'fa-times-circle'} color={type?'green':'red'} size={18} />
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Memory and Storage</b></h2></div>
   <div>
    <ul>
        <li className="mtop5p">A <b>normal SQL View</b> is not a table. It doesn’t store rows.</li>
        <li className="mtop5p">It stores only the <b>SQL query</b> that defines it.</li>
        <li className="mtop5p">When you query the view, the database dynamically runs the underlying SELECT query.</li>
        <li className="mtop5p">So no duplication of data happens.</li>
    </ul>
   </div>
   <div className="mtop5p">Some databases (Oracle, PostgreSQL, MySQL) may internally create metadata structures for 
    caching and optimization, but they are tiny, nothing like table storage.</div>
    <div className="mtop5p"><h5><b>Exception:</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">
                <div><b>Materialized Views</b></div>
                <div>These <i><u>do take</u></i> storage because they store actual data. But this is not a normal SQL view.</div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Advantages of SQL Views</b></h2></div>
    <div className="padLeft5p">
        <div className="mtop5p">
            <div><h4 className="blog-head"><b>1. Security Shield (Hide Sensitive Data)</b></h4></div>
            <div className="padLeft5p">
                <div>You can expose only selected columns to users.</div>
                <div><b>Example:</b></div>
                <div>Salary column hidden from HR team - peace maintained.</div>
            </div>
        </div>
        <div className="mtop5p">
            <div><h4 className="blog-head"><b>2. Reduces Repetition (Reusability)</b></h4></div>
            <div className="padLeft5p">
                <div>Write a complex SELECT query once - reuse everywhere.</div>
                <div>No more:</div>
                <div><Highlight content={AVNT_EXAMPLE_SQL} lang="sql" /></div>
                <div className="padLeft5p">Your code stays clean.</div>
            </div>
        </div>
        <div className="mtop5p">
            <div><h4 className="blog-head"><b>3. Logical Data Abstraction</b></h4></div>
            <div  className="padLeft5p">Your app sees a simple view even if your database is complex under the hood.</div>
        </div>
        <div className="mtop5p">
            <div><h4 className="blog-head"><b>4. Better Maintainability</b></h4></div>
            <div  className="padLeft5p">If your schema changes, you update only the view, not 20 different application files.</div>
        </div>
        <div className="mtop5p">
            <div><h4 className="blog-head"><b>5. Performance Boost (Sometimes)</b></h4></div>
            <div className="padLeft5p">
                <ul>
                    <li className="mtop5p">Queries often become faster with views because DB optimizes them.</li>
                    <li className="mtop5p">If indexed well, views can massively simplify multi-table joins.</li>
                </ul>
            </div>
            <div className="padLeft5p">(Though performance benefits are situational — more on that below.)</div>
        </div>
        <div className="mtop5p">
            <div><h4 className="blog-head"><b>Easier Analytics and Reporting</b></h4></div>
            <div  className="padLeft5p">Analysts don’t have to learn the entire database structure — they just query the view.</div>
        </div>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Limitations of SQL Views</b></h2></div>
    <div className="padLeft5p">
        <div>Nothing is perfect — not even SQL Views.</div>
        <div className="mtop15p padLeft5p">
            <div><h5><b>1. Views do NOT store data</b></h5></div>
            <div className="padLeft15p">
                <div>So every time you query a view - database must execute its SELECT query.</div>
                <div>If that query is heavy or joins multiple big tables - performance can slow down.</div>
            </div>
        </div>
        <div className="mtop15p padLeft5p">
            <div><h5><b>2. Some Views Are NOT Updatable</b></h5></div>
            <div className="padLeft15p">
                <div>You cannot do <code><b>INSERT</b></code>, <code><b>UPDATE</b></code>, <code><b>DELETE</b></code> on a view when:</div>
                <div>
                    <ul>
                        <li className="mtop5p">It has joins</li>
                        <li className="mtop5p">It has GROUP BY</li>
                        <li className="mtop5p">It has aggregations (SUM, AVG…)</li>
                        <li className="mtop5p">It has DISTINCT</li>
                        <li className="mtop5p">It has UNION</li>
                    </ul>
                </div>
                <div>So it becomes read-only.</div>
            </div>
        </div>
        <div className="mtop15p padLeft5p">
            <div><h5><b>3. Performance Issues in Large Systems</b></h5></div>
            <div className="padLeft15p">
                <div>If:</div>
                <div>
                    <ul>
                        <li className="mtop5p">The view includes many tables,</li>
                        <li className="mtop5p">The query is complex,</li>
                        <li className="mtop5p">It is called many times per second,</li>
                    </ul>
                </div>
                <div>the database may struggle because it has to re-run everything each time.</div>
            </div>
        </div>
        <div className="mtop15p padLeft5p">
            <div><h5><b>4. Debugging Can Become Confusing</b></h5></div>
            <div className="padLeft15p">
                <div>View inside a view inside another view…</div>
                <div>Developers end up saying: "How this Query is coming from?"</div>
            </div>
        </div>
        <div className="mtop15p padLeft5p">
            <div><h5><b>5. Overuse = Messy Architecture</b></h5></div>
            <div className="padLeft15p">Views should simplify your system, not multiply unnecessarily.</div>
        </div>
        <div className="mtop15p padLeft5p">
            <div><h5><b>6. Limited Parameterization</b></h5></div>
            <div className="padLeft15p">
                <div>Views cannot accept arguments.</div>
                <div>You can’t write:</div>
                <div><Highlight content={`SELECT * FROM employee_basic WHERE department = @dep`} lang="sql" /></div>
                <div>You must filter after selecting from the view.</div>
            </div>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Summary Table</b></h2></div>
    <div className="mtop5p">
        <SimpleTable header={["Feature", "Normal SQL View", "Materialized View"]} 
                columns={[
                    [(<div><b>Stores data?</b></div>), (<div><IconType /> No</div>), (<div><IconType type="Y" /> Yes</div>)],
                    [(<div><b>Takes space?</b></div>), (<div><IconType /> Very minimal</div>), (<div><IconType type="Y" /> Yes (like a table)</div>)],
                    [(<div><b>Faster performance</b></div>), (<div><IconType /> Usually no</div>), (<div><IconType type="Y" /> Yes</div>)],
                    [(<div><b>Always real-time data</b></div>), (<div><IconType type="Y" /> Yes</div>), (<div><IconType /> Needs refresh</div>)],
                    [(<div><b>Can be updatable</b></div>), (<div><IconType type="Y" /> Sometimes</div>), (<div><IconType /> Rarely</div>)]
				]} />
    </div>
 </div>);
};

export default Memory;