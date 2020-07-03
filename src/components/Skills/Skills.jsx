import React, { Component } from "react";
import SkillBar from "./Skillbar";

export default class Skills extends Component {
    render() {
        const skills = [
            { title: "HTML", percent: "90" },
            { title: "CSS", percent: "80" },
            { title: "JS", percent: "60" },
            { title: "ReactJS", percent: "60" },
            { title: "C++", percent: "60" },
            { title: "Competitive Programing", percent: "65" },
        ];
        return (
            <section className="section-container skills" data="skills">
                <h3 className="section-title">Skills</h3>

                <section className="skills-mainContent">
                    {skills &&
                        skills.length > 0 &&
                        skills.map((item) => {
                            return <SkillBar {...item} />;
                        })}
                </section>
            </section>
        );
    }
}
