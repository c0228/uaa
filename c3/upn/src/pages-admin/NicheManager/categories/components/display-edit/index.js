import React, { useState } from "react";
import { Row, Col, TextBox, TextArea, Button, Icon } from "e-ui-react";

const DisplayEdit = ({ category, onSave, onCancel }) => {

  const initialState = {
    id: category.cat_id,
    enTitle: category.en_cat_name,
    enDesc: category.en_cat_desc,
    hiTitle: category.hi_cat_name,
    hiDesc: category.hi_cat_desc
  };

  const [formData, setFormData] = useState(initialState);

  const handleReset = () => {
    setFormData(initialState);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        process.env.NEXUS_URL + "niches/category/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            catId: formData.id,
            enCatName: formData.enTitle,
            hiCatName: formData.hiTitle,
            enCatDesc: formData.enDesc,
            hiCatDesc: formData.hiDesc,
            isActive: "Y"
          })
        }
      );

      const data = await response.json();

      console.log(data);

      onSave({
        ...category,
        en_cat_name: formData.enTitle,
        en_cat_desc: formData.enDesc,
        hi_cat_name: formData.hiTitle,
        hi_cat_desc: formData.hiDesc
      });

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <TextBox
            value={formData.enTitle}
            placeholder="English Title"
            onChange={(d) =>
              setFormData(prev => ({
                ...prev,
                enTitle: d.value
              }))
            }
          />

          <div align="right">
            <b>[{formData.enDesc?.length || 0}/1000]</b>
          </div>

          <TextArea
            lines={12}
            value={formData.enDesc}
            onChange={(d) =>
              setFormData(prev => ({
                ...prev,
                enDesc: d.value
              }))
            }
          />
        </Col>

        <Col md={6}>
          <TextBox
            value={formData.hiTitle}
            placeholder="Hindi Title"
            onChange={(d) =>
              setFormData(prev => ({
                ...prev,
                hiTitle: d.value
              }))
            }
          />

          <div align="right">
            <b>[{formData.hiDesc?.length || 0}/1000]</b>
          </div>

          <TextArea
            lines={12}
            value={formData.hiDesc}
            onChange={(d) =>
              setFormData(prev => ({
                ...prev,
                hiDesc: d.value
              }))
            }
          />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <div align="right" className="mtop5p">
            <Button type="success" size={11} style={{ marginRight: "5px" }} onClick={handleSave}>
              <Icon type="FontAwesome" name="fa-save" size={11} style={{ marginRight:'5px' }} />
              <b>Save</b>
            </Button>
            <Button type="warning" size={11} style={{ marginRight: "5px" }} onClick={handleReset}>
              <Icon type="FontAwesome" name="fa-refresh" size={11} style={{ marginRight:'5px' }} />
              <b>Reset</b>
            </Button>
            <Button type="danger" size={11} onClick={onCancel}>
              <Icon type="FontAwesome" name="fa-times" size={11} style={{ marginRight:'5px' }} />
              <b>Cancel</b>
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DisplayEdit;