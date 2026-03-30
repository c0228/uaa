import React from "react";
import { Highlight, Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const PROPDRILLING_EXAMPLE_HIERARCHY = `App
 └── Layout
     └── Sidebar
         └── UserProfile`;

const PDI1_EXAMPLE_JS = `// App.jsx
function App() {
  const user = { name: "Arjuna" };
  return <Layout user={user} />;
}`;

const PDI2_EXAMPLE_JS = `// Layout.jsx
function Layout({ user }) {
  return <Sidebar user={user} />;
}`;

const PDI3_EXAMPLE_JS = `// Sidebar.jsx
function Sidebar({ user }) {
  return <UserProfile user={user} />;
}`;

const PDI4_EXAMPLE_JS = `// UserProfile.jsx
function UserProfile({ user }) {
  return <h2>{user.name}</h2>;
}`;

const USERCONTEXT_EXAMPLE_JS = `// UserContext.js
import { createContext } from "react";

export const UserContext = createContext(null);`;

const APP_EXAMPLE_JSX = `// App.jsx
import { UserContext } from "./UserContext";
import Layout from "./Layout";

function App() {
  const user = { name: "Arjuna" };

  return (
    <UserContext.Provider value={user}>
      <Layout />
    </UserContext.Provider>
  );
}`;

const USERPROFILE_EXAMPLE_JSX = `// UserProfile.jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile() {
  const user = useContext(UserContext);
  return <h2>{user.name}</h2>;
}`;



const PropDrillingContextAPI = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Why Props Drilling Became a Problem?</b></h2></div>
	<div className="mtop5p">
		<div>Consider a typical component hierarchy:</div>
		<div className="mtop5p">
			<Highlight content={PROPDRILLING_EXAMPLE_HIERARCHY} lang="html" />
		</div>
		<div className="mtop5p">If <code><b>UserProfile</b></code> needs user data from <code><b>App</b></code>, you must 
		pass it through <code><b>Layout</b></code> and <code><b>Sidebar</b></code> even if they don’t care about it.</div>
		<div className="mtop5p"><h5 className="blog-head"><b>Problems caused by props drilling:</b></h5></div>
		<div>
			<ul>
				<li className="mtop5p">Poor readability</li>
				<li className="mtop5p">Tight coupling between components</li>
				<li className="mtop5p">Harder refactoring</li>
				<li className="mtop5p">Increased maintenance cost</li>
			</ul>
		</div>
	</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Example Using Props Drilling</b></h4></div>
    <div className="padLeft5p">
        <div className="mtop5p"><h5 className="blog-head"><b>Scenario:</b></h5></div>
        <div className="mtop5p">We want to display the logged-in user’s name inside a deeply nested component.</div>
        <div className="mtop5p"><b>Props Drilling Implementation:</b></div>
        <div className="mtop5p"><Highlight content={PDI1_EXAMPLE_JS} lang="javascript" /></div>
        <div className="mtop5p"><Highlight content={PDI2_EXAMPLE_JS} lang="javascript" /></div>
        <div className="mtop5p"><Highlight content={PDI3_EXAMPLE_JS} lang="javascript" /></div>
        <div className="mtop5p"><Highlight content={PDI4_EXAMPLE_JS} lang="javascript" /></div>

        <div className="mtop5p"><h5 className="blog-head"><b>Problems with This Approach:</b></h5></div>
        <div>
            <ul>
                <li className="mtop5p"><code><b>Layout</b></code> and <code><b>Sidebar</b></code> are forced to accept <code><b>user</b></code></li>
                <li className="mtop5p">Any change in data shape affects multiple components</li>
                <li className="mtop5p">Component reusability decreases</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Context API: The Solution</b></h2></div>
    <div className="mtop5p">The Context API solves this by allowing data to be <b>provided once</b> and <b>consumed wherever needed.</b></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Context API Implementation</b></h4></div>
    <div className="mtop15p">
         <div><h5 className="blog-head"><b>Step 1: Create Context</b></h5></div>
         <div className="mtop5p"><Highlight content={USERCONTEXT_EXAMPLE_JS} lang="javascript" /></div>
    </div>
    <div className="mtop15p">
         <div><h5 className="blog-head"><b>Step 2: Provide Context at a Higher Level</b></h5></div>
         <div className="mtop5p"><Highlight content={APP_EXAMPLE_JSX} lang="javascript" /></div>
    </div>
    <div className="mtop15p">
         <div><h5 className="blog-head"><b>Step 3: Consume Context Where Needed</b></h5></div>
         <div className="mtop5p"><Highlight content={USERPROFILE_EXAMPLE_JSX} lang="javascript" /></div>
    </div>

    <div>
            <div className="mtop5p">
                <Icon type="FontAwesome" name="fa-check" style={{ marginRight:'5px', color:'green' }} /> No intermediate props
            </div>
            <div className="mtop5p">
                <Icon type="FontAwesome" name="fa-check" style={{ marginRight:'5px', color:'green' }} /> Cleaner component interfaces
            </div>
            <div className="mtop5p">
                <Icon type="FontAwesome" name="fa-check" style={{ marginRight:'5px', color:'green' }} /> Easier maintenance
            </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Props Drilling vs Context API (Comparison)</b></h2></div>
    <div>
        <SimpleTable header={["Aspect", "Props Drilling", "Context API"]} 
                columns={[
                    [(<b>Data Flow</b>), "Explicit", "Implicit"],
                    [(<b>Scalability</b>), "Poor", "Good"],
                    [(<b>Component</b>), "Reusability", "Low High"],
                    [(<b>Boilerplate</b>), "High", "Moderate"],
                    [(<b>Debugging</b>), "Easy", "Slightly complex"],
                    [(<b>Best For</b>), "Small apps", "Medium to large apps"]
				]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>When NOT to Use Context API?</b></h2></div>
    <div className="mtop5p">Despite its advantages, Context API is <b>not a replacement for all state management.</b></div>
    <div className="mtop5p">Avoid using Context when:</div>
    <div>
        <ul>
            <li className="mtop5p">Data changes very frequently (can cause re-renders)</li>
            <li className="mtop5p">State is local to only one or two components</li>
            <li className="mtop5p">You need complex state logic (Redux/Zustand may fit better)</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Best Practices</b></h2></div>
    <div>
            <div className="mtop5p">
                <Icon type="FontAwesome" name="fa-check" style={{ marginRight:'5px', color:'green' }} /> 
                Use props for <b>direct parent-child communication</b>
            </div>
            <div className="mtop5p">
                <Icon type="FontAwesome" name="fa-check" style={{ marginRight:'5px', color:'green' }} /> 
                Use Context for <b>global or cross-cutting concerns</b>
            </div>
            <div className="mtop5p">
                <Icon type="FontAwesome" name="fa-check" style={{ marginRight:'5px', color:'green' }} /> 
                Split contexts by responsibility (AuthContext, ThemeContext)
            </div>
            <div className="mtop5p">
                <Icon type="FontAwesome" name="fa-check" style={{ marginRight:'5px', color:'green' }} /> 
                Avoid overusing Context for every small value
            </div>
    </div>

 </div>);
};

export default PropDrillingContextAPI;