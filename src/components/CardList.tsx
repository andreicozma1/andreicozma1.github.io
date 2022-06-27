import * as React from "react";
import {Stack} from "@mui/material";
import SectionCard from "./SectionCard";
import SectionCardProps from "./SectionCardProps";

const CardList = ({data}: { data: Array<object>}) => {

    return (
        <Stack spacing={2}>
            {data.map((item: object, index: number) => {
                return <SectionCard key={index} {...item as SectionCardProps}></SectionCard>

            })}
        </Stack>
    )
}


export default CardList
