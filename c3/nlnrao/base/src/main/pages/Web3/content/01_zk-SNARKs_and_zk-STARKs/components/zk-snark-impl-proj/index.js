import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const ZkSnarkImpProj = () =>{
 return (<div id="zkSnarkImplProj">
  <div className="mtop15p">
    <h3 className="lh42p"><b>Implementing zk-SNARKs in a Project</b></h3>
  </div>

  <div className="mtop15p lh25p">
    <div className="mtop15p"><h4><b>1. Define the Circuit</b></h4></div>
  </div>
  <div className="pad15p">
	<div><b>Common Approach:</b> The circuit is typically defined using a circuit language such as Circom or ZoKrates. 
	These are domain-specific languages designed for building zk-SNARKs circuits, and they are language-agnostic in the 
	sense that the logic of the circuit remains the same no matter what backend language you're using.</div>
	<div className="mtop15p"><b>Variations Across Languages:</b></div>
	<div className="mtop15p">
        <OrderList data={[(<div>In <i><u>Circom</u></i>, we write the circuit in a file with <code><b>.circom</b></code> 
            extension.</div>),
            (<div>In <i><u>ZoKrates</u></i>, the circuit is defined in <code><b>.zok</b></code> files.</div>)]} />
	</div>
	<div className="mtop15p">
	The circuit remains the same conceptually across languages because it represents the constraints for 
	the zk-SNARK, though the specific tools you use for defining and compiling it may differ.
	</div>
  </div>

  <div className="mtop15p"><h4><b>2. Generate the Trusted Setup</b></h4></div>
  <div className="pad15p">
	<div><b>Common Approach:</b> The trusted setup process is necessary for creating the cryptographic 
	parameters (e.g., <i>proving key</i> and <i>verification key</i>) that will be used for generating and 
	verifying proofs. This process involves some interactive protocols and is often done once for a specific application.</div>
	<div className="mtop15p"><b>Variations Across Languages:</b></div>
	<div className="mtop15p">
        <OrderList data={[(<div>Tools like <code><b>SnarkJS</b></code> (JavaScript) or <code><b>ZoKrates</b></code> (Python/Go) 
            can handle the trusted setup.</div>),
            (<div>For <code><b>Circom</b></code>, the trusted setup is usually done with snarkjs or bellman libraries in Rust.</div>)]} />
	</div>
	<div>
    Regardless of the language, the trusted setup is a one-time cryptographic process, and its output (the keys) can be used in 
	any language that supports zk-SNARKs.
	</div>
  </div>

  <div className="mtop15p"><h4><b>3. Create the Proof</b></h4></div>
  <div className="pad15p">
	<div>
	    <b>Common Approach:</b> After the circuit is defined and the trusted setup is complete, you generate a proof. This proof demonstrates 
	    that you know the secret input satisfying the constraints of the circuit without revealing the actual input.
	</div>
	<div className="mtop15p"><b>Variations Across Languages:</b></div>
	<div className="mtop15p">
        <OrderList data={[(<div>In <code><b>SnarkJS</b></code> (JavaScript), you can use the snarkjs library to create proofs from a circuit.</div>),
            (<div>In <code><b>ZoKrates</b></code> (Python/Go), ZoKrates handles proof generation using the zokrates generate-proof command.</div>)]} />
	</div>
	<div>
	The proof creation process involves executing the circuit logic with the secret values and then generating the proof. 
	This is done similarly in all zk-SNARK implementations, but the libraries and tools used for this step may vary.
	</div>
  </div> 

  <div className="mtop15p"><h4><b>4. Verify the Proof</b></h4></div>
  <div className="pad15p">
	<div>
	    <b>Common Approach:</b> Once the proof is generated, it needs to be verified. The verification process checks if the proof 
		is valid without requiring knowledge of the secret input.
	</div>
	<div className="mtop15p"><b>Variations Across Languages:</b></div>
	<div className="mtop15p">
        <OrderList data={[(<div>In <code><b>SnarkJS</b></code> (JavaScript), you use the snarkjs verify command to check the proof 
            with the verification key.</div>),
            (<div>In <code><b>ZoKrates</b></code> (Python/Go), the verification is handled by ZoKrates' built-in verification 
            functions.</div>),
            (<div>Verification remains essentially the same across languages—you're checking if the proof holds true given the public 
				parameters (verification key).</div>)]} />
	</div>
  </div>

  <div className="mtop15p"><h4><b>5. Integrate zk-SNARKs into Your Backend</b></h4></div>
	<div className="pad15p">
	 <div>
		<b>Common Approach:</b> Finally, once the proof is generated and verified, it is integrated into your backend (e.g., Node.js) 
		for use in the system. This step involves using the proof in a real application to provide privacy guarantees.
	 </div>
	 <div className="mtop15p"><b>Variations Across Languages:</b></div>
	 <div className="mtop15p">
        <OrderList data={[(<div>In <i>Node.js</i>, you integrate zk-SNARKs via libraries like SnarkJS and can interface the zk-SNARKs 
            verification as part of the backend flow (e.g., when verifying transactions or user proofs).</div>),
            (<div>In other backend languages like Python or Go, you’d use the appropriate language bindings for the zk-SNARK library 
					(e.g., ZoKrates for Python or bellman for Go/Rust).</div>)]} />
	 </div>
  </div>

  <div id="zkSnarkImplDrawbacks" className="mtop15p"><h3 className="lh42p"><b>Limitations / Drawbacks of zk-SNARKS</b></h3></div>
  <OrderList data={[(<div>
      <div><h4><b>Trusted Setup Requirement</b></h4></div>
      <div className="pad15p">
        <div>zk-SNARKs require a trusted setup phase to generate public and private parameters. If the private parameters are compromised, 
        the system's security is at risk, as malicious actors could forge proofs.</div>
        <div><b>Mitigation:</b> Some alternatives, like zk-STARKs or using multi-party computation (MPC) for the setup, reduce trust 
        dependency but add complexity.</div>
      </div>
    </div>),
    (<div>
        <div><h4><b>High Computational Cost for Prover</b></h4></div>
        <div className="pad15p">
            <div>Generating zk-SNARK proofs requires significant computational resources and memory, making it challenging for systems 
                with limited processing power (e.g., IoT devices or mobile phones).</div>
            <div><b>Impact:</b> This makes zk-SNARKs less practical for real-time applications or resource-constrained environments.</div>
        </div>
    </div>),
    (<div>
        <div><h4><b>Limited Scalability</b></h4></div>
        <div className="pad15p">
            <div>The computational burden on the prover and the size of the CRS scale with the complexity of the program being proven.</div>
            <div>Complex computations require larger CRS, increasing storage and setup costs.</div>
        </div>
    </div>),
    (<div>
        <div><h4><b>Post-Quantum Security Concerns</b></h4></div>
        <div className="pad15p">
            <div>zk-SNARKs rely on cryptographic assumptions like elliptic curve pairings, which are vulnerable to attacks by quantum computers.</div>
            <div><b>Mitigation:</b> Exploring zk-STARKs or post-quantum cryptographic primitives for long-term security.</div>
        </div>
    </div>),
    (<div>
        <div><h4><b>Complex Circuit Representation</b></h4></div>
        <div className="pad15p">
            <div>To use zk-SNARKs, problems must be represented as arithmetic circuits, which can be non-trivial and time-consuming to design for complex systems.</div>
            <div>This conversion increases development effort and may introduce bugs or inefficiencies.</div>
        </div>
    </div>),
    (<div>
        <div><h4><b>Verifier Scalability</b></h4></div>
        <div className="pad15p">
            <div>Although proof verification is fast and succinct, the verifier must still process some cryptographic computations, which can add 
                overhead in large-scale systems.</div>
        </div>
    </div>),
    (<div>
        <div><h4><b>Centralization Risks in Setup</b></h4></div>
        <div className="pad15p">
            <div>If a single entity controls the trusted setup, they could embed a backdoor, allowing them to create fraudulent proofs undetected.</div>
            <div>Multi-party setups reduce this risk but require coordination among trusted participants.</div>
        </div>
    </div>),
    (<div>
        <div><h4><b>Legal and Regulatory Challenges</b></h4></div>
        <div className="pad15p">
            <div>zk-SNARKs enable anonymous transactions, raising concerns about compliance with Anti-Money Laundering (AML) and 
                Know Your Customer (KYC) regulations.</div>
            <div><b>Impact:</b> This hinders adoption in heavily regulated industries.</div>
        </div>
    </div>),
    (<div>
        <div><h4><b>Dependency on Cryptographic Assumptions</b></h4></div>
        <div className="pad15p">
        zk-SNARKs depend on specific cryptographic assumptions like the hardness of discrete logarithm problems or 
        pairing-based cryptography. If these assumptions are broken, zk-SNARKs become insecure.
        </div>
    </div>),
    (<div>
        <div><h4><b>Proving Time for Large Circuits</b></h4></div>
        <div className="pad15p">
        As circuit complexity grows, the proving time can increase exponentially, limiting the practicality for highly complex 
        systems or computations.
        </div>
    </div>)
    ]} />

 </div>);
};

export default ZkSnarkImpProj;