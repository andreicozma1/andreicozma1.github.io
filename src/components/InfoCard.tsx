import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import * as React from "react";
import {ReactNode} from "react";

export interface InfoCardData {
    title: string,
    avatar: ReactNode,
    content: string,
}

const InfoCard = ({title, avatar, content}: InfoCardData) => {
    return (
        <Card raised={true}>
            <CardHeader title={title} avatar={avatar}/>
            <CardContent>
                <Typography>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoCard