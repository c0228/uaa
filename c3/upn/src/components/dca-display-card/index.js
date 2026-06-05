import React from "react";
import { Row, Col, Card, Badge, Button, Icon } from "e-ui-react";
import './index.css';

const ARTICLE_CARD_COLORS = {
    "primary":{ "dark": "#0d6efd", "light":"#c3dbff" },
    "success":{ "dark": "#198754", "light":"#b5ffdd" },
    "danger":{ "dark": "#dc3545", "light":"#ffc4c9" },
    "warning":{ "dark": "#ffc107", "light":"#ffe9a7" }
};

const DCADisplayCard = ({ index, data, category, subCategory }) =>{
 const colorPalettes = Object.keys(ARTICLE_CARD_COLORS);
 const flavour = colorPalettes[index % colorPalettes.length];
 return (<div className="currentAffairs-article-card">
    <Card padding={15} backgroundColor={ARTICLE_CARD_COLORS?.[flavour]?.light}>
        <Badge type={flavour} label={category+" / "+subCategory} size="12" style={{ marginRight:'5px' }} />
        <div className="mt-1"><h5 className="fw-bold">{data?.title}</h5></div>
        <div className="text-muted">{data?.desc}</div>
        <div className="mtop5p">
            {data?.tags?.map((t,i)=>{
                return (<Badge type="secondary-o" label={t} size="11" style={{ marginRight:'5px' }} />);
            })}
        </div>
        <div className="pull-right">
            <Button type={flavour}>
                <b>Read More <Icon type="FontAwesome" name="fa-arrow-right" size={11} style={{ marginLeft:'5px' }} /></b>
            </Button>
        </div>
    </Card>
 </div>);
};

export default DCADisplayCard;