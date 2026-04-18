import React from "react";
import { Card, Highlight } from "e-ui-react";

const IMGOPT_EXAMPLE_HTML = `<img 
  src="hero-image.webp" 
  alt="Image Optimization Example"
  width="1600"
  height="960"
  loading="lazy"
/>`;

const HTMLRESP_EXAMPLE_HTML = `<img 
  src="image-800.webp"
  srcset="
    image-400.webp 400w,
    image-800.webp 800w,
    image-1600.webp 1600w
  "
  sizes="(max-width: 600px) 400px, 
         (max-width: 1200px) 800px, 
         1600px"
  alt="Responsive Image"
  loading="lazy"
/>`;

const Examples = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example and Implementation</b></h2></div>
    <div className="mtop5p"><h4 className="blog-head"><b>Example Scenario</b></h4></div>
    <div className="mtop5p">You have a blog page with a hero image:</div>
    <div>
        <ul>
            <li className="mtop5p"><b>Original size:</b> 3 MB (JPEG)</li>
            <li className="mtop5p"><b>Dimensions:</b> 5000 × 3000 px</li>
            <li className="mtop5p"><b>Page load time:</b> 6 seconds</li>
        </ul>
    </div>
    <div className="mtop5p"><h4 className="blog-head"><b>Optimized Version</b></h4></div>
    <div className="mtop5p">Steps applied:</div>
    <div>
        <ol>
            <li className="mtop5p">Resize image to 1600 × 960 px</li>
            <li className="mtop5p">Convert JPEG to WebP</li>
            <li className="mtop5p">Compress with lossy compression</li>
            <li className="mtop5p">Enable lazy loading</li>
        </ol>
    </div>
    <div className="mtop5p">Final result:</div>
    <div>
        <ul>
            <li className="mtop5p"><b>Optimized size:</b> 180 KB</li>
            <li className="mtop5p"><b>Page load time:</b> 1.8 seconds</li>
        </ul>
    </div>

    <div className="mtop5p"><h4 className="blog-head"><b>HTML Implementation Example:</b></h4></div>
    <div className="mtop5p">
        <Highlight content={IMGOPT_EXAMPLE_HTML} lang="html" />
    </div>
    <div className="mtop5p"><h4 className="blog-head"><b>Responsive Image Example:</b></h4></div>
    <div className="mtop5p">
        <Highlight content={HTMLRESP_EXAMPLE_HTML} lang="html" />
    </div>

    <div className="mtop5p"><h2 className="blog-head"><b>Tools for Image Optimization:</b></h2></div>
    <div>
        <ul>
            <li className="mtop5p">Image compressors (online/offline)</li>
            <li className="mtop5p">Build tools (Webpack, Vite, Next.js)</li>
            <li className="mtop5p">CDN image optimizers</li>
            <li className="mtop5p">Browser DevTools (Lighthouse, Network tab)</li>
        </ul>
    </div>

    <div className="mtop5p"><h2 className="blog-head"><b>Best Practices Summary:</b></h2></div>
    <div>
        <ul>
            <li className="mtop5p">Always compress images before uploading</li>
            <li className="mtop5p">Use modern formats like WebP or AVIF</li>
            <li className="mtop5p">Resize images according to display size</li>
            <li className="mtop5p">Implement lazy loading</li>
            <li className="mtop5p">Serve images via CDN</li>
            <li className="mtop5p">Optimize images for mobile-first design</li>
        </ul>
    </div>
 </div>);
};

export default Examples;