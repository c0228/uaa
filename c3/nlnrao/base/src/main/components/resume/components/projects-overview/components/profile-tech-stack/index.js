import React, { useState } from 'react';
import { Icon } from "e-ui-react";
import './index.css'; // 👈 import CSS animation file

const ProfileTechStack = ({ title, data, collapsible = false }) => {
  const [showStack, setShowStack] = useState(null);

  const toggleStack = (i) => {
    setShowStack((prev) => (prev === i ? null : i));
  };

  const Header = ({ title }) => (
    <div className="mbot15p">
      <span className="resume-project-subtitle">
        <b>{title}</b>
      </span>
    </div>
  );

  const isObject = (val) =>
    val &&
    typeof val === 'object' &&
    val.constructor === Object &&
    !React.isValidElement(val);

  if (!data || typeof data !== 'object' || React.isValidElement(data)) return null;

  const stackKeys = Object.keys(data);

  return (
    <div>
      {title?.length > 0 && <Header title={title} />}

      {stackKeys.map((stackKey, i) => {
        const stackVal = data[stackKey];
        const hasChildren = isObject(stackVal);

        return (
          <div key={stackKey}>
            {hasChildren ? (
              collapsible ? (
                // ✅ If collapsible = true → Show expand/collapse behavior
                <div>
                  <div
                    style={{
                      borderTop: '1px dotted #ccc',
                      borderBottom: '1px dotted #ccc',
                      paddingTop: '5px',
                      paddingBottom: '5px',
                      cursor: 'pointer',
                      fontSize: '12px',
                    }}
                    onClick={() => toggleStack(i)}
                  >
                    <b>
                      {stackKey}
                      <span className="float-end">
                        <Icon
                          type="FontAwesome"
                          name={
                            showStack === i
                              ? 'fa-angle-double-up'
                              : 'fa-angle-double-down'
                          }
                          size={16}
                        />
                      </span>
                    </b>
                  </div>

                  <div
                    className={`collapse-wrapper ${
                      showStack === i ? 'open' : ''
                    }`}
                  >
                    <div className="collapse-content">
                      <ProfileTechStack data={stackVal} collapsible={collapsible} />
                    </div>
                  </div>
                </div>
              ) : (
                // ❌ If collapsible = false → Always show expanded content
                <div style={{ borderTop: '1px dotted #ccc' }}>
                  <div style={{ padding:'5px', borderBottom: '1px dotted #ccc' }}>
                  <b>{stackKey}</b>
                  </div>
                  <div style={{ marginLeft: '15px' }}>
                    <ProfileTechStack data={stackVal} collapsible={collapsible} />
                  </div>
                </div>
              )
            ) : (
              <div className="row mtop5p mbot5p">
                <div className="col-md-5 text-grey2">
                  <b>{stackKey}:</b>
                </div>
                <div className="col-md-7">
                  {React.isValidElement(stackVal) ? stackVal : String(stackVal)}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProfileTechStack;
