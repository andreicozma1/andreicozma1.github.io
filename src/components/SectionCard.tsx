import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import * as React from "react";

const SectionCard = ({data} : {data: object}) => {
    const title = data.header_title
    const avatar = data.header_avatar
    const content = data.content

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