import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
		<div><h4 className="blog-head"><b>Pre-Introduction: How Image Optimization Was Introduced?</b></h4></div>
		<div className="mtop15p">
			In the early days of the internet (1990s–early 2000s), websites were mostly text-based with very few images. Internet 
			speeds were slow (dial-up connections), but expectations were also low. As web design evolved, images became essential 
			for branding, storytelling, e-commerce, and user engagement.
		</div>
		<div className="mtop15p">
			<div>However, as images grew in size and quality, websites became heavier and slower. This led to:</div>
			<ul>
				<li className="mtop5p">Longer page load times</li>
				<li className="mtop5p">Higher data consumption</li>
				<li className="mtop5p">Poor user experience</li>
				<li className="mtop5p">Lower search engine rankings</li>
			</ul>
		</div>
		<div>Search engines and browser vendors realized that <b>performance directly impacts usability and SEO.</b> As a 
		result, image optimization techniques were introduced to balance <b>visual quality and performance,</b> ensuring 
		faster, lighter, and more accessible websites.</div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Is Image Optimization?</b></h2></div>
	<div className="mtop15p">
		<b>Image Optimization</b> is the process of reducing an image’s file 
		size <b>without significantly affecting its visual quality,</b> while also making it easier for browsers 
		and search engines to process.
	</div>
	<div className="mtop5p">Image optimization focuses on:</div>
	<div>
		<ul>
			<li className="mtop5p">Faster page load times</li>
			<li className="mtop5p">Better user experience (UX)</li>
			<li className="mtop5p">Improved SEO rankings</li>
			<li className="mtop5p">Reduced bandwidth usage</li>
			<li className="mtop5p">Better performance on mobile devices</li>
		</ul>
	</div>
	<div className="mtop5p">In modern web development, image optimization is no longer optional — it 
		is a <b>core performance requirement.</b></div>
	<div className="mtop15p"><h2 className="blog-head"><b>Why Image Optimization Is Important?</b></h2></div>
	<div className="mtop15p">
		<ol>
			<li className="mtop5p"><b>Performance –</b> Images usually make up 60–80% of total page size</li>
			<li className="mtop5p"><b>SEO –</b> Faster websites rank better on search engines</li>
			<li className="mtop5p"><b>User Experience –</b> Slow pages increase bounce rates</li>
			<li className="mtop5p"><b>Mobile Optimization –</b> Mobile users rely on limited bandwidth</li>
			<li className="mtop5p"><b>Core Web Vitals –</b> Image size affects LCP (Largest Contentful Paint)</li>
		</ol>
	</div>
	<div className="mtop15p"><h2 className="blog-head"><b>Common Image Optimization Techniques</b></h2></div>
	<div className="mtop15p"><h4 className="blog-head"><b>1. Choosing the Right Image Format</b></h4></div>
	<div className="mtop5p">Different formats serve different purposes:</div>
	<div className="mtop5p">
		<SimpleTable header={["Format", "Best Use Case"]} 
                columns={[
                    ["JPEG", "Photographs, realistic images"],
					["PNG", "Images with transparency"],
					["WebP", "Modern replacement for JPEG/PNG"],
					["SVG", "Logos, icons, illustrations"],
					["AVIF", "High compression, next-gen format"],
				]} />
	</div>
	<div className="mtop5p"><h5 className="blog-head"><b>Best Practice:</b></h5></div>
	<div className="mtop5p">Use <b>WebP or AVIF</b> wherever browser support is available.</div>

	<div className="mtop15p"><h4 className="blog-head"><b>2. Image Compression</b></h4></div>
	<div className="mtop5p">Compression reduces file size by removing unnecessary data.</div>
	<div className="mtop5p"><h5 className="blog-head"><b>Types of Compression:</b></h5></div>
	<div>
		<ul>
			<li className="mtop5p"><b>Lossy Compression –</b> Slight quality loss, much smaller size</li>
			<li className="mtop5p"><b>Lossless Compression –</b> No quality loss, moderate size reduction</li>
		</ul>
	</div>
	<div className="mtop5p"><h5 className="blog-head"><b>Example:</b></h5></div>
	<div>
		<ul>
			<li className="mtop5p"><b>Original image:</b> 2.5 MB</li>
			<li className="mtop5p"><b>After compression:</b> 250 KB</li>
			<li className="mtop5p"><b>Visual difference:</b> Nearly invisible</li>
		</ul>
	</div>

	<div className="mtop15p"><h4 className="blog-head"><b>3. Image Resizing (Scaling)</b></h4></div>
	<div className="mtop5p">Uploading a 4000px wide image and displaying it as 400px is wasteful.</div>
	<div className="mtop5p"><h5 className="blog-head"><b>Rule:</b></h5></div>
	<div className="mtop5p">Always resize images to the <b>maximum display size required.</b></div>

	<div className="mtop15p"><h4 className="blog-head"><b>4. Responsive Images</b></h4></div>
	<div className="mtop5p">Serve different image sizes for different screen widths.</div>
	<div className="mtop5p">This prevents:</div>
	<div>
		<ul>
			<li className="mtop5p">Mobile devices loading desktop-sized images</li>
			<li className="mtop5p">Unnecessary bandwidth usage</li>
		</ul>
	</div>

	<div className="mtop15p"><h4 className="blog-head"><b>5. Lazy Loading Images</b></h4></div>
	<div className="mtop5p">Lazy loading delays image loading until the image is visible in the viewport.</div>
	<div className="mtop5p"><b>Benefits:</b></div>
	<div>
		<ul>
			<li className="mtop5p">Faster initial page load</li>
			<li className="mtop5p">Lower memory usage</li>
			<li className="mtop5p">Better performance scores</li>
		</ul>
	</div>

	<div className="mtop15p"><h4 className="blog-head"><b>6. Using CDN for Images</b></h4></div>
	<div className="mtop5p">A <b>Content Delivery Network (CDN):</b></div>
	<div>
		<ul>
			<li className="mtop5p">Serves images from the nearest server</li>
			<li className="mtop5p">Reduces latency</li>
			<li className="mtop5p">Automatically compresses and caches images</li>
		</ul>
	</div>

	<div className="mtop15p"><h4 className="blog-head"><b>7. Image Metadata Removal</b></h4></div>
	<div className="mtop5p">Images often contain metadata like:</div>
	<div>
		<ul>
			<li className="mtop5p">Camera details</li>
			<li className="mtop5p">GPS location</li>
			<li className="mtop5p">Editing history</li>
		</ul>
	</div>
	<div className="mtop5p">Removing metadata can reduce file size by <b>5–15%.</b></div>
 </div>);
};

export default Introduction;