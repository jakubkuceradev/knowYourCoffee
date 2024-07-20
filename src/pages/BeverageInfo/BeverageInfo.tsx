import React from "react";
import Description from "../../components/Description/Description";
import Accordion from "../../components/Accordion/Accordion";

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
            <Accordion items={data.steps} className="mt-4" />
        </>
    );
};

export default BeverageInfo;
