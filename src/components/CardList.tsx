import * as React from "react";
import {Stack, Typography} from "@mui/material";
import SectionCard from "./SectionCard";

const CardList = ({title, data, ItemComponent}: { title: string, data: Array<object>, ItemComponent: Element }) => {

    return (
        <Stack spacing={2}>
            <Typography variant="h3">{title}</Typography>
            {data.map((data : object) => (
                <ItemComponent data={data}/>
            ))}
        </Stack>
    )
}


export default CardList
