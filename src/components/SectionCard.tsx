import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import * as React from "react";
import SectionCardProps from "./SectionCardProps";

const SectionCard = ({title, avatar, content}: SectionCardProps) => {
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

export default SectionCard