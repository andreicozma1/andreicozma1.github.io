import * as React from "react";
import Layout from "../components/Layout";
import {usePage} from "../config/pages";

const Blog = () => {
    const page = usePage("Blog")

    return (
        <Layout page={page}>
            {page.content}
        </Layout>
    );
}

export default Blog;
