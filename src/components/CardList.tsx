import * as React from "react";
import {Stack} from "@mui/material";
import InfoCard, {InfoCardData} from "./InfoCard";

const CardList = ({data} : {data: Array<InfoCardData>}) => {

    return (
        <Stack spacing={2}>
            {data.map((item: object, index: number) => {
                return <InfoCard key={index} {...item as InfoCardData}></InfoCard>
            })}
        </Stack>
    )
}


export default CardList
