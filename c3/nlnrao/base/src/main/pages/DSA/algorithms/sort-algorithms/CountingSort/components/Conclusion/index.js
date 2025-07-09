import React from "react";
import { Card, Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Summary</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Feature","Details"]} 
                columns={[
                    [(<div><b>Type</b></div>),(<div>Non-comparison sort</div>)],
                    [(<div><b>Time Complexity</b></div>),(<div><code><b>O(n + k)</b></code></div>)],
                    [(<div><b>Space Complexity</b></div>),(<div><code><b>O(n + k)</b></code></div>)],
                    [(<div><b>Stable</b></div>),(<div><Icon type="FontAwesome" name="fa-check-circle" size={14} color="green" /> Yes</div>)],
                    [(<div><b>In-place</b></div>),(<div><Icon type="FontAwesome" name="fa-times-circle" size={14} color="red" /> No</div>)],
                    [(<div><b>Best Use Case</b></div>),(<div>Small-range integers</div>)],
                ]} />
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">Counting Sort is a powerful algorithm when applied in the right context. With a linear time complexity 
        and stable nature, it shines in sorting numerical data where the range is known and small. However, due to its space usage 
        and lack of adaptability, it's not a one-size-fits-all solution.</div>
    <div className="mtop15p mbot15p">
        <Card padding={15} backgroundColor="#f1f1f1">
            <Icon type="FontAwesome" name="fa-lightbulb-o" color="#d38c09" size={18} /> Use Counting Sort as a <b>tool in your 
            sorting arsenal</b> — perfectly efficient for the right input, but not always the answer.
        </Card>
    </div>
 </div>);
};

export default Conclusion;