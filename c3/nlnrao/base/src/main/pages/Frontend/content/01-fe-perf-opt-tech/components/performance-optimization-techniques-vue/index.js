import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const V_ONCE_DIRECTIVE = `<h1 v-once>This will never change</h1>`;

const DYNAMIC_IMPORTS = `const UserProfile = () => import('./components/UserProfile.vue');`;

const KEEP_ALIVE_DYNAMIC = `<keep-alive>
  <component :is="view"></component>
</keep-alive>`;

const VuePerformanceOptimizationTechniques = () =>{
 return (<div className="lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>5. Vue Performance Optimization Techniques</b></h2></div>
    <div className="mtop15p">
         <OrderList data={[(<div>
            <div><h4><b>Vue’s <code><b>v-once</b></code> Directive</b></h4></div>
            <div>Render static content only once.</div>
            <div className="mtop5p">
               <Highlight content={V_ONCE_DIRECTIVE} lang="html" /> 
            </div>
         </div>),
         (<div>
            <div><h4><b>Computed Properties over Methods</b></h4></div>
            <div>Computed properties cache results and are more efficient than methods in templates.</div>
         </div>),
         (<div className="mtop15p">
            <div><h4><b>Dynamic Imports</b></h4></div>
            <div>Split components using dynamic imports with Vue Router.</div>
            <div className="mtop5p">
               <Highlight content={DYNAMIC_IMPORTS} lang="javascript" /> 
            </div>
         </div>),
         (<div className="mtop15p">
            <div><h4><b>Keep-Alive for Dynamic Components</b></h4></div>
            <div>Cache components during switching.</div>
            <div className="mtop5p">
               <Highlight content={KEEP_ALIVE_DYNAMIC} lang="html" /> 
            </div>
         </div>),
         (<div className="mtop15p">
            <div><h4><b>Virtual Scrolling</b></h4></div>
            <div>Use <code><b>vue-virtual-scroll-list</b></code> for large datasets.</div>
         </div>),
         (<div className="mtop15p">
            <div><h4><b>Avoid Over-Watching</b></h4></div>
            <div>Minimize watchers as they increase CPU usage.</div>
         </div>),
         (<div className="mtop15p">
            <div><h4><b>Production Tips</b></h4></div>
            <div>Use <code><b>vue-cli-service build --mode production</b></code> and enable tree shaking.</div>
         </div>)]} />
    </div>
 </div>);
};

export default VuePerformanceOptimizationTechniques;