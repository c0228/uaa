import React from "react";
import { Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 const IconType = ({ type }) =><Icon type="FontAwesome" name={type==='Y'?'fa-check-circle':'fa-times-circle'} color={type?'green':'red'} size={18} />
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">Each format has its own purpose, strengths, and ideal environments.</div>
   <div className="mtop15p">
      <SimpleTable header={["Feature", "XML", "JSON", "TOON", "VSC"]} 
                columns={[
                    [(<div><b>Human Readable</b></div>), (<div>Medium</div>), (<div>High</div>), (<div>Very High</div>), (<div>High</div>)],
                    [(<div><b>Verbosity</b></div>), (<div>High</div>), (<div>Low</div>), (<div>Low</div>), (<div>Medium</div>)],
                    [(<div><b>Comments</b></div>), (<div><IconType type="Y" /></div>), (<div><IconType /></div>), (<div><IconType type="Y" /></div>), (<div><IconType type="Y" /></div>)],
                    [(<div><b>Schema/Validation</b></div>), (<div>Strong</div>), (<div>Weak</div>), (<div>Medium</div>), (<div>Strong</div>)],
                    [(<div><b>Best Use Case</b></div>), (<div>Legacy/Enterprise</div>), (<div>APIs & Apps</div>), (<div>Rules/Workflows</div>), (<div>Large modular systems</div>)],
                    [(<div><b>Versioning</b></div>), (<div>Optional</div>), (<div>No</div>), (<div>No</div>), (<div>In-Built</div>)]
				]} />
   </div>
   <div className="mtop15p"><b>In Short:</b></div>
   <div>
      <ul>
         <li className="mtop5p"><b>XML</b> is powerful but heavy — best for enterprise systems.</li>
         <li className="mtop5p"><b>JSON</b> is the king of simplicity — perfect for APIs and microservices.</li>
         <li className="mtop5p"><b>TOON</b> is flexible and expressive — ideal for rule engines and workflows.</li>
         <li className="mtop5p"><b>VSC</b> is future-proof and structured — the best choice for large, evolving platforms.</li>
      </ul>
   </div>
   <div>Each format exists because software keeps evolving.</div>
   <div>And depending on scale and complexity, the right format can save hours of debugging and months of maintenance.</div>
 </div>);
};

export default Conclusion;