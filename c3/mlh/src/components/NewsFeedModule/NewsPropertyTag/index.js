import React from "react";
import './index.css';

const TagProperties = {
 "article":{ title: "Article", colors: { bg: "#fff1f1", text: "#e91e63" }  },
 "poll": { title: "Poll", colors: { bg: "#ecfffd", text: "#009688" } },
 "ideas": { title: "Ideas", colors: { bg: "#fff7ea", text: "#ad6700" } },
 "social_movements": { title: "Social Movements", colors: { bg: "#f1f9ff", text: "#2196f3" } }
};

const NewsPropertyTag = ({ type }) =>{
    const data = TagProperties?.[type];
    const sectionStyle = { color: data?.colors?.text, backgroundColor: data?.colors?.bg, border:'1px solid '+data?.colors?.text };
    const circleStyle = { backgroundColor: data?.colors?.text };
    return (<>
        <div className="newsFeedModule-newsPropertyTag-section" style={sectionStyle}>
            <div className="newsFeedModule-newsPropertyTag-circleDot" style={circleStyle}></div>
            <div style={{ textTransform:'uppercase' }}><b>{data?.title}</b></div>
        </div>
    </>);
 };

 export default NewsPropertyTag;