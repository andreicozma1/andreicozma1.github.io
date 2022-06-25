import * as React from "react";
import Layout from "../components/Layout";
import CardList from "../components/CardList";
import DataAbout from "../data/DataAbout";
import SectionCard from "../components/SectionCard";

const About = () => {
    const title = "About"

    return (
        <Layout>
            <CardList title={title} data={DataAbout} ItemComponent={SectionCard}></CardList>
        </Layout>
    );
}

export default About;
