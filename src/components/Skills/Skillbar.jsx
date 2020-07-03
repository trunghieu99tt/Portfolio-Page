import React from "react";

const SkillBar = ({ title, percent }) => {
    return (
        <div className="skillBar">
            <div className="skillBar-heading">
                <p className="skillBar__title">{title}</p>
            </div>
            <div className="progress-bar">
                <div
                    className="progress-bar__inner"
                    style={{
                        width: `${percent}%`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;
