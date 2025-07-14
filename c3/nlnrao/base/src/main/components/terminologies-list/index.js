import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import BlogListHeader from '@MainComponents/blog-list-header/index.js';

const Terminologies = ({ title, desc, prefix, data, isIndex, isAlphabeticalOrder }) => {
  // Conditionally memoize either sorted or unsorted entries
  const processedTerminologies = useMemo(() => {
    const entries = Object.entries(data).filter(([key]) => key.startsWith(prefix));
    return isAlphabeticalOrder ? entries.sort((a, b) => a[1].label.localeCompare(b[1].label)): entries;
  }, [prefix, data, isAlphabeticalOrder]);

  return (
    <div>
      {title && <BlogListHeader label={title} />}

      <div style={{ paddingLeft: '5px', marginBottom: '60px' }}>
        {desc && (
          <div style={{ marginBottom: '15px', lineHeight: '26px', fontSize: '13px' }}>
            {desc}
          </div>
        )}
        {processedTerminologies?.map((t, i) => (
          <div key={i} className={i > 0 ? "mtop15p" : ""}>
            <Link to={process.env.PROJECT_MAIN_URL + t[0]} style={{ textDecoration: 'none' }}>
              {isIndex && <span style={{ color: '#666', marginRight: '5px' }}><b>{i + 1}.</b></span>}
              <span className="terminologies-hgl-link"><b>{t[1]?.label}</b></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminologies;
