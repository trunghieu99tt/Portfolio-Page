import React from "react";
import { prizes } from "./prizes.data";
import PrizeCard from "./PrizeCard";

const Prizes = () => {
    return (
        <section className="section-container prizes">
            <h3 className="section-title">Prizes</h3>

            <section className="prizes-mainContent">
                {prizes?.length > 0 &&
                    prizes.map((prize) => <PrizeCard {...prize} />)}
            </section>
        </section>
    );
};

export default Prizes;
