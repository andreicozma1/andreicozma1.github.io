import { HomeRounded, SummarizeRounded, CodeRounded, SchoolRounded, BookRounded } from "@mui/icons-material";

import React from 'react';

const pages = {
    Home: {
        href: "/",
        icon: <HomeRounded/>
    },
    Resume: {
        href: "/resume",
        icon: <SummarizeRounded/>
    },
    Projects: {
        href: "/projects",
        icon: <CodeRounded/>
    },
    Academics: {
        href: "/academics",
        icon: <SchoolRounded/>
    },
    Blog: {
        href: "/blog",
        icon: <BookRounded/>
    },
};

export default pages;