import React from "react";
import User from "./components/User";
import "./static/css/main.min.css";
import Experiences from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Prizes from "./components/Prizes";
import Blog from "./components/Blog";

const App = () => {
    return (
        <React.Fragment>
            <section className="page-container">
                <aside className="page-aside">
                    <User />
                    <Experiences />
                    <Prizes />
                </aside>
                <main className="page-main">
                    <Skills />
                    <Projects />
                    <Blog />
                </main>
            </section>
            <footer className="page-footer">
                <p className="page-footer__copyRight">
                    Rikikudo @DevChallenge.io
                </p>
            </footer>
        </React.Fragment>
    );
};

export default App;
