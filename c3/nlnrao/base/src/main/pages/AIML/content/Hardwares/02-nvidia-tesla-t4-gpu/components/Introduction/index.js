import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
			<div><h4 className="blog-head"><b>Pre-Introduction: How It Got Introduced</b></h4></div>
			<div className="mtop15p">The AI revolution demanded hardware that could handle massive amounts of computation. Initially, 
				CPUs powered machine learning, but they struggled with the parallelism required by deep learning models. This is where 
				GPUs (Graphics Processing Units) entered the scene. NVIDIA was already a leader in GPU technology, and with the success 
				of CUDA (Compute Unified Device Architecture), they transformed GPUs from graphics rendering engines into AI 
				accelerators.</div>
			<div className="mtop15p">The <b>Tesla series</b> was introduced by NVIDIA as specialized GPUs for data centers, scientific 
			computing, and AI research. Among them, the <b>Tesla T4</b> was launched in 2018 to provide a balance 
			between <b>performance, cost-efficiency, and energy consumption,</b> making AI adoption feasible even for medium-scale 
			organizations.</div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to NVIDIA Tesla T4</b></h2></div>
	<div className="mtop15p">The <b>NVIDIA Tesla T4 GPU</b> is a <b>data center GPU</b> designed for <b>AI inference, training (on a smaller scale), 
		machine learning, and cloud workloads.</b> It’s widely used in cloud platforms like Google Cloud, AWS, and Azure because it 
		balances <b>performance, energy efficiency, and cost.</b></div>
	<div className="mtop15p">The <b>NVIDIA Tesla T4</b> is a universal GPU built for accelerating modern AI workloads, particularly 
	in <b>inference</b> (making predictions after a model is trained). Unlike high-power GPUs like the V100 or A100, the T4 is designed 
	to be more energy-efficient and optimized for cloud and production environments.</div>
	<div className="mtop15p"><h4 className="blog-head"><b>Key Features:</b></h4></div>
	<div>
		<ul>
			<li className="mtop5p"><b>Turing Architecture</b> with Tensor Cores for AI acceleration.</li>
			<li className="mtop5p"><b>16 GB GDDR6 memory</b> with 320 GB/s bandwidth.</li>
			<li className="mtop5p"><b>70 Watts low-power consumption</b> – ideal for scaling in data centers.</li>
			<li className="mtop5p"><b>Support for mixed-precision (FP32, FP16, INT8, INT4)</b> for faster inference.</li>
			<li className="mtop5p">Widely deployed in <b>Google Cloud, AWS, and Azure</b> for AI and ML workloads.</li>
		</ul>
	</div>
	<div className="mtop5p">The Tesla T4 shines in <b>natural language processing (NLP), recommendation systems, computer vision, and 
		speech recognition.</b></div>
 </div>);
};

export default Introduction;