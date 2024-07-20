import { ButtonHTMLAttributes } from "react";
import {
    AccordionContainer,
    AccordionButton,
    AccordionHeaderContainer,
    AccordionHeaderTitle,
    AccordionIcon,
    AccordionContentContainer,
    AccordionContentText,
} from "./Accordion.styled";
import { v4 as uuid } from "uuid";
import useToggle from "../hooks/useToggle";

export type AccordionProps = {
    items: AccordionItemData[];
};

export type AccordionItemData = {
    header: string;
    description: string;
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const itemsElements = items.map((item, index) => {
        return (
            <AccordionItem
                key={uuid()}
                title={item.header}
                content={item.description}
                first={index === 0}
                last={index === items.length - 1}
            />
        );
    });

    return <AccordionContainer>{itemsElements}</AccordionContainer>;
};

type AccordionItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    content: string;
    first?: boolean;
    last?: boolean;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    content,
    ...props
}) => {
    const [expanded, toggleExpanded] = useToggle(false);

    return (
        <AccordionButton first last onClick={toggleExpanded} {...props}>
            <AccordionHeader title={title} expanded={expanded} />
            <AccordionContent content={content} expanded={expanded} />
        </AccordionButton>
    );
};

type AccordionContentProps = {
    content: string;
    expanded: boolean;
};

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
    title,
    expanded,
}) => {
    return (
        <AccordionHeaderContainer>
            <AccordionHeaderTitle>{title}</AccordionHeaderTitle>
            <AccordionIcon>{expanded ? "-" : "+"}</AccordionIcon>
        </AccordionHeaderContainer>
    );
};

const AccordionContent: React.FC<AccordionContentProps> = ({
    content,
    expanded,
    ...props
}) => {
    return (
        <AccordionContentContainer expanded={expanded} {...props}>
            <AccordionContentText>{content}</AccordionContentText>
        </AccordionContentContainer>
    );
};

type AccordionHeaderProps = {
    title: string;
    expanded: boolean;
};

export default Accordion;
