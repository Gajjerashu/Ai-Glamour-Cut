import React from "react";
import Hero from "../../components/Home/Hero";
import Stats from "../../components/Home/Stats";
import Bridal from "../../components/Home/Bridal";
import Keratin from "../../components/Home/Keratin";
import Beard from "../../components/Home/Beard";
import TimeSlot from "../../components/Home/TimeSlot";

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Stats />
            <Bridal />
            <Keratin />
            <Beard />
            <TimeSlot />
        </div>
    );
};

export default Home;