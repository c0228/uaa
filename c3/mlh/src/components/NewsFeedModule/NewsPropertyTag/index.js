import React from "react";

const TagProperties = {
 "article":{ title: "Article", colors: { bg: "#fff1f1", text: "#e91e63" }  },
 "polls": { title: "Polls", colors: { bg: "#ecfffd", text: "#009688" } },
 "ideas": { title: "Ideas", colors: { bg: "#fff7ea", text: "#ad6700" } },
 "social_movements": { title: "Social Movements", colors: { bg: "#f1f9ff", text: "#2196f3" } }
};

const NewsPropertyTag = ({ type }) =>{
    const data = TagProperties?.[type];
    return (<>
        <div style={{ marginBottom:'5px', marginRight:'5px', display: 'inline-flex', color: data?.colors?.text, fontSize:'11px', 
            backgroundColor: data?.colors?.bg, padding:'3px 5px', borderRadius:'6px', border:'1px solid '+data?.colors?.text }}>
            <div style={{ marginTop:'5px', marginLeft:'5px', marginRight:'5px', width:'5px', height:'5px', 
                backgroundColor: data?.colors?.text, borderRadius:'50%' }}></div>
            <div style={{ textTransform:'uppercase' }}><b>{data?.title}</b></div>
        </div>
    </>);
 };

 export default NewsPropertyTag;