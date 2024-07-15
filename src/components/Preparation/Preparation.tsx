import "./Preparation.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

type Step = {
    header: string;
    description: string;
};

const Preparation: React.FC<{ steps: Step[]; header: string }> = ({
    steps,
    header,
}) => {
    const stepsElements = steps.map((step, index) => (
        <PreparationItem
            key={uuid()}
            header={step.header}
            description={step.description}
            classAddition={`${index === 0 ? "round-top-corners" : ""} ${
                index === steps.length - 1 ? "round-bottom-corners" : ""
            }`}
        />
    ));

    return (
        <div className="preparation--container mt-4">
            <h3 className="preparation--title">{header}</h3>
            <div className="preparation--steps-container mt-3">
                {stepsElements}
            </div>
        </div>
    );
};

const PreparationItem: React.FC<{
    header: string;
    description: string;
    classAddition: string;
}> = ({ header, description, classAddition }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded((current) => !current);
    };

    return (
        <button
            className={`preparation-item--container ${classAddition}`}
            onClick={toggleExpanded}
        >
            <div className="preparation-item--header-container">
                <h4 className="preparation-item--header">{header}</h4>
                <div className="preparation-item--expand-icon">
                    {expanded ? "-" : "+"}
                </div>
            </div>
            <div
                className={`preparation-item--description-container ${
                    expanded
                        ? "preparation-item--expanded"
                        : "preparation-item--collapsed"
                }`}
            >
                {<p className="preparation-item--description">{description}</p>}
            </div>
        </button>
    );
};

export default Preparation;
