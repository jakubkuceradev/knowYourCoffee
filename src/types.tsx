export type Step = {
    header: string;
    description: string;
};

export type BeverageData = {
    title: string;
    description: string;
    hasImage: boolean;
    imagePath: string;
    steps: Step[];
};
