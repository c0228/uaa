import React, { useMemo } from "react";
import { Badge, Icon } from "e-ui-react";
import { Link } from "react-router-dom";
import BlogListHeader from '@MainComponents/blog-list-header/index.js';

const RelatedArticlesList = ({ title, data, list }) => {
  return (
    <div>
      {title && <BlogListHeader label={title} />}

        {list?.map((t, i) => (
          <div key={i} className={i > 0 ? "mtop15p" : ""}>
            <a href={process.env.PROJECT_MAIN_URL+t} style={{ textDecoration:'none' }}>
            <div>
                <Badge type="secondary" label={data?.[t]?.["badge"]} size="12" style={{ marginRight:'5px' }} />
            </div>
            <div style={{ lineHeight: '30px', fontSize: '16px', color: '#222' }}><b>{data?.[t]?.["label"]}</b></div>
            <div style={{ fontFamily: 'Metropolis', lineHeight: '28px', letterSpacing: '0.1px', fontSize: '14px', 
                marginTop: '5px', marginBottom: '10px', color: '#555' }}>{data?.[t]?.["desc"]}</div>
            <div style={{ color:'#777', }}>
                <Icon type="FontAwesome" name="fa-file-text" size={16} /> {data?.[t]?.["date"]}
            </div>
            </a>
          </div>
        ))}
    </div>
  );
};

export default RelatedArticlesList;
