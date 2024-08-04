import React from "react";
import Description from "../../components/Description/Description";
import Accordion from "../../components/Accordion/Accordion";
import { PreparationTitle } from "./BeverageInfo.styled";

type Step = {
    header: string;
    description: string;
};

type BeverageData = {
    title: string;
    description: string;
    hasImage: boolean;
    imagePath: string;
    steps: Step[];
};

const BeverageInfo: React.FC<{ data: BeverageData }> = ({ data }) => {
    return (
        <>
            <Description
                title={data.title}
                content={data.description}
                hasImage={data.hasImage}
                imagePath={data.imagePath}
            />
            <PreparationTitle>Preparation</PreparationTitle>
            <Accordion items={data.steps} />
        </>
    );
};

export default BeverageInfo;
