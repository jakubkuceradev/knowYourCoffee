import Description from "../../components/Description/Description";
import Accordion from "../../components/Accordion/Accordion";
import React from "react";
import { HomeOptionsTitle } from "./Home.styled";

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

const BeverageInfo: React.FC<{ data: BeverageData }> = () => {
    const homeData = {
        title: "Welcome!",
        description:
            "Discover the world of coffee with ease! Type in the name of a coffee beverage to get started and immerse yourself in the rich and diverse world of coffee. Happy brewing!",
        hasImage: false,
        imagePath: "./assets/knowYourCoffee-landing-image.png",
        steps: [
            {
                header: "Search for Your Favorite Coffee",
                description:
                    "Use our search bar to find specific coffee beverages.",
            },
            {
                header: "Learn and Discover",
                description:
                    "Get short descriptions, beautiful images, and detailed step-by-step guides on how to prepare each coffee drink.",
            },
            {
                header: "Enhance Your Coffee Experience",
                description:
                    "Whether you're looking for a classic espresso or a trendy new brew, knowYourCoffee has the information you need to make your perfect cup.",
            },
        ],
    };

    return (
        <>
            <Description
                title={homeData.title}
                content={homeData.description}
                hasImage={homeData.hasImage}
                imagePath={homeData.imagePath}
            />
            <HomeOptionsTitle>What You Can Do</HomeOptionsTitle>
            <Accordion items={homeData.steps} />
        </>
    );
};

export default BeverageInfo;
