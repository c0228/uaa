import React from "react";
import { Card, Highlight } from "e-ui-react";

const PROB_EXAMPLE_JAVA8 = `new Thread(new Runnable() {
    @Override
    public void run() {
        System.out.println("Thread running");
    }
}).start();`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>What Problems Existed Before Java 8?</b></h4></div>
         <div className="mtop15p">Before Java 8, Java developers heavily relied 
         on <b>anonymous inner classes</b> and <b>boilerplate code</b> to implement functionalities like callbacks, event handlers, 
         or filtering logic. The syntax was <b>verbose</b>, <b>cluttered</b>, and difficult to read:</div>
         <div className="mtop15p">
            <Highlight content={PROB_EXAMPLE_JAVA8} lang="java" />
         </div>
         <div className="mtop15p padLeft5p">Even though this is a simple task, it requires 7+ lines. Developers wanted 
            a <b>more concise and readable syntax</b> to pass behaviors as parameters — similar to JavaScript or Python.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Method References</b></h2></div>
   <div className="mtop15p">Java 8 introduced <b>Method References</b> as part of its <b>functional programming enhancements</b> to 
      make code cleaner and more expressive.</div>
   <div className="mtop15p">Method References are a shorthand notation of lambda expressions for calling <b>existing methods</b>. 
   Instead of writing a full lambda, we can refer to a method by its name using the <code><b>::</b></code> operator.</div>
   <div className="mtop15p padLeft5p"><h4 className="blog-head"><b>Syntax:</b></h4></div>
   <div className="mtop5p"><Highlight content={`ClassName::methodName`} lang="java" /></div>
   <div className="mtop15p padLeft5p">It works with <b>functional interfaces</b> like <code><b>Function</b></code>, <code><b>Consumer</b></code>, <code><b>Supplier</b></code>, etc.</div>
 </div>);
};

export default Introduction;