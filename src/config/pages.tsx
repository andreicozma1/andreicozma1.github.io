import { HomeRounded, SummarizeRounded, CodeRounded, SchoolRounded, BookRounded } from "@mui/icons-material";

import React from 'react';

interface Page {
    href: string,
    icon: React.ReactElement,
}

const pages : {[key: string]: Page} = {
    "Home": {
        href: "/",
        icon: <HomeRounded/>
    },
    "Resume": {
        href: "/resume",
        icon: <SummarizeRounded/>
    },
    "Projects": {
        href: "/projects",
        icon: <CodeRounded/>
    },
    "Academics": {
        href: "/academics",
        icon: <SchoolRounded/>
    },
    "Blog": {
        href: "/blog",
        icon: <BookRounded/>
    }
}

export default pages;