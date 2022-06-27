import * as React from "react";
import Layout from "../components/Layout";
import CardList from "../components/CardList";
import DataAbout from "../data/DataAbout";
import {usePage} from "../config/pages";

const Home = () => {
    const page = usePage("Home")

    return (
        <Layout page={page}>
            <CardList data={DataAbout}></CardList>
        </Layout>
    );
}

export default Home;
