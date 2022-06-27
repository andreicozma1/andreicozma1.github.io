import {BookRounded, CodeRounded, HomeRounded, SchoolRounded, SummarizeRounded} from "@mui/icons-material";

import React from 'react';
import DataAbout from "../data/DataAbout";
import CardList from "../components/CardList";

export interface Page {
    href: string,
    icon: React.ReactElement,
    content: Array<React.ReactNode>
}

export const pages : {[key: string]: Page} = {
    "Home": {
        href: "/",
        icon: <HomeRounded/>,
        content: [
            <CardList data={DataAbout}/>,
            <CardList data={DataAbout}/>
        ]
    },
    "Resume": {
        href: "/resume",
        icon: <SummarizeRounded/>,
        content: [
            <CardList data={DataAbout}/>
        ]
    },
    "Projects": {
        href: "/projects",
        icon: <CodeRounded/>,
        content: [
            <CardList data={DataAbout}/>
        ]
    },
    "Academics": {
        href: "/academics",
        icon: <SchoolRounded/>,
        content: [
            <CardList data={DataAbout}/>
        ]
    },
    "Blog": {
        href: "/blog",
        icon: <BookRounded/>,
        content: [
            <CardList data={DataAbout}/>
        ]
    }
}

export const usePage = (title: string) => {
    const info = pages[title];
    if (!info) {
        throw new Error(`Page ${title} not found`);
    }
    return info;
}