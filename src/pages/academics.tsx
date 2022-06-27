import * as React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import ResponsiveTopBar from "../components/ResponsiveTopBar";
import Layout from "../components/Layout";
import CardList from "../components/CardList";
import DataAbout from "../data/DataAbout";
import SectionCard from "../components/SectionCard";

function Academics() {
    const title = "Academics"
    return (
        <Layout page={title}>
            <CardList title={title} data={DataAbout}></CardList>
        </Layout>
    );
}

export default Academics;
