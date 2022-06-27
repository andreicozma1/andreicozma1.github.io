import * as React from "react";
import Layout from "../components/Layout";
import {usePage} from "../config/pages";

const Resume = () => {
    const page = usePage("Resume");

    return (
        <Layout page={page}>
            {page.content}
        </Layout>
    );
}

export default Resume;
