import React from "react";
import './index.css';

const ArticleCategoryTag = ({ category, subCategory }) => {
    return (
        <div className="newsFeedModule-articleCategoryTag-section">
            {/* Category */}
            <span className="newsFeedModule-articleCategoryTag-categoryTitle">{category}</span>

            {/* Separator */}
            <span className="newsFeedModule-articleCategoryTag-separator">/</span>

            {/* Sub Category */}
            <span className="newsFeedModule-articleCategoryTag-subCategoryTitle">{subCategory}</span>
        </div>
    );
};

export default ArticleCategoryTag;