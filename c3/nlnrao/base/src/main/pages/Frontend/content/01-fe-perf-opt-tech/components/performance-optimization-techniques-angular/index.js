import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const CHANGE_DETECTION_STRATEGY = `@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})`;

const TRACKBY_IN = `<div *ngFor="let item of items; trackBy: trackByFn"></div>`;

const LAZY_LOADING_MODULES = `{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }`;

const AngularPerformanceOptimizationTechniques = () =>{
 return (<div className="lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>4. Angular Performance Optimization Techniques</b></h2></div>
    <div className="mtop15p">
        <OrderList data={[(<div>
            <div><h4><b>Ahead-of-Time (AOT) Compilation</b></h4></div>
            <div>Compile during build time for faster rendering.</div>
        </div>),(<div className="mtop15p">
            <div><h4><b>Change Detection Strategy</b></h4></div>
            <div>Use <code><b>ChangeDetectionStrategy.OnPush</b></code> for better performance.</div>
            <div className="mtop5p">
                <Highlight content={CHANGE_DETECTION_STRATEGY} lang="javascript" />
            </div>
        </div>),
        (<div>
            <div><h4><b>TrackBy in *ngFor</b></h4></div>
            <div>Helps Angular identify list items for efficient re-rendering.</div>
            <div className="mtop5p">
                <Highlight content={TRACKBY_IN} lang="html" />
            </div>
        </div>),(<div>
            <div><h4><b>Lazy Loading Modules</b></h4></div>
            <div>Use Angular modules and route-level lazy loading.</div>
            <div className="mtop5p">
                <Highlight content={LAZY_LOADING_MODULES} lang="html" />
            </div>
        </div>),(<div>
            <div><h4><b>Detach Change Detector</b></h4></div>
            <div>Manually control change detection for high-performance components.</div>
        </div>),
        (<div className="mtop15p">
            <div><h4><b>Avoid Memory Leaks with Subscriptions</b></h4></div>
            <div>Use <code><b>takeUntil</b></code> or <code><b>async</b></code> pipe to manage subscriptions.</div>
        </div>),
        (<div className="mtop15p">
            <div><h4><b>Reduce Bundle Size</b></h4></div>
            <div>Use ES modules, custom Angular builds, and remove unused dependencies.</div>
        </div>)]} />
    </div>
 </div>);
};

export default AngularPerformanceOptimizationTechniques;