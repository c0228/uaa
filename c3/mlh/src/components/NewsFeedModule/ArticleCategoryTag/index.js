import React from "react";

const ArticleCategoryTag = ({ category, subCategory }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '7px',
            marginBottom: '12px'
        }}>

            {/* Category */}
            <span style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#2463B5',
                backgroundColor: '#EAF2FF',
                padding: '6px 10px',
                borderRadius: '5px'
            }}>
                {category}
            </span>

            {/* Separator */}
            <span style={{
                color: '#A0A0A0',
                fontSize: '12px'
            }}>
                /
            </span>

            {/* Sub Category */}
            <span style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#64748B'
            }}>
                {subCategory}
            </span>

        </div>
    );
};

export default ArticleCategoryTag;