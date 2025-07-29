import React from "react";
import { Highlight } from "e-ui-react";

const TRADOPT_EXAMPLE_BEFORE = `public String getPersonName(Person person) {
    if (person != null) {
        return person.getName();
    } else {
        return "Unknown";
    }
}`;

const TRADOPT_EXAMPLE_AFTER = `import java.util.Optional;

public String getPersonName(Person person) {
    return Optional.ofNullable(person)
                   .map(Person::getName)
                   .orElse("Unknown");
}`;

const TRADOPT_EXAMPLE_IFPRESENT = `Optional<String> name = Optional.ofNullable("John Doe");

name.ifPresent(n -> System.out.println("Name is: " + n));`;

const TRADOPT_OUTPUT_IFPRESENT = `Name is: John Doe`;

const NPE_WITHOUT_OPTIONAL = `String email = user.getEmail().toLowerCase(); // Risk of NPE`;

const NPE_WITH_OPTIONAL = `String email = Optional.ofNullable(user)
                       .map(User::getEmail)
                       .map(String::toLowerCase)
                       .orElse("no-email@example.com");`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>

   <div className="mtop15p"><h4 className="blog-head"><b>Example #1: Traditional vs Optional</b></h4></div>
   <div className="mtop5p"><h5 className="blog-head"><b>Before Java 8:</b></h5></div>
   <div className="mtop5p"><Highlight content={TRADOPT_EXAMPLE_BEFORE} lang="java" /></div>
   <div className="mtop5p"><h5 className="blog-head"><b>From Java 8:</b></h5></div>
   <div className="mtop5p"><Highlight content={TRADOPT_EXAMPLE_AFTER} lang="java" /></div>
   <div className="mtop5p"><h5 className="blog-head"><b>Advantages:</b></h5></div>
   <div>
      <ul>
         <li className="mtop5p">No explicit null checks.</li>
         <li className="mtop5p">More concise and readable.</li>
      </ul>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>Example #2:  Using <code>ifPresent</code></b></h4></div>
   <div className="mtop5p"><code><b>ifPresent</b></code> executes an action only if the value is present.</div>
   <div className="mtop5p"><Highlight content={TRADOPT_EXAMPLE_IFPRESENT} lang="java" /></div>
   <div className="mtop5p"><b>Output:</b></div>
   <div className="mtop5p"><Highlight content={TRADOPT_OUTPUT_IFPRESENT} lang="java" /></div>
   <div className="mtop5p">If the Optional was empty, nothing would be printed.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Example #3: Avoiding NullPointerException</b></h4></div>
   <div className="mtop5p"><b>Without Optional:</b></div>
   <div className="mtop5p"><Highlight content={NPE_WITHOUT_OPTIONAL} lang="java" /></div>
   <div className="mtop5p"><b>With Optional:</b></div>
   <div className="mtop5p"><Highlight content={NPE_WITH_OPTIONAL} lang="java" /></div>
   <div className="mtop5p padLeft5p">Even if <code><b>user</b></code> or <code><b>email</b></code> is null, it will return 
   the default email safely.</div>
 </div>);
};

export default Example;