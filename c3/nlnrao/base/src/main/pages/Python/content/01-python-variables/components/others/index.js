import React from "react";
import { Icon, Highlight } from "e-ui-react";

const TEMP_CONVERTER_EXAMPLE = `celsius = float(input("Enter temperature in Celsius: "))
fahrenheit = (celsius * 9/5) + 32
print("Temperature in Fahrenheit:", fahrenheit)`;

const STORING_USER_DATA = `user = {
    "name": "Alice",
    "age": 30,
    "email": "alice@example.com"
}
print(user["name"])`;

const DYNAMIC_REASSIGNMENT = `item = 42       # int
item = "apple"  # now a string`;

const Others = () =>{
 const FeatureIcon = ({ status }) =>{
  const name = status==='warning'?('fa-warning'):
                status==='success'?('fa-check-circle'):
                'fa-times-circle';
  const color = status==='warning'?('#df8c12'):
                status==='success'?('green'):
                'red';
  return (<Icon name={name} type="FontAwesome" color={color} style={{ marginRight:'5px' }} />);
 };
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>7. Advantages of Python Variables over Java and JavaScript</b></h2></div>
    <div className="mtop15p">Let’s break it down:</div>
    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <td><b>Feature</b></td>
                    <td><b>Python</b></td>
                    <td><b>Java</b></td>
                    <td><b>Javascript</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Type Declaration</b></td>
                    <td><FeatureIcon status="error" /> Not Needed</td>
                    <td><FeatureIcon status="success" /> Mandatory</td>
                    <td><FeatureIcon status="error" /> Optional</td>
                </tr>
                <tr>
                    <td><b>Type Inference</b></td>
                    <td><FeatureIcon status="success" /> Smart</td>
                    <td><FeatureIcon status="warning" /> Partial (with <code><b>var</b></code>)</td>
                    <td><FeatureIcon status="success" /> Smart</td>
                </tr>
                <tr>
                    <td><b>Reassignment</b></td>
                    <td><FeatureIcon status="success" /> Any type</td>
                    <td><FeatureIcon status="error" /> Type-safe</td>
                    <td><FeatureIcon status="success" /> Any type</td>
                </tr>
                <tr>
                    <td><b>Readability</b></td>
                    <td><FeatureIcon status="success" /> Clean</td>
                    <td><FeatureIcon status="warning" /> Verbose</td>
                    <td><FeatureIcon status="warning" /> Quirky</td>
                </tr>
                <tr>
                    <td><b>Mutability awareness</b></td>
                    <td><FeatureIcon status="success" /> Clean (<code><b>tuple</b></code> vs <code><b>list</b></code>)</td>
                    <td><FeatureIcon status="warning" /> Complex</td>
                    <td><FeatureIcon status="error" /> Confusing</td>
                </tr>
                <tr>
                    <td><b>Null Safety</b></td>
                    <td><FeatureIcon status="success" /> <code><b>None</b></code> is handled</td>
                    <td><FeatureIcon status="error" />  Can cause exceptions</td>
                    <td><FeatureIcon status="error" />  <code><b>undefined</b></code> vs <code><b>null</b></code> confusion</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="mtop15p">
        <div><h4><b>Python wins on:</b></h4></div>
        <div>
            <ul>
                <li className="mtop5p"><b>Simplicity:</b> Less boilerplate</li>
                <li className="mtop5p"><b>Readability:</b> Follows "Readability counts" philosophy</li>
                <li className="mtop5p"><b>Flexibility:</b> Dynamic typing with powerful introspection</li>
                <li className="mtop5p"><b>Beginner-Friendly:</b> Ideal for new programmers</li>
            </ul>
        </div>
    </div>
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>8. Real-World Examples</b></h2></div>

    <div className="mtop15p"><h4><b>Example 1: Temperature Converter</b></h4></div>
    <Highlight content={TEMP_CONVERTER_EXAMPLE} lang="python" />
    <div className="mtop15p">Try writing that in Java - it’ll be 15+ lines with scanner, class, and type declarations.</div>

    <div className="mtop15p"><h4><b>Example 2: Storing User Data</b></h4></div>
    <Highlight content={STORING_USER_DATA} lang="python" />
    <div className="mtop15p">In Java, you'd need a custom <code><b>User</b></code> class with getter and setter methods.</div>

    <div className="mtop15p"><h4><b>Example 3: Dynamic Reassignment</b></h4></div>
    <Highlight content={DYNAMIC_REASSIGNMENT} lang="python" />
    <div className="mtop15p">Such flexibility is what makes Python perfect for scripting, automation, prototyping, and even AI/ML.</div>


    <div align="center" className="mtop15p"><h2 className="blog-head"><b>9. Best Practices with Python Variables</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li className="mtop5p">Use meaningful names (<code><b>user_age</b></code>, not <code><b>x</b></code>)</li>
            <li className="mtop5p">Avoid single letters unless in loops</li>
            <li className="mtop5p">Stick to snake_case for variable names</li>
            <li className="mtop5p">Don’t overwrite built-in names like <code><b>list</b></code>, <code><b>str</b></code>, <code><b>id</b></code></li>
            <li className="mtop5p">Use constants in uppercase (<code><b>MAX_SPEED</b></code>)</li>
        </ul>
    </div>
 </div>);
};

export default Others;