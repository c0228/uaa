import React, { useEffect } from "react";
import { Card, Button, Badge } from "e-ui-react";
import AddDetails from './components/add-details/index.js';
import JSONData from '@AppData/stories.json';
import './index.css';

const Home = ()=>{
 const stories = JSONData?.["stories"];
 const storyIds = Object.keys(stories);
 useEffect(()=>{
  document.body.style.backgroundColor = '#fff';

 },[]);

 return (<>
 <div className="container-fluid">
  <div className="row">
    <div className="col-sm-4"><AddDetails /></div>
    <div className="col-sm-8">
      <div className="mtop15p mbot15p"><h4><b>View Details</b></h4><hr/></div>
      
      {storyIds?.map((d)=>{
        const title = stories?.[d]?.["title"];
        const description = stories?.[d]?.["description"];
        const chapters = stories?.[d]?.["chapters"];
        return (<div className="mbot15p">
        <Card padding={15} backgroundColor="#f5f5f5">
          <div><h5><b>{title}</b></h5><hr/></div>
          <div style={{ color:'#999' }} className="mtop15p">
            {chapters}{chapters?.length>1?' Chapter':' Chapters'}
             <Badge type="secondary" label="తెలుగు" size="12"  style={{ marginLeft:'8px' }} />  
             <Badge type="secondary" label="हिंदी" size="12"  style={{ marginLeft:'8px' }} />  
             <Badge type="secondary" label="English" size="12"  style={{ marginLeft:'8px' }} />  
          </div>
          <div className="mtop15p" style={{ color:'#777' }}>{description}</div>
          <div>
            <span className="pull-right">
              <Button type="outline-secondary" size={11}><b>View Story</b></Button>
            </span>
          </div>
        </Card>
      </div>);
       // return "      "+stories?.[d]?.["chapters"];
      })}
    </div>
  </div>
 </div>
 </>);
};

export default Home;