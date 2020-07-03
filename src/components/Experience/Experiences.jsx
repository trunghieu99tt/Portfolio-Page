import React from "react";
import { experiencesData } from "./experiences.data";
import ExperiencesCard from "./ExperiencesCard";

const Experiences = () => {
    return (
        <section className="section-container experiences">
            <h3 className="section-title">Experiences</h3>

            <section className="experiences-mainContent">
                {experiencesData?.length > 0 &&
                    experiencesData.map((exp) => <ExperiencesCard {...exp} />)}
            </section>
        </section>
    );
};

export default Experiences;
