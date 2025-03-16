import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from '@Components/blog-index-header/index.js';
import OrderList from "@Components/order-list/index.js";

const ORDER_INST_CODE = `# Bad practice
COPY . /app
RUN apt-get update && apt-get install -y curl

# Better practice
RUN apt-get update && apt-get install -y curl
COPY . /app`;

const EXPORT_IMPORT_CONTAINER = `docker run --name temp-container optimized-image
docker export temp-container | docker import - optimized-image:latest`;

const REDUCE_MINIMIZE_LAYERS =  `RUN apt-get update
RUN apt-get install -y curl
RUN rm -rf /var/lib/apt/lists/*`;

const GIT_ACTIONS_YML =  `jobs:
  build:
    steps:
      - name: Build with cache
        run: docker build --cache-from=type=gha,scope=myapp -t myapp .`;

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>Optimizing Docker images is crucial for improving performance, reducing build times, and minimizing security 
        vulnerabilities. While multi-stage builds are widely used, there are several advanced techniques that can further 
        reduce image size, optimize build caching, and improve CI/CD pipeline efficiency. In this blog, we will explore 
        techniques such as layer squashing, using distroless images, leveraging build caching effectively, and more.</i></div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>1. Understanding Docker Image Layers</b></h2></div>
    <div className="mtop15p">Before diving into optimization techniques, it's essential to understand how Docker images are structured. Docker images 
        consist of multiple layers, each representing a change in the file system. Optimizing image size involves reducing 
        unnecessary layers, leveraging caching, and eliminating redundant dependencies.</div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>2. Optimizing Build Caching</b></h2></div>
    <div className="mtop15p"><BlogIndexHeader type="h4" index="2.1" title="Ordering Instructions for Maximum Cache Efficiency" /></div>
    <div>
        <div>Docker caches image layers to speed up builds. To take full advantage of caching:</div>
        <OrderList data={[(<div>Place frequently changing commands (like <code><b>COPY . /app</b></code>) later in the 
            <code><b>Dockerfile</b></code>.</div>),
            (<div>Install dependencies before copying application files to leverage cached layers.</div>)]} />
    </div>
    <div><b>Example:</b></div>
    <Highlight content={ORDER_INST_CODE} lang="html" />

    <div className="mtop15p"><BlogIndexHeader type="h4" index="2.2" title="Using BuildKit for Efficient Caching" /></div>
    <div>
        <div>Docker BuildKit enables efficient caching, parallel builds, and improved performance. To enable BuildKit:</div>
        <Highlight content={`DOCKER_BUILDKIT=1 docker build .`} lang="html" />
    </div>
    <div>
        <div>BuildKit also allows for <b>cache mounts</b> to speed up dependency installation:</div>
        <Highlight content={`RUN --mount=type=cache,target=/root/.cache pip install -r requirements.txt`} lang="html" />
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>3. Squashing Layers to Reduce Image Size</b></h2></div>
    <div>Each instruction in the <code><b>Dockerfile</b></code> creates a new layer. Squashing 
    combines multiple layers into one, reducing size but making caching less effective.</div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="3.1" title={<div>Using the <code><b>--squash</b></code> Flag</div>} />
        <div>
            <div>Docker provides a <code><b>--squash</b></code> option to merge layers:</div>
            <Highlight content={`DOCKER_BUILDKIT=1 docker build --squash -t optimized-image .`} lang="html" />
        </div>
    </div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="3.2" title={<div>Flattening with <code><b>docker export</b></code></div>} />
        <div>
            <div>Another approach is exporting and importing the container:</div>
            <Highlight content={EXPORT_IMPORT_CONTAINER} lang="html" />
            <div>This method removes intermediate layers and metadata, further reducing size.</div>
        </div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>4. Using Distroless Images</b></h2></div>
    <div>Distroless images exclude unnecessary OS packages, reducing attack surface and image size.</div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="4.1" title="Switching to Distroless Base Images" />
        <div>Instead of using <code><b>ubuntu</b></code> or <code><b>alpine</b></code>, switch to distroless images:</div>
        <Highlight content={`FROM gcr.io/distroless/base-debian10`} lang="html" />
    </div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="4.2" title="Benefits of Distroless Images" />
        <OrderList data={[(<div>Smaller image size</div>),
            (<div>Reduced attack surface</div>),
            (<div>Fewer dependencies and vulnerabilities</div>)]} />
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>5. Removing Unused Dependencies and Files</b></h2></div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="5.1" title="Cleaning Up Package Manager Cache" />
        <div className="padLeft5p">For <code><b>apt</b></code>:</div>
        <Highlight content={`RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*`} lang="html" />
        <div className="padLeft5p">For <code><b>npm</b></code>:</div>
        <Highlight content={`RUN npm install --production && npm cache clean --force`} lang="html" />
    </div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="5.2" title="Minimizing Layers" />
        <div className="padLeft5p">Combine commands to reduce layers:</div>
        <Highlight content={`RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*`} lang="html" />
        <div className="padLeft5p">Instead of:</div>
        <Highlight content={REDUCE_MINIMIZE_LAYERS} lang="html" />
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>6. Leveraging CI/CD for Image Optimization</b></h2></div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="6.1" title="Automating Image Size Checks" />
        <div className="padLeft5p">Use tools like <code><b>dive</b></code> to analyze image layers:</div>
        <Highlight content={`dive my-docker-image`} lang="html" />
    </div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="6.2" title="Implementing Layer Caching in CI/CD" />
        <div className="padLeft5p">In GitHub Actions:</div>
        <Highlight content={GIT_ACTIONS_YML} lang="html" />
    </div>
 </div>);
};

export default Introduction;