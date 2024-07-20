import styled from "styled-components";

export const AccordionHeaderTitle = styled.h4`
    color: black;
    margin: 0;
    padding-right: 2rem;
`;

export const AccordionContainer = styled.div``;

export const AccordionButton = styled.button`
    position: relative;
    width: 100%;
    padding: 0.6rem 1rem;
    background-color: white;
    margin-bottom: 0.3rem;

    &:first-child {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    &:last-child {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    &:hover {
        background-color: rgba(240, 240, 240, 1);
    }
`;

export const AccordionHeaderContainer = styled.div``;

export const AccordionIcon = styled.div`
    position: absolute;
    top: 0.6rem;
    right: 1rem;
    font-size: 20px;
    font-weight: bold;
    color: black;
`;

export const AccordionContentContainer = styled.div<{ $expanded?: boolean }>`
    overflow: hidden;
    max-height: ${({ $expanded }) => ($expanded ? "15rem" : "0")};
    transition: ${({ $expanded }) =>
        $expanded ? "max-height 0.4s ease-in" : "max-height 0.2s ease-out"};
`;

export const AccordionContentText = styled.p`
    color: black;
    margin: 0.5rem 0;

    @media (min-width: 500px) {
        font-size: 1.2rem;
    }

    @media (min-width: 1000px) {
        font-size: 1.5rem;
    }
`;
