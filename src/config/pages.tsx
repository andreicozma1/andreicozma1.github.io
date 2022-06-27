import {BookRounded, CodeRounded, HomeRounded, SchoolRounded, SummarizeRounded} from "@mui/icons-material";

import React from 'react';

export interface Page {
    href: string,
    icon: React.ReactElement,
}

export const pages : {[key: string]: Page} = {
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

export const usePage = (title: string) => {
    const info = pages[title];
    if (!info) {
        throw new Error(`Page ${title} not found`);
    }
    return info;
}