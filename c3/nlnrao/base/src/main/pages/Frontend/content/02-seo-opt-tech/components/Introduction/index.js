import React from "react";
import { Icon, Accordian, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const URL_HIERARCHY_STRUCTURE = `example.com/
 └── /blog/
      └── /seo/
           └── /technical-seo-guide/
`;

const SEO_EXAMPLE_SITEMAP = `User-agent: *
Disallow: /admin/
Sitemap: https://example.com/sitemap.xml`;

const SEO_JSONLD_STRUCTURE = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "SEO Optimization Techniques for Developers",
  "author": {
    "@type": "Person",
    "name": "Nellutla LNRao"
  }
}
</script>`;

const MULTILING_EXAMPLE_HTML = `<link rel="alternate" href="https://example.com/fr/" hreflang="fr" />
<link rel="alternate" href="https://example.com/en/" hreflang="en" />`;

const Introduction = () =>{

const DisplayStatus = ({ status }) =>{
   return (<Icon type="FontAwesome" name={status==='Y'?"fa-check-circle":"fa-times-circle"} size={14} 
      color={status==='Y'?"green":"red"} />);
};


const SiteArchitecture = () =>{
   return (<div className="padLeft5p">
      <div><h5 className="blog-head"><b>a) Use Clean, Readable URLs</b></h5></div>
      <div className="mtop5p padLeft5p">
         <ul>
            <li><DisplayStatus status="Y"/> <code><b>example.com/blog/seo-optimization-techniques</b></code> <b>(Good Practice)</b> </li>
            <li><DisplayStatus /> <code><b>example.com/blog/article?id=seo-optimization-techniques</b></code> <b>(Bad Practice)</b></li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>b) Hierarchical Structure</b></h5></div>
      <div className="padLeft5p">
         <div className="mtop5p padLeft5p">Design logical folder hierarchies:</div>
         <div className="mtop5p"><Highlight content={URL_HIERARCHY_STRUCTURE} lang="python" /></div>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>c) Avoid Deep Nesting</b></h5></div>
      <div className="mtop5p padLeft5p">Avoid making users (and crawlers) go more than <b>3 levels deep</b>.</div>
   </div>);
};

const PageSpeedOptimize = () =>{
   return (<div>
      <div>Page speed is a <b>ranking factor</b> and crucial for user experience.</div>
   <div className="padLeft5p">
      <div className="mtop5p"><h5 className="blog-head"><b>a) Code Minification</b></h5></div>
      <div>
         <ul>
            <li className="mtop5p">Use tools like <code><b>Terser</b></code>, <code><b>UglifyJS</b></code>, <code><b>cssnano</b></code>, or <code><b>html-minifier</b></code>.</li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>b) Lazy Load Non-Critical Assets</b></h5></div>
      <div>
         <ul>
            <li className="mtop5p">
               <div className="padLeft5p">Lazy load images, videos, and offscreen components:</div>
               <div><Highlight content={`<img src="image.jpg" loading="lazy" alt="..." />`} lang="html" /></div>
            </li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>c) Efficient Caching</b></h5></div>
      <div>
         <ul>
            <li className="mtop5p">
               <div className="padLeft5p">Use HTTP cache headers like:</div>
               <div><Highlight content={`Cache-Control: max-age=31536000, immutable`} lang="python" /></div>
            </li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>d) Compress & Optimize Images</b></h5></div>
      <div>
         <ul>
            <li className="mtop5p">Use <code><b>WebP</b></code> or <code><b>AVIF</b></code> for modern image compression.</li>
            <li className="mtop5p"><b><u>Tools</u>:</b> <code><b>ImageMagick</b></code>, <code><b>Squoosh</b></code>, or <code><b>sharp</b></code> in Node.js.</li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>e) Use a CDN</b></h5></div>
      <div>
         <ul>
            <li><div>Distribute assets via <b>Content Delivery Networks</b> like <code><b>Cloudflare</b></code>, <code><b>AWS CloudFront</b></code> or <code><b>Netlify Edge</b></code>.</div></li>
         </ul>
      </div>
   </div>
   </div>);
};
const TechnicalSEO = () =>{
   return (<div>
      <div className="mtop5p"><h5 className="blog-head"><b>a) Meta Tags and Titles</b></h5></div>
      <div className="mtop5p">Use unique, descriptive:</div>
      <div>
         <ul>
            <li className="mtop5p"><code><b>&lt;title&gt;</b></code></li>
            <li className="mtop5p"><code><b>&lt;meta name="description" content="..."&gt;</b></code></li>
         </ul>
      </div>
      <div className="mtop5p">Automate dynamic metadata generation in React, Next.js, or Angular using respective 
      head management libraries.</div>
      <div className="mtop5p"><h5 className="blog-head"><b>b) Canonical Tags</b></h5></div>
      <div className="mtop5p">Avoid duplicate content issues:</div>
      <div className="mtop5p"><Highlight content={`<link rel="canonical" href="https://example.com/page-url/" />`} lang="html" /></div>
      <div className="mtop5p"><h5 className="blog-head"><b>c) Robots.txt & Sitemap.xml</b></h5></div>
      <div>
         <ul>
            <li className="mtop5p">Allow/Disallow bots appropriately.</li>
            <li className="mtop5p">Submit sitemaps to Google Search Console.</li>
         </ul>
      </div>
      <div className="mtop5p padLeft5p"><Highlight content={SEO_EXAMPLE_SITEMAP} lang="python" /></div>
      <div className="mtop5p"><h5 className="blog-head"><b>d) Structured Data with Schema.org</b></h5></div>
      <div className="padLeft5p">Implement <b>JSON-LD</b> for rich snippets:</div>
      <div className="mtop5p"><Highlight content={SEO_JSONLD_STRUCTURE} lang="html" /></div>
      <div className="mtop5p padLeft5p">Use types like:</div>
      <div>
         <ul>
            <li className="mtop5p"><code><b>Article</b></code> <code>BlogPosting</code></li>
            <li className="mtop5p"><code><b>Product</b></code> <code><b>FAQPage</b></code></li>
            <li className="mtop5p"><code><b>LocalBusiness</b></code> <code><b>Event</b></code></li>
         </ul>
      </div>
      <div className="mtop5p padLeft5p">Test with <a target="_blank" href="https://search.google.com/test/rich-results">Google’s Rich Results Test</a>.</div>
   </div>);
};

const MobileFirstDesign = () =>{
   return (<div>
      <div className="mtop5p"><h5 className="blog-head"><b>a) Responsive Layouts</b></h5></div>
      <div>
         <ul>
            <li className="mtop5p">Use CSS Grid/Flexbox with <code><b>media queries</b></code>.</li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>b) Touch-Friendly UI</b></h5></div>
      <div>
         <ul>
            <li className="mtop5p">Minimum tap target: 48px x 48px</li>
            <li className="mtop5p">Avoid hover-only elements on mobile</li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>c) Avoid Intrusive Interstitials</b></h5></div>
      <div>
         <ul>
            <li className="mtop5p">Avoid popups that block content on mobile devices (Google penalizes this).</li>
         </ul>
      </div>
   </div>);
};

const JavascriptSEO = () =>{
   return (<div>
      <div>Single Page Applications (SPAs) often confuse crawlers if not handled well.</div>
      <div className="mtop5p"><h5 className="blog-head"><b>a) Server-Side Rendering (SSR)</b></h5></div>
      <div className="mtop5p">Use SSR frameworks like:</div>
      <div>
         <ul>
            <li className="mtop5p"><b>Next.js (React)</b></li>
            <li className="mtop5p"><b>Nuxt.js (Vue)</b></li>
            <li className="mtop5p"><b>Scully (Angular)</b></li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>b) Pre-rendering</b></h5></div>
      <div className="mtop5p">For static sites, use tools like:</div>
      <div>
         <ul>
            <li className="mtop5p"><b>Prerender.io</b></li>
            <li className="mtop5p"><b>Rendertron</b></li>
            <li className="mtop5p"><b>Next.js Static Export</b></li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>c) Ensure Crawlable DOM</b></h5></div>
      <div className="mtop5p">Verify that your important content is visible in 
         the <b>initial HTML</b> or within <code><b>&lt;noscript&gt;</b></code> tags.</div>
   </div>);
};

const CoreWebVitalsOptimization = () =>{
   return (<div>
      <div>Focus on 3 key metrics:</div>
      <div>
         <SimpleTable header={["Metric", "Goal"]} 
                  columns={[
                        [(<div><b>LCP</b> (Largest Contentful Paint)</div>),"< 2.5s"],
                        [(<div><b>FID</b> (First Input Delay)</div>),"< 100ms"],
                        [(<div><b>CLS</b> (Cumulative Layout Shift)</div>),"< 0.1"]
                     ]} />
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>Tools:</b></h5></div>
      <div>
         <ul>
            <li className="mtop5p">Lighthouse</li>
            <li className="mtop5p">PageSpeed Insights</li>
            <li className="mtop5p">Chrome DevTools &gt; Performance Tab</li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>Fix Tips:</b></h5></div>
      <div>
         <ul>
            <li className="mtop5p">Delay third-party scripts</li>
            <li className="mtop5p">Reserve space for images and embeds</li>
            <li className="mtop5p">Use web workers where applicable</li>
         </ul>
      </div>
   </div>);
};

const InternalLinkingStrategy = () =>{
   return (<div>
      <div className="mtop5p"><h5 className="blog-head"><b>a) Semantic Anchor Tags</b></h5></div>
      <div className="mtop5p">Link contextually to other parts of your site using <code><b>&lt;a&gt;</b></code> with relevant text.</div>
      <div className="mtop5p"><h5 className="blog-head"><b>b) Avoid Broken Links</b></h5></div>
      <div className="mtop5p">Set up monitoring using tools like:</div>
      <div>
         <ul>
            <li className="mtop5p">Screaming Frog</li>
            <li className="mtop5p">Ahrefs Broken Link Checker</li>
         </ul>
      </div>
   </div>);
};

const MultilingualAndInternationalSEO = () =>{
   return (<div>
      <div className="mtop5p"><h5 className="blog-head"><b>Use <code>hreflang</code> Tags</b></h5></div>
      <div className="mtop5p padLeft5p">Specify language and region:</div>
      <div className="mtop5p">
         <Highlight content={MULTILING_EXAMPLE_HTML} lang="html" />
      </div>
   </div>);
};

const MonitoringAndAuditing = () =>{
   return (<div>
      <div className="mtop5p"><h5 className="blog-head"><b>a) Google Search Console</b></h5></div>
      <div>
         <ul>
            <li className="mtop5p">Track crawl issues, mobile usability, Core Web Vitals</li>
            <li className="mtop5p">Submit sitemap</li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>b) Google Analytics / GA4</b></h5></div>
      <div className="mtop5p">Measure bounce rate, engagement time, conversions.</div>
      <div className="mtop5p"><h5 className="blog-head"><b>c) Logging 404s and Redirects</b></h5></div>
      <div className="mtop5p">Log and fix broken pages or links using custom server or middleware handlers.</div>
   </div>);
};

const BonusDeveloperToolsForSEO = () =>{
   return (<div>
      <SimpleTable header={["Tool", "Purpose"]} 
        columns={[
            ["Lighthouse","Performance & SEO audit"],
            ["Screaming Frog","In-depth crawl audit"],
            ["Ahrefs/SEMrush","Backlink & keyword tracking"],
            ["RankMath/Yoast","On-page SEO for CMS"],
            ["Netlify/Cloudflare","CDN, edge delivery, headers"],
          ]} />
   </div>);
};

 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>In the modern digital landscape, <b>developers play a critical role</b> in ensuring websites are 
   optimized for search engines. While content writers and marketers focus on keyword strategies and backlinks, it's the 
   <b>developer’s code</b> that search engines actually crawl. If your site's performance, structure, and markup are not optimized, 
   even the best content may never reach the top.</i></div>
   <div className="mto1p5p"><i>This guide explores <b>practical SEO techniques</b> developers can implement to 
   maintain <b>top search rankings</b>.</i></div>

   <div className="mtop5p">
      <Accordian id="SEORules" 
       data={[{ id:"Item#01", title: (<div><b>1. Site Architecture & URL Structure</b></div>), component: <SiteArchitecture /> },
           { id:"Item#02", title: (<div><b>2. Page Speed Optimization</b></div>), component: <PageSpeedOptimize />  },
           { id:"Item#03", title: (<div><b>3. Technical SEO Best Practices</b></div>), component: <TechnicalSEO />  },
           { id:"Item#04", title: (<div><b>4. Mobile First Design</b></div>), component: <MobileFirstDesign />  },
           { id:"Item#05", title: (<div><b>5. Javascript SEO</b></div>), component: <JavascriptSEO />  },
           { id:"Item#06", title: (<div><b>6. Core Web Vitals Optimization</b></div>), component: <CoreWebVitalsOptimization />  },
           { id:"Item#07", title: (<div><b>7. Internal Linking Strategy</b></div>), component: <InternalLinkingStrategy />  },
           { id:"Item#08", title: (<div><b>8. Multilingual and International SEO (if applicable)</b></div>), component: <MultilingualAndInternationalSEO />  },
           { id:"Item#09", title: (<div><b>9. Monitoring & Auditing</b></div>), component: <MonitoringAndAuditing />  },
           { id:"Item#10", title: (<div><b>Bonus: Developer Tools for SEO</b></div>), component: <BonusDeveloperToolsForSEO />  },
           
           
         ]} />
   </div>

 </div>);
};

export default Introduction;