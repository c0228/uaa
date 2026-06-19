import React, { useState } from "react";
import {
  Row,
  Col,
  TextBox,
  TextArea,
  Button
} from "e-ui-react";

const DisplayEdit = ({ category, onSave, onCancel }) => {

  const initialState = {
    id: category.cat_id,
    enTitle: category.en_cat_name,
    enDesc: category.en_cat_desc,
    hiTitle: category.hi_cat_name,
    hiDesc: category.hi_cat_desc
  };

  const [form, setForm] = useState(initialState);

  const handleReset = () => {
    setForm(initialState);
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
            catId: form.id,
            enCatName: form.enTitle,
            hiCatName: form.hiTitle,
            enCatDesc: form.enDesc,
            hiCatDesc: form.hiDesc,
            isActive: "Y"
          })
        }
      );

      const data = await response.json();

      console.log(data);

      onSave({
        ...category,
        en_cat_name: form.enTitle,
        en_cat_desc: form.enDesc,
        hi_cat_name: form.hiTitle,
        hi_cat_desc: form.hiDesc
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
            value={form.enTitle}
            placeholder="English Title"
            onChange={(d) =>
              setForm(prev => ({
                ...prev,
                enTitle: d.value
              }))
            }
          />

          <div align="right">
            <b>[{form.enDesc?.length || 0}/1000]</b>
          </div>

          <TextArea
            lines={12}
            value={form.enDesc}
            onChange={(d) =>
              setForm(prev => ({
                ...prev,
                enDesc: d.value
              }))
            }
          />
        </Col>

        <Col md={6}>
          <TextBox
            value={form.hiTitle}
            placeholder="Hindi Title"
            onChange={(d) =>
              setForm(prev => ({
                ...prev,
                hiTitle: d.value
              }))
            }
          />

          <div align="right">
            <b>[{form.hiDesc?.length || 0}/1000]</b>
          </div>

          <TextArea
            lines={12}
            value={form.hiDesc}
            onChange={(d) =>
              setForm(prev => ({
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
            <Button
              type="success"
              size={11}
              style={{ marginRight: "5px" }}
              onClick={handleSave}
            >
              <b>Save</b>
            </Button>

            <Button
              type="warning"
              size={11}
              style={{ marginRight: "5px" }}
              onClick={handleReset}
            >
              <b>Reset</b>
            </Button>

            <Button
              type="danger"
              size={11}
              onClick={onCancel}
            >
              <b>Cancel</b>
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DisplayEdit;