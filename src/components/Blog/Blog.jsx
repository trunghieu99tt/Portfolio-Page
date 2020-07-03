import React, { useState } from "react";
import { myBlogData } from "./Blog.data";
import BlogCard from "./BlogCard";

const Blog = () => {
    return (
        <section className="blog">
            <header className="section-header Blog-header">
                <h3 className=" section-bar__title Blog-header__title">
                    Blog ({(myBlogData && myBlogData.length) || 0})
                </h3>
            </header>

            <main className="Blog-main">
                {myBlogData?.length > 0 &&
                    myBlogData.map((blog) => <BlogCard {...blog} />)}
            </main>
        </section>
    );
};

export default Blog;
