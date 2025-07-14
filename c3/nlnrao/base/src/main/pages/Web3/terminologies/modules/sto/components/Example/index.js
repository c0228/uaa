import React from "react";
import { Tab, Highlight } from "e-ui-react";

const STO_EXAMPLE_REACT = `import React, { useState } from "react";

function STOInvestmentForm() {
  const [amount, setAmount] = useState("");

  const handleInvest = () => {
    alert(\`Investing \$\${amount} in STO token.\`);
    // Integration with Smart Contract/Wallet logic here
  };

  return (
    <div>
      <h2>Security Token Investment</h2>
      <input
        type="number"
        value={amount}
        placeholder="Enter Amount (USD)"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleInvest}>Invest Now</button>
    </div>
  );
}

export default STOInvestmentForm;`;

const STO_EXAMPLE_ANGULAR_COMPONENT = `// token-details.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-token-details',
  templateUrl: './token-details.component.html'
})
export class TokenDetailsComponent {
  token = {
    name: 'RealEstate STO',
    symbol: 'RESTO',
    price: 100,
    minInvestment: 500
  };
}`;

const STO_EXAMPLE_ANGULAR_HTML = `<!-- token-details.component.html -->
<h3>{{ token.name }} ({{ token.symbol }})</h3>
<p>Price per Token: \${{ token.price }}</p>
<p>Minimum Investment: \${{ token.minInvestment }}</p>
<button>Participate Now</button>`;

const STO_EXAMPLE_VUE = `<template>
  <div>
    <h2>{{ name }} - {{ symbol }}</h2>
    <p>Token Price: \${{ price }}</p>
    <p>Current Round: {{ round }}</p>
    <input v-model="amount" placeholder="Investment amount (USD)" />
    <button @click="invest">Invest</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Energy STO",
      symbol: "ENSTO",
      price: 50,
      round: "Series A",
      amount: ""
    };
  },
  methods: {
    invest() {
      alert(\`Invested \$\${this.amount} into \${this.symbol}\`);
    }
  }
};
</script>`;

const Example = () =>{

    const ReactCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
            <div align="center" className="mtop5p"><h5 className="blog-head"><b>STO Investment Form</b></h5></div>
            <div className="mtop5p"><Highlight content={STO_EXAMPLE_REACT} lang="javascript" /></div>
        </div>);
    };

    const AngularCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <div align="center" className="mtop5p"><h5 className="blog-head"><b>STO Token Details Component</b></h5></div>
        <div className="mtop5p"><Highlight content={STO_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
        <div align="center" className="mtop5p"><b>token-details.component.ts</b></div>
        <div className="mtop5p"><Highlight content={STO_EXAMPLE_ANGULAR_HTML} lang="javascript" /></div>
        <div align="center" className="mtop5p"><b>token-details.component.html</b></div>
        </div>);
    };

    const VueCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
            <div align="center" className="mtop5p"><h5 className="blog-head"><b>STO Token Stats Widget</b></h5></div>
            <div className="mtop5p"><Highlight content={STO_EXAMPLE_VUE} lang="html" /></div>
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples with Code (React, Angular, Vue)</b></h2></div>
    <div className="mtop15p">Let’s see how a simple <b>STO investor dashboard</b> might look in different frontend frameworks:</div>

    <div className="mtop15p">
        <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;