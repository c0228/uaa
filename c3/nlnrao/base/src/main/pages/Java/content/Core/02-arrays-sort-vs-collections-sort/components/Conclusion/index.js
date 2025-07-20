import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">Java 8 brought a <b>revolutionary change</b> in the way we sort collections and arrays by 
    enabling <b>functional programming</b> styles using <b>lambdas</b> and <b>method references</b>. While 
    both <code><b>Arrays.sort()</b></code> and <code><b>Collections.sort()</b></code> serve their respective domains, 
    the <b>real improvement lies in how comparators can now be written</b> in a cleaner and more expressive manner.</div>
    <div className="mtop15p mbot15p">
        <ul>
            <li>Choose the right utility based on your data type.</li>
            <li className="mtop5p">Use Java 8 features like <code><b>Comparator.comparing()</b></code> and lambdas for clean code.</li>
            <li className="mtop5p">Remember, readability and maintainability always win in the long run!</li>
        </ul>
    </div>
 </div>);
};

export default Conclusion;