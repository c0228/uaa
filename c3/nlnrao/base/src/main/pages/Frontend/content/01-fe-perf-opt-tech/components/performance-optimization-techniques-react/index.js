import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const Memoization = `const MemoizedComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});
`;

const ReactLazy = `const OtherComponent = React.lazy(() => import('./OtherComponent'));`;

const ReactPerformanceOptimizationTechniques = () =>{
 return (<div className="lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>3. React Performance Optimization Techniques</b></h2></div>
    <div className="mtop15p">
        <OrderList data={[(<div>
            <div><h4><b>Memoization</b></h4></div>
            <div>Use <code><b>React.memo</b></code>, <code><b>useMemo</b></code>, and <code><b>useCallback</b></code> 
            to prevent unnecessary re-renders.</div>
            <div className="mtop5p"><Highlight content={Memoization} lang="javascript" /></div>
        </div>),(<div>
            <div><h4><b>Code Splitting with React.lazy</b></h4></div>
            <div>Load components asynchronously:</div>
            <div className="mtop5p"><Highlight content={ReactLazy} lang="javascript" /></div>
        </div>),
        (<div>
            <div><h4><b>Virtualization</b></h4></div>
            <div>Use libraries like <code><b>react-window</b></code> or 
                <code><b>react-virtualized</b></code> for large lists.</div>
        </div>),
        (<div className="mtop15p">
            <div><h4><b>Avoid Anonymous Functions in JSX</b></h4></div>
            <div>Every render creates a new function. Define handlers outside JSX.</div>
        </div>),
        (<div className="mtop15p">
            <div><h4><b>Optimize Context Usage</b></h4></div>
            <div>Avoid deeply nested context providers. Too many re-renders!</div>
        </div>),
        (<div className="mtop15p">
            <div><h4><b>PureComponent</b></h4></div>
            <div>Use <code><b>PureComponent</b></code> to skip rendering if props/state don’t change.</div>
        </div>),
        (<div className="mtop15p">
            <div><h4><b>Recoil, Zustand over Redux (for small apps)</b></h4></div>
            <div>Use lighter state management for improved speed.</div>
        </div>)]} />
    </div>
 </div>);
};

export default ReactPerformanceOptimizationTechniques;