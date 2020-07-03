import React from "react";

const ExperiencesCard = ({
    companyName,
    companyImage,
    timeStart,
    timeEnd,
    jobTitle,
    description,
}) => {
    return (
        <article className="experience-card">
            <figure className="experience-card__image-container">
                <img
                    src={companyImage}
                    alt={companyName}
                    className="experience-card__image"
                />
            </figure>
            <div className="experience-card__info">
                <p className="experience-card__timeStamp">
                    {timeStart} - {timeEnd}
                </p>
                <p className="experience-card__jobTitle">{jobTitle}</p>
                <p className="experience-card__description">{description}</p>
            </div>
        </article>
    );
};

export default ExperiencesCard;
