import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
			<div align="center"><h4 className="blog-head"><b>Pre-Introduction: How They Got Introduced?</b></h4></div>
			<div className="mtop15p">NVIDIA’s journey in datacenter GPUs started with the <b>Tesla lineup (2007 onwards),</b> mainly 
				for <b>high-performance computing (HPC).</b> Back then, GPUs were mostly used for <b>scientific simulations and 
				parallel computing</b> rather than AI. However, with the rise of <b>deep learning</b> in the early 2010s, researchers 
				quickly discovered that GPUs could train neural networks far faster than CPUs.</div>
			<div className="mtop15p">But there was a challenge: early GPUs weren’t optimized for AI. They were powerful for 
				floating-point math but lacked special hardware for accelerating <b>matrix operations</b> (the backbone of deep learning). 
				This limitation gave birth to a new wave of <b>AI-specific GPUs.</b></div>
			<div className="mtop15p">From <b>Pascal P100</b> to <b>Volta V100,</b> then <b>Turing T4, Ampere A100,</b> and 
				finally <b>Hopper H100,</b> each generation was introduced to address the <b>drawbacks of the previous one</b> — whether 
				it was slow training, costly inference, or scaling challenges for massive AI models.</div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
	<div className="mtop15p">Let’s walk through the key NVIDIA datacenter GPUs — <b>V100, T4, A100, and H100</b> — and 
		understand why each one exists, how they differ, and where they fit in the AI ecosystem.</div>

	<div className="mtop15p"><h2 className="blog-head"><b>The Evolution & Their Differences</b></h2></div>

	<div className="mtop15p"><h4 className="blog-head"><b>NVIDIA GPU Lineage for AI & HPC</b></h4></div>
			<div><h5 className="blog-head uppercase"><div className="border-up-and-bottom"><b>Early Days (Pre-Deep Learning)</b></div></h5></div>
			<div className="padLeft5p">
				<div className="mtop5p"><b>Tesla (2007–2015):</b> First branding of NVIDIA’s datacenter GPUs.</div>
				<div>
					<ul>
						<li className="mtop5p"><b>Examples:</b> Tesla C870, K20, K40, K80.</li>
						<li className="mtop5p">Mostly used for <b>HPC & parallel computing</b> (CUDA introduced here).</li>
						<li className="mtop5p">AI training was not yet the main focus.</li>
					</ul>
				</div>
			</div>

			<div className="mtop5p"><h5 className="blog-head uppercase"><div className="border-up-and-bottom"><b>Deep Learning Era Starts</b></div></h5></div>
			<div className="padLeft5p">
				<div className="mtop5p"><b>1. Pascal (2016) : Tesla P100</b></div>
				<div>
					<ul>
						<li className="mtop5p">First major GPU for AI.</li>
						<li className="mtop5p">High bandwidth memory (HBM2).</li>
						<li className="mtop5p">Still slow for deep learning training (no Tensor Cores yet).</li>
					</ul>
				</div>
				<div className="mtop5p"><b>2. Volta (2017) : Tesla V100</b></div>
				<div>
					<ul>
						<li className="mtop5p"><b>First GPU with Tensor Cores :</b> revolutionized AI training.</li>
						<li className="mtop5p">AI researchers started training big models faster.</li>
						<li className="mtop5p">Became the backbone of <b>early AI labs and supercomputers.</b></li>
					</ul>
				</div>
			</div>

			<div className="mtop5p"><h5 className="blog-head uppercase"><div className="border-up-and-bottom"><b>Focus on Inference</b></div></h5></div>
			<div className="mtop5p"><b>3. Turing (2018) : Tesla T4</b></div>
			<div>
				<ul>
					<li className="mtop5p">Small, power-efficient, PCIe form factor.</li>
					<li className="mtop5p">Added support for <b>INT8/INT4 precision</b> : cheap inference at scale.</li>
					<li className="mtop5p">Widely adopted in <b>cloud (AWS, GCP, Azure)</b> for serving AI models.</li>
				</ul>
			</div>

			<div className="mtop5p"><h5 className="blog-head uppercase"><div className="border-up-and-bottom"><b>Universal AI + HPC</b></div></h5></div>
			<div className="mtop5p"><b>4. Ampere (2020) : NVIDIA A100</b></div>
			<div>
				<ul>
					<li className="mtop5p"><b>Huge leap:</b> <b>training + inference</b> in one GPU.</li>
					<li className="mtop5p">Up to 80 GB HBM2e, <b>MIG (multi-instance GPU).</b></li>
					<li className="mtop5p">Perfect for <b>massive models like GPT, BERT, Transformers.</b></li>
					<li className="mtop5p">20x faster than V100 for some AI workloads.</li>
				</ul>
			</div>

			<div className="mtop5p"><h5 className="blog-head uppercase"><div className="border-up-and-bottom"><b>Next Generation AI Supercomputing</b></div></h5></div>
			<div className="mtop5p"><b>5. Hopper (2022) : NVIDIA H100</b></div>
			<div>
				<ul>
					<li className="mtop5p">Introduced <b>Transformer Engine</b> (optimized for GPT/LLM training).</li>
					<li className="mtop5p">Native FP8 support → smaller, faster models.</li>
					<li className="mtop5p">Currently the <b>gold standard</b> for AI labs training LLMs (GPT-4, Claude, LLaMA, etc.).</li>
				</ul>
			</div>

			<div className="mtop5p"><h5 className="blog-head uppercase"><div className="border-up-and-bottom"><b>Latest</b></div></h5></div>
			<div className="mtop5p"><b>6. Blackwell (2024/2025) : NVIDIA B100 / B200</b></div>
			<div>
				<ul>
					<li className="mtop5p">Next-gen after H100.</li>
					<li className="mtop5p">Focused on <b>AI efficiency + scaling to trillion-parameter models.</b></li>
					<li className="mtop5p">Built for AI factories and exascale computing.</li>
				</ul>
			</div>

	<div className="mtop15p"><h2 className="blog-head"><b>Key Differences</b></h2></div>
	<div className="mtop15p">
		<SimpleTable header={[ "GPU", "Architecture", "Market Price", "Focus Area", "Precision Support", "Best For", 
				"Used By" ]} 
                columns={[
                    [(<div><b>V100</b></div>), "Volta (2017)", "Expensive ($8K - $10K)", "Training", "FP32, FP16", "Deep learning training, HPC", "Used in early supercomputers"],
					[(<div><b>T4</b></div>), "Turing (2018)", "Affordable ($2K - $3K)", "Inference", "FP32, INT8, INT4", "Cloud inference, analytics", "Cloud-friendly for inference"],
					[(<div><b>A100</b></div>),"Ampere (2020)", "High cost ($12K - $15K)", "Training + Inference", "FP64, FP32, FP16, BF16, INT8, TF32", "Universal AI workloads", "Found in modern AI datacenters"],
					[(<div><b>H100</b></div>), "Hopper (2022)", "Extremely expensive ($25K - $40K+)", "LLM Training", "FP8, FP16, BF16", "Large-scale Transformer models", "Used in cutting-edge LLM training"],
					[(<div><b>B100/B200</b></div>), "Blackwell (2024/25)", "Expected to be higher than H100, but more efficient per compute unit.", "Exascale AI",	"TBD (FP8+)", "Trillion+ parameter AI, AI factories", "Energy + cost scaling efficiency"]
				]} />
	</div>

 </div>);
};

export default Introduction;