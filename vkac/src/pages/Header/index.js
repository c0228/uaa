import React, { useState } from "react";
import { Nav } from "e-ui-react";

const Header = ({ activeMenu })=>{
 const [ collapseShow, setCollapseShow ] = useState(false);
 const url = process.env.PROJECT_URL;
 return ( <nav className="navbar navbar-expand-sm">
 <div className="container-fluid">
   <a className="navbar-brand" href="#">
     <img src="./assets/logo/logo-flat.png" style={{ width: '100px', height:'auto' }}/>
   </a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" 
   onClick={()=>setCollapseShow(!collapseShow)}>
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className={(collapseShow)?"navbar-collapse collapse":"navbar-collapse collapse show"} id="collapsibleNavbar">
           <Nav menulinks={[
            /* { id:'home', url:'home', label:'Home' },
              { id:'findUniversitiesCourses', url:'find-Universities-Courses', label:'Find Universities & Courses' } 
              { id:'findUniversities', url:'find-Universities', label:'Find Universities & Courses' },*/
              { id:'universities', url:'universities', label:'Universities' },
              { id:'students', url:'students-shortlist', label:'Students - Shortlist' }
            ]} 
                       activeId={activeMenu} 
                       colorConfig={{
                        default: {
                          color: '#000'
                        },
                        active: {
                          color: '#e91e63'
                        }
                       }} />
   </div>
 </div>
</nav>);
};

export default Header;