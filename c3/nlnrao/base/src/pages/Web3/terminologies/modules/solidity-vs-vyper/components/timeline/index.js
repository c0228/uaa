import React from "react";
import SimpleTimeline from '@Components/simple-timeline/index.js';

const Timeline = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Timeline Evolution</b></h2></div>
    <div className="mtop15p">
          <SimpleTimeline data={[{ title:'Solidity Language', 
             desc:(<div>In 2014, Solidity was first introduced by the Ethereum project as a language for writing smart 
                contracts and in 2015, the first public version of Solidity was released</div>) },
             { title:'Vyper Language', 
                desc:(<div>In 2016, Vyper was initially conceived as a language focused on security and simplicity. 
                   The first version of Vyper was released in 2018.
                </div>) }]} />
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Why two languages?</b></h2></div>
 </div>);
};

export default Timeline;