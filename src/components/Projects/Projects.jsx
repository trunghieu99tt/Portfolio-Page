import React, { useState } from "react";
import { myProjectsData } from "./projects.data";
import ProjectCard from "./ProjectCard";
import Pagination from "../Pagination";

const Projects = () => {
    const [currentCategory, setCurrentCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    const changeCategory = (category = "all") => {
        setCurrentCategory(category);
        setCurrentPage(1);
    };
    const filterDataByCategory = (category) =>
        [...myProjectsData].filter((e) => e.category === category);
    const handleChangePage = (page) => setCurrentPage(page);

    const categories = [...new Set(myProjectsData.map((e) => e.category))];
    const statistic = categories.map((category) => {
        const filterData = filterDataByCategory(category);
        return {
            category,
            amount: filterData.length,
        };
    });

    let projectsData = [...myProjectsData];
    if (currentCategory !== "all")
        projectsData = filterDataByCategory(currentCategory);

    // debugger;
    const pageSize = 3;
    const pageCount = Math.ceil(projectsData.length / pageSize);
    const from = pageSize * (currentPage - 1);
    const to = pageSize * currentPage;
    const data = projectsData.slice(from, Math.min(to, projectsData.length));

    return (
        <section className="projects">
            <header className="section-header projects-header">
                <h3 className="projects-header__title">
                    Projects ({(myProjectsData && myProjectsData.length) || 0})
                </h3>

                <div className="projects-categories">
                    <ul className="projects-categories__list">
                        <li
                            className={`projects-categories__listItem ${
                                currentCategory === "all" ? "active" : ""
                            }`}
                            onClick={() => changeCategory()}
                        >
                            All
                        </li>
                        {statistic &&
                            statistic.length > 0 &&
                            statistic.map(({ category, amount }) => (
                                <li
                                    className={`projects-categories__listItem ${
                                        currentCategory === categories
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => changeCategory(category)}
                                >
                                    {category} ({amount})
                                </li>
                            ))}
                    </ul>
                </div>
            </header>

            <main className="projects-main">
                {data?.length > 0 &&
                    data.map((project) => (
                        <ProjectCard {...project} key={Math.random()} />
                    ))}
            </main>

            <Pagination
                key={currentCategory}
                totalPage={pageCount}
                pageSize={pageSize}
                pageBound={pageSize}
                setPage={handleChangePage}
                pageNow={currentPage}
            />
        </section>
    );
};

export default Projects;
