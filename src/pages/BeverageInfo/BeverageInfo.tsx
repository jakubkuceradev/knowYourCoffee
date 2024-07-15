import Description from "../../components/Description/Description";
import Preparation from "../../components/Preparation/Preparation";
import React from "react";

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
            <Preparation header={"Preparation"} steps={data.steps} />
        </>
    );
};

export default BeverageInfo;
