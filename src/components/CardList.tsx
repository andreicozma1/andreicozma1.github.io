import * as React from "react";
import {Stack, Typography} from "@mui/material";
import SectionCard from "./SectionCard";
import SectionCardProps from "./SectionCardProps";

const CardList = ({title, data}: { title: string, data: Array<object>}) => {

    return (
        <Stack spacing={2}>
            {data.map((item: object, index: number) => {
                return <SectionCard key={index} {...item as SectionCardProps}></SectionCard>

            })}
        </Stack>
    )
}


export default CardList
