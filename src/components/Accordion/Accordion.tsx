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
import useToggle from "../../hooks/useToggle";

export type AccordionProps = {
    items: AccordionItemData[];
    className?: string;
};

export type AccordionItemData = {
    header: string;
    description: string;
};

const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
    const itemsElements = items.map((item) => {
        return (
            <AccordionItem
                key={uuid()}
                title={item.header}
                content={item.description}
            />
        );
    });

    return (
        <AccordionContainer className={className}>
            {itemsElements}
        </AccordionContainer>
    );
};

type AccordionItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    content: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    const [expanded, toggleExpanded] = useToggle(false);

    return (
        <AccordionButton onClick={toggleExpanded}>
            <AccordionHeader title={title} expanded={expanded} />
            <AccordionContent content={content} expanded={expanded} />
        </AccordionButton>
    );
};

type AccordionHeaderProps = {
    title: string;
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

type AccordionContentProps = {
    content: string;
    expanded: boolean;
};

const AccordionContent: React.FC<AccordionContentProps> = ({
    content,
    expanded,
}) => {
    return (
        <AccordionContentContainer $expanded={expanded}>
            <AccordionContentText>{content}</AccordionContentText>
        </AccordionContentContainer>
    );
};

export default Accordion;
