import React, { useState } from "react";
import { Button } from "e-ui-react";

const CurrentAffairsSection = () => {
    const [stateList] = useState(["daily", "monthly"]);
    const [activeState, setActiveState] = useState("daily");

    const currentAffairsHandler = (val) => {
        setActiveState(val);
    };

    return (
        <div className="mtop15p">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="fw-bold mb-0">Current Affairs</h2>

                <div className="btn-group">
                    {stateList.map((sl, i) => (
                        <Button
                            key={i}
                            type={activeState === sl ? "success" : "outline-success"}
                            size={11}
                            onClick={() => currentAffairsHandler(sl)}
                        >
                            <b>{sl.charAt(0).toUpperCase() + sl.slice(1).toLowerCase()}</b>
                        </Button>
                    ))}
                </div>
            </div>

            <hr />
        </div>
    );
};

export default CurrentAffairsSection;