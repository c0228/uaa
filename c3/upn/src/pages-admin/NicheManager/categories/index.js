import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Badge, Card, Icon, Button } from "e-ui-react";
import AdminSideWrapperMenu from "@Components/admin-sidewrapper-menu/index.js";
import AddNewCategory from "./components/add-new-category/index.js";
import DisplayEdit from "./components/display-edit/index.js";

const DisplayView = ({ title, desc }) => (
  <div className="mtop5p">
    <div><h4><b>{title}</b></h4></div>
    <div className="mtop5p">{desc}</div>
  </div>
);

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const loadCategories = () => {
    fetch(process.env.NEXUS_URL + "niches/category/view")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#f6f6f9";
    loadCategories();
  }, []);

  const handleUpdate = (updatedCategory) => {
    setCategories(prev =>
      prev.map(item =>
        item.cat_id === updatedCategory.cat_id
          ? updatedCategory
          : item
      )
    );

    setEditingId(null);
  };

  return (
    <AdminSideWrapperMenu>
      <div className="mtop15p">
        <ContainerFluid>
          <Row>
            <Col md={12}>
              <h3>
                <Icon type="FontAwesome" name="fa-tasks" size={19} style={{ marginRight:'8px' }}  />
                <b>Manage Categories</b><hr />
              </h3>
            </Col>
          </Row>
          <Row>
            <Col md={12}><AddNewCategory /></Col>
          </Row>
          <Row>
            {categories.map((category,index) => (
              <Col key={index} md={12} key={category.cat_id}>
                <div className="mbot15p">
                  <Card padding={15}>
                    <div>
                    <div>
                      <span style={{ fontSize:'16px', border:'1px solid #000', padding:'5px 10px', backgroundColor:'#e5e5e5' }}><b>{index+1}</b></span>
                      <Badge
                        type="primary-o"
                        label={<b>{category.cat_id}</b>}
                        size="12"
                        style={{ marginLeft: "5px", marginRight: "5px" }}
                      />

                      <span
                        className="pull-right"
                        style={{ cursor: "pointer" }}
                        onClick={() => setEditingId(category.cat_id)}
                      >
                        <Icon
                          type="FontAwesome"
                          name="fa-edit"
                          size={18}
                          color="#0d6efd"
                        />
                      </span>
                    </div>

                    <div className="mtop5p">
                      {editingId === category.cat_id ? (
                        <DisplayEdit
                          category={category}
                          onSave={handleUpdate}
                          onCancel={() => setEditingId(null)}
                        />
                      ) : (
                        <Row>
                          <Col md={6}>
                            <DisplayView
                              title={category.en_cat_name}
                              desc={category.en_cat_desc}
                            />
                          </Col>
                          <Col md={6}>
                            <DisplayView
                              title={category.hi_cat_name}
                              desc={category.hi_cat_desc}
                            />
                          </Col>
                        </Row>
                      )}
                    </div>
                    </div>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </ContainerFluid>
      </div>
    </AdminSideWrapperMenu>
  );
};

export default Categories;