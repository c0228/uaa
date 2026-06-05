import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Button } from "e-ui-react";
import DCADisplayCard from "@Components/dca-display-card/index.js";
import CURRENT_AFFAIRS_BYDATE from '@StaticData/data-dca-searchbydate.json';

const SearchByDate = ({ date }) => {

    const [articleDisplayData, setArticleDisplayData] = useState({});
    const [selectedNiche, setSelectedNiche] = useState("");

    // Load first category/sub-category by default
    useEffect(() => {
        const dateData = CURRENT_AFFAIRS_BYDATE?.[date];

        if (dateData) {
            const categories = Object.keys(dateData);

            if (categories.length > 0) {
                const firstCategory = categories[0];

                const subCategories = Object.keys(
                    dateData[firstCategory]
                );

                if (subCategories.length > 0) {
                    const firstSubCategory = subCategories[0];

                    articleDataHandler(
                        firstCategory,
                        firstSubCategory
                    );
                }
            }
        }
    }, [date]);

    const articleDataHandler = (category, subCategory) => {

        const articleData =
            CURRENT_AFFAIRS_BYDATE?.[date]?.[category]?.[subCategory] || [];

        setSelectedNiche(`${category}@@${subCategory}`);

        setArticleDisplayData({
            category,
            subCategory,
            data: articleData
        });
    };

    const CategoriesList = ({ data }) => {

        const categories = data?.[date]
            ? Object.keys(data[date])
            : [];

        return (
            <div className="mt-2">
                {categories.map((category, i1) => {

                    const categoryData = data?.[date]?.[category];
                    const subCategoryNames = Object.keys(categoryData);

                    return (
                        <span key={i1}>
                            {subCategoryNames.map(
                                (subCategoryName, i2) => {

                                    const articleData =
                                        categoryData?.[
                                            subCategoryName
                                        ] || [];

                                    const nicheKey =
                                        `${category}@@${subCategoryName}`;

                                    return (
                                        <span
                                            key={i2}
                                            className="d-inline-block m-1"
                                        >
                                            <Button
                                                type={
                                                    selectedNiche === nicheKey
                                                        ? "primary"
                                                        : "outline-primary"
                                                }
                                                size={11}
                                                onClick={() =>
                                                    articleDataHandler(
                                                        category,
                                                        subCategoryName
                                                    )
                                                }
                                            >
                                                <b>
                                                    {category} /{" "}
                                                    {subCategoryName} (
                                                    {
                                                        articleData.length
                                                    }
                                                    )
                                                </b>
                                            </Button>
                                        </span>
                                    );
                                }
                            )}
                        </span>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="mtop15p">
            <ContainerFluid>

                <Row>
                    <Col md={12}>
                        <div>
                            <h1>
                                <b>
                                    Categories covered Section
                                </b>
                            </h1>
                        </div>

                        <div className="mt-2 padLeft5p">
                            Following are the active categories
                            for the selected date [{date}].
                        </div>

                        <CategoriesList
                            data={CURRENT_AFFAIRS_BYDATE}
                        />
                    </Col>
                </Row>

                {articleDisplayData?.data && (
                    <Row>

                        <Col md={8}>
                            <Row className="mtop15p">

                                {articleDisplayData.data.map(
                                    (article, i) => (
                                        <Col md={6} key={i}>
                                            <DCADisplayCard
                                                index={i}
                                                data={article}
                                                category={
                                                    articleDisplayData.category
                                                }
                                                subCategory={
                                                    articleDisplayData.subCategory
                                                }
                                            />
                                        </Col>
                                    )
                                )}

                                {articleDisplayData.data.length === 0 && (
                                    <Col md={12}>
                                        <div className="alert alert-info">
                                            No articles available
                                            under{" "}
                                            <b>
                                                {
                                                    articleDisplayData.category
                                                }
                                            </b>{" "}
                                            /{" "}
                                            <b>
                                                {
                                                    articleDisplayData.subCategory
                                                }
                                            </b>
                                        </div>
                                    </Col>
                                )}

                            </Row>
                        </Col>

                        <Col md={4}>
                            {/* Right panel */}
                        </Col>

                    </Row>
                )}

            </ContainerFluid>
        </div>
    );
};

export default SearchByDate;