
import React, { useState } from "react";
import { Card, Badge, Icon } from "e-ui-react";
import './index.css';

const NewsCard = ({ data, index }) => {

 const [isBookMarked, setIsBookMarked] = useState(
    Boolean(data?.isBookMarked)
 );

 const handleBookmark = () => {
    setIsBookMarked(prev => !prev);
 };

 return (<div style={{ marginBottom:'25px' }}>
    <Card style={{ overflow:'hidden' }}>
        <div className="card-img-wrapper">
            <img src={data?.img} alt={data?.title} />

            <span
                className="top-bookmark-btn curpoint"
                onClick={handleBookmark}
                title={isBookMarked ? "Remove Bookmark" : "Add Bookmark"}
            >
                <Icon
                    type="FontAwesome"
                    name={isBookMarked ? "fa-bookmark" : "fa-bookmark-o"}
                    size={12}
                />
            </span>

            <span className={"badge-pill-overlay badge-"+(index%5)}>
                {data?.tagName}
            </span>
        </div>

        <div className="card-body-custom d-flex flex-column flex-grow-1">
            <div className="d-flex justify-content-between align-items-center">
                <span className="card-meta-date">{data?.date}</span>
                <span className="pull-right">
                    <span style={{ marginRight:'15px' }}>
                        <i className="fa fa-thumbs-up"></i> {data?.likes}
                    </span>
                    <span>
                        <i className="fa fa-thumbs-down"></i> {data?.dislikes}
                    </span>
                </span>
            </div>

            <h5 className="card-title-custom">
                {data?.title}
            </h5>
            <p className="card-text-custom">{data?.desc}</p>

            <div className="mt-auto d-flex">
                {data?.tags?.map((d, i) => (
                    <Badge
                        key={i}
                        type="secondary-o"
                        label={"#" + d}
                        size="11"
                    />
                ))}
            </div>
        </div>
    </Card>
 </div>);
};

export default NewsCard;
