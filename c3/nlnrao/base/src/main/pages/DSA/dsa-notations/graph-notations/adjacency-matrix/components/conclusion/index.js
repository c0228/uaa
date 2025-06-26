import React from "react";
import { Icon, Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 const DisplayIcon = ({ status }) => <Icon type="FontAwesome" name={(status==='Y'?'fa-check-circle':'fa-times-circle')} color={(status==='Y'?'green':'red')} size={16} /> 
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion: When to Use Adjacency Matrix?</b></h2></div>
    <div className="mtop15p">
      <SimpleTable header={["Feature","Adjacency Matrix"]} 
        columns={[
            ["Lookup Time", (<div>O(1) <DisplayIcon status="Y" /></div>)],
            ["Space Complexity",(<div>O(V<sup>2</sup>) <DisplayIcon /></div>)],
            ["Ideal for Dense Graphs",(<div>Yes <DisplayIcon status="Y" /></div>)],
            ["Easy to Implement",(<div>Yes <DisplayIcon status="Y" /></div>)],
            ["Inefficient for Sparse Graphs",(<div>Yes <DisplayIcon /></div>)]
          ]} />
    </div>
    <div className="mtop15p">The <b>Adjacency Matrix</b> is a <b>clean and quick-access</b> way to represent graphs. While it may consume more 
    space for <b>sparse graphs</b>, it's still a favorite when performance is critical, and graph size is small or dense.</div>
    <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
         Mastering adjacency matrix gives you a deeper understanding of how <b>connections</b> are stored, explored, and utilized in computational graph theory.
      </Card>
    </div>
 </div>);
};

export default Conclusion;