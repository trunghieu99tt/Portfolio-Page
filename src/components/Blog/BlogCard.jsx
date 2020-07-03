import React from "react";

const BlogCard = ({ title, image, shortDescription, url }) => {
    return (
        <article className="section-container blogCard">
            <div className="blogCard__info">
                <a href={url} className="blogCard__link" target="_blank">
                    <h3 className="blogCard__title">{title}</h3>
                </a>

                <p className="blogCard__shortDescription">
                    {shortDescription || ""}
                </p>
            </div>

            <figure className="blogCard__image-container">
                <img src={image} alt={title} className="blogCard__image" />
            </figure>
        </article>
    );
};

export default BlogCard;
