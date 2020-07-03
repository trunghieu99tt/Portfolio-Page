import React from "react";

const PrizeCard = ({ title, image, url, description }) => {
    return (
        <article className="prizeCard">
            <figure className="prizeCard__image-container">
                <img src={image} alt={title} className="prizeCard__image" />
            </figure>

            <div className="prizeCard__info">
                <a href={url} target="_blank" className="prizeCard__link">
                    <p className="prizeCard__name">{title}</p>
                </a>

                <p className="prizeCard__description">{description}</p>
            </div>
        </article>
    );
};

export default PrizeCard;
