import {Card, CardContent, CardHeader, Stack, Typography} from "@mui/material";
import * as React from "react";
import {ReactNode} from "react";

export interface InfoCardData {
    title: string,
    avatar: ReactNode,
    content: string | string[],
}

const InfoCard = ({title, avatar, content}: InfoCardData) => {
    return (
        <Card raised={true}>
            <CardHeader title={title} avatar={avatar}/>
            <CardContent component={Stack} spacing={1}>
                {
                    typeof content === "string" ?
                        <Typography>{content}</Typography> :
                        content.map((c, i) => <Typography key={i}>{c}</Typography>)
                }
            </CardContent>
        </Card>
    )
}

export default InfoCard